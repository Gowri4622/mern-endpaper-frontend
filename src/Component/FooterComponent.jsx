import React from 'react'
import './FooterComponent.css'



function FooterComponent() {
  return (
         
          <footer className='footer'>
            <div className='men'>
              <h1>MEN</h1>
              <ul>
                <li className='list'>All men</li>
                <li className='list'>Shorts</li>
                <li className='list'>Shirts</li>
                <li className='list'>Boardshirts</li>
                <li className='list'>Jackets</li>
              </ul>
            </div>
            <div className='woman'>
              <h1>WOMAN</h1>
              <ul>
                <li className='list'>Skirts</li>
                <li className='list'>Dupatta</li>
                <li className='list'>Shawl</li>
                <li className='list'>Nighty</li>
                <li className='list'>Innerwear</li>
              </ul>
            </div>
            <div className='about'>
              <h1>ABOUT</h1>
              <ul>
                <li className='list'>All men</li>
                <li className='list'>Shorts</li>
                <li className='list'>Shirts</li>
                <li className='list'>Boardshirts</li>
                <li className='list'>Jackets</li>
              </ul>
            </div>
            <div className='subscribe'>
              <h1>SUBSCRIBE</h1>
              <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</p>
              <input type='text' placeholder='Enter your email...'/><br/>
              <button>Click here</button>
            </div>
          </footer>
        

  )
}

export default FooterComponent