import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { frequencyConfig, Link } from "../lib/model";

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
  const [toDetailPage, setToDetailPage] = useState(false);
  const { link } = props;

  if (toDetailPage) {
    return <Redirect push to={`/links/${link.id}`} />;
  }
  return (
    <ListGroup.Item action onClick={() => setToDetailPage(true)}>
      Link with {link.name} to reach out{" "}
      {frequencyConfig[link.frequency.category].printName},{" "}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      you've recorded {link.checkpoints.length} checkpoints.
      <IoIosArrowForward className="float-right" />
    </ListGroup.Item>
  );
};

export default LinkListElement;
