import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
     const stripe = useStripe();
     const [error, setError] = useState('');
     const elements = useElements();
     const axiosSecure = useAxiosSecure();
     const [clientSecret, setClientSecret] = useState('');
     const [cart, refetch] = useCart();
     const totalPrice = cart.reduce((total, item) => total + item.price, 0)
     const { user } = useAuth();
     const [transactionId, setTransactionId] = useState('')

     useEffect(() => {
          if (totalPrice > 0) {
               axiosSecure.post('/create-payment-intent', { price: totalPrice })
                    .then(res => {
                         console.log(res.data.clientSecret);
                         setClientSecret(res.data.clientSecret);
                    })
          }
     }, [axiosSecure, totalPrice])

     const handleSubmit = async (event) => {
          event.preventDefault();
          if (!stripe || !elements) {
               return
          };
          const card = elements.getElement(CardElement);
          if (card === null) {
               return
          };

          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card
          });
          if (error) {
               console.log('payment error', error);
               setError(error.message)
          }
          else {
               console.log('paymentMethod', paymentMethod);
               setError('')
          };

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
               payment_method: {
                    card: card,
                    billing_details: {
                         email: user?.email || 'anonymous',
                         name: user?.displayName || 'anonymous'
                    }
               }
          });
          if (confirmError) {
               console.log('confirmError');
          }
          else {
               console.log("payment intent", paymentIntent);
               if (paymentIntent.status === 'succeeded') {
                    setTransactionId(paymentIntent.id);

                    const payment = {
                         email: user?.email,
                         price: totalPrice,
                         date: new Date(),
                         cartIds: cart.map(item => item._id),
                         menuId: cart.map(item => item.menuId),
                         status: 'pending',
                         transactionId: transactionId.id
                    };
                    const res = await axiosSecure.post('/payment', payment)
                    console.log("payment saved", res.data);
                    refetch();
                    if (res.data?.paymentResult?.insertedId) {

                         Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Thank You  for the order",
                              showConfirmButton: false,
                              timer: 1500
                         });
                    }
               }
          }
     }
     return (
          <form onSubmit={handleSubmit}>
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
               <button className="btn btn-lg btn-primary my-6" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
               </button>

               <>
                    <p className="text-red-500">{error}</p>
               </>
               {
                    transactionId && <p className="text-green-400">your transaction id : {transactionId}</p>
               }
          </form>
     );
};

export default CheckoutForm;