import { HiArchiveBoxXMark } from "react-icons/hi2";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
     const axiosSecure = useAxiosSecure();
     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await axiosSecure.get('/users');
               // console.log("Fetched Users:", res.data);
               return res.data;
          }
     });



     const handelDeleteUser = (user) => {
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
                    axiosSecure.delete(`/users/${user._id}`)
                         .then(res => {
                              console.log(res.data);
                              if (res.data.deletedCount > 0) {
                                   refetch();
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "User has been deleted.",
                                        icon: "success"
                                   });
                              }
                         })
                         .catch(error => {
                              console.error(error);
                              Swal.fire({
                                   title: "Error!",
                                   text: "Something went wrong!",
                                   icon: "error"
                              });
                         });
               }
          });
     };

     const handelMakeUser = (user) => {
          axiosSecure.patch(`/users/admin/${user._id}`)
               .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                         refetch()
                         Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${user.name} is an Admin Now`,
                              showConfirmButton: false,
                              timer: 1500
                         });
                    }
               })
     }
     return (
          <div>
               <PagesCover title={'MANAGE ALL USERS'} pagesName={'---How many??---'} />


               <div >



                    <div className="flex justify-between ">
                         <h3 className="text-2xl font-bold uppercase">Total Users:{users.length}</h3>
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
                                             <th>NAME</th>
                                             <th>EMAIL</th>
                                             <th>ROLE</th>
                                             <th>ACTION</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             users.map((user, index) => <tr key={user._id}>
                                                  <th>
                                                       {index + 1}
                                                  </th>
                                                  <td>
                                                       {user.name}
                                                  </td>
                                                  <td>
                                                       {user.email}

                                                  </td>
                                                  <th>
                                                       {user.role === 'admin' ? 'Admin' : <button
                                                            onClick={() => handelMakeUser(user)}
                                                            className="text-lg p-2 hover:cursor-pointer bg-[#D1A054]"> <FaUser />
                                                       </button>}
                                                  </th>
                                                  <th>
                                                       <button
                                                            onClick={() => handelDeleteUser(user)}
                                                            className="text-lg p-2 hover:cursor-pointer text-white bg-red-700"> <HiArchiveBoxXMark /> </button>
                                                  </th>
                                             </tr>)

                                        }


                                   </tbody>

                              </table>
                         </div>
                    </div>

               </div>
          </div >
     );
};

export default AllUsers;