import React, { Component } from 'react';
import AllRouter from './allRouter';
import store from './store/store';

window.store = store

class App extends Component {
    render() {
        return (
            <AllRouter/>
        )
    }
}

export default App;
