import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateLinkButton from "../components/CreateLinkButton";
import LinkList from "../components/LinkList";
import LinkCreatedAlert from "../components/LinkCreatedAlert";
import Link from "../model/Link";
import AppHero from "../components/AppHero";

const LinksPage = () => {
  const [isLinkCreatedVisible, setIsLinkCreatedVisible] = useState(false);
  const [links, setLinks] = useState([] as Link[]);

  const hideLinkCreatedAlert = () => setIsLinkCreatedVisible(false);
  const addLink = (link: Link) => {
    setLinks((oldLinks: Link[]) => {
      oldLinks.push(link);
      return oldLinks;
    });
    setIsLinkCreatedVisible(true);
  };

  return (
    <Container className="App">
      <LinkCreatedAlert
        isVisible={isLinkCreatedVisible}
        onDismiss={hideLinkCreatedAlert}
        autoDismissMs={3000}
      />
      <br />
      <AppHero />
      <Row>
        <Col>
          <CreateLinkButton onCreateLink={addLink} />
        </Col>
      </Row>
      <br />
      <LinkList links={links} />
    </Container>
  );
};

export default LinksPage;
