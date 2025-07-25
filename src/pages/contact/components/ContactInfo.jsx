import React from "react";
import Icon from "../../../components/AppIcon";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "Mail",
      title: "Email",
      value: "pratyushparamanik@gmail.com",
      link: "mailto:pratyushparamanik@gmail.com",
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+91-9853098100",
      link: "tel:+9853098100",
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Paradip, Odisha",
      link: null,
    },
    // {
    //   icon: "Clock",
    //   title: "Working Hours",
    //   value: "Mon - Fri, 9:00 AM - 6:00 PM",
    //   link: null,
    // },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
              <Icon name={item.icon} size={20} className="text-primary-500" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-base font-medium text-gray-900 hover:text-primary-500 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base font-medium text-gray-900">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-600">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;