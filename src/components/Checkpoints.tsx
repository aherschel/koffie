import React from "react";
import { Row } from "react-bootstrap";
import { useCheckpoints } from "../hooks";
import { CheckpointList } from ".";

interface CheckpointsProps {
  linkId: string;
}

const Checkpoints = (props: CheckpointsProps) => {
  const { linkId } = props;
  const checkpoints = useCheckpoints(linkId);

  return (
    <>
      <Row>
        <CheckpointList
          checkpointlistType="Scheduled"
          checkpoints={checkpoints}
        />
      </Row>
      <br />
      <Row>
        <CheckpointList checkpointlistType="Past" checkpoints={checkpoints} />
      </Row>
    </>
  );
};

export default Checkpoints;
