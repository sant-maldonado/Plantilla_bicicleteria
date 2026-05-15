import { Globe, Link } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">🚴</span>
              <span className="logo-text">BikePro</span>
            </a>
            <p>Tu destino definitivo para bicis de alta calidad y servicios especializados. 
              Comprometidos con tu experiencia de riding.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Globe size={20} /></a>
              <a href="#" aria-label="Twitter"><Link size={20} /></a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#bikes">Bicis</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Venta de Bicis</a></li>
              <li><a href="#">Reparaciones</a></li>
              <li><a href="#">Tuning</a></li>
              <li><a href="#">Asesoría</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Horario</h4>
            <p>Lun - Vie: 9:00 - 19:00</p>
            <p>Sáb: 9:00 - 14:00</p>
            <p>Dom: Cerrado</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 BikePro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;