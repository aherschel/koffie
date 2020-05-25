import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LinksPage } from "..";

describe("LinksPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <LinksPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
