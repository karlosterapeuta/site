import React from 'react';
import { Header } from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import BlogSection from './components/blog/BlogSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import Pricing from './components/Pricing';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <BlogSection />
        <TestimonialsSection />
        <Pricing />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;