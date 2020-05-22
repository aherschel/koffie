import Checkpoint, { createCheckpoint } from "../Checkpoint";

describe("Checkpoint", () => {
  it("can be instantiated directly", () => {
    const checkpoint: Checkpoint = { id: "" };
    expect(checkpoint).toBeDefined();
  });

  it("can be instantiated with a helper function", () => {
    const checkpoint: Checkpoint = createCheckpoint();
    expect(checkpoint).toBeDefined();
  });
});
