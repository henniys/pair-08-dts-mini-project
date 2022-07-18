import { SosOutlined } from "@mui/icons-material"
import { Avatar, Box, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NoMatch = () => {
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
                    <SosOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Nowhere!
                </Typography>
                <Link to="/">Take me back!</Link>
            </Box>
        </Container>
    )
}

export default NoMatch