import React, { useEffect, useState } from "react";
import localLinkStorage from "../lib/storage";
import { Checkpoint } from "../lib/model";
import { CheckpointFeedbackModal, ElapsedCheckpointToast } from "./index";

const getElapsedCheckpoints = (): Checkpoint[] => {
  const now = new Date();
  return localLinkStorage.listLinks()
    .flatMap(link => link.checkpoints)
    .filter(checkpoint => checkpoint.checkpointType === "Scheduled" && checkpoint.date < now)
    .sort((lhsCheckpoint, rhsCheckpoint) => {
      if (lhsCheckpoint.date < rhsCheckpoint.date) return -1;
      if (lhsCheckpoint.date > rhsCheckpoint.date) return 1;
      return 0;
    });
};

type WorkflowState = "LOADING" | "NOTIFIED" | "STARTED" | "DISMISSED"

/**
 * Workflow component which is instantiated on all pages. It will pull down links, and identify
 * checkpoints which should have occurred - then get user feedback and either reschedule
 * or mark as past with notes.
 */
const LoginUpdateWorkflow = () => {
  const [workflowState, updateWorkflowState] = useState("LOADING" as WorkflowState)
  const [checkpoints, updateCheckpoints] = useState([] as Checkpoint[])

  useEffect(() => {
    updateCheckpoints(getElapsedCheckpoints())
    updateWorkflowState("NOTIFIED")
  }, [])

  const onDismiss = () => {
    updateWorkflowState("DISMISSED")
  };

  const onBeginWorkflow = () => {
    updateWorkflowState("STARTED")
  };

  return (
    <>
      <ElapsedCheckpointToast
        show={workflowState === "NOTIFIED"}
        numElapsedCheckpoints={checkpoints.length}
        onBeginWorkflow={onBeginWorkflow}
        onDismiss={onDismiss} />
      <CheckpointFeedbackModal
        show={workflowState === "STARTED"}
        checkpoints={checkpoints}
        onDismiss={onDismiss} />
    </>
  );
};

export default LoginUpdateWorkflow;
