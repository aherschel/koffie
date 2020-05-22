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
      Link with {link.name} to reach out {link.frequency.category},{" "}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      you've recorded {link.checkpoints.length} checkpoints.
    </ListGroup.Item>
  );
};

export default LinkListElement;
