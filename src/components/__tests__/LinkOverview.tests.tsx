import React from "react";
import ReactDOM from "react-dom";
import LinkOverview from "../LinkOverview";
import { newLink } from "../../model/Link";

describe("LinkOverview", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinkOverview link={newLink("", "Daily")} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
