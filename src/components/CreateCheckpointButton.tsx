import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Checkpoint, Link } from "../lib/model";
import scheduleCheckpoint from "../lib/scheduler";
import localLinkStorage from "../lib/storage";
import { CreateCheckpointForm } from "./index";

interface CreateCheckpointButtonProps {
  link: Link;
}

const CreateCheckpointButton = (props: CreateCheckpointButtonProps) => {
  const { link } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onCreate = (checkpoint: Checkpoint) => {
    link.checkpoints.push(checkpoint);
    localLinkStorage.updateLink(link);
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <IoIosCheckmarkCircleOutline /> Schedule Checkpoint
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Checkpoint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCheckpointForm recommendedCheckpoint={scheduleCheckpoint(link)} onCreate={onCreate} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCheckpointButton;
