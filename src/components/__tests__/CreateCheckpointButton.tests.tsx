import React from "react";
import ReactDOM from "react-dom";
import { CreateCheckpointButton } from "..";
import { newLink } from "../../lib/model";

describe("CreateCheckpointButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateCheckpointButton link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
