import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

export default function AuthProvider({children}) {

     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const googleSign = () => {
        setLoading(false);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIN =(email, password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userProfile = (name) =>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }
    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (currentuser) =>{
            setUser(currentuser);
            setLoading(false);
        });
        return (()=>{
            unsubscribe();
        })
    })

    const authInfo = {
        createUser,
        userProfile,
        googleSign,
        userSignIN,
        LogOut,
        user,
        loading
    }
console.log(user)


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
