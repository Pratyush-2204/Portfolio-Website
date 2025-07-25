import React from "react";

const SkillBar = ({ name, proficiency }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-base font-medium text-gray-800">{name}</h3>
        <span className="text-sm font-medium text-gray-600">{proficiency}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
          role="progressbar"
          aria-valuenow={proficiency}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;