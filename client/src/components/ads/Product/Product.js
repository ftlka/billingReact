import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <img className="Product-Img"
          src={require(`../../../static/${this.props.img}`)} alt="product" />
        <div className="Product-Name Product-Text-Info">{this.props.name}</div>
        <div className="Product-Price Product-Text-Info">{this.props.price}</div>
      </div>
    );
  }
}

export default Product;
