import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LinkDetailPage from "../LinkDetailPage";
import localLinkStorage from "../../storage/LocalLinkStorage";
import { createFrequency } from "../../model/Frequency";

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
