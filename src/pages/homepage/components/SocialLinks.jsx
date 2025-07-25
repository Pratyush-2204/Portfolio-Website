import React from "react";
import Icon from "../../../components/AppIcon";

const SocialLinks = ({ links, variant = "default" }) => {
  const getContainerClasses = () => {
    return variant === "footer" ?"flex space-x-4" :"flex justify-center lg:justify-start space-x-4";
  };
  
  const getLinkClasses = () => {
    const baseClasses = "flex items-center justify-center transition-colors duration-200";
    
    if (variant === "footer") {
      return `${baseClasses} text-gray-400 hover:text-white`;
    }
    
    return `${baseClasses} w-10 h-10 rounded-full bg-white shadow-sm text-gray-600 hover:text-primary-500 hover:shadow-md`;
  };
  
  return (
    <div className={getContainerClasses()}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={getLinkClasses()}
          aria-label={link.name}
        >
          <Icon name={link.icon} size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;