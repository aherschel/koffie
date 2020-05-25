import { Link } from "../model";

export type OptionalLink = Link | undefined;
export type LinkUpdateCallback = (updatedLink: OptionalLink) => void;

/**
 * Interface for link storage implementations.
 */
export interface LinkStorage {
  /**
   * Return all links for the user.
   */
  listLinks: () => Link[];

  /**
   * Retrieve a single link by id.
   */
  getLink: (linkId: string) => Link;

  /**
   * Create a new link, and add to customer list of links.
   */
  addLink: (link: Link) => void;

  /**
   * Update a link data.
   */
  updateLink: (link: Link) => void;

  /**
   * Deletes a link given a linkId.
   */
  deleteLink: (linkId: string) => void;

  /**
   * API to subscribe to link update changes.
   * Returns a function to unsubscribe.
   */
  subscribeToLinkUpdates: (
    linkId: string,
    handleLinkUpdate: LinkUpdateCallback
  ) => () => void;
}
