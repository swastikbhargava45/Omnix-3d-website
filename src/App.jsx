import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <>
      <div className="bg-image-container"></div>
      <div className="bg-overlay"></div>

      <div className="content-wrapper">
        <nav>
          <div className="logo">Omnix.growth</div>
        </nav>

        {/* HERO SECTION */}
        <section id="home">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="hero-title">Stop Chasing Followers.<br/>Start Getting Customers.</h1>
            <p className="hero-subtitle">
              We transform local businesses into booking machines using AI-driven ads, smart automation, and modern websites. 
            </p>
            <a href="#contact" className="btn btn-primary">Get More Customers</a>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">We Don't Just Market. We Scale.</h2>
            <p className="section-subtitle">What is Omnix?</p>
            <p className="hero-subtitle" style={{ maxWidth: "800px" }}>
              Omnix is a next-generation growth agency built for modern businesses. We don't care about vanity metrics. We care about foot traffic, booked appointments, and revenue. Powered by AI and designed for speed, we automate your lead generation so you can focus on running your business.
            </p>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <h2 className="section-title">Growth Systems</h2>
            <p className="section-subtitle">Our Expertise</p>
            
            <div className="grid-container">
              <div className="card">
                <h3>Instagram Growth</h3>
                <p>We create reels and content strategies that actually drive local foot traffic, not just empty views.</p>
                <div className="highlight">Result: Attention turns into real sales.</div>
              </div>
              <div className="card">
                <h3>AI & Paid Ads</h3>
                <p>Hyper-targeted Facebook and Instagram ads powered by AI to outsmart your local competition.</p>
                <div className="highlight">Result: Lower ad costs, higher ROI.</div>
              </div>
              <div className="card">
                <h3>WhatsApp Automation</h3>
                <p>Instant auto-replies, smart follow-ups, and seamless booking flows sent straight to their DMs.</p>
                <div className="highlight">Result: 24/7 conversion on autopilot.</div>
              </div>
              <div className="card">
                <h3>Website Development</h3>
                <p>Fast, premium, modern websites tailored for cafes, gyms, and local brands.</p>
                <div className="highlight">Result: A digital storefront that builds trust instantly.</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">The Omnix Advantage</h2>
            <p className="section-subtitle">Why Choose Us</p>
            <div className="grid-container">
              <div className="card">
                <h3>✓ AI-Powered Precision</h3>
                <p>We use next-level AI to find your ideal customers faster and cheaper than traditional agencies.</p>
              </div>
              <div className="card">
                <h3>✓ Local Business Experts</h3>
                <p>We understand the unique challenges of gyms, cafes, and local stores. We know what gets people in the door.</p>
              </div>
              <div className="card">
                <h3>✓ Done-For-You Automation</h3>
                <p>You run the business. We run the systems that bring the customers to you.</p>
              </div>
              <div className="card">
                <h3>✓ Results, Not Vanity</h3>
                <p>Likes don't pay the bills. We strictly focus on strategies that generate direct revenue.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Our 4-Step Formula</p>
            <div className="grid-container">
              <div className="card">
                <div className="step-number">01</div>
                <h3>Audit & Discover</h3>
                <p>We analyze your current presence and find exactly where you are losing potential customers.</p>
              </div>
              <div className="card">
                <div className="step-number">02</div>
                <h3>AI Strategy</h3>
                <p>We build a custom roadmap using modern ad structures and content systems.</p>
              </div>
              <div className="card">
                <div className="step-number">03</div>
                <h3>Execution</h3>
                <p>We launch the ads, build the site, and turn on the WhatsApp automation.</p>
              </div>
              <div className="card">
                <div className="step-number">04</div>
                <h3>Scale & Profit</h3>
                <p>We monitor the data, optimize the AI, and scale your daily revenue.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* RESULTS / PROOF SECTION */}
        <section id="results">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title">Proven Impact</h2>
            <p className="section-subtitle">Real Results</p>
            <div className="grid-container">
              <div className="card" style={{ borderColor: '#4facfe', background: 'rgba(79, 172, 254, 0.05)' }}>
                <h3>"Doubled foot traffic for a local cafe in just 30 days."</h3>
              </div>
              <div className="card" style={{ borderColor: '#4facfe', background: 'rgba(79, 172, 254, 0.05)' }}>
                <h3>"Generated 50+ qualified gym memberships in week one."</h3>
              </div>
              <div className="card" style={{ borderColor: '#4facfe', background: 'rgba(79, 172, 254, 0.05)' }}>
                <h3>"Automated 90% of customer replies for a busy local salon."</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" style={{ textAlign: 'center', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="section-title" style={{ fontSize: '4rem' }}>Ready to Dominate?</h2>
            <p className="hero-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
              Your competition is already adapting to AI. Don't get left behind. Secure your local market and scale your business today.
            </p>
            {/* Replace the X's with your WhatsApp Number */}
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Omnix,%20I%20am%20ready%20to%20scale%20my%20business!" 
               className="btn btn-primary" target="_blank" rel="noreferrer">
              Message Us on WhatsApp
            </a>
          </motion.div>
        </section>

      </div>
    </>
  );
}
