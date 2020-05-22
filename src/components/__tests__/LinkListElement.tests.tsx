import React from "react";
import ReactDOM from "react-dom";
import LinkListElement from "../LinkListElement";
import { newLink } from "../../model/Link";

describe("LinkListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkListElement link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
