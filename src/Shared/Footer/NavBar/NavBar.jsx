import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
     const [cart] = useCart();
     console.log(cart);


     const { logOutUser, user } = useContext(AuthContext);
     const handelLogOut = () => {
          logOutUser()
               .then(() => {
                    // Sign-out successful.
                    console.log('logOut');

               })
               .catch(error => {
                    console.log(error);
               })
     }
     const Links = <>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/our-menu'}>Our Menu</Link></li>
          <li><Link to={'/order/salad'}>Order</Link></li>
          <li><Link to={'/dashboard/my-cart'}>
               <button className="btn mr-4">
                    <FaCartShopping />
                    <div className="badge badge-secondary">+{cart.length}</div>
               </button>
          </Link></li>


          {
               user ? <>
                    <button onClick={handelLogOut} className="btn btn-secondary">LogOut</button>
               </> : <>
                    <li><Link to={'/login'}>Login</Link></li>
               </>
          }

     </>
     return (
          <div>
               <div className="navbar fixed z-50 bg-gray-800 opacity-50 text-white shadow-sm max-w-7xl mx-auto">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                   {Links}
                              </ul>
                         </div>
                         <Link className=" text-xl " to={'/'}>BISTRO BOSS</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {Links}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <a className="btn">Button</a>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;