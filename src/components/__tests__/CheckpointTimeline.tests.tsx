import React from "react";
import ReactDOM from "react-dom";
import { CheckpointTimeline } from "..";
import { createFrequency, createLink } from "../../lib/model";

describe("CheckpointCalendar", () => {
  it("renders without crashing for an empty list", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckpointTimeline links={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing for a non-empty list", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CheckpointTimeline
        links={[
          createLink({
            checkpoints: [],
            frequency: createFrequency("Daily"),
            name: "",
          }),
        ]}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
