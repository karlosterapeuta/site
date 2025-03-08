import React from 'react';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <FAQSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;