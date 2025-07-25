import React, { useState, useEffect } from 'react';
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const ProjectDetails = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle keyboard events
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && project.images.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      } else if (e.key === 'ArrowLeft' && project.images.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project.images.length]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Image gallery */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gray-100">
          <Image
            src={project.images[activeImageIndex]}
            alt={`${project.title} screenshot ${activeImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Image navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all duration-200"
                aria-label="Previous image"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev + 1) % project.images.length);
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all duration-200"
                aria-label="Next image"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      activeImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                    aria-current={activeImageIndex === index ? 'true' : 'false'}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <div className="prose prose-sm sm:prose max-w-none text-gray-700 mb-6">
            <p className="whitespace-pre-line">{project.fullDescription}</p>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.demoLink && (
              <Button 
                variant="primary" 
                icon="ExternalLink"
                onClick={() => window.open(project.demoLink, '_blank', 'noopener noreferrer')}
              >
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button 
                variant="outline" 
                icon="Github"
                onClick={() => window.open(project.githubLink, '_blank', 'noopener noreferrer')}
              >
                View Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;