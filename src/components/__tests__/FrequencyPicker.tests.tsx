import React from "react";
import ReactDOM from "react-dom";
import FrequencyPicker from "../FrequencyPicker";
import { FrequencyCategory } from "../../model/Frequency";

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
