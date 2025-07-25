import React from 'react';
import Icon from '../AppIcon';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-500 bg-transparent hover:bg-primary-50 focus:ring-primary-500',
    link: 'p-0 text-primary-500 bg-transparent underline hover:text-primary-600 focus:ring-0 focus:ring-offset-0',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className={children ? 'mr-2' : ''} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className={children ? 'ml-2' : ''} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      )}
    </button>
  );
};

export const IconButton = ({
  icon,
  size = 'md',
  variant = 'primary',
  ariaLabel,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'p-1.5 rounded',
    md: 'p-2 rounded-md',
    lg: 'p-3 rounded-lg',
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };
  
  return (
    <Button
      variant={variant}
      className={`${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel || `${icon} button`}
      icon={icon}
      {...props}
    />
  );
};

export default Button;