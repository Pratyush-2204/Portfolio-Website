import React, { useState } from 'react';
import Icon from '../AppIcon';

const Input = ({
  type = 'text',
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  icon,
  iconPosition = 'left',
  error,
  success,
  disabled = false,
  required = false,
  className = '',
  helpText,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  const handleFocus = (e) => {
    setFocused(true);
    if (props.onFocus) props.onFocus(e);
  };
  
  const handleBlur = (e) => {
    setFocused(false);
    if (props.onBlur) props.onBlur(e);
  };
  
  const baseInputClasses = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed';
  const errorClasses = error ? 'border-error focus:border-error focus:ring-error' : '';
  const successClasses = success && !error ? 'border-success focus:border-success focus:ring-success' : '';
  const iconPaddingClasses = icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '';
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon 
              name={icon} 
              size={20} 
              className={`${error ? 'text-error' : focused ? 'text-primary-500' : 'text-gray-500'}`} 
            />
          </div>
        )}
        
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`${baseInputClasses} ${errorClasses} ${successClasses} ${iconPaddingClasses}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon 
              name={icon} 
              size={20} 
              className={`${error ? 'text-error' : focused ? 'text-primary-500' : 'text-gray-500'}`} 
            />
          </div>
        )}
        
        {error && !props.hideErrorIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon name="AlertCircle" size={20} className="text-error" />
          </div>
        )}
        
        {success && !error && !props.hideSuccessIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon name="CheckCircle" size={20} className="text-success" />
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
      
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

export const Textarea = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  success,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  helpText,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  const handleFocus = (e) => {
    setFocused(true);
    if (props.onFocus) props.onFocus(e);
  };
  
  const handleBlur = (e) => {
    setFocused(false);
    if (props.onBlur) props.onBlur(e);
  };
  
  const baseTextareaClasses = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed';
  const errorClasses = error ? 'border-error focus:border-error focus:ring-error' : '';
  const successClasses = success && !error ? 'border-success focus:border-success focus:ring-success' : '';
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={`${baseTextareaClasses} ${errorClasses} ${successClasses}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {error && !props.hideErrorIcon && (
          <div className="absolute top-2 right-2 flex items-center pointer-events-none">
            <Icon name="AlertCircle" size={20} className="text-error" />
          </div>
        )}
        
        {success && !error && !props.hideSuccessIcon && (
          <div className="absolute top-2 right-2 flex items-center pointer-events-none">
            <Icon name="CheckCircle" size={20} className="text-success" />
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
      
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

export default Input;