import React from 'react';
import logo from './logo.svg';

import { Link } from 'git -dom';

function Test() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    React router tests - This is the "Test page"
                </h1>
            </header>

            <div className="links">
                <Link to="/">Home page with route "/"</Link>
                <span> | </span>
                <Link to="/home">Home page with route "/home"</Link>
            </div>
        </div>
    );
}

export default Test;
