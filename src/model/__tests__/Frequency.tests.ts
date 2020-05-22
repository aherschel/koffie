import Frequency, { createFrequency } from "../Frequency";

describe("Frequency", () => {
  it("can be instantiated directly", () => {
    const frequency: Frequency = { id: "", category: "Daily", days: 1 };
    expect(frequency).toBeDefined();
  });

  it("can be instantiated with a helper function", () => {
    const frequency: Frequency = createFrequency("Daily");
    expect(frequency).toBeDefined();
  });
});
