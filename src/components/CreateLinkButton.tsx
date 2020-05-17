import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
import CreateLinkForm from "./CreateLinkForm";
import Link from "../model/Link";

type CreateLinkButtonProps = {
  /**
   * Callback issued when the user decides to create
   * a new link. Accepts the link input form object.
   */
  onCreateLink: (link: Link) => void;
};

const CreateLinkButton = (props: CreateLinkButtonProps) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (link: Link) => {
    props.onCreateLink(link);
    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <IoIosPersonAdd /> Add new Link
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateLinkForm onCreateLink={handleSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateLinkButton;
