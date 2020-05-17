import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppHero from "../AppHero";

describe("AppHero", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <AppHero />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
