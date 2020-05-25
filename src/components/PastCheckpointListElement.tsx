import React from "react";
import { ListGroup } from "react-bootstrap";
import { PastCheckpoint } from "../lib/model";

type PastCheckpointListElementProps = {
  checkpoint: PastCheckpoint;
};

const PastCheckpointListElement = (props: PastCheckpointListElementProps) => {
  const { checkpoint } = props;
  return (
    <ListGroup.Item>
      <b>Type:</b> {checkpoint.creationType} <b>Date: </b>
      {checkpoint.date.toString()}. Checkpoint has been rescheduled{" "}
      {checkpoint.timesRescheduled} times.
    </ListGroup.Item>
  );
};

export default PastCheckpointListElement;
