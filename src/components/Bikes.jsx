import { useState } from 'react';
import { bikes } from '../data';
import './Bikes.css';

const Bikes = () => {
  const [activeFilter, setActiveFilter] = useState('todas');
  const categories = ['todas', 'montana', 'ruta', 'urbana'];

  const filteredBikes = activeFilter === 'todas'
    ? bikes
    : bikes.filter(bike => bike.category === activeFilter);

  return (
    <section id="bikes" className="bikes">
      <div className="container">
        <div className="section-header">
          <h2>Nuestras Bicis</h2>
          <p>Calidad premium para cada estilo de riding</p>
        </div>

        <div className="bikes-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="bikes-grid">
          {filteredBikes.map(bike => (
            <div key={bike.id} className="bike-card">
              <div className="bike-image">
                <img src={bike.image} alt={bike.name} />
                <span className="bike-category">{bike.category}</span>
              </div>
              <div className="bike-info">
                <h3>{bike.name}</h3>
                <p className="bike-description">{bike.description}</p>
                <div className="bike-footer">
                  <span className="bike-price">${bike.price.toLocaleString()}</span>
                  <button className="btn btn-sm">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bikes;