import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.config'

export const AuthContext = createContext();
const  auth = getAuth(app)
const AuthProvider = ({children}) => {

  const gitProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider(); 
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);


    const handelProfile =(profile)=>{
      return updateProfile(auth.currentUser,profile);
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
      setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const signInGit =()=>{
      setLoading(true);
      return signInWithPopup(auth, gitProvider);
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=> {
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('current User inside state change', currentUser);
            setUser(currentUser); 
            setLoading(false);
        });
        return () => unSubscribe();
    },[])

    const authInfo ={user,loading, createUser, signIn,signInGoogle,signInGit, logOut, handelProfile};
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;