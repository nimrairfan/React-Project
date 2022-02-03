import React from "react";
import logo from '../images/logo.png'
import './header.css'

const Header = () =>{
    return (
    <section className="headdiv">
        <div className="mainHeader">
        <div className="headlogo">
            <img src={logo} width="150%" alt=""/>
        </div>
        <div className="navlink">
            <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About</a></li>
               <li><a href="">Blog</a></li>
               <li><a href="">Contact</a></li>
            </ul>
        </div>
        </div>
    </section>
    )
}

export default Header