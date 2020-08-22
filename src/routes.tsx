import React from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Admin from './pages/admin'
import Add from './pages/add'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/login" component={() => <Login />} />
                <Route exact path="/admin" component={() => <Admin />} />
                <Route exact path="/add" component={() => <Add />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;