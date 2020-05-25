import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDismissable } from "../hooks";

const AppHero = () => {
  const [isDismissed, setIsDismissed] = useDismissable("AppHero", false);
  const onHide = () => setIsDismissed(true);

  if (isDismissed) {
    return null;
  }

  return (
    <Jumbotron>
      <small className="float-right">
        <Button variant="link" onClick={onHide}>
          Hide
        </Button>
      </small>
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
