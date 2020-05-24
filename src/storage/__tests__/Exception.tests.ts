import ResourceNotFoundException from "../Exception";

describe("ResourceNotFoundException", () => {
  it("can be instantiated", () => {
    const error = new ResourceNotFoundException("");
    expect(error).toBeDefined();
  });
});