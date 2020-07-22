import React from "react";
import { ListGroup } from "react-bootstrap";
import { Checkpoint, CheckpointType } from "../lib/model";
import CheckpointListElement from "./CheckpointListElement";

interface CheckpointListProps {
  checkpointlistType: CheckpointType;
  checkpoints: Checkpoint[];
}

const CheckpointList = (props: CheckpointListProps) => {
  const { checkpointlistType, checkpoints } = props;

  const filteredCheckpoints = checkpoints.filter(
    (checkpoint) => checkpoint.checkpointType === checkpointlistType
  );

  return (
    <>
      <h5>
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        You have {filteredCheckpoints.length} {checkpointlistType}{" "}
        checkpoints.
      </h5>
      <ListGroup>
        {filteredCheckpoints.map((checkpoint) => (
          <CheckpointListElement key={checkpoint.id} checkpoint={checkpoint} />
        ))}
      </ListGroup>
    </>
  );
};

export default CheckpointList;
