import { Guid } from "guid-typescript";

/**
 * Link model for use across the app.
 */
export default interface Link {
  id: string;
  name: string;
  frequency: string;
}

interface LinkData {
  name: string;
  frequency: string;
}

/**
 * Utility to generate the link w/ a GUID as an id.
 */
export const createLink = (linkData: LinkData): Link => {
  return {
    id: Guid.create().toString(),
    name: linkData.name,
    frequency: linkData.frequency,
  };
};
