import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter} from 'react-router-dom'

import 'todomvc-app-css/index.css'

var Appwrite = require('appwrite');

// Init your JS SDK
var appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Set only when using self-hosted solution
    .setProject('5d9c6301235f2');    


const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter> <App isLoggedIn = {false} /> </BrowserRouter>,  rootElement
)
