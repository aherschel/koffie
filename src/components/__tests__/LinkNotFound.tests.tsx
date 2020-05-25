import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkNotFound } from "..";

describe("LinkNotFound", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <LinkNotFound linkId="" />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
