import React, { useEffect } from "react";
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

  /**
   * Optional number of ms to dismiss the alert after.
   */
  autoDismissMs?: number;
};

const LinkCreatedAlert = (props: LinkCreatedAlertProps) => {
  const { isVisible, onDismiss, autoDismissMs } = props;

  useEffect(() => {
    if (autoDismissMs && isVisible) {
      setTimeout(onDismiss, autoDismissMs);
    }
  });

  return (
    <Alert variant="success" onClose={onDismiss} show={isVisible} dismissible>
      <Alert.Heading>Link Created</Alert.Heading>
      <p>
        Your new link has been successfully created. You can view their details
        on the page below.
      </p>
    </Alert>
  );
};

export default LinkCreatedAlert;
