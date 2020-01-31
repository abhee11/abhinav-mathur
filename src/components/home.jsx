import React from "react";
import { Header } from "./header";

import { Image } from "react-bootstrap";
import designCover from "../resources/images/design-cover.jpeg";

export const Home = () => {
  return (
    <div className="App">
      {/* <div id="awesome-content">
        <p>In the middle of difficulty lies opportunity.</p>
      </div> */}
      <div>
        <header className="App-header">
          <div id="awesome-header"></div>
          <div id="awesome-image">
            {/* <Image src={designCover} fluid /> */}
          </div>
        </header>
      </div>
    </div>
  );
};
