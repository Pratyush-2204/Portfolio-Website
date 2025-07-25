import React from "react";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Pratyush-2204", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pratyush-paramanik-39732a1b4/", icon: "Linkedin" },
    { name: "Twitter", url: "https://x.com/Pratyush784", icon: "Twitter" },
    { name: "Instagram", url: "https://www.instagram.com/a.k.a.pratyush/", icon: "Instagram" }
  ];

  const navLinks = [
    { name: "Home", path: "/homepage" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pratyush Paramanik</h3>
            <p className="text-gray-400 mb-4">
              Frontend developer specializing in creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <a href="mailto:pratyushparamanik@gmail.com" className="hover:text-white transition-colors duration-200">
                  pratyushparamanik@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <a href="tel:+919853098100" className="hover:text-white transition-colors duration-200">
                  +91 9853098100
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>Paradip, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Pratyush Paramanik. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;