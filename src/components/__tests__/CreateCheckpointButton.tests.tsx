import React from "react";
import ReactDOM from "react-dom";
import CreateCheckpointButton from "../CreateCheckpointButton";
import { newLink } from "../../model/Link";

describe("CreateCheckpointButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateCheckpointButton link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
