import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Logout, Movie } from '@mui/icons-material'

import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const NavBar = () => {
    const navigate = useNavigate()

    const onLogout = async() => {
        try{
            await signOut(auth)
            navigate("/login")
        }catch(err){
            console.log(err)
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <Movie sx={{ display: 'flex', mr: 2 }} />
                    <Typography variant='h6' sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            Trending Movies
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar