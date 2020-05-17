import React from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aws_exports from "./aws-exports";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import LinksPage from "./pages/LinksPage";

Amplify.configure(aws_exports);

/**
 * The top-level App component is responsible for a few key things, including setting up
 * authentication, routing, and other global state required for the app.
 */
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <LinksPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default withAuthenticator(App);
