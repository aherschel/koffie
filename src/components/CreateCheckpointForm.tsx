import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Checkpoint } from "../lib/model";

const DATE_TIME_FORMAT = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })

interface CreateCheckpointFormProps {
  recommendedCheckpoint: Checkpoint
  onCreate: (checkpoint: Checkpoint) => void
}

const CreateCheckpointForm = (props: CreateCheckpointFormProps) => {
  const { recommendedCheckpoint, onCreate } = props
  const [checkpoint, updateCheckpoint] = useState(recommendedCheckpoint)

  const [{ value: month },,{ value: day },,{ value: year }] = DATE_TIME_FORMAT.formatToParts(checkpoint.date)
  const defaultDateValue = `${year}-${month}-${day}`;

  const onDateChange = (event: any) => {
    const date = Date.parse(event.target.value);
    updateCheckpoint((checkpoint) => {
      checkpoint.creationType = "Manual";
      checkpoint.date = date;
      return checkpoint;
    })
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Scheduled Date</Form.Label>
        <Form.Control
          type="date"
          defaultValue={defaultDateValue}
          onChange={onDateChange}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={() => onCreate(checkpoint)}>
        Create
      </Button>
    </>
  );
};

export default CreateCheckpointForm;
