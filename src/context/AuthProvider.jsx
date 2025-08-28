import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

export default function AuthProvider({children}) {


    const provider = new GoogleAuthProvider();
    const googleSign = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIN =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userProfile = (name) =>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }

    const authInfo = {
        createUser,
        userProfile,
        googleSign,
        userSignIN
    }



  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
