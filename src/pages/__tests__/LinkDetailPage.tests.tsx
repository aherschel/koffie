import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkDetailPage } from "..";
import localLinkStorage from "../../lib/storage";
import { createFrequency } from "../../lib/model";

describe("LinkDetailPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    localLinkStorage.addLink({
      id: "",
      name: "",
      frequency: createFrequency("Daily"),
      checkpoints: [],
    });
    ReactDOM.render(
      <Router>
        <LinkDetailPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
