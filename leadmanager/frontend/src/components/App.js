import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <div>React App</div>;
  }
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
