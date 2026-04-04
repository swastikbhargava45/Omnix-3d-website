import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useGLTF, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model() {
  const { scene } = useGLTF('/main-model.glb');
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <primitive object={scene} scale={2} position={[2, 0, 0]} />
    </Float>
  );
}

export default function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#4facfe" />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Model />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="content-wrapper">
        <nav><div className="logo">omnix.growth</div></nav>

        <section id="home">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="hero-title">Dominate Your<br/>Digital Space.</h1>
            <p className="hero-subtitle">We design, build, and market digital experiences that turn visitors into paying customers.</p>
            <a href="#contact" className="btn btn-primary">Start Scaling Today</a>
          </motion.div>
        </section>

        <section id="services">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h2 className="section-title">Our Expertise</h2>
            <div className="services-grid">
              <div className="service-card"><h3>High-End Web Dev</h3><p>Lightning-fast platforms tailored for modern businesses.</p></div>
              <div className="service-card"><h3>SEO & Visibility</h3><p>Rank higher when local customers search for your services.</p></div>
              <div className="service-card"><h3>Digital Advertising</h3><p>Data-driven ad campaigns designed to drive foot traffic.</p></div>
            </div>
          </motion.div>
        </section>

        <section id="contact" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Ready to Grow?</h2>
            <p className="hero-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>Let's discuss how omnix.growth can transform your business.</p>
            {/* Replace the X's with your actual phone number */}
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Omnix!" className="btn btn-primary" target="_blank">Message Us on WhatsApp</a>
          </motion.div>
        </section>
      </div>
    </>
  );
}

