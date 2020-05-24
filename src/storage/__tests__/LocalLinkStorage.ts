import localLinkStorage from "../LocalLinkStorage";
import { newLink } from "../../model/Link";
import ResourceNotFoundException from "../Exception";

describe("LocalLinkStorage", () => {
  it("can add and retrieve a link", () => {
    const link = newLink("", "Daily");

    localLinkStorage.addLink(link);
    const retrievedLink = localLinkStorage.getLink(link.id);

    expect(link).toEqual(retrievedLink);
  });

  it("returns the list of links", () => {
    const links = localLinkStorage.listLinks();
    expect(links).toBeDefined();

    localLinkStorage.addLink(newLink("", "Daily"));
    const newLinks = localLinkStorage.listLinks();
    expect(newLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("throws a ResourceNotFoundException on invalid get", (done) => {
    try {
      localLinkStorage.getLink("IMNOTREAL");
    } catch (ex) {
      expect(ex).toBeInstanceOf(ResourceNotFoundException);
      done();
    }
  });

  it("throws a ResourceNotFoundException on invalid update", (done) => {
    try {
      localLinkStorage.updateLink(newLink("", "Daily"));
    } catch (ex) {
      expect(ex).toBeInstanceOf(ResourceNotFoundException);
      done();
    }
  });
});
