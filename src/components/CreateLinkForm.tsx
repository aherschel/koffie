import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link, { newLink } from "../model/Link";
import { FrequencyCategory } from "../model/Frequency";
import FrequencyPicker from "./FrequencyPicker";

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
  const [frequency, setFrequency] = useState("Weekly" as FrequencyCategory);

  const { onCreateLink } = props;

  const onClick = () => {
    const link: Link = newLink(name, frequency);
    onCreateLink(link);
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onFrequencyChange = (newFrequency: FrequencyCategory) => {
    setFrequency(newFrequency);
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

      <FrequencyPicker onFrequencyChange={onFrequencyChange} />

      <Button variant="primary" type="button" onClick={onClick}>
        Create
      </Button>
    </Form>
  );
};

export default CreateLinkForm;
