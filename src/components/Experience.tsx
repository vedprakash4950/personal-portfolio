import React from 'react';
import { Calendar, Code, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2020 - Present",
      title: "Laravel Developer",
      duration: "4 years",
      description: "Specialized in building robust backend systems with Laravel framework. Developed multi-module applications, implemented clean architecture patterns, and optimized database performance.",
      skills: ["Laravel", "PHP", "MySQL", "Redis", "REST APIs"],
      icon: <Code className="w-5 h-5" />,
      color: "from-red-500 to-orange-500"
    },
    {
      period: "2023 - Present",
      title: "Node.js Transition",
      duration: "Ongoing",
      description: "Expanding expertise into Node.js ecosystem, learning modern JavaScript frameworks, working with Sequelize ORM, and building scalable backend solutions.",
      skills: ["Node.js", "Express.js", "Sequelize", "JavaScript ES6+", "JWT"],
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      period: "2024 - Present",
      title: "Learning Go (Golang)",
      duration: "Current",
      description: "Currently exploring Go programming language for high-performance backend development. Focusing on clean architecture, concurrency patterns, and building efficient APIs.",
      skills: ["Go", "Gorilla Mux", "Clean Architecture", "Concurrency", "Performance"],
      icon: <Calendar className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through different technologies and my continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-200`}>
                        {exp.icon}
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Currently Focusing On</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Go</div>
                <div className="text-blue-100">Learning modern backend development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">System Design</div>
                <div className="text-blue-100">Scalable architecture patterns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Multi-tenancy</div>
                <div className="text-blue-100">SaaS platform development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;