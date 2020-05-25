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

export const FREQUENCY_CATEGORIES: FrequencyCategory[] = [
  "Daily",
  "BiWeekly",
  "Weekly",
  "BiMonthly",
  "Monthly",
  "Quarterly",
  "BiAnnually",
  "Annually",
  "Unscheduled",
];

interface FrequencyConfig {
  minDays: number;
  maxDays: number;
  defaultDays: number;
  printName: string;
}

export const frequencyConfig: {
  [key in FrequencyCategory]: FrequencyConfig;
} = {
  Daily: {
    minDays: 1,
    maxDays: 2,
    defaultDays: 1,
    printName: "Daily",
  },
  BiWeekly: {
    minDays: 3,
    maxDays: 5,
    defaultDays: 3,
    printName: "Bi-Weekly",
  },
  Weekly: {
    minDays: 6,
    maxDays: 10,
    defaultDays: 7,
    printName: "Weekly",
  },
  BiMonthly: {
    minDays: 11,
    maxDays: 22,
    defaultDays: 14,
    printName: "Bi-Monthly",
  },
  Monthly: {
    minDays: 23,
    maxDays: 60,
    defaultDays: 30,
    printName: "Monthly",
  },
  Quarterly: {
    minDays: 61,
    maxDays: 135,
    defaultDays: 90,
    printName: "Quarterly",
  },
  BiAnnually: {
    minDays: 136,
    maxDays: 284,
    defaultDays: 183,
    printName: "Bi-Annually",
  },
  Annually: {
    minDays: 285,
    maxDays: 712,
    defaultDays: 365,
    printName: "Annually",
  },
  Unscheduled: {
    minDays: 713,
    maxDays: -1,
    defaultDays: -1,
    printName: "Unscheduled",
  },
};

export interface Frequency {
  id: string;
  category: FrequencyCategory;
  days: number;
}

export const createFrequency = (category: FrequencyCategory): Frequency => {
  const config = frequencyConfig[category];
  return {
    id: Guid.create().toString(),
    category,
    days: config.defaultDays,
  };
};
