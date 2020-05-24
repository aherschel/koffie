import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "../model/Link";

interface CreateCheckpointButtonProps {
  link: Link;
}

const CreateCheckpointButton = (props: CreateCheckpointButtonProps) => {
  const { link } = props;
  console.log(link);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <p>TODO</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCheckpointButton;
