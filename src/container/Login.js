import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material"
import { Google, LockOpenOutlined } from "@mui/icons-material"

import { auth } from "../config/firebase"
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

const Login = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const email = data.get('email')
        const password = data.get('password')
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const authGoogle = getAuth()
        try {
            await signInWithPopup(authGoogle, provider)
            navigate("/")
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 5,
                    border: 1,
                    borderRadius: '16px',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Masuk
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 5
                }}
                onClick={handleGoogle}
            ><Google /><Typography>Google</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography>
                    Tidak punya akun?
                    <Link to="/register">
                        {"Daftar"}
                    </Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default Login