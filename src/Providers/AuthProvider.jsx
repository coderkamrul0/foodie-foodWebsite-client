/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // login user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  // profile update
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name
    });
  };


  // state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
        console.log(currentUser);

        // get and set token
        if(currentUser){
          axios.post('https://foodie-server-three.vercel.app/jwt', {email: currentUser.email})
          .then(data => {
            console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
            setLoading(false)
          })
        }
        else{
          localStorage.removeItem('access-token')
        }
    })
    return () => {
      return  unsubscribe()
    }
},[])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
