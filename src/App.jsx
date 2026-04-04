import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/main-model.glb');

  // This forces ANY model to look like premium, highly-reflective dark metal
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: '#111111',      // Dark base color
          metalness: 0.9,        // Makes it highly metallic
          roughness: 0.1,        // Makes it glossy and reflective
          envMapIntensity: 2.0   // Makes it reflect the environment beautifully
        });
      }
    });
  }, [scene]);

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
        {/* dpr={[1, 1.5]} limits pixel density to instantly stop mobile lag */}
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          {/* Blue spotlight to reflect off the dark metal model */}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={5} color="#4facfe" />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#00f2fe" />
          
          <Environment preset="city" />
          
          <Suspense fallback={null}>
            <Model />
            {/* ContactShadows REMOVED for maximum mobile performance */}
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
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Omnix!" className="btn btn-primary" target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
          </motion.div>
        </section>
      </div>
    </>
  );
}
