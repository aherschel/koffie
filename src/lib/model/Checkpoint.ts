import { Guid } from "guid-typescript";

export interface Checkpoint {
  id: string;
  checkpointType: CheckpointType;
  date: Date | number;
}

type CheckpointCreationType = "Auto" | "Manual";
export type CheckpointType = "Scheduled" | "Past";

export interface ScheduledCheckpoint extends Checkpoint {
  checkpointType: "Scheduled";
  timesRescheduled: number;
  creationType: CheckpointCreationType;
}

interface CheckpointFeedback {
  userRating?: number;
}

export interface PastCheckpoint extends Checkpoint {
  checkpointType: "Past";
  timesRescheduled: number;
  creationType: CheckpointCreationType;
  didOccur: boolean;
  checkpointFeedback: CheckpointFeedback;
}

export const createScheduledCheckpoint = (
  date: Date,
  timesRescheduled: number,
  creationType: CheckpointCreationType
): ScheduledCheckpoint => {
  return {
    id: Guid.create().toString(),
    checkpointType: "Scheduled",
    date,
    timesRescheduled,
    creationType,
  };
};

export const createPastCheckpoint = (
  date: Date,
  timesRescheduled: number,
  creationType: CheckpointCreationType,
  didOccur: boolean,
  checkpointFeedback: CheckpointFeedback
): PastCheckpoint => {
  return {
    id: Guid.create().toString(),
    checkpointType: "Past",
    date,
    timesRescheduled,
    creationType,
    didOccur,
    checkpointFeedback,
  };
};
