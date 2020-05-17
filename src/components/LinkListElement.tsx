import React from "react";
import { ListGroup } from "react-bootstrap";
import Link from "../model/Link";

type LinkListElementProps = {
  /**
   * Link to render.
   */
  link: Link;
};

const LinkListElement = (props: LinkListElementProps) => {
  const { link } = props;
  return (
    <ListGroup.Item key={link.id}>
      Link with {link.name} to reach out {link.frequency}.
    </ListGroup.Item>
  );
};

export default LinkListElement;
