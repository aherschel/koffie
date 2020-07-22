import React from "react";
import ReactDOM from "react-dom";
import { CheckpointFeedbackModal } from "..";

describe("CheckpointFeedbackModal", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckpointFeedbackModal checkpoints={[]} onDismiss={() => {}} show={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
