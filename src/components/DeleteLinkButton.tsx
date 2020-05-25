import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import localLinkStorage from "../lib/storage";

interface DeleteLinkButtonProps {
  linkId: string;
  onDelete: () => void;
}

const DeleteLinkButton = (props: DeleteLinkButtonProps) => {
  const [show, setShow] = useState(false);
  const { linkId, onDelete } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteLink = () => {
    localLinkStorage.deleteLink(linkId);
    setShow(false);
    onDelete();
  };

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete Link
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this link? This action cannot be
            reversed.
          </p>
          <Button variant="danger" type="button" onClick={deleteLink}>
            Yes, Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteLinkButton;
