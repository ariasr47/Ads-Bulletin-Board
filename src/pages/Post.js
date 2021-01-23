// @ts-ignore
import React from "react"
import "semantic-ui-css/semantic.min.css"
import { Form, Input, Select, TextArea, Button } from "semantic-ui-react"

const Categories = [
  { key: "e", text: "Electronics", value: "electronics" },
  { key: "f", text: "Fashion", value: "fashion" },
  { key: "v", text: "Vehicle", value: "vehicle" },
]

const FormFieldControl = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="Title"
        s
        placeholder="Title"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Price"
        placeholder="Price"
      />
      <Form.Field
        control={Select}
        options={Categories}
        label={{
          children: "Category",
          htmlFor: "form-select-control-category",
        }}
        placeholder="Category"
        search
        searchInput={{ id: "form-select-control-category" }}
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Description"
      placeholder="Description"
    />
    <Form.Field
      id="form-input-control-error-email"
      control={Input}
      label="Email"
      placeholder="joe@schmoe.com"
      error={{
        content: "Please enter a valid email address",
        pointing: "below",
      }}
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Confirm"
      label="Submit"
    />
  </Form>
)

export default FormFieldControl
