import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll and close menu
  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* Background Image & Overlay */}
      <div className="bg-image-container"></div>
      <div className="bg-overlay"></div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20want%20a%20free%20audit" 
        className="floating-wa" 
        target="_blank" 
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* TOP NAVIGATION */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/omnix-logo.jpg" alt="Omnix Logo" className="nav-logo" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}/>
          <span className="logo-text" style={{display: 'none'}}>Omnix.</span>
        </div>
        
        {/* Hamburger Icon */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>✕</button>
            <ul className="menu-links">
              <li onClick={() => handleNavClick('home')}>Home</li>
              <li onClick={() => handleNavClick('services')}>Services</li>
              <li onClick={() => handleNavClick('about')}>About</li>
              <li onClick={() => handleNavClick('why-us')}>Why Us</li>
              <li className="menu-highlight" onClick={() => handleNavClick('home')}>Get Audit</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="content-wrapper">
        
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="hero-title">Get More Customers,<br/>Not Just Views.</h1>
            <p className="hero-subtitle">
              We help businesses grow using Instagram, Ads & WhatsApp Automation.
            </p>
            <div className="button-group">
              <a href="#audit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.open('https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20want%20a%20free%20audit', '_blank'); }}>Get Free Audit</a>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-secondary" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <h2 className="section-title">What We Do</h2>
            
            <div className="services-grid">
              <div className="service-item">
                <h3>Instagram Growth</h3>
                <p>More reach, more customers.</p>
              </div>
              <div className="service-item">
                <h3>Paid Ads</h3>
                <p>Turn budget into real leads.</p>
              </div>
              <div className="service-item">
                <h3>WhatsApp Automation</h3>
                <p>Convert leads automatically.</p>
              </div>
              <div className="service-item">
                <h3>Website Development</h3>
                <p>Fast, modern websites that sell.</p>
              </div>
              <div className="service-item">
                <h3>AI Marketing</h3>
                <p>Smarter campaigns and better results.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">About Omnix</h2>
            <div className="about-box">
              <p>
                We are a modern agency focused on helping local businesses grow. We don't believe in complex jargon or vanity metrics. We use smart systems, clean websites, and AI tools to build processes that actually bring customers through your door.
              </p>
            </div>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">Why Choose Us</h2>
            <div className="why-grid">
              <div className="why-item">
                <span className="check">✓</span>
                <p>Focus on results, not vanity metrics</p>
              </div>
              <div className="why-item">
                <span className="check">✓</span>
                <p>Simple and clear strategies</p>
              </div>
              <div className="why-item">
                <span className="check">✓</span>
                <p>Fast execution</p>
              </div>
              <div className="why-item">
                <span className="check">✓</span>
                <p>Modern tools & automation</p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
}
