import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalculator, FaWallet, FaShoppingBasket, FaCalendarPlus, FaUser, FaShoppingCart, FaAlignJustify, FaEnvelope, FaList } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidBookAlt } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
     const [cartItem] = useCart();
     const [isAdmin] = useAdmin();

     return (
          <div className="flex">
               <div className="w-60 flex-1 bg-[#D1A054] min-h-screen">
                    <div className="flex text-center mb-6 mt-4 justify-center">
                         <h1 className="text-xl font-bold text-black"><Link to={'/'} className="">BISTRO BASS <br /> <span>Restaurant</span></Link></h1>
                    </div>
                    <ul className="p-4 pl-10 text-black space-y-6 uppercase text-sm">
                         {
                              isAdmin ? <>
                                   <li className="">
                                        <NavLink
                                             className={'flex items-center gap-2'} to={'/dashboard/admin-home'}>
                                             <FaHome />
                                             Admin HOME
                                        </NavLink>
                                   </li>
                                   <li >
                                        <NavLink className={'flex items-center gap-2'} to={'/dashboard/add-item'}>
                                             <ImSpoonKnife />
                                             add items
                                        </NavLink>
                                   </li>
                                   <li >
                                        <NavLink className={'flex items-center gap-2'} to={'/dashboard/manage-item'}>
                                             <FaList />
                                             manage items
                                        </NavLink>
                                   </li>
                                   <li >
                                        <NavLink className={'flex items-center gap-2'} to={'/dashboard/manage-booking'}>
                                             <BiSolidBookAlt />
                                             Manage bookings
                                        </NavLink>
                                   </li>
                                   <li >
                                        <NavLink className={'flex items-center gap-2'} to={'/dashboard/all-users'}>
                                             <FaUser />
                                             all users
                                        </NavLink>
                                   </li>

                              </>
                                   :
                                   <>
                                        <li className="">
                                             <NavLink
                                                  className={'flex items-center gap-2'} to={'/dashboard/user-home'}>
                                                  <FaHome />
                                                  USER HOME
                                             </NavLink>
                                        </li>
                                        <li >
                                             <NavLink className={'flex items-center gap-2'} to={'/dashboard/reservation'}>
                                                  <FaCalculator />
                                                  reservation
                                             </NavLink>
                                        </li>
                                        <li >
                                             <NavLink className={'flex items-center gap-2'} to={'/dashboard/payment-history'}>
                                                  <FaWallet />
                                                  payment history
                                             </NavLink>
                                        </li>
                                        <li >
                                             <NavLink className={'flex items-center gap-2'} to={'/dashboard/my-cart'}>
                                                  <FaShoppingBasket />
                                                  my cart ({cartItem.length})
                                             </NavLink>
                                        </li>
                                        <li >
                                             <NavLink className={'flex items-center gap-2'} to={'/dashboard/add-review'}>
                                                  <FaUser />
                                                  add review
                                             </NavLink>
                                        </li>
                                        <li >
                                             <NavLink className={'flex items-center gap-2'} to={'/dashboard/my-booking'}>
                                                  <FaCalendarPlus />
                                                  my booking
                                             </NavLink>
                                        </li>
                                   </>
                         }
                         <hr />
                         {/* Shared Nav Link */}
                         <li >
                              <NavLink className={'flex items-center gap-2'} to={'/'}>
                                   <FaHome />
                                   Home
                              </NavLink>
                         </li>
                         <li >
                              <NavLink className={'flex items-center gap-2'} to={'/dashboard/menu'}>
                                   <FaAlignJustify />
                                   Menu
                              </NavLink>
                         </li>
                         <li >
                              <NavLink className={'flex items-center gap-2'} to={'/dashboard/shop'}>
                                   <FaShoppingCart />
                                   Shop
                              </NavLink>
                         </li>
                         <li >
                              <NavLink className={'flex items-center gap-2'} to={'/dashboard/contact'}>
                                   <FaEnvelope />
                                   Contact
                              </NavLink>
                         </li>
                    </ul>
               </div>
               <div className=" p-8  flex-4">
                    <Outlet />
               </div>
          </div>
     );
};

export default Dashboard;