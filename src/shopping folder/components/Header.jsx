import React from 'react'

const Header = () => {
  return (
    <header>

      {/* Main Header */}
      <div className="main-header">

        <div className="search-box">
          <input
            type="text"
            placeholder="What can we help you find today?"
          />
          <button>🔍</button>
        </div>

        <div className="logo">
          REACT SHOPPING
        </div>

        <div className="header-icons">
          <span>👤</span>
          <span>♥</span>
          <span>🛒</span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#">New</a>
        <a href="#">Living Room</a>
        <a href="#">Bedroom</a>
        <a href="#">Mattresses</a>
        <a href="#">Dining</a>
        <a href="#">Home Office</a>
        <a href="#">Kids + Teens</a>
        <a href="#">Outdoor</a>
        <a href="#">Rugs</a>
        <a href="#">Decor</a>
        <a href="#">Bedding</a>
        <a href="#">Clearance</a>
        <a href="#">More +</a>
      </nav>

    </header>
  )
}

export default Header