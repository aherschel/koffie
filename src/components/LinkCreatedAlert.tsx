import React from "react";
import { Alert } from "react-bootstrap";

type LinkCreatedAlertProps = {
  /**
   * Prop determining if the modal is visible or not.
   */
  isVisible: boolean;

  /**
   * Callback initiated when the modal is dismissed.
   */
  onDismiss: () => void;
};

const LinkCreatedAlert = (props: LinkCreatedAlertProps) => {
  const { isVisible, onDismiss } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <Alert variant="success" onClose={onDismiss} dismissible>
      <Alert.Heading>Link Created</Alert.Heading>
      <p>
        Your new link has been successfully created. You can view their details
        on the page below.
      </p>
    </Alert>
  );
};

export default LinkCreatedAlert;
