import React from "react";

import { Form, Button, Col, Image } from "react-bootstrap";
import * as USStates from "../resources/json/us-states.json";
import pigeon from "../resources/images/pigeon.gif";


export const Contact = () => {
  return (
    <div>
      <div id="awesome-contact-drawer">
        <Image src={pigeon} alt="loading..." />

      </div>
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Who are you ?</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter emaiL" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                {console.log(Array.from(USStates.default))}
                {Array.from(USStates.default).map(state => <option>{state.name}</option>)}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
