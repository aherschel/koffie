import { ResourceNotFoundException } from "..";

describe("ResourceNotFoundException", () => {
  it("can be instantiated", () => {
    const error = new ResourceNotFoundException("");
    expect(error).toBeDefined();
    expect(error.name).toEqual("ResourceNotFoundException");
  });
});