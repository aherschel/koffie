import React from "react";
import ReactDOM from "react-dom";
import LinksPage from "../LinksPage";

describe("LinksPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinksPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
