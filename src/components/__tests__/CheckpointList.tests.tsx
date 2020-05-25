import React from "react";
import ReactDOM from "react-dom";
import { CheckpointList } from "..";

describe("CheckpointList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CheckpointList checkpoints={[]} checkpointlistType="Scheduled" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
