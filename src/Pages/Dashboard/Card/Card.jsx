import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Card = () => {
     const [cartItem, refetch] = useCart();
     const axiosSecure = useAxiosSecure();

     const totalPrice = cartItem.reduce((accumulator, currentValue) => {
          return accumulator + parseInt(currentValue.price);
     }, 0);

     const handelDelete = (id) => {
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {

                    axiosSecure.delete(`/carts/${id}`)
                         .then(res => {
                              console.log(res);
                              if (res.data.deleteCount > 0) {

                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                   });

                              }
                              refetch();
                         })
                         .catch(error => {
                              console.log(error);
                         })
               }


          });
     }
     return (
          <div >
               <div className="flex justify-center">

                    <PagesCover title={'WANNA ADD MORE?'} pagesName={'---My Cart---'} />
               </div>


               <div className="flex justify-between ">
                    <h3 className="text-2xl font-bold uppercase">Total orders: {cartItem.length}</h3>
                    <h3 className="text-2xl font-bold uppercase">total price: {(totalPrice).toFixed(2)} $</h3>
                    {
                         cartItem?.length ? <Link to={'/dashboard/payment'}>
                              <button className="btn bg-[#D1A054]">PAY</button>
                         </Link>
                              :
                              <button disabled className="btn bg-[#D1A054]">PAY</button>
                    }
               </div>


               <div>
                    <div className="overflow-x-auto mt-8">
                         <table className="table">
                              {/* head */}
                              <thead className="bg-[#D1A054] ">
                                   <tr >
                                        <th>
                                             #
                                        </th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        cartItem.map((item, index) => <tr key={item._id}>
                                             <th>
                                                  {index + 1}
                                             </th>
                                             <td>
                                                  <div className="flex items-center gap-3">
                                                       <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                 <img
                                                                      src={item.image}
                                                                      alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <div className="font-bold"></div>

                                                       </div>
                                                  </div>
                                             </td>
                                             <td>
                                                  {item.name}

                                             </td>
                                             <td>{(item.price).toFixed(2)} $</td>
                                             <th>
                                                  <button
                                                       onClick={() => handelDelete(item._id)}
                                                       className="text-lg p-2 hover:cursor-pointer bg-red-700"> <HiArchiveBoxXMark /> </button>
                                             </th>
                                        </tr>)

                                   }


                              </tbody>

                         </table>
                    </div>
               </div>

          </div >
     );
};

export default Card;