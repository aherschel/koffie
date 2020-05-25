import React from "react";
import { Checkpoint, PastCheckpoint, ScheduledCheckpoint } from "../lib/model";
import ScheduledCheckpointListElement from "./ScheduledCheckpointListElement";
import PastCheckpointListElement from "./PastCheckpointListElement";

type CheckpointListElementProps = {
  /**
   * Checkpoint to render.
   */
  checkpoint: Checkpoint;
};

/**
 * The nav portion of this is getting pretty weird, but I'll fix that up later.
 */
const CheckpointListElement = (props: CheckpointListElementProps) => {
  const { checkpoint } = props;
  if (checkpoint.checkpointType === "Scheduled") {
    return (
      <ScheduledCheckpointListElement
        checkpoint={checkpoint as ScheduledCheckpoint}
      />
    );
  }

  if (checkpoint.checkpointType === "Past") {
    return (
      <PastCheckpointListElement checkpoint={checkpoint as PastCheckpoint} />
    );
  }

  return null;
};

export default CheckpointListElement;
