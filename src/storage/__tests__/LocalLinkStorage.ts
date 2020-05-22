import localLinkStorage from "../LocalLinkStorage";
import { newLink } from "../../model/Link";

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
});
