import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import localLinkStorage from "../storage/LocalLinkStorage";

const LinkDetailPage = () => {
  const { linkId } = useParams();
  const link = localLinkStorage.getLink(linkId);

  return (
    <>
      <br />
      <Row>
        <Col>
          <p>
            <b>LinkId:</b> {link.id}
          </p>
          <p>
            <b>Name:</b> {link.name}
          </p>
          <p>
            <b>Frequency Category:</b> {link.frequency.category}
          </p>
          <p>
            <b>Checkpoint Count:</b> {link.checkpoints.length}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default LinkDetailPage;
