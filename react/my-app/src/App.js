import React, { Component } from 'react';
import './App.css';
import AllRouter from './allRouter'



class App extends Component {
    constructor() {
        super();
        this.logined = false;
    }

    render() {
        return (
            <AllRouter />
        )
    }
}

export default App;
