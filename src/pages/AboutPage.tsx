import React from "react";
import { Jumbotron } from "react-bootstrap";

const AboutPage = () => {
  return (
    <>
      <br />
      <Jumbotron>
        <h1>About</h1>
        <p>
          Koffie Link is an app to help you manage recurring social invites, and
          maintain your rotation of friends.
        </p>
        <ul>
          <li>Remember to reach out to friends.</li>
          <li>Update the frequency of outreach based on past performance.</li>
          <li>Barely be a human with respect to your friends.</li>
        </ul>
      </Jumbotron>
    </>
  );
};

export default AboutPage;
