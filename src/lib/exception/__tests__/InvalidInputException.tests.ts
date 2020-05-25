import { InvalidInputException } from "..";

describe("InvalidInputException", () => {
  it("can be instantiated", () => {
    const error = new InvalidInputException("");
    expect(error).toBeDefined();
    expect(error.name).toEqual("InvalidInputException");
  });
});
