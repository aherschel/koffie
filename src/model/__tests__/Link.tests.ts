import Link from "../Link";

describe("Link", () => {
  it("can be instantiated", () => {
    const link: Link = { frequency: "", name: "" };
    expect(link).toBeDefined();
  });
});
