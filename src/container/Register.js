import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { HowToRegOutlined } from "@mui/icons-material"

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase"

const Register = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        try{
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/")
        }catch(err){
            setErrorMessage(err.message);
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
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <HowToRegOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
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
                    <Grid container>
                        <Grid item>
                            <Link to="/login">
                                {"Already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Register