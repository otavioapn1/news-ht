import React from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Admin from './pages/admin'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/login" component={() => <Login />} />
                <Route exact path="/admin" component={() => <Admin />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;