import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useMyClasses from "../../../../../hooks/useMyClasses";
import CheckOutFrom from "../CheckOutFrom/CheckOutFrom";
const Payment = () => {
    const { id } = useParams();
    const [myClasses] = useMyClasses();
    // console.log(id);
    const paymentItem = myClasses.find(item => item._id === id)
    const price = paymentItem?.price;
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h1 className="4xl">This is payment page</h1>
            <Elements stripe={stripePromise}>
                <CheckOutFrom price={price} paymentItem={paymentItem}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;