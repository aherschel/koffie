import React from "react";
import ReactDOM from "react-dom";
import { ElapsedCheckpointToast } from "..";

describe("ElapsedCheckpointToast", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ElapsedCheckpointToast numElapsedCheckpoints={0} onBeginWorkflow={() => {}} onDismiss={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
