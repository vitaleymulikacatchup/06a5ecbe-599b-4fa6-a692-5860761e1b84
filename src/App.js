import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <CookieNotice />
    </div>
  );
}

export default App;