import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = ({
  variant = 'default',
  logo = 'Portfolio',
  className = '',
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const getHeaderClasses = () => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    
    if (variant === 'transparent') {
      return `${baseClasses} ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} ${className}`;
    }
    
    return `${baseClasses} bg-white shadow-sm ${className}`;
  };
  
  const getLinkClasses = (path) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
    
    if (isActive(path)) {
      return `${baseClasses} text-primary-600 font-semibold`;
    }
    
    if (variant === 'transparent' && !scrolled) {
      return `${baseClasses} text-white hover:text-white hover:bg-white/20`;
    }
    
    return `${baseClasses} text-gray-700 hover:text-primary-500 hover:bg-gray-50`;
  };
  
  const getLogoClasses = () => {
    if (variant === 'transparent' && !scrolled) {
      return 'text-white';
    }
    return 'text-gray-900';
  };
  
  return (
    <header className={getHeaderClasses()} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/homepage" className={`flex items-center font-bold text-xl ${getLogoClasses()}`}>
              {logo}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={getLinkClasses(item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              icon="Send"
              iconPosition="right"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                variant === 'transparent' && !scrolled ?'text-white hover:bg-white/20 hover:text-white' :'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600' :'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                variant="primary" 
                fullWidth
                icon="Send"
                iconPosition="right"
                onClick={() => window.location.href = '/contact'}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50 focus:text-primary-600"
      >
        Skip to content
      </a>
    </header>
  );
};

export default Header;