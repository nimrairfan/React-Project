import React from "react";
import Banner from '../images/banner.png' 
import './header.css'

const Banimage =() =>{
    return (
        <section className="banner">
            <div>
                <img src={Banner} alt="" width="100%" height="700px" />
            </div>
        </section>
    )
}
export default Banimage
