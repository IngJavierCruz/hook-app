import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={ HomeScreen } />
                    <Route path='/about' exact component={ AboutScreen } />
                    <Route path='/login' exact component={ LoginScreen } />
                    {/* EN CASO DE NO EXISTIR LA RUTA */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
