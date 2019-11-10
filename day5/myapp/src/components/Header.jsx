import React, { Component } from 'react'
import TopNav from './TopNav'
import NavBar from './Navbar'
import HeroArea from './HeroArea'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <TopNav />
                    <NavBar />
                    <HeroArea />
                </header> 
            </div>
        )
    }
}
