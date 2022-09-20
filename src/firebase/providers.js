import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // console.log({credentials})

        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }

}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        console.log({ email, password, displayName })

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        console.log(resp);

        //TODO: actualizar el displayName en firebase
        await updateProfile(firebaseAuth.currentUser, { displayName })

        return {
            ok: false,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const LoginWithEmailPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }

}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}