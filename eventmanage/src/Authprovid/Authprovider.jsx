import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContex = createContext(null);

 const auth = getAuth(app) 

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    // 2.  user login section 
 useEffect(()=>{
   const unsubscrive = onAuthStateChanged(auth, currentUser =>{
      // console.log('user state change', currentUser)
      setUser(currentUser)
    });
    return ()=>{
      unsubscrive();
    }
 },[])

//  3.logout 
 const logOutsec = () =>{
    return signOut(auth)
 }

//  4. login with login page 
const login = ()=>{
  return signInWithEmailAndPassword(auth, email, password);
}
    const AuthInfo ={
        user,
        createUser,
        logOutsec,
        login
    }
  return (
    <AuthContex.Provider value={AuthInfo} >
      {children}
    </AuthContex.Provider>
  )
}

export default Authprovider
