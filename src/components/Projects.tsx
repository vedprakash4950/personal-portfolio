import React from 'react';
import { ExternalLink, Github, Code, Database, Users, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PAKKET 2GO",
      description: "Developed and launched Pakket2Go, a business logistics platform that streamlines first-mile collections by enabling companies to schedule flexible pick-ups for parcels, pallets, and documents at customer locations. Integrated advanced tracking software with real-time notifications, customizable branding, and AI-powered logistics optimization to improve delivery efficiency and provide a seamless, eco-conscious courier service for retailers, fulfillment centers, and manufacturers.",
      tech: ["Laravel", "RestApis", "JWT", "Job Queues", "MySQL"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Role-based Access", "Real-time Updates", "Automated Reports", "Queue Management"],
      url : "https://www.pakket2go.nl/en"
    },
    {
      title: "Mayo World",
      description: "Built Mayo World, an online B2B marketplace designed to connect manufacturers and suppliers with global buyers. The platform features over 30,000 trusted vendors, 500,000+ listed products, and 50,000 product categories, offering secure transactions, product sourcing, advertising tools, and transparent, efficient international trade opportunities for entrepreneurs and small businesses.",
      tech: ["Codeigniter", "PHP", "MySQL", "Multi-Auth", "Bootstrap"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      features: ["Agent Portal", "Admin Dashboard", "Dynamic UI", "Payment Integration"],
      url : "https://www.mayoworld.com/"
    },
    {
      title: "Resource Portal",
      description: "At Resource Portal, we provide innovative solutions to empower schools. From lesson planning to websites and community building, our platforms are designed to streamline processes, enhance communication, and create meaningful connections.",
      tech: ["Laravel", "MySql", "Multi-Auth", "SCSS"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Staff Development", "Enrichment Programs", "After School Websites", "Lesson Plan"],
      url : "https://resourceportal.com/"
    },
    {
      title: "Univa",
      description: "Developed and contributed to Univa Technologies, a global distributor of electronic components with over 20 years of experience. The company offers intelligent supply chain distribution, custom integrated solutions, and value-added services across diverse sectors such as aerospace, defense, energy, telecommunications, consumer electronics, automotive, and power. Univa focuses on seamless sourcing, logistics, quality assurance, and competitive pricing through a global delivery model spanning Asia, Europe, and the USA.",
      tech: ["Laravel", "Stancl Tenancy", "MySQL", "CSS3", "Multi-Auth"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["Agent Portal", "Admin Dashboard", "Role Management", "Scalable Architecture"],
      url : "https://univatech.com/"
    },
    {
      title: "Rydwayz",
      description: "At RYDWAYZ, we prioritize the needs of shift workers, college students and frequent commuters. Our platform is designed to make travel efficient, cost-effective, and stress-free for both drivers and passengers.",
      tech: ["Laravel", "MySql", "Multi-Auth", "JWT", "Bootstrape"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
      features: ["Clean Architecture", "REST API", "JWT Auth", "Learning Project"],
      isWIP: true,
      url : "https://rydwayz.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my backend development expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* WIP Badge */}
              {project.isWIP && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  WIP
                </div>
              )}

              <div className="relative z-10">
                {/* Project Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs px-2 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  {/* <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button> */}
                  <a href={project.url} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/vedprakashpandey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;