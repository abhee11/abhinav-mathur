import React from "react";

import { Link } from "react-router-dom";

import { Image } from "react-bootstrap";

export const Header = () => {
  return (
    <div id="awesome-navbar-div">
      <ul id="awesome-navbar">
        <li>
          <Link to="/" id="awesome-home-page"><Image src="https://toppng.com/uploads/preview/free-sweet-icons-easy-home-icon-blue-115629422668ad9pch50j.png" /></Link>
        </li>
        <li>
          <Link to="/who-is-this-guy">Who is this guy ?</Link>
        </li>
        <li>
          <Link to="/story-so-far">Story so far</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/cat-clicker">Cat clicker!</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
