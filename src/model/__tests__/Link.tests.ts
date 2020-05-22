import Link, {createLink, newLink} from "../Link";
import { createFrequency } from "../Frequency";

describe("Link", () => {
  it("can be instantiated directly", () => {
    const link: Link = {
      id: "",
      frequency: createFrequency("Daily"),
      name: "",
      checkpoints: [],
    };
    expect(link).toBeDefined();
  });

  it("can be instantiated with a helper function", () => {
    const link: Link = createLink({
      checkpoints: [],
      frequency: createFrequency("Daily"),
      name: "",
    });
    expect(link).toBeDefined();
  });

  it("can create a new link with a name and frequency", () => {
    const link: Link = newLink("", "Daily");
    expect(link).toBeDefined();
  });
});
