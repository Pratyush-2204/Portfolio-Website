import React, { useState, useEffect } from 'react';
import Header from "../../components/ui/Header";
import { ProjectCard } from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import ProjectDetails from './components/ProjectDetails';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      subtitle: "(Orbit)",
      description: "A role-based employee management system with authentication and task management capabilities. Admins can assign and track tasks while employees can manage task statuses.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "localStorage"],
      category: "web",
      fullDescription: `The Employee Management System (Orbit) is a comprehensive role-based application designed to streamline task management and employee coordination within organizations.

Key features include:
- Role-based authentication system with separate admin and employee access
- Admin dashboard for task creation, assignment, and tracking
- Employee dashboard for task management and status updates
- Session persistence using localStorage for seamless user experience
- Real-time task summaries and progress tracking
- Comprehensive task lifecycle management (create, assign, accept, complete, mark as failed)
- Responsive UI design for optimal user experience across devices

The application is built with React and Vite for fast development and optimal performance, styled with Tailwind CSS for a modern interface, and uses localStorage for client-side data persistence.`,
      demoLink: "#",
      githubLink: "https://github.com/Pratyush-2204",
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio showcasing 3+ projects, technical skills, and contact details in a professional layout. Features smooth navigation and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "React Router"],
      category: "web",
      fullDescription: `This Personal Portfolio Website serves as a comprehensive showcase of my professional work, skills, and experience in web development.

Key features include:
- Responsive design that works seamlessly across all devices and screen sizes
- Smooth navigation with React Router for optimal user experience
- Interactive elements including skill badges, project previews, and social links
- Professional layout showcasing 3+ detailed projects with descriptions and technologies
- Contact section with multiple ways to get in touch
- Modern design principles with clean typography and intuitive user interface
- Optimized performance and fast loading times

Built with React for component-based architecture, Vite for fast development and building, Tailwind CSS for utility-first styling, and React Router for seamless single-page application navigation.`,
      demoLink: "#",
      githubLink: "https://github.com/Pratyush-2204",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      title: "Spotify User Insights & Trend Prediction",
      description: "A data analytics project involving preprocessing and analysis of 5,000+ rows of Spotify user review data with Linear Regression model achieving 88% prediction accuracy.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
      category: "analytics",
      fullDescription: `This comprehensive data analytics project focuses on understanding Spotify user behavior and predicting review scores through advanced data science techniques.

Key features include:
- Data preprocessing and cleaning of 5,000+ rows of Spotify user review data
- Exploratory data analysis to identify patterns and trends in user behavior
- Linear Regression model implementation with 80-20 train-test split methodology
- Achieved impressive R² score of 0.85 and 88% prediction accuracy for user review scores
- Collaborative dashboard visualization work using Tableau for data presentation
- Statistical analysis and insights generation for business decision-making
- Data visualization using Matplotlib and Seaborn for comprehensive reporting

The project demonstrates proficiency in Python data science stack including Pandas for data manipulation, NumPy for numerical computations, and advanced visualization techniques. Collaborative work included SQL database management handled by teammates and shared Tableau dashboard development.`,
      demoLink: "#",
      githubLink: "https://github.com/Pratyush-2204",
      images: [
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'analytics', label: 'Data Analytics' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main id="main-content" className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-primary-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
              <p className="text-xl text-primary-100 mb-8">
                Showcasing my projects and work samples. Each project represents my skills, 
                problem-solving approach, and passion for creating meaningful applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                  icon="Github"
                  onClick={() => window.open('https://github.com/Pratyush-2204', '_blank')}
                >
                  View GitHub
                </Button>
                <Button 
                  variant="primary" 
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  icon="Send"
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <FilterBar 
          categories={categories} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* Projects Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">Try changing your filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;