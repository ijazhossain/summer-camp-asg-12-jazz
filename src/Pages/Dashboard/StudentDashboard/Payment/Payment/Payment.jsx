import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useMyClasses from "../../../../../hooks/useMyClasses";
import CheckOutFrom from "../CheckOutFrom/CheckOutFrom";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
const Payment = () => {

    const { id } = useParams();
    const [myClasses] = useMyClasses();
    // console.log(id);
    const paymentItem = myClasses.find(item => item._id === id)
    const price = paymentItem?.price;
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <Helmet>
                <title>Musicine | Payment</title>
            </Helmet>
            <SectionTitle>Payments</SectionTitle>
            <div className="mt-12 w-[50%] mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom price={price} paymentItem={paymentItem}></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;