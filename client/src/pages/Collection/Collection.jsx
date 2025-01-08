// src/pages/Collection/Collection.jsx
import React from 'react';
import './Collection.css';
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import BottomNav from '../../components/BottomNav/BottomNav';

const mockShoes = {
  tempo: {
    brand: 'Nike',
    model: 'ZoomX Vaporfly Next%',
    currentMiles: 150,
    recommendedMiles: 300,
    image: '/logos/Nike.png'
  },
  easy: {
    brand: 'Asics',
    model: 'Gel-Nimbus 23',
    currentMiles: 200,
    recommendedMiles: 400,
    image: '/logos/Asics.png'
  },
  daily: {
    brand: 'Adidas',
    model: 'Ultraboost 21',
    currentMiles: 100,
    recommendedMiles: 500,
    image: '/logos/Adidas.png'
  }
};

const wishlist = [
  {
    brand: 'Nike',
    model: 'Air Zoom Pegasus 38',
    image: '/logos/Nike.png'
  },
  {
    brand: 'Asics',
    model: 'Gel-Kayano 27',
    image: '/logos/Asics.png'
  }
];

function Collection() {
  return (
    <div className="collection-container">
      <h2 className="collection-title">Shoe Collection</h2>
      
      <div className="shoe-category">
        <h3 className="category-title">Tempo</h3>
        <ShoeCard {...mockShoes.tempo} />
      </div>

      <div className="shoe-category">
        <h3 className="category-title">Easy/Recovery</h3>
        <ShoeCard {...mockShoes.easy} />
      </div>

      <div className="shoe-category">
        <h3 className="category-title">Daily</h3>
        <ShoeCard {...mockShoes.daily} />
      </div>

      <div className="wishlist-container">
        <h3 className="wishlist-title">Wishlist</h3>
        <div className="wishlist-list">
          {wishlist.map((shoe, index) => (
            <div key={index} className="wishlist-item">
              <img src={shoe.image} alt={`${shoe.brand} ${shoe.model}`} className="wishlist-image" />
              <p className="wishlist-brand">{shoe.brand}</p>
              <p className="wishlist-model">{shoe.model}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Collection;