import React from "react";
import Icon from "../../../components/AppIcon";

const SkillBadges = ({ skills }) => {
  // Map skills to appropriate icons
  const getIconForSkill = (skill) => {
    const skillIcons = {
      "React.js": "Code",
      "JavaScript": "FileCode",
      "HTML/CSS": "FileType",
      "Tailwind CSS": "Palette",
      "Responsive Design": "Smartphone",
      "Python": "Code",
      // Add more mappings as needed
    };
    
    return skillIcons[skill] || "Code";
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
        >
          <Icon name={getIconForSkill(skill)} size={16} className="mr-2" />
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillBadges;