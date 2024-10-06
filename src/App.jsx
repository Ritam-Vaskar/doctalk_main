import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookAppointmentCarousel from './components/BookAppoinment';
import UniqueFeatures from './components/UniqueFeatures';
import VillageCare from './components/VillageCare';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <VillageCare />
      <HowItWorks />
      <BookAppointmentCarousel />
      <UniqueFeatures />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
