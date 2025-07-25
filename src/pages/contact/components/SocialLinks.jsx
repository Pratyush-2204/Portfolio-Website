import React from "react";
import Icon from "../../../components/AppIcon";

const SocialLinks = () => {
  const socialProfiles = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/pratyush-paramanik-39732a1b4/",
      color: "bg-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: "Github",
      url: "github.com/Pratyush-2204",
      color: "bg-[#333333]",
    },
    {
      name: "X",
      icon: "Twitter",
      url: "https://x.com/Pratyush784",
      color: "bg-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://dribbble.com/",
      color: "bg-[#EA4C89]",
    },
    
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {socialProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className={`w-12 h-12 ${profile.color} rounded-full flex items-center justify-center mb-3 text-white`}>
              <Icon name={profile.icon} size={24} />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
              {profile.name}
            </span>
          </a>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Follow me on social media to stay updated with my latest projects and articles.
        </p>
      </div>
    </div>
  );
};

export default SocialLinks;