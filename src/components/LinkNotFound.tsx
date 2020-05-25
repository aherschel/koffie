import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

interface LinkNotFoundProps {
  linkId: string;
}

const LinkNotFound = (props: LinkNotFoundProps) => {
  const linkId = props.linkId;
  return (
    <Jumbotron>
      <h3>No Link found with ID: {linkId}</h3>
      <p>
        Could not find link try checking your list of links on the <Link to="/links">links</Link> page.
      </p>
    </Jumbotron>
  );
};

export default LinkNotFound;
