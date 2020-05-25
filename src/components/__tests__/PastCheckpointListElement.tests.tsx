import React from "react";
import ReactDOM from "react-dom";
import { PastCheckpointListElement } from "..";
import { createPastCheckpoint } from "../../lib/model";

describe("PastCheckpointListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PastCheckpointListElement
        checkpoint={createPastCheckpoint(new Date(), 0, "Auto", true, {})}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
