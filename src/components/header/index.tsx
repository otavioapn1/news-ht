import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';


export default function Header() {
    const classes = useStyles();

    function goToLogin() {
        window.location.href = '/login'
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color='inherit' onClick={goToLogin}>
                        Entrar
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
