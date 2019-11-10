import React, { Component } from 'react'
import {products} from '../data/products'
import Card from './Card'

export default class Cards extends Component {
    render() {
        return (
            <div className="container">
              <div className="card-deck mt-5">
                {
                  products.map((product) => (
                    <Card product={product}/>
                  ))
                }
              </div>
            </div>
        )
    }
}
