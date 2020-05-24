import Link from "../model/Link";

/**
 * Interface for link storage implementations.
 */
export default interface LinkStorage {
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
}
