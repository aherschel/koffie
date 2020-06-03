import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {
  DeleteLinkButton,
  LinkOverview,
  CreateCheckpointButton,
  LinkNotFound,
  CheckpointTimeline,
} from "../components";
import { useLink } from "../hooks";
import Checkpoints from "../components/Checkpoints";

const LinkDetailPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { linkId } = useParams();
  const link = useLink(linkId);

  const onDelete = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/links" />;
  }

  if (link === undefined) {
    return <LinkNotFound linkId={linkId} />;
  }

  return (
    <>
      <br />
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
          <DeleteLinkButton linkId={linkId} onDelete={onDelete} />
        </Col>
      </Row>
      <br />
      <LinkOverview link={link} />
      <br />
      <CheckpointTimeline links={[link]} />
      <br />
      <Row>
        <Col md>
          <CreateCheckpointButton link={link} />
        </Col>
      </Row>
      <br />
      <Checkpoints linkId={linkId} />
    </>
  );
};

export default LinkDetailPage;
