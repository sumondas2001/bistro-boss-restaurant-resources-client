import { HiArchiveBoxXMark } from "react-icons/hi2";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseMenu from "../../../hooks/UseMenu";
import { Link } from "react-router-dom";


const ManageItems = () => {
     const [menu, , refetch] = UseMenu();
     const axiosSecure = useAxiosSecure();

     const handelDeleteItem = (id) => {
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
                    axiosSecure.delete(`/menu-delete/${id}`)
                         .then(res => {

                              if (res.data.deletedCount > 0) {
                                   Swal.fire("Deleted!", "Your item has been deleted.", "success");
                                   refetch();  // Refresh the data
                              }
                         })
                         .catch(error => {
                              console.log(error);
                              alert(error)
                         })


               }
          });
     };




     return (
          <div>
               <PagesCover title={'MANAGE ALL ITEMS'} pagesName={'---Hurry Up!---'} />

               <div >



                    <div className="flex justify-between ">
                         <h3 className="text-2xl font-bold uppercase">Total items : {menu.length}</h3>
                         {/* <h3 className="text-2xl font-bold uppercase">total price: </h3> */}
                         {/* <button className="btn bg-[#D1A054]">PAY</button> */}
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
                                             <th>EDIT</th>
                                             <th>DELETE</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             menu.map((item, index) => <tr key={item._id}>


                                                  <th>

                                                       {index + 1}
                                                  </th>
                                                  <td>
                                                       <img className="w-16 h-16 object-cover rounded-xl" src={item.image} alt="" />
                                                  </td>
                                                  <td>
                                                       {item.name}

                                                  </td>
                                                  <th>
                                                       $   {item.price}
                                                  </th>
                                                  <th>
                                                       <Link to={`/dashboard/update-menu/${item._id}`}>
                                                            <button

                                                                 className="text-lg p-2 hover:cursor-pointer text-white bg-[#D1A054]"> <FaRegEdit />
                                                            </button>
                                                       </Link>
                                                  </th>
                                                  <th>
                                                       <button
                                                            onClick={() => handelDeleteItem(item._id)}
                                                            className="text-lg p-2 hover:cursor-pointer text-white bg-red-700"> <HiArchiveBoxXMark /> </button>
                                                  </th>
                                             </tr>)

                                        }


                                   </tbody>

                              </table>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ManageItems;