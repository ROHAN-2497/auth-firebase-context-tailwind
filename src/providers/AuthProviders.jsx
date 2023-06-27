import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    return signOut(auth);
  }
  const googleSignIn = () =>{
    return signInWithPopup(auth, googleAuthProvider);

  }

  useEffect(() =>{
    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change' , currentUser);
        setUser(currentUser)
        setLoading(false);
    })
    return ()=>{
        unsubcribe();
    }
  }, [])
  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
