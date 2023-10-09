import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContex = createContext(null);

 
 const auth = getAuth(app);
 const Provider = new GoogleAuthProvider();
 

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loding, setloding] = useState(true);


    const createUser = (email, password) =>{
      setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    // 2.  user login section 
 useEffect(()=>{
   const unsubscrive = onAuthStateChanged(auth, currentUser =>{
      // console.log('user state change', currentUser)
      setUser(currentUser)
      setloding(false)
    });
    return ()=>{
      unsubscrive();
    }
 },[])

//  3.logout 
 const logOutsec = () =>{
  setloding(true)
    return signOut(auth)
 }

//  4. login with login page 
const login = ()=>{
  setloding(true)
  return signInWithEmailAndPassword(auth, email, password);
}

const handleGoogle = ()=>{
  setloding(true)
   signInWithPopup(auth, Provider)
}
    const AuthInfo ={
        user,
        loding,
        createUser,
        logOutsec,
        login,
        handleGoogle
    }
  return (
    <AuthContex.Provider value={AuthInfo} >
      {children}
    </AuthContex.Provider>
  )
}

export default Authprovider
