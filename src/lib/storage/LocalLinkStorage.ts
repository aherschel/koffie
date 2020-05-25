import { LinkStorage, LinkUpdateCallback, OptionalLink } from "./LinkStorage";
import { Link } from "../model";
import { ResourceNotFoundException } from "../exception";

const LINK_STORAGE_NAMESPACE = "link";
const LINK_INDEX_KEY = "index";

class LocalLinkStorage implements LinkStorage {
  linkCallbacks: Map<string, Set<LinkUpdateCallback>> = new Map();

  /**
   * Internal method to notify al subscribed listeners of link updates.
   */
  private readonly notifySubscriptionsOfLinkUpdate = (
    linkId: string,
    updatedLink: OptionalLink
  ): void => {
    console.debug(`Notifying subscribed listeners of link update.`);
    const callbacks = this.linkCallbacks.get(linkId);
    if (callbacks === undefined) {
      return;
    }
    callbacks.forEach((callback) => {
      try {
        console.debug(`Notifying callback.`);
        callback(updatedLink);
      } catch (ex) {
        console.error(
          `Caught exception while updating link callbacks: ${JSON.stringify(
            ex
          )}`
        );
      }
    });
  };

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
    this.notifySubscriptionsOfLinkUpdate(link.id!, link);
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
      throw new ResourceNotFoundException(
        `Could not find link with Id ${usedId} in localStorage`
      );
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
      throw new ResourceNotFoundException(
        `Could not find link with Id ${link.id} in localStorage`
      );
    }
    const serializedLink = JSON.stringify(link);
    localStorage.setItem(key, serializedLink);
    this.notifySubscriptionsOfLinkUpdate(link.id!, link);
  };

  /**
   * {@see LinkStorage}
   */
  deleteLink = (linkId: string): void => {
    console.debug(`Deleting link with ID: ${linkId}`);
    localStorage.removeItem(`${LINK_STORAGE_NAMESPACE}/${linkId}`);
    const indexKey = `${LINK_STORAGE_NAMESPACE}/${LINK_INDEX_KEY}`;
    let index: string[] = [];
    const serializedIndex = localStorage.getItem(indexKey);
    if (serializedIndex !== null) {
      index = JSON.parse(serializedIndex);
    }
    index = index.filter((id) => id !== linkId);
    localStorage.setItem(indexKey, JSON.stringify(index));
    this.notifySubscriptionsOfLinkUpdate(linkId, undefined);
  };

  /**
   * {@see LinkStorage}
   */
  subscribeToLinkUpdates = (
    linkId: string,
    handleLinkUpdate: LinkUpdateCallback
  ) => {
    console.debug(`Subscribing to link updates for link ID: ${linkId}`);
    if (this.linkCallbacks.has(linkId)) {
      const callbacks = this.linkCallbacks.get(linkId)!;
      callbacks.add(handleLinkUpdate);
      this.linkCallbacks.set(linkId, callbacks);
    } else {
      this.linkCallbacks.set(
        linkId,
        new Set<LinkUpdateCallback>().add(handleLinkUpdate)
      );
    }
    return () => {
      if (this.linkCallbacks.has(linkId)) {
        const callbacks = this.linkCallbacks.get(linkId)!;
        callbacks.delete(handleLinkUpdate);
        this.linkCallbacks.set(linkId, callbacks);
      }
    };
  };
}

const localLinkStorage = new LocalLinkStorage();
export default localLinkStorage;
