import React from "react";
import { Toast, Button } from "react-bootstrap";
import { FaCheckSquare } from "react-icons/fa";

interface ElapsedCheckpointToastProps {
  numElapsedCheckpoints: number
  onBeginWorkflow: () => void
  onDismiss: () => void
  show: boolean
}

const ElapsedCheckpointToast = (props: ElapsedCheckpointToastProps) => {
  const { show, numElapsedCheckpoints, onBeginWorkflow, onDismiss } = props;
  if (numElapsedCheckpoints < 1) {
    return null
  }
  const noticeString = numElapsedCheckpoints === 1
    ? "You have a checkpoint to update."
    : `You have ${numElapsedCheckpoints} checkpoints to update.`;
  return (
    <Toast show={show} onClose={onDismiss}>
      <Toast.Header>
        <FaCheckSquare />
        <strong className="mr-auto">Elapsed Checkpoints</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>
        {noticeString}
        <br />
        <br />
        <Button onClick={onBeginWorkflow} variant="outline-secondary" size="sm" block>Rate Checkpoints</Button>
      </Toast.Body>
    </Toast>
  );
};

export default ElapsedCheckpointToast;
