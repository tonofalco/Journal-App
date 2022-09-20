import { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Link, Typography, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'


const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false)


    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, passwordValid, emailValid,
    } = useForm(formData, formValidations)

    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


    const onSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Register'>
            <h1>formValid: {isFormValid ? 'Valido' : 'Incorrect'}</h1>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Nombre Completo'
                            type='text'
                            placeholder="Nombre Completo"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='correo'
                            type='email'
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='contraseña'
                            type='password'
                            placeholder="contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid 
                            item 
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type='submit'
                                variant='contained'
                                fullWidth
                            > Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login'>
                        ingresar
                    </Link>

                </Grid>

            </form>

        </AuthLayout>
    )
}
