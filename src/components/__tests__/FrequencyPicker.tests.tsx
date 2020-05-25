import React from "react";
import ReactDOM from "react-dom";
import { FrequencyPicker } from "..";
import { FrequencyCategory } from "../../lib/model";

describe("FrequencyPicker", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <FrequencyPicker
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onFrequencyChange={(_: FrequencyCategory) => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
