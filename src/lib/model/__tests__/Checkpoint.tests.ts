import {
  Checkpoint,
  createPastCheckpoint,
  createScheduledCheckpoint,
  PastCheckpoint,
  ScheduledCheckpoint,
} from "..";

describe("Checkpoint", () => {
  it("can be instantiated directly", () => {
    const checkpoint: Checkpoint = { id: "", checkpointType: "Past" };
    expect(checkpoint).toBeDefined();
  });

  it("can be instantiated for past checkpoints with a helper function", () => {
    const checkpoint: PastCheckpoint = createPastCheckpoint(
      new Date(),
      0,
      "Auto",
      true,
      {}
    );
    expect(checkpoint).toBeDefined();
  });

  it("can be instantiated for scheduled checkpoints with a helper function", () => {
    const checkpoint: ScheduledCheckpoint = createScheduledCheckpoint(
      new Date(),
      0,
      "Auto"
    );
    expect(checkpoint).toBeDefined();
  });
});
