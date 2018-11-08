import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect ,Route,Switch } from 'react-router-dom'
import './App.css';

import login from './component/login';
import home from './component/home';


class App extends Component {
    constructor() {
        super();
        this.logined = false;
    }

    render() {
        let res;
        if (this.logined) {
            res = (<Redirect to={'/home'}></Redirect>)
        } else {
            res = (<Redirect to={'/login'}></Redirect>)
        }
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={login}/>
                    <Route path="/home" component={home}/>
                    {res}
                </Switch>
            </Router>
        )
    }
}

export default App;
