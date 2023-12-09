import {db} from "../firebase/config"

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

    const createUser = async (data) => {
        checkIfisCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } =  await createUserWithEmailAndPassword(
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
                systemError = "A senha precisa conter pelomenos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemError = "E-mail already registered"
            } else {
                systemError = "Error"
            }
            
            setLoading(false)
            setError(systemError)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)

    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
    }
}
