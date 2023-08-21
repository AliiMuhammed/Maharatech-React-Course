import React, { Component } from "react";



class Product extends Component {
  state = {
    name:"Burger",
    count:3,
  };
  render() {
    return (
      <>
        <span>{this.state.name}</span>
        <span className="badge badge-success m-2">{this.state.count}</span>
      </>
    );
  }
}

export default Product;
