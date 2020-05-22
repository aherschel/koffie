import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CreateLinkButton from "../components/CreateLinkButton";
import LinkList from "../components/LinkList";
import LinkCreatedAlert from "../components/LinkCreatedAlert";
import Link from "../model/Link";
import AppHero from "../components/AppHero";
import localLinkStorage from "../storage/LocalLinkStorage";

/**
 * TODO: I'm just using some local storage for now, it's also weird that
 * these aren't in sync, I'll fix that later.
 */
const LinksPage = () => {
  const [isLinkCreatedVisible, setIsLinkCreatedVisible] = useState(false);
  const [links, setLinks] = useState(localLinkStorage.listLinks());

  const hideLinkCreatedAlert = () => setIsLinkCreatedVisible(false);
  const addLink = (link: Link) => {
    setLinks((oldLinks: Link[]) => {
      oldLinks.push(link);
      return oldLinks;
    });
    localLinkStorage.addLink(link);
    setIsLinkCreatedVisible(true);
  };

  return (
    <>
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
    </>
  );
};

export default LinksPage;
