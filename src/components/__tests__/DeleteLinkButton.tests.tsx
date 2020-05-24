import React from "react";
import ReactDOM from "react-dom";
import DeleteLinkButton from "../DeleteLinkButton";

describe("DeleteLinkButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DeleteLinkButton linkId="" onDelete={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
