import React from "react";
import ReactDOM from "react-dom";
import { CheckpointReview } from "..";

describe("CheckpointReview", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckpointReview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
