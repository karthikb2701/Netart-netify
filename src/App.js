import React, { Component } from 'react';
 


import Header from "./components/Header";
import Content from "./components/Content";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Content />
      
      

      </div>
    );
  }
}



export default App;
