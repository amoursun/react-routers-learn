import React, {Component} from 'react';
import logo from './logo.png';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import User from './pages/User/User';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Cast from './pages/Cast/Cast';
import  Concept from './pages/Concept/Concept';
import Comments from './pages/Comments/MainComments';
import BrotherNews from './pages/BrotherNews/BrotherNews';
import NewShopTable from './pages/NewShopTable/NewShopTable';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>React Router Tutorial</h3>
                <ul className="nav">
                    <li>
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{color: 'green'}}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user" activeStyle={{color: 'red'}}>
                            User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" activeClassName="active">
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cast" activeStyle={{color: 'yellow'}}>
                            Cast
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={{pathname: 'concept'}} activeStyle={{color: 'purple'}}>
                            Concept
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/comments" activeStyle={{color: 'coral'}}>
                            Comments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/brothernews" activeStyle={{color: '#fd5624'}}>
                            BrotherNews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newShopTable" activeStyle={{color: '#1d5624'}}>
                            NewShopTable
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/cast" component={Cast} />
                <Route path="/concept" component={Concept} />
                <Route path="/comments" component={Comments} />
                <Route path="/brotherNews" component={BrotherNews} />
                <Route path="/newShopTable" component={NewShopTable} />
            </Switch>
            {/*{this.props.children}*/}
        </div>
    );
  }
}

export default App;
