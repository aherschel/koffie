import React from "react";
import ReactDOM from "react-dom";
import { ScheduledCheckpointListElement } from "..";
import { createScheduledCheckpoint } from "../../lib/model";

describe("ScheduledCheckpointListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ScheduledCheckpointListElement
        checkpoint={createScheduledCheckpoint(new Date(), 0, "Auto")}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
