import React from "react";
import ReactDOM from "react-dom";
import { LinkList } from "..";

describe("LinkList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkList links={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
