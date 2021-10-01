// React
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import {
    Route,
    Switch
} from 'react-router';
import store from './store/AppStore'

// Local
import './App.css';
import {ROUTES} from "./constants/Routes";
import HeaderContainer from "./containers/HeaderContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <HeaderContainer/>
                        <Switch>
                            {ROUTES.map((route, index) => (
                                <Route
                                    exact path={route.path}
                                    key={index}
                                    component={route.component}/>
                            ))}
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
