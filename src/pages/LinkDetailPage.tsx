import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import localLinkStorage from "../storage/LocalLinkStorage";
import DeleteLinkButton from "../components/DeleteLinkButton";
import Link from "../model/Link";
import ResourceNotFoundException from "../storage/Exception";
import LinkOverview from "../components/LinkOverview";
import CreateCheckpointButton from "../components/CreateCheckpointButton";
import CheckpointList from "../components/CheckpointList";
import LinkNotFound from "../components/LinkNotFound";

/**
 * Tries to retrieve a link by linkId, and returns undefined
 * if the link cannot be found.
 */
const tryAndGetLink = (linkId: string): Link | undefined => {
  try {
    return localLinkStorage.getLink(linkId);
  } catch (ex) {
    if (ex instanceof ResourceNotFoundException) {
      return undefined;
    }
    throw ex;
  }
};

const LinkDetailPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { linkId } = useParams();

  const onDelete = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/links" />;
  }

  const link = tryAndGetLink(linkId);

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
      <Row>
        <Col md>
          <CreateCheckpointButton link={link} />
        </Col>
      </Row>
      <br />
      <Row>
        <CheckpointList checkpoints={link.checkpoints} />
      </Row>
    </>
  );
};

export default LinkDetailPage;
