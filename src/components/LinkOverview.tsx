import React from "react";
import { Col, Row } from "react-bootstrap";
import { frequencyConfig, Link } from "../lib/model";

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
          <b>Frequency Category:</b>{" "}
          {frequencyConfig[link.frequency.category].printName}
        </Col>
      </Row>
    </>
  );
};

export default LinkOverview;
