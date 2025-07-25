import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const SideBar = ({
  variant = 'sticky',
  items = [],
  title = 'Navigation',
  className = '',
  onItemClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile drawer when route changes
  useEffect(() => {
    if (variant === 'mobileDrawer' && isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname, variant, isOpen]);
  
  const handleItemClick = (item) => {
    if (onItemClick) onItemClick(item);
    if (variant === 'mobileDrawer' || variant === 'collapsible') {
      setIsOpen(false);
    }
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Default items if none provided
  const defaultItems = [
    { label: 'All Projects', path: '/portfolio', icon: 'Grid' },
    { label: 'Web Development', path: '/portfolio?category=web', icon: 'Globe' },
    { label: 'Mobile Apps', path: '/portfolio?category=mobile', icon: 'Smartphone' },
    { label: 'UI/UX Design', path: '/portfolio?category=design', icon: 'Palette' },
    { label: 'Branding', path: '/portfolio?category=branding', icon: 'Briefcase' },
  ];
  
  const navItems = items.length > 0 ? items : defaultItems;
  
  // Mobile Drawer Variant
  if (variant === 'mobileDrawer') {
    return (
      <>
        <button
          onClick={toggleSidebar}
          className={`md:hidden fixed bottom-4 right-4 z-40 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-colors duration-200 ${className}`}
          aria-expanded={isOpen}
          aria-controls="mobile-sidebar"
        >
          <Icon name={isOpen ? "X" : "Menu"} size={24} />
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
        
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden animate-fade-in"
            onClick={toggleSidebar}
            aria-hidden="true"
          ></div>
        )}
        
        <aside
          id="mobile-sidebar"
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden ${className}`}
          {...props}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600' :'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                    }`}
                    onClick={() => handleItemClick(item)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.icon && <Icon name={item.icon} className="mr-3" size={18} />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </>
    );
  }
  
  // Collapsible Variant
  if (variant === 'collapsible') {
    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`} {...props}>
        <button
          onClick={toggleSidebar}
          className="w-full p-4 flex items-center justify-between text-left text-gray-900 font-medium border-b border-gray-200 hover:bg-gray-50"
          aria-expanded={isOpen}
          aria-controls="collapsible-sidebar"
        >
          <span>{title}</span>
          <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={20} />
        </button>
        
        <div
          id="collapsible-sidebar"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600' :'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                    }`}
                    onClick={() => handleItemClick(item)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.icon && <Icon name={item.icon} className="mr-3" size={18} />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  
  // Sticky Variant (Default)
  return (
    <aside className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600' :'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`}
                onClick={() => handleItemClick(item)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.icon && <Icon name={item.icon} className="mr-3" size={18} />}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;