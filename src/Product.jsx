import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    count: 3,
    img: "logo192.png",
    names: ["Ahmed", "osama", "ali"],
  };

  getClasses() {
    return this.state.count === 0
      ? "badge badge-warning m2"
      : "badge badge-primary m2";
  }

  // rebind this
  clickedHandler = (num) => {
    this.setState({
      count: this.state.count + num,
    });
  };

  render() {
    // const styles = {
    //   color: "red",
    // };

    // let classes
    // if (this.state.count === 0) {
    //    classes = "badge badge-warning m2";
    // }
    // else{
    //    classes = "badge badge-primary m2";
    // }

    // const classes =
    //   this.state.count === 0
    //     ? "badge badge-warning m2"
    //     : "badge badge-primary m2";

    return (
      <>
        {/* <img src={this.state.img} alt="" /> */}
        {/* <span style={{ color: "red" }}>{this.state.name}</span> */}

        <span>{this.state.name}</span>
        <span className={this.getClasses()}>{this.state.count}</span>
        <button
          onClick={() => this.clickedHandler(2)}
          className="btn btn-primary btn-sm"
        >
          +
        </button>

        {/* <ul>
          {this.state.names.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul> */}
      </>
    );
  }
}

export default Product;
