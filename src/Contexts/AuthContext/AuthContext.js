import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Config/Firebase/firebase.config';


export const UserContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const createSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateNameAndPhoto = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        createSignUp,
        createSignIn,
        logOut,
        updateNameAndPhoto
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;