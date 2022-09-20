
import { LoginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"


export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials())
        const result = await singInWithGoogle()
        // console.log({result})
        if (!result.ok) return dispatch(logout(result.errorMessage))

        // delete result.ok

        dispatch(login(result))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }))

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await LoginWithEmailPassword({ email, password })
        console.log(result);

        if (!result.ok) return dispatch(logout(result));

        // delete result.ok

        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( logout() );

    }
}