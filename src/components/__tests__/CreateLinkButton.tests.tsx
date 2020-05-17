import React from "react";
import ReactDOM from "react-dom";
import CreateLinkButton from "../CreateLinkButton";

describe("CreateLinkButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateLinkButton onCreateLink={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
