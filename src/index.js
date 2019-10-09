import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import SignIn from './components/SignIn/SignIn' 
import SignUp from './components/SignUp/SignUp' 
import {BrowserRouter, Route} from 'react-router-dom'
import Auth from './Helpers/auth'
import 'todomvc-app-css/index.css'


// Appwrite Stuff
import * as Appwrite from 'appwrite';
// Init your JS SDK
var appwrite = new Appwrite();
appwrite
    .setEndpoint('http://localhost/v1') // Set only when using self-hosted solution
    .setProject('5d9c6301235f2');    
const auth = new Auth(appwrite);

const routing = (
  <BrowserRouter>
      <Route exact path="/" render={(props) => <App {...props} auth = {auth} sdk = {appwrite}/>} />
      <Route exact path="/signin" render={(props) => <SignIn {...props} />} />
      <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
  </BrowserRouter>
)

const rootElement = document.getElementById('root')
ReactDOM.render(
    routing,  rootElement
)
