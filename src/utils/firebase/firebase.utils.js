
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBpfYPMnE51yfLqcn_H0noZJrEvoVTbQ0o",
    authDomain: "crown-clothing-db-d23c6.firebaseapp.com",
    projectId: "crown-clothing-db-d23c6",
    storageBucket: "crown-clothing-db-d23c6.appspot.com",
    messagingSenderId: "147152156173",
    appId: "1:147152156173:web:6634d0b65c0cfa4f460744"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promt: 'select_accout'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)