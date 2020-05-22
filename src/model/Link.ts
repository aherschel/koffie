import { Guid } from "guid-typescript";
import Frequency, { createFrequency, FrequencyCategory } from "./Frequency";
import Checkpoint from "./Checkpoint";

/**
 * Link model for use across the app.
 */
export default interface Link {
  id: string;
  name: string;
  frequency: Frequency;
  checkpoints: Checkpoint[];
}

interface LinkData {
  name: string;
  frequency: Frequency;
  checkpoints: Checkpoint[];
}

export const createLink = (linkData: LinkData): Link => {
  return {
    id: Guid.create().toString(),
    ...linkData,
  };
};

export const newLink = (
  name: string,
  frequencyCategory: FrequencyCategory
): Link => {
  return createLink({
    name,
    frequency: createFrequency(frequencyCategory),
    checkpoints: [],
  });
};
