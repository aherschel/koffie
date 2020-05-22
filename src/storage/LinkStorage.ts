import Link from "../model/Link";
import Frequency from "../model/Frequency";

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
  addLink: (link: { name: string; checkpoints: any[]; id: undefined; frequency: Frequency }) => void;

  /**
   * Update a link data.
   */
  updateLink: (link: Link) => void;
}
