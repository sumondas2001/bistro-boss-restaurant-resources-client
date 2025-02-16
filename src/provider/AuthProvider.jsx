import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.confige";
import useAxiosPublic from "../hooks/useAxiosPublic";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const provider = new GoogleAuthProvider();
     const axiosPublic = useAxiosPublic();

     const googleSingIn = () => {
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
     };
     const singInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     };
     const logOutUser = () => {
          setLoading(true);
          return signOut(auth)
     };

     useEffect(() => {
          onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               if (currentUser) {
                    const userInfo = {
                         email: currentUser.email
                    }
                    axiosPublic.post('/jwt', userInfo)
                         .then(res => {
                              // console.log(res.data.token);
                              if (res.data.token) {
                                   localStorage.setItem('access-token', res.data.token)
                              }
                         })
               }
               else {
                    localStorage.removeItem('access-token')
               }

               setLoading(false);
               // console.log('current user', currentUser);
          })
     }, [axiosPublic])
     const authInfo = {
          loading,
          user,
          createUser,
          singInUser,
          logOutUser,
          googleSingIn

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;