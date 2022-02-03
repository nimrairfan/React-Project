import React from 'react'
import './footer.css'
import Story from './story'
import Flavor from './flavors'
import Product from './Product'
import Location from './location'

const footer = () =>{
    return (
      <div className='mainfooter-div'>
              <section className='footerdiv'>
        <Product />
        <Story />
        <Flavor />
        <Location />
       </section>
      </div>
   
        
      

    )
}
 export default footer