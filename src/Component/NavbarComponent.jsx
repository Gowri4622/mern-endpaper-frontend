import React from 'react'
import './NavbarComponent.css'
import account from '../images/acc.png'
import cart from '../images/ca.png'
function NavbarComponent() {
  return (
    <div>
        <nav className="navbar">
  <i className="material-icons menu-icon">
    menu
  </i>
  <div className="logo">
    <img src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true" alt="logo"/>
    <div className="text">    
    GrabCheap
    </div>
  </div>
  <div className="item search right" tabindex="0">
    <div className="search-group">
      <select>
        <option value="all">All</option>
        <option value="all">Mens</option>
        <option value="all">Womens</option>
        <option value="all">Winter</option>
        <option value="all">Summer</option>
      </select>
    <input type="text"/>
    <i className="material-icons search-icon">
      search
    </i>
      </div>
  </div>
  
  
  <a className="  item">

    <div className="group">
    <img src={account} alt="logo"/>
      <div className="detail">
        Account
        <div className="sub">Sign In</div>
      </div>
    </div>
  </a>

  <a  className="item">
    <div className="group">
    <img src={cart} alt="logo"/>
      <div className="detail">
        Cart 
        <div className="sub">Rs 0.0</div>
      </div>
    </div>
  </a>
</nav>
    </div>
  )
}

export default NavbarComponent