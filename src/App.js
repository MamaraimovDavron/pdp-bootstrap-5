import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default App;
