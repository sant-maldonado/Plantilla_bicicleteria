import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Ahora disponible</span>
          <h1>Tu próxima aventura<br />comienza aquí</h1>
          <p className="hero-description">
            Descubrí nuestra colección de bicis de alta gama. 
            Desde montañas extremas hasta rutas urbanas, tenemos la bici perfecta para vos.
          </p>
          <div className="hero-buttons">
            <a href="#bikes" className="btn">
              Ver Catálogo
              <ChevronRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contactar Asesor
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Bicis Vendidas</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clientes Felices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;