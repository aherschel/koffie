import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LinkDetailPage from "../LinkDetailPage";

describe("LinkDetailPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <LinkDetailPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
