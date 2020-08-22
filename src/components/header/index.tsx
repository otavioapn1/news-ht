import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';


export default function Header() {
    const classes = useStyles();

    function goToLogin() {
        window.location.href = '/login'
    }
    function goToHome() {
        window.location.href = '/'
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Box style={{ width: '100%', flexDirection: 'row', alignContent: 'space-between', display: 'flex', justifyContent: 'space-between' }}>

                        <Button color='inherit' onClick={goToHome}>
                            News
                    </Button>
                        <Button color='inherit' onClick={goToLogin}>
                            Entrar
                    </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
