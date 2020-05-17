import React from "react";
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
    <li key={link.name}>
      Link with {link.name} to reach out {link.frequency}.
    </li>
  );
};

export default LinkListElement;
