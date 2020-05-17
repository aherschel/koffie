import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppHero = () => {
  return (
    <Jumbotron>
      <h1>Getting Started</h1>
      <p>
        Hi There, Koffie Link is an app to help you manage recurring social
        invites, and maintain your rotation of friends. For more information,
        visit the <Link to="/about">about</Link> page.
      </p>
    </Jumbotron>
  );
};

export default AppHero;
