import { createContext, useState } from "react"
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContex = createContext(null);

 const auth = getAuth(app) 

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const AuthInfo ={
        user,
        createUser
    }
  return (
    <AuthContex.Provider value={AuthInfo} >
      {children}
    </AuthContex.Provider>
  )
}

export default Authprovider
