import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = ({
  variant = 'default',
  className = '',
  ...props
}) => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  
  const socialLinks = [
    { icon: 'Github', url: 'https://github.com/Pratyush-2204', label: 'GitHub' },
    { icon: 'Linkedin', url: 'https://www.linkedin.com/in/pratyush-paramanik', label: 'LinkedIn' },
    { icon: 'Mail', url: 'mailto:pratyushparamanik@gmail.com', label: 'Email' },
  ];

  const contactInfo = {
    name: "Pratyush Paramanik",
    role: "Frontend Developer | Data Analytics Enthusiast",
    email: "pratyushparamanik@gmail.com",
    phone: "+919853098100",
    location: "Paradip, Odisha"
  };
  
  if (variant === 'minimal') {
    return (
      <footer className={`bg-gray-900 py-6 ${className}`} {...props}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} {contactInfo.name}. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <footer className={`bg-gray-900 ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/homepage" className="text-xl font-bold text-white">{contactInfo.name}</Link>
            <p className="mt-2 text-gray-400 max-w-md">
              {contactInfo.role}
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <Icon name="Mail" className="text-gray-400 mr-2 flex-shrink-0" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex">
                <Icon name="Phone" className="text-gray-400 mr-2 flex-shrink-0" size={18} />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex">
                <Icon name="MapPin" className="text-gray-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {contactInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed & Built with <Icon name="Heart" size={14} className="inline text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;