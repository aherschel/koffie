import React from "react";
import ReactDOM from "react-dom";
import { LinkCreatedAlert } from "..";

describe("LinkCreatedAlert", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkCreatedAlert isVisible onDismiss={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
