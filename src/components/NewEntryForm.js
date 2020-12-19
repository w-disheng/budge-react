import React from "react";
import { Form } from "semantic-ui-react";

import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="New shinny things"
          width={12}
          label="Description"
        />
        <Form.Input
          icon="dollar"
          placeholder="100.00"
          width={4}
          label="Value"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
