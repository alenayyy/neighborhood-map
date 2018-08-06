import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap'

const NavFilter = (props) => {
  return (
    <Form className="pt-2">
      <FormGroup>
        <div role="textbox" contenteditable="true" aria-label="Type to filter points of interest">
        <Input type="search" name="destination" id="destination" placeholder="Search..."
          onKeyPress={props.handleSubmit}/>
        </div>
      </FormGroup>
    </Form>
  );
}

export default NavFilter;
