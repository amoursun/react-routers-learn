import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import './index.css';
import App from './App';

import User from './pages/User/User';
import Contacts from './pages/Contacts/Contacts';
import  Concept from './pages/Concept/Concept';
import Comments from './pages/Comments/MainComments';


const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: User },
        childRoutes: [
            {
                path: 'contacts',
                component: Contacts
            },
            {
                path: 'concept',
                component: Concept,
                childRoutes: [
                    { path: '/concept/:title', component: Concept }
                ]
            },
            // {
            //     path: 'concept/:title',
            //     component: Concept
            // },
            {
                path: 'comments',
                component: Comments,
                childRoutes: [
                    { path: '/comments/:name', component: Comments }
                ]
            }
        ]
    }
];

// react-router 3.0.5
ReactDOM.render( <Router history={hashHistory} routes={routeConfig} />, document.getElementById('root'));
