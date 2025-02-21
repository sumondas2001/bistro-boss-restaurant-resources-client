import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";

const PaymentHistory = () => {
     const { user } = useAuth();
     const axiosSecure = useAxiosSecure();
     const { data: payment = [] } = useQuery({
          queryKey: ['payment', user.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/payments/${user.email}`)
               return res.data
          }
     })
     console.log(payment);


     return (
          <div>
               <div className="flex justify-center">

                    <PagesCover title={'PAYMENT HISTORY'} pagesName={'---At a Glance!---'} />
               </div>


               <div className="flex justify-between ">
                    {/* <h3 className="text-2xl font-bold uppercase">Total orders: {payment.length}</h3> */}


               </div>
               <div className="overflow-x-auto mt-8">
                    <table className="table">
                         {/* head */}
                         <thead className="bg-[#D1A054] ">
                              <tr >
                                   <th>
                                        #
                                   </th>
                                   <th>EMAIL </th>
                                   <th>status</th>
                                   <th>TOTAL PRICE</th>
                                   <th>PARENT DATE</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   payment.map((user, index) => <tr key={user._id}>
                                        <th>
                                             {index + 1}
                                        </th>
                                        <td>

                                             <td>{user?.email}</td>

                                        </td>
                                        <td>
                                             {user?.status}

                                        </td>
                                        <td>
                                             {user?.price}

                                        </td>
                                        <td>
                                             {user?.date}

                                        </td>


                                   </tr>)

                              }


                         </tbody>

                    </table>
               </div>
          </div>
     );
};

export default PaymentHistory;