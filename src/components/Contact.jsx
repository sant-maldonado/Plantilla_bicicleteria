import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactanos</h2>
          <p>Estamos para ayudarte. Escribinos y te respondemos ASAP</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+54 11 1234-5678</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>hola@bikeprstore.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Dirección</h4>
                <p>Av. Principal 1234, Buenos Aires</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Tu email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Tu teléfono" />
            </div>
            <div className="form-group">
              <textarea placeholder="Tu mensaje" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;