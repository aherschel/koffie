import React from "react";
import ReactDOM from "react-dom";
import { LinkListElement } from "..";
import { newLink } from "../../lib/model";

describe("LinkListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkListElement link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
