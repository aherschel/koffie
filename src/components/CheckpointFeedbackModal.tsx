import React, { useState } from "react";
import { Checkpoint } from "../lib/model";
import { Modal, Button, Container, Row } from "react-bootstrap";
import { FaCheckSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CheckpointFeedbackModalProps {
  checkpoints: Checkpoint[]
  onDismiss: () => void
  show: boolean
}

const DATE_TIME_FORMAT = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })

const getDateString = (checkpoints: Checkpoint[], index: number): string => {
  if (checkpoints[index] === undefined) {
    return "";
  }
  const [{ value: month },,{ value: day },,{ value: year }] = DATE_TIME_FORMAT.formatToParts(checkpoints[index].date)
  return `${month}-${day}-${year}`
};

/**
 * TODO Add the feedback form/wizard.
 */
const CheckpointFeedbackModal = (props: CheckpointFeedbackModalProps) => {
  const [index, updateIndex] = useState(0);
  const { show, onDismiss, checkpoints } = props;

  const moveForward = () => {
    updateIndex(index => {
      return index + 1;
    })  };

  const moveBack = () => {
    updateIndex(index => {
      return index - 1;
    })
  };

  return (
    <Modal show={show} onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title><FaCheckSquare/> Checkpoint Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {checkpoints[index] !== undefined && (
          <Container>
            <Row>
              How did your checkpoint with {"<TBD>"} on {getDateString(checkpoints, index)} go?
            </Row>
            <Row>
              Checkpoint Feedback
            </Row>
          </Container>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={moveBack} disabled={index === 0}>
          <FaChevronLeft /> Back
        </Button>
        {index === checkpoints.length - 1
          ? (
            <Button variant="primary" onClick={onDismiss} disabled={index === checkpoints.length}>
              Close
            </Button>
          ) : (
            <Button variant="primary" onClick={moveForward} disabled={index === checkpoints.length}>
              Forward <FaChevronRight/>
            </Button>
          )
        }
      </Modal.Footer>
    </Modal>
  );
};

export default CheckpointFeedbackModal;
