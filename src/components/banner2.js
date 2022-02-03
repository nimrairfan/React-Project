import React from 'react'
import Cup from '../images/cup.jpg'
import './banner.css'

const Cupban = () => {
    return (
        <section className='mainbandiv'>
            <div className='ban2div'>
                <div className='divtext'>
                    <h3 className='head1'> NEW PRODUCT</h3>
                    <h1 className='pinktext'>The Twist of Healthy Yogurt</h1>
                    <p>This website template has been designed by <br /> 
                        <a href="" className='color-link'>Free Website Templates </a> <br />
                        for you, for free. You can replace all this text with your own text.</p>
                </div>
                <div className='ban2img'>
                    <img src={Cup} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Cupban
