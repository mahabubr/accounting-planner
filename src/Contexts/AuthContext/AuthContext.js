import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Config/Firebase/firebase.config';


export const UserContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const createSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
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