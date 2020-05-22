import React from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import aws_exports from "./aws-exports";
import AboutPage from "./pages/AboutPage";
import AppHeader from "./components/AppHeader";
import LinksPage from "./pages/LinksPage";
import AppFooter from "./components/AppFooter";
import LinkDetailPage from "./pages/LinkDetailPage";

Amplify.configure(aws_exports);

/**
 * The top-level App component is responsible for a few key things, including setting up
 * authentication, routing, and other global state required for the app.
 */
const App = () => {
  return (
    <Router>
      <div>
        <AppHeader />
        <Container>
          <Switch>
            <Route path="/links/:linkId">
              <LinkDetailPage />
            </Route>
            <Route path="/links">
              <LinksPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <Redirect to="/links" />
            </Route>
          </Switch>
          <AppFooter />
        </Container>
      </div>
    </Router>
  );
};

export default withAuthenticator(App);
