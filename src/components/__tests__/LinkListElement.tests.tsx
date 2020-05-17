import React from "react";
import ReactDOM from "react-dom";
import LinkListElement from "../LinkListElement";

describe("LinkListElement", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <LinkListElement link={{ name: "", frequency: "" }} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
