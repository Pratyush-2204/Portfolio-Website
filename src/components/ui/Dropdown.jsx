import React, { useState, useRef, useEffect } from 'react';
import Icon from '../AppIcon';

const Dropdown = ({
  trigger,
  items = [],
  align = 'left',
  width = 'auto',
  className = '',
  onSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelect = (item) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2'
  };
  
  const widthClasses = {
    auto: 'min-w-[12rem]',
    sm: 'w-48',
    md: 'w-56',
    lg: 'w-64',
    full: 'w-full'
  };
  
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef} {...props}>
      <div onClick={toggleDropdown}>
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={`absolute z-10 mt-2 ${alignmentClasses[align]} ${widthClasses[width]} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none animate-scale-in`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.divider ? (
                  <div className="h-px bg-gray-200 my-1" role="separator"></div>
                ) : (
                  <button
                    className={`${item.className || ''} ${
                      item.disabled 
                        ? 'text-gray-400 cursor-not-allowed' :'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    } group flex items-center w-full px-4 py-2 text-sm`}
                    role="menuitem"
                    onClick={() => !item.disabled && handleSelect(item)}
                    disabled={item.disabled}
                  >
                    {item.icon && (
                      <Icon 
                        name={item.icon} 
                        className={`mr-3 ${item.disabled ? 'text-gray-400' : 'text-gray-500 group-hover:text-gray-700'}`} 
                        size={16} 
                      />
                    )}
                    {item.label}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const NavigationDropdown = ({
  label,
  items = [],
  className = '',
  ...props
}) => {
  return (
    <Dropdown
      className={className}
      trigger={
        <button className="inline-flex items-center text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
          {label}
          <Icon name="ChevronDown" className="ml-1" size={16} />
        </button>
      }
      items={items}
      {...props}
    />
  );
};

export const FilterDropdown = ({
  label = 'Filter',
  items = [],
  selectedItem,
  className = '',
  ...props
}) => {
  const [selected, setSelected] = useState(selectedItem);
  
  const handleSelect = (item) => {
    setSelected(item);
    if (props.onSelect) props.onSelect(item);
  };
  
  return (
    <Dropdown
      className={className}
      trigger={
        <button className="inline-flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <span>{selected ? selected.label : label}</span>
          <Icon name="ChevronDown" className="ml-2" size={16} />
        </button>
      }
      items={items}
      onSelect={handleSelect}
      {...props}
    />
  );
};

export const SelectionDropdown = ({
  label,
  placeholder = 'Select an option',
  items = [],
  selectedItem,
  className = '',
  ...props
}) => {
  const [selected, setSelected] = useState(selectedItem);
  
  const handleSelect = (item) => {
    setSelected(item);
    if (props.onSelect) props.onSelect(item);
  };
  
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Dropdown
        trigger={
          <button className="inline-flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <span>{selected ? selected.label : placeholder}</span>
            <Icon name="ChevronDown" className="ml-2" size={16} />
          </button>
        }
        items={items}
        onSelect={handleSelect}
        width="full"
        {...props}
      />
    </div>
  );
};

export default Dropdown;