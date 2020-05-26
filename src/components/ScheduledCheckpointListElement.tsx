import React from "react";
import { ListGroup } from "react-bootstrap";
import { ScheduledCheckpoint } from "../lib/model";
import dateToString from "../lib/utils/DateUtils";

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
      {dateToString(checkpoint.date as Date)}. Checkpoint has been rescheduled{" "}
      {checkpoint.timesRescheduled} times.
    </ListGroup.Item>
  );
};

export default ScheduledCheckpointListElement;
