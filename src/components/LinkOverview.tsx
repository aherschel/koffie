import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "../model/Link";

interface LinkOverviewProps {
  link: Link;
}

const LinkOverview = (props: LinkOverviewProps) => {
  const { link } = props;

  return (
    <>
      <Row>
        <Col md>
          <h3>Link Overview</h3>
        </Col>
      </Row>
      <Row>
        <Col md>
          <b>Name:</b> {link.name}
        </Col>
        <Col md>
          <b>Frequency Category:</b> {link.frequency.category}
        </Col>
        <Col md>
          <b>Checkpoint Count:</b> {link.checkpoints.length}
        </Col>
      </Row>
    </>
  );
};

export default LinkOverview;
