import React from "react";
import { Form } from "react-bootstrap";
import { FrequencyCategory } from "../model/Frequency";

type FrequencyPickerProps = {
  onFrequencyChange: (newFrequency: FrequencyCategory) => void;
};

const FrequencyPicker = (props: FrequencyPickerProps) => {
  const { onFrequencyChange } = props;

  const onChange = (event: any) => {
    onFrequencyChange(event.target.value);
  };

  return (
    <Form.Group>
      <Form.Label>Initial Outreach Frequency</Form.Label>
      <Form.Control as="select" defaultValue="Weekly" onChange={onChange}>
        <option value="Daily">Daily</option>
        <option value="BiWeekly">Bi-Weekly</option>
        <option value="Weekly">Weekly</option>
        <option value="BiMonthly">Bi-Monthly</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="BiAnnually">Bi-Annually</option>
        <option value="Annually">Annually</option>
      </Form.Control>
    </Form.Group>
  );
};

export default FrequencyPicker;
