import React from "react";

import { Accordion, Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import amberFort from "../resources/images/amber-for-2.jpg"
import albertHall from "../resources/images/albert-hall.jpg"
import hawalMahal from "../resources/images/hawa-mahal.jpg"

import { story } from "../resources/json/story-so-far";


export const StorySoFar = () => {
  return (
    <div id="awesome-story">
      <Accordion defaultActiveKey="0">
        {createStoryCards(story)}
      </Accordion>
    </div>
  );
};

const createStoryCards = (inputJSON) => {
    return inputJSON.length && inputJSON.map((elem, index) => (
           <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                {elem.title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{elem.information}</Card.Body>
            </Accordion.Collapse>
          </Card>
    ))
}
