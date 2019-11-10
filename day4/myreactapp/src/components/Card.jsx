import React, { Component } from 'react'
import ProdImg from '../img/iphone.png'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={ProdImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">{this.props.product.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.product.price}  
                        <button className="btn btn-success">
                          {this.props.product.available > 0 ? this.props.product.available : "Sold Out"}  
                        </button></small>
                </div>
            </div>
        )
    }
}
