import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 30%;
    padding: 0px 30px 30px;
    border: 1px solid #aeaeae;
    border-radius: 10px;
`

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnClickLogin = () => {
        if (validateForm()) {
            handleOnLoginSuccess()
        }
    }

    const validateForm = () => {
        if (!email || !password) {
            alert('Please fill email and password!')
            return false
        }
        return true
    }

    const handleOnLoginSuccess = () => {
        const token_obj = {
            email: email
        }
        localStorage.setItem('token', JSON.stringify(token_obj))
        navigate('/')
    }

    return (
        <Container>
            <h1>Login</h1>
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth sx={{ marginBottom: "25px" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth sx={{ marginBottom: "20px" }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" fullWidth onClick={() => handleOnClickLogin()}>Go</Button>
        </Container>
    )
}

export default LoginForm