import React from "react";
import ReactDOM from "react-dom";
import { CheckpointListElement } from "..";
import { createScheduledCheckpoint } from "../../lib/model";

describe("CheckpointListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CheckpointListElement
        checkpoint={createScheduledCheckpoint(new Date(), 0, "Auto")}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
