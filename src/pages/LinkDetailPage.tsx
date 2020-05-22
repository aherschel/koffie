import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const LinkDetailPage = () => {
  const { linkId } = useParams();

  return (
    <>
      <br />
      <Row>
        <Col>
          <p>LinkId: {linkId}</p>
        </Col>
      </Row>
    </>
  );
};

export default LinkDetailPage;
