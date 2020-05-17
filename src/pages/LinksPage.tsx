import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateLinkButton from "../components/CreateLinkButton";
import LinkList from "../components/LinkList";
import LinkCreatedAlert from "../components/LinkCreatedAlert";
import Link from "../model/Link";

const LinksPage = () => {
  const [isLinkCreatedVisible, setIsLinkCreatedVisible] = useState(false);
  const [links, setLinks] = useState([] as Link[]);

  const hideLinkCreatedAlert = () => setIsLinkCreatedVisible(false);
  const addLink = (link: Link) => {
    setLinks((oldLinks: Link[]) => {
      oldLinks.push(link);
      return oldLinks;
    });
    // TODO: Something seems weird here.
    setIsLinkCreatedVisible(true);
  };

  return (
    <Container className="App">
      <LinkCreatedAlert
        isVisible={isLinkCreatedVisible}
        onDismiss={hideLinkCreatedAlert}
      />
      <Row>
        <Col>
          <CreateLinkButton onCreateLink={addLink} />
        </Col>
      </Row>
      <LinkList links={links} />
    </Container>
  );
};

export default LinksPage;
