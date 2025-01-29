import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.confige";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

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
               setLoading(false);
               console.log('current user', currentUser);
          })
     }, [])
     const authInfo = {
          loading,
          user,
          createUser,
          singInUser,
          logOutUser,

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;