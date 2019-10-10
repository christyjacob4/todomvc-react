import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Failure from './components/Failure/Failure';
import Success from './components/Success/Success';
import {BrowserRouter, Route} from 'react-router-dom';
import Auth from './Helpers/auth';
import 'todomvc-app-css/index.css';
import {config} from './Helpers/config';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Appwrite Stuff
import * as Appwrite from 'appwrite';
const appwrite = new Appwrite();
appwrite
    .setEndpoint(config.endpoint) // Set only when using self-hosted solution
    .setProject(config.projectId);


const auth = new Auth(appwrite);

const routing = (
  <BrowserRouter>
    <PrivateRoute exact path="/" component={App} auth={auth} />
    <Route exact path="/signin" render={(props) => <SignIn {...props} auth = {auth} />} />
    <Route exact path="/signup" render={(props) => <SignUp {...props} auth = {auth} />} />
    <Route exact path="/failure" render ={(props)=> <Failure {...props} auth = {auth} />} />
    <Route exact path="/success" render ={(props)=> <Success {...props} auth = {auth} />} />
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
ReactDOM.render(
    routing, rootElement
);
