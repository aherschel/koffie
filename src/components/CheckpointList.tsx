import React from "react";
import Checkpoint from "../model/Checkpoint";

interface CheckpointListProps {
  checkpoints: Checkpoint[];
}

const CheckpointList = (props: CheckpointListProps) => {
  const { checkpoints } = props;

  return <p>You&apos;ve had {checkpoints.length} checkpoints.</p>;
};

export default CheckpointList;
