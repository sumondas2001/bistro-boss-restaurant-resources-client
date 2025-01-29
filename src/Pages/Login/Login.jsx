import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
     const [disabled, setDisabled] = useState(true);
     const { singInUser } = useContext(AuthContext);

     const navigate = useNavigate();
     const location = useLocation();
     const from = location?.state?.from?.pathname || '/'
     useEffect(() => {
          loadCaptchaEnginge(6);
     }, [])

     const handelLogin = (e) => {
          e.preventDefault();
          const from = e.target;
          const email = from.email.value;
          const password = from.password.value;
          singInUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    alert('login successfully');
                    navigate(from, { replace: true })
               })
     }
     const handelValidateCaptcha = (e) => {
          const user_captcha_value = e.target.value;
          if (validateCaptcha(user_captcha_value)) {
               setDisabled(false)
          }
          else {
               setDisabled(true)
          }
     }
     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex">
                         <div className="text-center lg:text-left">
                              <img src={loginImg} alt="" />
                         </div>
                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <form onSubmit={handelLogin} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             < LoadCanvasTemplate />
                                        </label>
                                        <input onBlur={handelValidateCaptcha} type="text" name='captcha' placeholder="Captcha text " className="input input-bordered" required />



                                   </div>

                                   <div>
                                        <p className='text-red-400'>New here? Create a New Account </p>
                                        <Link className='text-yellow-300 underline' to={'/singUp'}>Sing Up</Link>
                                   </div>
                                   <div className="form-control mt-6 ">
                                        <button type='submit' disabled={disabled} className="btn btn-primary w-full">Login</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;