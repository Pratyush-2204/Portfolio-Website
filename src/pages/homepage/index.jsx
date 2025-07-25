import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import Image from "../../components/AppImage";
import SocialLinks from "./components/SocialLinks";
import SkillBadges from "./components/SkillBadges";

const Homepage = () => {
  const personalInfo = {
    name: "Pratyush Paramanik",
    title: "B.Tech CSE Student | Frontend Developer | Data Analytics Enthusiast",
    tagline: "Building beautiful digital experiences with modern web technologies and data-driven insights",
    description: `B.Tech Computer Science student at IGIT Sarang with 8.44 GPA, passionate about frontend development and data analytics. Experienced in React, Python, and machine learning with hands-on projects achieving 88% prediction accuracy. Certified in SAP ABAP Cloud, Data Analytics, and Full Stack Development.`,
    profileImage: "/assets/images/Photoroom-20240807_112131.png",
    skills: [
      "React",
      "JavaScript", 
      "Python",
      "Java",
      "HTML/CSS",
      "Tailwind CSS",
      "Pandas",
      "NumPy",
      "Git",
      "SQL"
    ],
    socialLinks: [
      {
        name: "Github",
        icon: "Github",
        url: "https://github.com/Pratyush-2204",
      },
      {
        name: "LinkedIn", 
        icon: "Linkedin",
        url: "https://www.linkedin.com/in/pratyush-paramanik",
      },
      {
        name: "Email",
        icon: "Mail",
        url: "mailto:pratyushparamanik@gmail.com",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="transparent" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div
          id="main-content"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{" "}
                <span className="text-primary-600">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {personalInfo.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/portfolio">
                  <Button
                    variant="primary"
                    size="lg"
                    icon="Briefcase"
                    iconPosition="right"
                  >
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    icon="Send"
                    iconPosition="right"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <SocialLinks links={personalInfo.socialLinks} />
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div
            className="bg-white rounded-xl shadow-lg p-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              My Skills
            </h3>
            <SkillBadges skills={personalInfo.skills} />

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">{personalInfo.description}</p>
              <Link to="/about">
                <Button variant="ghost" icon="ArrowRight" iconPosition="right">
                  Learn more about me
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <Icon name="ChevronDown" size={24} />
          </button>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Employee Management System",
                subtitle: "(Orbit)",
                description: "A role-based employee management system with authentication and task management capabilities. Features admin and employee dashboards with real-time task tracking.",
                technologies: ["React", "Vite", "Tailwind CSS", "localStorage"],
                image: "https://picsum.photos/seed/employee/600/400"
              },
              {
                id: 2,
                title: "Personal Portfolio Website",
                description: "A responsive personal portfolio showcasing projects, technical skills, and contact details with smooth navigation and interactive elements.",
                technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
                image: "https://picsum.photos/seed/portfolio/600/400"
              },
              {
                id: 3,
                title: "Spotify User Insights & Trend Prediction",
                description: "Data analytics project with Linear Regression model achieving 88% prediction accuracy on 5,000+ Spotify user reviews with collaborative dashboard visualization.",
                technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Tableau"],
                image: "https://picsum.photos/seed/spotify/600/400"
              }
            ].map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 card-hover"
              >
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title} {project.subtitle && <span className="text-primary-600">{project.subtitle}</span>}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link to="/portfolio">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon="ExternalLink"
                      iconPosition="right"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="secondary" icon="Grid" iconPosition="left">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Pratyush Paramanik</h2>
              <p className="text-gray-400 mt-2">Frontend Developer</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <SocialLinks links={personalInfo.socialLinks} variant="footer" />
              <p className="text-gray-400 mt-4 text-sm">
                © {new Date().getFullYear()} Pratyush Paramanik. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
