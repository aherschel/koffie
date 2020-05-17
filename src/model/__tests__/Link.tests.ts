import Link, { createLink } from "../Link";

describe("Link", () => {
  it("can be instantiated directly", () => {
    const link: Link = { id: "", frequency: "", name: "" };
    expect(link).toBeDefined();
  });

  it("can be instantiated with a helper function", () => {
    const link: Link = createLink({ frequency: "", name: "" });
    expect(link).toBeDefined();
  });
});
