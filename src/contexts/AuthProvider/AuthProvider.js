import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../Firebase/Firebase.config'

export const AuthContext = createContext();
const  auth = getAuth(app)
const AuthProvider = ({children}) => {


    const [user, setUser] = useState({});

    const providerLogin =(provider) =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
       const unsubcribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });

        return ()=>{
            unsubcribe();
        }
    },[])

    const authInfo ={user, providerLogin}
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;