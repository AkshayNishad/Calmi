import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageSelector } from '../../components/ui/LanguageSelector';
import { TRANSLATIONS } from '../../utils/constants/app_constants';
import '../../styles/hero-override.css';
import '../../styles/App.css';

// Import assets
import illustration3 from '../../assets/Illustration_3.png';
import illustration4 from '../../assets/illustration_4.png';
import logo from '../../assets/Logo__3.png';

export const HomeScreen: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const t = TRANSLATIONS[currentLanguage as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home-screen">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* Hero Section */}
      <section className="hero hero-custom" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
        </div>
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '120px'
          }}
          viewBox="0 0 500 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,160 350,-20 500,60 L500,120 L0,120 Z"
            fill="#f9f8fc"
          />
        </svg>
      </section>

      {/* Prioritize Section */}
      <section className="prioritize" style={{ paddingTop: '0px' }}>
        <div className="content">
          <h2>{t.prioritizeTitle}</h2>
          <p>{t.prioritizeText}</p>
          <button>{t.prioritizeButton}</button>
        </div>
        <div className="image">
          <img src={illustration3} alt="Meditation Illustration" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>{t.servicesTitle}</h2>
        <div className="service-cards">
          <div className="card">
            <h3>{t.service1Title}</h3>
            <p>{t.service1Desc}</p>
            <button onClick={() => navigate('/blog')}>{t.service1Button}</button>
          </div>
          <div className="card">
            <h3>{t.service2Title}</h3>
            <p>{t.service2Desc}</p>
            <button>{t.service2Button}</button>
          </div>
          <div className="card">
            <h3>{t.service3Title}</h3>
            <p>{t.service3Desc}</p>
            <button>{t.service3Button}</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>{t.testimonialsTitle}</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>{t.testimonial1Text}</p>
            <h4>{t.testimonial1Author}</h4>
          </div>
          <div className="testimonial">
            <p>{t.testimonial2Text}</p>
            <h4>{t.testimonial2Author}</h4>
          </div>
          <div className="testimonial">
            <p>{t.testimonial3Text}</p>
            <h4>{t.testimonial3Author}</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>{t.faqTitle}</h2>
        <div className="faq-flex">
          <div className="faq-list">
            <div className="faq-item" onClick={() => toggleFaq(0)}>
              <h3>
                {t.faq1Question} 
                <span className="faq-toggle">
                  {openFaq === 0 ? '−' : '+'}
                </span>
              </h3>
              {openFaq === 0 && <p>{t.faq1Answer}</p>}
            </div>
            <div className="faq-item" onClick={() => toggleFaq(1)}>
              <h3>
                {t.faq2Question} 
                <span className="faq-toggle">
                  {openFaq === 1 ? '−' : '+'}
                </span>
              </h3>
              {openFaq === 1 && <p>{t.faq2Answer}</p>}
            </div>
            <div className="faq-item" onClick={() => toggleFaq(2)}>
              <h3>
                {t.faq3Question} 
                <span className="faq-toggle">
                  {openFaq === 2 ? '−' : '+'}
                </span>
              </h3>
              {openFaq === 2 && <p>{t.faq3Answer}</p>}
            </div>
          </div>
          <div className="faq-image">
            <img src={illustration4} alt="FAQ Illustration" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">.
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logo} alt="Calmi Logo" />
            <p>{t.footerBrandText}</p>
          </div>

          <div className="footer-contact">
            <h4>{t.footerContactTitle}</h4>
            <p>Email: support@calmi.com</p>
            <p>Phone: +91-771XXXXXXX</p>
            <p>Address: 123 Wellness Lane, New Delhi, India</p>
          </div>

          <div className="footer-social">
            <h4>{t.footerSocialTitle}</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/calmiapp/" target="_blank" rel="noopener">Instagram</a>
              <a href="#" target="_blank" rel="noopener">Facebook</a>
              <a href="#" target="_blank" rel="noopener">Twitter</a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Calmi. All rights reserved.</p>
      </footer>
    </div>
  );
};