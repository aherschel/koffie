import React from "react";
import { Button } from "react-bootstrap";
import localLinkStorage from "../storage/LocalLinkStorage";

interface DeleteLinkButtonProps {
  linkId: string;
  onDelete: () => void;
}

const DeleteLinkButton = (props: DeleteLinkButtonProps) => {
  const { linkId, onDelete } = props;

  const deleteLink = () => {
    localLinkStorage.deleteLink(linkId);
    onDelete();
  };

  return (
    <Button variant="outline-danger" onClick={deleteLink}>
      Delete Link
    </Button>
  );
};

export default DeleteLinkButton;
