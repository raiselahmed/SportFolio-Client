import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export  const AuthContext = createContext(null);

const AuthProvider = ( {children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true)
console.log(user)
    //creat new users
    const creatUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email , password)
    }
    //log in
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubcribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

     //signOut
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
  // googleSignup
    const googleProvider = new GoogleAuthProvider();
    const googleSignup = ()=>{
        return signInWithPopup(auth, googleProvider)
        .then(res =>{
            setLoading(true);
            console.log(res);
            setUser(user);
        })
        .catch(err=>{
            console.log(err)
        })
    }


    const userInfo = {
        user,
        loading,
        setUser,
        creatUser,
        signInUser,
        signOutUser,
        googleSignup
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;