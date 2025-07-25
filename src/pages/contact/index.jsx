import React, { useState } from "react";
import Header from "../../components/ui/Header";

import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import ContactInfo from "./components/ContactInfo";
import MapLocation from "./components/MapLocation";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Header variant="default" />
      <main id="main-content" className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-500 mb-6">
                    <Icon name="CheckCircle" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <ContactForm setFormSubmitted={setFormSubmitted} />
              )}
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-col gap-8">
              <ContactInfo />
              <MapLocation />
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="/homepage" className="text-gray-600 hover:text-primary-500 transition-colors">
                Home
              </a>
              <a href="/portfolio" className="text-gray-600 hover:text-primary-500 transition-colors">
                Portfolio
              </a>
              <a href="/about" className="text-gray-600 hover:text-primary-500 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;