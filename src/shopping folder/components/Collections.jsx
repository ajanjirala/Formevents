import React from 'react'

const Collections = () => {
  return (
    <section className="collections-section">

      <h2 className="collections-title">
        Shop Our Collections
      </h2>

      <div className="collections-container">

        <div className="collection-card">
          <h3>Living Room</h3>
          <p>Comfortable furniture for your everyday space.</p>
          <button>Shop Now</button>
        </div>

        <div className="collection-card">
          <h3>Bedroom</h3>
          <p>Create a relaxing and stylish bedroom.</p>
          <button>Shop Now</button>
        </div>

        <div className="collection-card">
          <h3>Dining Room</h3>
          <p>Modern dining furniture for every gathering.</p>
          <button>Shop Now</button>
        </div>

      </div>

    </section>
  )
}

export default Collections