import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export default function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onChangeEmail(value: string) {
        setEmail(value)
    }

    function onChangePassword(value: string) {
        setPassword(value)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.box}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>

                <TextField
                    onChange={(event) => onChangeEmail(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="E-mail"
                    autoFocus
                />
                <TextField
                    onChange={(event) => onChangePassword(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Senha"
                    type="password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.login}
                >
                    Entrar
                    </Button>
            </Box>
        </Container>
    );
}