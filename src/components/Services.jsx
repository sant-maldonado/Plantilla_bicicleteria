import { Wrench, Settings, MessageCircle, Truck } from 'lucide-react';
import { services } from '../data';
import './Services.css';

const iconMap = {
  Wrench,
  Settings,
  MessageCircle,
  Truck
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Servicios</h2>
          <p>Todo lo que necesitás para tu bici</p>
        </div>

        <div className="services-grid">
          {services.map(service => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <Icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;