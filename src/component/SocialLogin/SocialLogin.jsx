import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
     const { googleSingIn } = useAuth();
     const axiosPublic = useAxiosPublic();
     const navigate = useNavigate();
     const handelSingIn = () => {
          googleSingIn()
               .then((result) => {
                    console.log(result.user.email, result.user.displayName);
                    const userInfo = {
                         email: result.user.email,
                         name: result.user.displayName
                    }
                    axiosPublic.post('/user', userInfo)
                         .then(res => {

                              console.log(res.data);
                              alert('Google  Login Successfully')
                              navigate('/')



                         })
                         .catch(error => {
                              console.log(error);
                         })

               })
               .catch(error => {
                    console.log(error);
               })
     }
     return (
          <div className="py-3  flex justify-center">
               <hr />
               <button
                    onClick={handelSingIn}
                    className="bg-blue-600 btn p-4 mt-2 ">
                    <FaGoogle /> Google
               </button>
          </div>
     );
};

export default SocialLogin;