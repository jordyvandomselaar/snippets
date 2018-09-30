import state from "../state";
import React, { Component } from "react";
import Layout from "./Layout";
import Menu from "./Menu";

const Content = () => <p>Hi!</p>;

class App extends Component {
  state = state;

  render() {
    return (
      <Layout
        Left={<Menu snippets={this.state.snippets} />}
        Center={<Content />}
      />
    );
  }
}

export default App;
