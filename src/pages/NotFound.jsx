import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/AppIcon";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/homepage"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
        >
          <Icon name="Home" className="mr-2" size={20} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;