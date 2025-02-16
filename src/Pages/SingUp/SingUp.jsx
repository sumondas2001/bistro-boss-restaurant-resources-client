import { useForm } from 'react-hook-form';
import loginImg from '../../assets/others/authentication2.png'

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../../component/socialLogin/socialLogin';
const SingUp = () => {
     const axiosPublic = useAxiosPublic();
     const { createUser, user } = useContext(AuthContext);
     const navigate = useNavigate()
     const {
          register,
          handleSubmit,

          formState: { errors },
     } = useForm()

     const onSubmit = (data) => {
          createUser(data.email, data.password)
               .then(result => {
                    const singUpUser = result.user;
                    console.log(singUpUser);
                    updateProfile(singUpUser, {
                         displayName: data.name
                    })
                         .then(() => {
                              const userInfo = {
                                   email: data.email,
                                   name: data.name,
                                   // password: data.password,

                              }
                              axiosPublic.post('/user', userInfo)
                                   .then(res => {
                                        if (res.data.insertedId) {
                                             navigate('/')

                                        }
                                   })
                         })

               })
     }

     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex">
                         <div className="text-center lg:text-left">
                              <img src={loginImg} alt="" />
                         </div>
                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />

                                        {errors.name && <span className='mt-2 text-sm font-extralight text-red-500'>name field is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />

                                        {errors.email && <span className='mt-2 text-sm font-extralight text-red-500'>email field is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6 })} name='password' placeholder="password" className="input input-bordered" />

                                        {errors.password?.type === "required" && (
                                             <span className='mt-2 text-sm font-extralight text-red-500'>password must 6 characters</span>
                                        )}


                                   </div>


                                   <div>
                                        <p className='text-red-400'>Already registered? Go to log in </p>
                                        <Link to={'/logIn'} className='text-yellow-300 underline'>LogIn</Link>
                                   </div>
                                   <div className="form-control mt-6 ">
                                        <button type='submit' className="btn btn-primary w-full">Sing Up</button>
                                   </div>
                              </form>
                              <SocialLogin />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingUp;