import React from 'react';
import logo from './logo.svg';
import './common.css';

import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    React router tests - This is the "Home page"
                </h1>
            </header>

            <div className="links">
                <Link to="/test">Test page with route "/test"</Link>
            </div>
        </div>
    );
}

export default Home;
