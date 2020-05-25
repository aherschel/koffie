import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "../lib/model";
import LinkListElement from "./LinkListElement";

type LinkListProps = {
  /**
   * The list of links to render.
   */
  links: Link[];
};

const LinkList = (props: LinkListProps) => {
  const { links } = props;
  if (links.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Your Links</h3>
      <ListGroup>
        {links.map((link) => (
          <LinkListElement key={link.id} link={link} />
        ))}
      </ListGroup>
    </>
  );
};

export default LinkList;
