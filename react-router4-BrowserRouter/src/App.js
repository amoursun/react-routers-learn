import React, {Component} from 'react';
import logo from './logo.png';
import {
    Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import history from './history/history';
import './App.css';

import User from './pages/User/User';
import Contacts from './pages/Contacts/Contacts';
import  Concept from './pages/Concept/Concept';
import Comments from './pages/Comments/MainComments';

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h3>React Router Tutorial</h3>
                    <ul className="nav">
                        <li>
                            <NavLink to="/" activeClassName="active">
                                User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" activeClassName="active">
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/concept" activeStyle={{color: 'purple'}}>
                                Concept
                            </NavLink>
                            {/*<NavLink to={{pathname: '/concept'}} activeStyle={{color: 'purple'}}>*/}
                                {/*Concept*/}
                            {/*</NavLink>*/}
                        </li>
                        <li>
                            <NavLink to="/comments" activeStyle={{color: 'coral'}}>
                                Comments
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={User} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/concept" component={Concept} />
                    <Route path="/comments" component={Comments} />
                </Switch>
                {this.props.children}
            </div>
        </Router>
    );
  }
}

export default App;
