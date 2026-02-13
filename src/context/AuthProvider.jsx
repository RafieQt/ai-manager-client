import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        setUser(result.user);
        return result;
    }

    const logInUser = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        setUser(result.user);
        return result;
    }

    const googleLogin = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user);
        return result;
    }

    const updateUser = (updatedData) => updateProfile(auth.currentUser, updatedData);

    const logoutUser = async () => {
        await signOut(auth);
        setUser(null);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); 
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        logInUser,
        googleLogin,
        updateUser,
        logoutUser,
        user,
        loading,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
