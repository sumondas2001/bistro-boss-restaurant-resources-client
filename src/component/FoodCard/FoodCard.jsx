import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
     const { name, recipe, image, price, _id } = item;
     const location = useLocation();
     const navigate = useNavigate();
     const { user } = useAuth();
     const [, refetch] = useCart();

     const axiosSecure = useAxiosSecure();

     const handleAddToCart = () => {

          if (user && user.email) {
               console.log(user, item);
               const cartItem = {
                    menuId: _id,
                    userEmail: user.email,
                    name,
                    image,
                    price
               }
               axiosSecure.post('/cards', cartItem)
                    .then(res => {

                         if (res.data.insertedId) {
                              Swal.fire({
                                   position: "top-end",
                                   icon: "success",
                                   title: `${name} Item Add To Card`,
                                   showConfirmButton: false,
                                   timer: 1500
                              });
                              refetch();

                         }

                    })
                    .catch(error => {
                         console.log(error);
                    })
          }
          else {
               Swal.fire({
                    title: "You are not logged in",
                    text: "Please login to add to the cart!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Login"
               }).then((result) => {
                    if (result.isConfirmed) {
                         navigate('/login', { state: location });
                    }
               });
          }
     };

     return (
          <div className="relative">
               <div className='space-y-3'>
                    <div>
                         <img className='h-72 rounded-tl-4xl rounded-br-4xl' src={image} alt={name} />
                    </div>
                    <div className="absolute top-2 right-2 bg-black p-2">
                         <p className="text-lg text-amber-400">$ {price}</p>
                    </div>
                    <div className='text-center space-y-3'>
                         <h1 className='text-xl font-normal'>{name}</h1>
                         <p>{recipe}</p>
                    </div>
                    <div className="flex justify-end mt-10">
                         <button
                              onClick={handleAddToCart}
                              className='btn btn-secondary'>
                              ADD TO CART
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default FoodCard;
