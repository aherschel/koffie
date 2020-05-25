import React from "react";
import { ListGroup } from "react-bootstrap";
import { ScheduledCheckpoint } from "../lib/model";

type ScheduledCheckpointListElementProps = {
  checkpoint: ScheduledCheckpoint;
};

const ScheduledCheckpointListElement = (
  props: ScheduledCheckpointListElementProps
) => {
  const { checkpoint } = props;
  return (
    <ListGroup.Item>
      <b>Type:</b> {checkpoint.creationType} <b>Date: </b>
      {checkpoint.date.toString()}. Checkpoint has been rescheduled{" "}
      {checkpoint.timesRescheduled} times.
    </ListGroup.Item>
  );
};

export default ScheduledCheckpointListElement;
