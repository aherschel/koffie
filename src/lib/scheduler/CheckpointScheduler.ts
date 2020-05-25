import {
  Link,
  createScheduledCheckpoint,
  ScheduledCheckpoint,
  FrequencyCategory,
  frequencyConfig,
} from "../model";
import { InvalidInputException } from "../exception";

const computeFrequencyCategoryJitter = (
  frequencyCategory: FrequencyCategory
): number => {
  const config = frequencyConfig[frequencyCategory];
  return Math.floor(
    Math.random() * Math.floor(config.maxDays - config.minDays)
  );
};

const scheduleCheckpoint = (
  link: Link,
  referenceDate: Date = new Date()
): ScheduledCheckpoint => {
  console.debug(`Scheduling checkpoint for link: ${JSON.stringify(link)}`);
  if (link.frequency.category === "Unscheduled") {
    throw new InvalidInputException(
      "Cannot schedule checkpoint with frequency Unscheduled."
    );
  }
  const jitter = computeFrequencyCategoryJitter(link.frequency.category);
  const config = frequencyConfig[link.frequency.category];
  const date = new Date(referenceDate);
  date.setDate(date.getDate() + config.minDays + jitter);
  return createScheduledCheckpoint(date, 0, "Auto");
};

export default scheduleCheckpoint;
