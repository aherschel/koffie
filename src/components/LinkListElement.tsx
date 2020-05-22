import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Link from "../model/Link";

type LinkListElementProps = {
  /**
   * Link to render.
   */
  link: Link;
};

/**
 * The nav portion of this is getting pretty weird, but I'll fix that up later.
 */
const LinkListElement = (props: LinkListElementProps) => {
  const [shouldRedirect, setRedirect] = useState(false);
  const { link } = props;

  if (shouldRedirect) {
    return <Redirect to={`/links/${link.id}`} />;
  }
  return (
    <ListGroup.Item action onClick={() => setRedirect(true)}>
      Link with {link.name} to reach out {link.frequency.category},{" "}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      you've recorded {link.checkpoints.length} checkpoints.
    </ListGroup.Item>
  );
};

export default LinkListElement;
