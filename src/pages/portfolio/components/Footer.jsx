import React from 'react';
import { Link } from 'react-router-dom';
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/username', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/username', icon: 'Twitter' },
    { name: 'Instagram', url: 'https://instagram.com/username', icon: 'Instagram' }
  ];
  
  const navLinks = [
    { name: 'Home', path: '/homepage' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/homepage" className="text-2xl font-bold">Portfolio</Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              A showcase of my projects and professional journey as a developer. Building innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4 mt-6">
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
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Mail" className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">contact@example.com</span>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;