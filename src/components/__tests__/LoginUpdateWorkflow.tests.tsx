import React from "react";
import ReactDOM from "react-dom";
import { LoginUpdateWorkflow } from "..";

describe("LoginUpdateWorkflow", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginUpdateWorkflow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
