import React from 'react';
import Image from '../AppImage';
import Icon from '../AppIcon';

const Card = ({
  children,
  className = '',
  hover = false,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-md hover:scale-[1.02] transition-all duration-200' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  link,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    else if (link) window.open(link, '_blank', 'noopener noreferrer');
  };
  
  return (
    <Card 
      className={`cursor-pointer ${className}`} 
      hover={true}
      onClick={handleClick}
      {...props}
    >
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-end">
          <button className="text-primary-500 hover:text-primary-700 inline-flex items-center">
            View Project
            <Icon name="ArrowRight" className="ml-1" size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export const SkillCard = ({
  title,
  icon,
  description,
  level,
  className = '',
  ...props
}) => {
  return (
    <Card className={`p-5 ${className}`} hover={true} {...props}>
      <div className="flex items-start">
        {icon && (
          <div className="mr-4 p-2 bg-primary-100 rounded-md text-primary-600">
            <Icon name={icon} size={24} />
          </div>
        )}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
          {description && <p className="text-gray-500 text-sm mb-3">{description}</p>}
          
          {level && (
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full" 
                style={{ width: `${level}%` }}
                aria-valuenow={level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  className = '',
  ...props
}) => {
  return (
    <Card className={`p-6 ${className}`} {...props}>
      <div className="flex items-start mb-4">
        <Icon name="Quote" size={24} className="text-primary-300 mr-2 flex-shrink-0" />
      </div>
      
      <blockquote className="text-gray-700 mb-4">{quote}</blockquote>
      
      <div className="flex items-center">
        {avatar && (
          <div className="mr-3">
            <Image 
              src={avatar} 
              alt={author} 
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium text-gray-900">{author}</div>
          <div className="text-sm text-gray-500">
            {role}{company && `, ${company}`}
          </div>
        </div>
      </div>
    </Card>
  );
};

export const ContactCard = ({
  title,
  icon,
  content,
  action,
  actionText,
  actionIcon,
  className = '',
  ...props
}) => {
  return (
    <Card className={`p-5 ${className}`} hover={true} {...props}>
      <div className="flex items-center mb-3">
        {icon && (
          <div className="mr-3 p-2 bg-primary-100 rounded-full text-primary-600">
            <Icon name={icon} size={20} />
          </div>
        )}
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="text-gray-700 mb-4">{content}</div>
      
      {action && (
        <button 
          onClick={action}
          className="inline-flex items-center text-primary-500 hover:text-primary-700"
        >
          {actionText}
          {actionIcon && <Icon name={actionIcon} size={16} className="ml-1" />}
        </button>
      )}
    </Card>
  );
};

export default Card;