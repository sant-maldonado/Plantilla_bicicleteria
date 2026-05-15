import { Shield, Award, Tag, Truck } from 'lucide-react';
import { features } from '../data';
import './Features.css';

const iconMap = {
  Shield,
  Award,
  Tag,
  Truck
};

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>¿Por qué elegirnos?</h2>
          <p>Compromiso total con tu satisfacción</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = iconMap[Object.keys(iconMap)[index]] || Shield;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;