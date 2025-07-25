import React from "react";

const MapLocation = () => {
  // Mock latitude and longitude for San Francisco
  const lat = 37.7749;
  const lng = -122.4194;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-64 w-full">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="San Francisco"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d676.9776839550167!2d86.58197795951175!3d20.318867394488247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1753452787035!5m2!1sen!2sin`}
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;