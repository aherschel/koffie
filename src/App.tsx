import React, { Component } from 'react'
import './App.css'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NavBar } from './components/NavBar'

Amplify.configure(aws_exports)

/**
 * The top-level App component is responsible for a few key things, including setting up
 * authentication, routing, and other global state required for the app.
 */
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path='/about'>
                        <AboutPage />
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
  }
}

export default withAuthenticator(App)
