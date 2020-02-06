import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Gallery } from "./components/gallery";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Contact } from "./components/contact";

import "./css/base.scss";
import "./css/header.scss";
import "./css/cat-clicker.scss";
import "./css/story-so-far.scss";
import "./css/gallery.scss";
import "./css/who-is-this-guy.scss";

import { StorySoFar } from "./components/story-so-far";
import CatClicker from "./components/cat-clicker";
import WhoIsthisGuy from "./components/who-is-this-guy";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/who-is-this-guy">
            <WhoIsthisGuy />
          </Route>

          <Route path="/story-so-far">
            <StorySoFar />
          </Route>
          <Route path="/cat-clicker">
            <CatClicker />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
