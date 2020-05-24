import React from "react";
import ReactDOM from "react-dom";
import CheckpointList from "../CheckpointList";

describe("CheckpointList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckpointList checkpoints={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
