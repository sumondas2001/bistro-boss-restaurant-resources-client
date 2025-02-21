import { loadStripe } from "@stripe/stripe-js";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: stripe key add
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
     return (
          <div>
               <PagesCover title={'PAYMENT'} />

               <Elements stripe={stripePromise}>
                    <CheckoutForm />
               </Elements>
          </div>
     );
};

export default Payment;