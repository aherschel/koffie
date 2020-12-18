import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Navbar, Nav, Button, Spinner } from "react-bootstrap";

const signIn = async () => {
  await Auth.federatedSignIn();
};

const signOut = async () => {
  await Auth.signOut();
};

const SignInSignOutButton = () => {
  const [isSignedIn, setSignedIn] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const loadUserState = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setSignedIn(user !== undefined);
      } catch (e) {
        setSignedIn(false);
      }
    };
    loadUserState();
  });

  if (isSignedIn !== undefined) {
    return isSignedIn
      ? <Button variant="outline-light" onClick={signOut}>Sign Out</Button>
      : <Button variant="outline-light" onClick={signIn}>Sign In</Button>
  }
  return (
    <Spinner animation="border" role="status" variant="light">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

/**
 * Component responsible for rendering the nav bar on all app pages.
 */
const AppHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>Koffie</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/links">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav>
        <SignInSignOutButton />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
