import React, { Component } from "react";

import catImg from "../resources/images/cat.jpg";
import catImg2 from "../resources/images/cat2.jpg";
import catImg3 from "../resources/images/cat3.jpg";
import catImg4 from "../resources/images/cat4.jpg";
import catImg5 from "../resources/images/cat5.jpg";

import { Image, Button, Row, Col, Container } from "react-bootstrap";

export default class CatClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catClickCount: 0,
      currentSelectedCat: {
        name: "simpson",
        img: catImg,
        count: 0
      },
      cats: [
        {
          name: "simpson",
          img: catImg,
          count: 0
        },
        {
          name: "kyle",
          img: catImg2,
          count: 0
        },
        {
          name: "furball",
          img: catImg3,
          count: 0
        },
        {
          name: "Nadia",
          img: catImg4,
          count: 0
        },
        {
          name: "Chloe",
          img: catImg5,
          count: 0
        }
      ]
    };
  }

  onCatclick = (ev) => {
    let currentCat = this.state.cats.find(cat => ev.target.name === cat.name);
    currentCat.count = this.state.currentSelectedCat.count + 1;
    console.log(currentCat, 'tell me ', this.state.currentSelectedCat)

    this.setState({ currentSelectedCat: { img: ev.target.src, name: currentCat.name, count: this.state.currentSelectedCat.count+1 }, cats: [...this.state.cats.slice(0, this.state.cats.indexOf(currentCat)), currentCat, ...this.state.cats.slice(this.state.cats.indexOf(currentCat) + 1)] });
  };

  onCatSelection = (ev) => {
    let currentCat = this.state.cats.find(cat => ev.target.name === cat.name);
    this.setState({ currentSelectedCat: { img: currentCat.img, name: currentCat.name, count: currentCat.count }, catClickCount: 0 });
  }

  saveClickCount = (ev) => {
    this.setState({ currentSelectedCat: { img: ev.target.src, name: ev.target.name, count: this.state.currentSelectedCat.count+1 }, catClickCount: 0 });
  }

  getCatThumbnail = () => {
      let catsArr = []
      this.state.cats.map(cat => catsArr.push(<Col xs={6} md={4} key={cat.name}>
        <Image src={cat.img} name={cat.name} className={cat.name === this.state.currentSelectedCat.name ? 'selected-cat' : null} rounded onClick={(e) => this.onCatSelection(e)}/>
        <p>{cat.name}</p>
      </Col>));
      return ( <Container>
        <Row>
          {catsArr}
        </Row>
      </Container>)
  };

  render() {
    return (
      <div className="awesome-cat">
          <div className="awesome-cat-thumbnail">
            {this.getCatThumbnail()}
          </div>
        <div className="awesome-cat-div">
          <Image src={this.state.currentSelectedCat.img} name={this.state.currentSelectedCat.name} onClick={(ev) => this.onCatclick(ev)} />
          <p>{this.state.currentSelectedCat.name}</p>
          <p>You clicked on my cat {this.state.currentSelectedCat.count} times!</p>
        </div>
      </div>
    );
  }
}
