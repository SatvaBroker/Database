import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductHighlight from './components/ProductHighlight';
import CertificationsSection from './components/CertificationsSection';
import ProcessWorkflow from './components/ProcessWorkflow';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductHighlight />
        <CertificationsSection />
        <ProcessWorkflow />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
