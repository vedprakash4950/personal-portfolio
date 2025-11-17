import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "4+ Years Experience",
      description: "Building robust backend systems with clean architecture"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Expert",
      description: "MySQL, Redis, and database optimization specialist"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Scalable Systems",
      description: "Multi-tenant SaaS platforms and microservices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance First",
      description: "API optimization and high-performance solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating efficient, scalable backend solutions that power amazing user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 4 years of hands-on experience in backend development, I specialize in building scalable, 
                maintainable systems using modern technologies and best practices. My journey began with PHP and Laravel, 
                and I've since expanded my expertise to include Node.js, JavaScript, and MySQL.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I'm exploring the power of Golang and diving deep into system design principles. 
                My passion lies in creating clean, well-architected solutions that can scale with business needs, 
                particularly in the realm of multi-tenant SaaS platforms.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community through blogs and technical discussions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                Clean Architecture
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                System Design
              </span>
              <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                Performance Optimization
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                Multi-tenant SaaS
              </span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;