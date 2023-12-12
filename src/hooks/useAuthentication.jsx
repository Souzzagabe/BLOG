import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { useState, useEffect } from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfisCancelled() {
        if (cancelled) {
            return
        }
    }

    // register
    const createUser = async (data) => {
        checkIfisCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)

            return user

        } catch (error) {
            console.error('Firebase Authentication Error:', error.message);
            console.log(error.message)
            console.log(typeof error.message)

            let systemError

            if (error.message.includes("Password")) {
                systemError = "Password must contain at least 6 characters"
            } else if (error.message.includes("email-already")) {
                systemError = "E-mail already registered"
            } else {
                systemError = "Error"
            }

            setError(systemError)
        }
        setLoading(false)

    }

    // logout

    const logout = () => {
        checkIfisCancelled()

        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)

    }, [])

    // login

    const login = async (data) => {

        checkIfisCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            console.log(error.message.includes("user-not"));

            let systemError

            if (error.message.includes("user-not-found")) {
                systemError = "User not found."
            } else if (error.message.includes("wrong-password")) {
                systemError = "Wrong password"
            } else {
                systemError = "error occurred, please try later."
            }
            console.log(systemError)
            setError(systemError)
        }
        console.log(error)
        setLoading(false)

    }

    useEffect(() => {
        return () => setCancelled(true)

    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}
