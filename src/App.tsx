// React
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {
    Route,
    Switch
} from 'react-router';

// Local
import './App.css';
import {ROUTES} from "./constants/Routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
              {ROUTES.map((route, index) => (
                  <Route
                      exact path={route.path}
                      key={index}
                      component={route.component}/>
              ))}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
