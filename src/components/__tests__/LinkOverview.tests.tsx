import React from "react";
import ReactDOM from "react-dom";
import { LinkOverview } from "..";
import { newLink } from "../../lib/model";

describe("LinkOverview", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkOverview link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
