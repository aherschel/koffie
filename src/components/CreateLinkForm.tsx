import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link, { createLink } from "../model/Link";

type CreateLinkFormProps = {
  /**
   * Callback executed on creation of the link.
   */
  onCreateLink: (link: Link) => void;
};

/**
 * Form which handles creation of a new link. Can be embedded
 * in most contexts without any changes required.
 */
const CreateLinkForm = (props: CreateLinkFormProps) => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");

  const { onCreateLink } = props;

  const onClick = () => {
    const link: Link = createLink({ name, frequency });
    onCreateLink(link);
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onFrequencyChange = (event: any) => {
    setFrequency(event.target.value);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Link Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter link name"
          onChange={onNameChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Initial Outreach Frequency</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter frequency"
          onChange={onFrequencyChange}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={onClick}>
        Create
      </Button>
    </Form>
  );
};

export default CreateLinkForm;
