import React from "react";
import ReactDOM from "react-dom";
import { CreateCheckpointForm } from "..";
import {createScheduledCheckpoint} from "../../lib/model";

describe("CreateCheckpointForm", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<CreateCheckpointForm recommendedCheckpoint={createScheduledCheckpoint(new Date(), 0, "Auto")} onCreate={() => {}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
