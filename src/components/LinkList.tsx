import React from "react";
import Link from "../model/Link";
import LinkListElement from "./LinkListElement";

type LinkListProps = {
  /**
   * The list of links to render.
   */
  links: Link[];
};

const LinkList = (props: LinkListProps) => {
  const { links } = props;

  const linkElements = links.map((link) => <LinkListElement link={link} />);

  return <ul>{linkElements}</ul>;
};

export default LinkList;
