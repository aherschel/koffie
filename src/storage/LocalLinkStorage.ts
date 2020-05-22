import LinkStorage from "./LinkStorage";
import Link from "../model/Link";

const LINK_STORAGE_NAMESPACE = "link";
const LINK_INDEX_KEY = "index";

class LocalLinkStorage implements LinkStorage {
  /**
   * {@see LinkStorage}
   */
  addLink = (link: Link): void => {
    const serializedLink = JSON.stringify(link);
    console.debug(`Adding link: ${serializedLink}`);
    localStorage.setItem(
      `${LINK_STORAGE_NAMESPACE}/${link.id}`,
      serializedLink
    );
    const indexKey = `${LINK_STORAGE_NAMESPACE}/${LINK_INDEX_KEY}`;
    let index: string[] = [];
    const serializedIndex = localStorage.getItem(indexKey);
    if (serializedIndex !== null) {
      index = JSON.parse(serializedIndex);
    }
    index.push(link.id || "");
    localStorage.setItem(indexKey, JSON.stringify(index));
  };

  /**
   * {@see LinkStorage}
   */
  getLink = (linkId: string | undefined): Link => {
    const usedId = linkId || "";
    console.debug(`Getting link with ID: ${usedId}`);
    const serializedLink = localStorage.getItem(
      `${LINK_STORAGE_NAMESPACE}/${usedId}`
    );
    if (serializedLink === null) {
      throw Error(`Could not find link with Id ${usedId} in localStorage`);
    }
    return JSON.parse(serializedLink);
  };

  /**
   * {@see LinkStorage}
   */
  listLinks = (): Link[] => {
    const serializedIndex = localStorage.getItem(
      `${LINK_STORAGE_NAMESPACE}/${LINK_INDEX_KEY}`
    );
    if (serializedIndex === null) {
      return [];
    }
    const index = JSON.parse(serializedIndex);
    return index.map(this.getLink);
  };

  /**
   * {@see LinkStorage}
   */
  updateLink = (link: Link): void => {
    console.debug(`Updating link: ${JSON.stringify(link)}`);
    const key = `${LINK_STORAGE_NAMESPACE}/${link.id}`;
    if (localStorage.getItem(key) === null) {
      throw Error(`Could not find link with Id ${link.id} in localStorage`);
    }
    const serializedLink = JSON.stringify(link);
    localStorage.setItem(key, serializedLink);
  };
}

const localLinkStorage = new LocalLinkStorage();
export default localLinkStorage;
