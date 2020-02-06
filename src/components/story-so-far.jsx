import React from "react";

import {
  Accordion,
  Card,
  Button,
  Carousel
} from "react-bootstrap";
import amberFort from "../resources/images/amber-for-2.jpg";
import albertHall from "../resources/images/albert-hall.jpg";
import hawalMahal from "../resources/images/hawa-mahal.jpg";

import { story } from "../resources/json/story-so-far";

export const StorySoFar = () => {
  return (
    <div id="awesome-story">
      <Accordion defaultActiveKey="0">{createStoryCards(story)}</Accordion>
    </div>
  );
};

const createCarousel = imageArr => {
  return (
    <Carousel>
      {imageArr.map((img, index) =>
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={img} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
  );
};

const createStoryCards = inputJSON => {
  return (
    inputJSON.length &&
    inputJSON.map((elem, index) => (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={index}>
            {elem.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>{createCarousel([amberFort, albertHall, hawalMahal])}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ))
  );
};
