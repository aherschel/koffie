import React from "react";
import ReactDOM from "react-dom";
import { CheckpointCalendar } from "..";
import { createScheduledCheckpoint } from "../../lib/model";

describe("CheckpointCalendar", () => {
  it("renders without crashing for an empty list", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckpointCalendar checkpoints={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing for a non-empty list", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CheckpointCalendar
        checkpoints={[createScheduledCheckpoint(new Date(), 0, "Auto")]}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
