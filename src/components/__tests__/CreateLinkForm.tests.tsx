import React from "react";
import ReactDOM from "react-dom";
import CreateLinkForm from "../CreateLinkForm";

describe("CreateLinkForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateLinkForm onCreateLink={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
