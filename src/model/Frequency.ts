import { Guid } from "guid-typescript";

export type FrequencyCategory =
  | "Daily"
  | "BiWeekly"
  | "Weekly"
  | "BiMonthly"
  | "Monthly"
  | "Quarterly"
  | "BiAnnually"
  | "Annually"
  | "Unscheduled";

interface FrequencyConfig {
  minDays: number;
  maxDays: number;
  defaultDays: number;
}

const defaultFrequencyConfig: {
  [key in FrequencyCategory]: FrequencyConfig;
} = {
  Daily: {
    minDays: 1,
    maxDays: 2,
    defaultDays: 1,
  },
  BiWeekly: {
    minDays: 3,
    maxDays: 5,
    defaultDays: 3,
  },
  Weekly: {
    minDays: 6,
    maxDays: 10,
    defaultDays: 7,
  },
  BiMonthly: {
    minDays: 11,
    maxDays: 22,
    defaultDays: 14,
  },
  Monthly: {
    minDays: 23,
    maxDays: 60,
    defaultDays: 30,
  },
  Quarterly: {
    minDays: 61,
    maxDays: 135,
    defaultDays: 90,
  },
  BiAnnually: {
    minDays: 136,
    maxDays: 284,
    defaultDays: 183,
  },
  Annually: {
    minDays: 285,
    maxDays: 712,
    defaultDays: 365,
  },
  Unscheduled: {
    minDays: 713,
    maxDays: -1,
    defaultDays: -1,
  },
};

export default interface Frequency {
  id: string;
  category: FrequencyCategory;
  days: number;
}

export const createFrequency = (category: FrequencyCategory): Frequency => {
  const config = defaultFrequencyConfig[category];
  return {
    id: Guid.create().toString(),
    category,
    days: config.defaultDays,
  };
};
