import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect,Switch} from 'react-router-dom'
import './App.css';
import AllRouter from './allRouter'



class App extends Component {
    constructor() {
        super();
        this.logined = false;
    }

    render() {
        let res;
        if (this.logined) {
            res = (<Redirect to={'/home'} />)
        } else {
            res = (<Redirect to={'/login'} />)
        }
        return (
            <Router>
                <Switch>
                    <AllRouter></AllRouter>
                    {res}
                </Switch>
            </Router>
        )
    }
}

export default App;
