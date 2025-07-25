import React from "react";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import Image from "../../components/AppImage";
import SkillBar from "./components/SkillBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const About = () => {
  const personalInfo = {
    name: "Pratyush Paramanik",
    title: "B.Tech CSE Student | Frontend Developer | Data Analytics Enthusiast",
    biography: `I'm a Graduate B.Tech Computer Science student fron IGIT Sarang with a strong academic record (8.44 GPA) and hands-on experience in frontend development and data analytics. My journey combines theoretical knowledge with practical application, having built multiple projects ranging from role-based management systems to machine learning models.

    I specialize in React.js, Python, and modern web technologies, with certifications in SAP ABAP Cloud, Data Analytics, and Full Stack Development. My projects demonstrate proficiency in both frontend development and data science, including a Spotify analytics project that achieved 88% prediction accuracy.
    
    When I'm not coding, you can find me exploring diverse musical styles, playing cricket with a focus on strategy and team collaboration, or organizing cultural events like the Horizon Cultural Fest at IGIT Sarang.`,
    profileImage: "assets/images/Photoroom-20240807_112131.png",
    resumeLink: "/assets/files/Pratyush_Paramanik _CV.pdf",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Pratyush-2204",
        icon: "Github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pratyush-paramanik",
        icon: "Linkedin"
      },
      {
        name: "Email",
        url: "mailto:pratyushparamanik@gmail.com",
        icon: "Mail"
      }
    ]
  };

  const skills = [
    { name: "React", proficiency: 65 },
    { name: "JavaScript", proficiency: 75 },
    { name: "Python", proficiency: 75 },
    { name: "Java", proficiency: 75 },
    { name: "HTML & CSS", proficiency: 90 },
    { name: "Tailwind CSS", proficiency: 70 },
    { name: "Pandas & NumPy", proficiency: 85 },
    { name: "Git & GitHub", proficiency: 80 },
    { name: "SQL", proficiency: 60 },
    { name: "Data Visualization", proficiency: 70 },
    { name: "SAP ABAP", proficiency: 50 },
    { name: "Jupyter Notebook", proficiency: 85 }
  ];

  const educationHistory = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indira Gandhi Institute of Technology, Sarang",
      location: "Sarang, Odisha",
      period: "Nov 2021 – May 2025",
      description: "I'm a Computer Science graduate from Indira Gandhi Institute of Technology, Sarang, Odisha, with a CGPA of 8.44/10. My academic journey has been enriched by comprehensive coursework in Object-Oriented Programming, Data Structures, DBMS, and Operating Systems. I'm passionate about data analytics and web development, with hands-on experience in building scalable applications and deriving meaningful insights from complex datasets. As an active participant in cultural events and technical projects, I bring both technical expertise and leadership skills to every endeavor. My goal is to leverage technology to solve real-world problems and create impactful digital solutions."
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Shakti Higher Secondary School",
      location: "Cuttack, Odisha",
      period: "2021",
      description: "Completed higher secondary education with 94.33% marks in Science stream, demonstrating strong foundation in mathematics and analytical thinking."
    }
  ];

  const experienceHistory = [
    {
      position: "Data Analyst",
      company: "Central Tool Room & Training Centre (MSME) Government of India",
      location: "Bhubaneswar, Odisha, India",
      period: "Jun 2024 - Jul 2024",
      description: "Completed an internship focused on data analysis, gaining hands-on experience in Machine Learning, Python, SQL, Advanced Excel, and Tableau. Applied analytical skills to real-world data problems and contributed to various data analysis projects within the organization."
    },
    {
      position: "Full Stack Developer",
      company: "EdiGlobe",
      location: "Remote",
      period: "Apr 2024 - Jun 2024",
      description: "Developed and deployed web applications, focusing on a College Management Information System. Key responsibilities included frontend development with JavaScript and React.js, backend development with Node.js, database management with MongoDB, and implementation of user authentication and responsive design. Utilized Vite for build optimization and worked effectively in a team environment."
    },
    {
      position: "Event Organizer",
      company: "Horizon Cultural Fest, IGIT Sarang",
      location: "Sarang, Odisha",
      period: "Mar 2024",
      description: "Organized cultural events, managing workshops and competitions. Demonstrated leadership skills in coordinating team activities and ensuring successful event execution. Enhanced communication and organizational abilities through hands-on event management experience."
    }
  ];

  const certifications = [
    {
      title: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
      issuer: "SAP",
      year: "2025",
      description: "Advanced certification in SAP ABAP Cloud development, demonstrating proficiency in enterprise-level backend development and cloud technologies."
    },
    {
      title: "Data Analytics Certification",
      issuer: "CTTC Bhubaneswar",
      year: "2024",
      description: "Comprehensive certification covering data analysis techniques, statistical methods, and data visualization tools essential for modern data science applications."
    },
    {
      title: "Full Stack Web Development Certification",
      issuer: "Ediglobe",
      year: "2024",
      description: "Complete full-stack development certification covering frontend and backend technologies, database management, and modern web development practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-full overflow-hidden border-4 border-white h-64 w-64 shadow-lg">
                  <Image 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
                <h2 className="text-xl md:text-2xl text-primary-100 mb-6">{personalInfo.title}</h2>
                <div className="flex gap-4 justify-center md:justify-start mb-6">
                  {personalInfo.socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-25 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label={link.name}
                    >
                      <Icon name={link.icon} size={24} className="text-white hover:text-primary-100" />
                    </a>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-primary-600 text-white border-none hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 px-8 py-3 rounded-full"
                  icon="FileDown"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = personalInfo.resumeLink;
                    link.download = 'Pratyush_Paramanik_CV.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {personalInfo.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="py-16 bg-gradient-to-t from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
                <div className="space-y-8">
                  {educationHistory.map((education, index) => (
                    <Education 
                      key={index}
                      degree={education.degree}
                      institution={education.institution}
                      location={education.location}
                      period={education.period}
                      description={education.description}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
                <div className="space-y-8">
                  {experienceHistory.map((experience, index) => (
                    <Experience 
                      key={index}
                      position={experience.position}
                      company={experience.company}
                      location={experience.location}
                      period={experience.period}
                      description={experience.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">{cert.title}</h3>
                    <div className="flex items-center text-primary-600">
                      <Icon name="Award" size={16} className="mr-2" />
                      <span className="text-sm font-medium">{cert.year}</span>
                    </div>
                  </div>
                  <p className="text-primary-700 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary-100 via-primary-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in working together?</h2>
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                icon="Send"
                iconPosition="right"
                className="bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon="Briefcase"
                iconPosition="right"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/portfolio'}
              >
                View My Work
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About; 