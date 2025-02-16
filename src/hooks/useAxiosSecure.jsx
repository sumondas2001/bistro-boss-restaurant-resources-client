import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
     baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
     const navigate = useNavigate();
     const { logOutUser } = useAuth();
     axiosSecure.interceptors.request.use(function (config) {
          const token = localStorage.getItem('access-token');
          // console.log('req for axios secure ', { token });
          config.headers.authorization = `Bearer ${token}`
          return config
     }, function (error) {
          return Promise.reject(error)
     });


     axiosSecure.interceptors.response.use((response) => {
          return response;
     }, (error) => {
          const status = error.response.status;
          // console.log('st', status);
          if (status === 401 || status === 403) {
               logOutUser()
               navigate('/login')
          }
          return Promise.reject(error)
     })

     return axiosSecure
};

export default useAxiosSecure;