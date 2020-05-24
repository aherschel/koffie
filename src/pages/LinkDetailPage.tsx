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

  // TODO: mar to create a LinkNotFound component which is a prettier version of this message.
  // For some examples of components, you can look at src/components/AppHero.tsx and create a
  // new similar component called LinkNotFound.tsx (along w/ test file!) Use that as a starting point
  // Then include <LinkNotFound /> here instead of this h2 tag.
  if (link === undefined) {
    return <h3>No Link found with ID: {linkId}</h3>;
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
