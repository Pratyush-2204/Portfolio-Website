import React from "react";
import Icon from "../../../components/AppIcon";

const Experience = ({ position, company, location, period, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="bg-primary-100 p-2 rounded-full">
            <Icon name="Briefcase" size={24} className="text-primary-600" />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900">{position}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1 mb-2">
            <div className="flex items-center">
              <Icon name="Building" size={16} className="mr-1" />
              <span>{company}</span>
            </div>
            <span className="hidden sm:inline mx-2">•</span>
            <div className="flex items-center mt-1 sm:mt-0">
              <Icon name="MapPin" size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Icon name="Calendar" size={16} className="mr-1" />
            <span>{period}</span>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;