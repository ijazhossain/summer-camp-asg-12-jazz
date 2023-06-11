import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useMyClasses from "../../../../../hooks/useMyClasses";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import './CheckOutFrom.css'
const CheckOutFrom = ({ price, paymentItem }) => {
    const [, cartRefetch] = useMyClasses();
    console.log(price, paymentItem);
    const { _id, classId, image, description, instructor, name, studentEmail, instructorEmail } = paymentItem;
    // console.log(_id, classId, image, description, instructor, name, price, studentEmail, instructorEmail);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        // console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            // console.log(paymentIntent.id);
            setTransactionId(paymentIntent.id);
            const payment = {
                date: new Date(),
                cartId: _id,
                classId,
                image,
                description,
                instructor,
                name,
                price,
                studentEmail,
                instructorEmail
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res);
                    if (res.data.cartDeletedResult.deletedCount > 0 && res.data.insertResult.insertedId && res.data.seatUpdate.modifiedCount > 0) {
                        Swal.fire({

                            icon: 'success',
                            title: 'Success',
                            text: `Payment Successful, Transaction id: ${paymentIntent.id}`,

                        })
                        navigate('/dashboard/selectedClasses')
                    }
                })
        }


    }
    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transition complete with transitionId {transactionId}</p>}
        </>
    );
};

export default CheckOutFrom;