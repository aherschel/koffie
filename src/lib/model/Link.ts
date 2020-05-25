import { Guid } from "guid-typescript";
import { createFrequency, Frequency, FrequencyCategory } from "./Frequency";
import { Checkpoint } from "./Checkpoint";

/**
 * Link lib.model for use across the app.
 */
export interface Link {
  id: string | undefined;
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
