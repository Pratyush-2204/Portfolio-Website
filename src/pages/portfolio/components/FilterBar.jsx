import React from 'react';
import Button from "../../../components/ui/Button";

const FilterBar = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "primary" : "ghost"}
                size="sm"
                className={activeFilter === category.id ? "" : "text-gray-700"}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div className="hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;