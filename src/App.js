import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx';
import Test from './views/Test.jsx';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/test" render={() => <Test />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
