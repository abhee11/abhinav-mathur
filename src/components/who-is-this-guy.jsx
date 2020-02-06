import React, { Component } from "react";
import $ from "jquery";

import { Button } from 'react-bootstrap';

require("webpack-jquery-ui");

export default class WhoIsthisGuy extends Component {
  constructor(props) {
    super(props);

    this.state = {
        editMode: true
    }
  }



  makeDraggable = (canDrag) => {
    var all = document.querySelectorAll("div#awesome-guy");
    for (var i = 0; i < all.length; i++) {
      $(all).draggable({
        disabled: canDrag
      }).resizable({
          disabled: canDrag
      })
    }
  };

  componentDidMount() {
    this.makeDraggable(true)
    $(document).on('keydown', (ev) => {
        // console.log('what is happening', ev.keyCode)
    })
  }

  editTemplate = () => {
      this.setState({ editMode: !this.state.editMode })
      if(this.state.editMode) {
          this.makeDraggable(false);
      }
      else {
        this.makeDraggable(true);
      }
  }

  duplicateItem = (ev) => {
    console.log('what is happening', ev.keyCode)
    $(ev.target).clone().appendTo('body')
  }

  render() {
    return (
      <div>
          <Button tabIndex="0" onClick={this.editTemplate}>{this.state.editMode ? `Edit` : `Freeze`}</Button>
        <div id="awesome-guy" onDoubleClick={(ev) => this.duplicateItem(ev)}>
        </div>
      </div>
    );
  }
}
