import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Go (Golang)", level: 40, color: "bg-cyan-500" },
        { name: "SQL", level: 80, color: "bg-purple-500" }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Laravel", level: 90, color: "bg-red-500" },
        { name: "Node.js", level: 75, color: "bg-green-500" },
        { name: "Express.js", level: 75, color: "bg-gray-500" },
        { name: "Sequelize", level: 70, color: "bg-blue-500" },
        { name: "MySQL", level: 85, color: "bg-orange-500" },
        { name: "Redis", level: 65, color: "bg-red-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 70, color: "bg-blue-600" },
        { name: "Git", level: 85, color: "bg-orange-600" },
        { name: "PM2", level: 75, color: "bg-green-600" },
        { name: "GitHub Actions", level: 60, color: "bg-gray-600" },
        { name: "Supervisor", level: 65, color: "bg-purple-600" }
      ]
    },
    {
      title: "Concepts & Architecture",
      skills: [
        { name: "MVC Pattern", level: 90, color: "bg-indigo-500" },
        { name: "REST APIs", level: 90, color: "bg-emerald-500" },
        { name: "Job Queues", level: 80, color: "bg-yellow-600" },
        { name: "Clean Code", level: 85, color: "bg-pink-500" },
        { name: "Multi-tenancy", level: 75, color: "bg-teal-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color} group-hover:scale-x-105 transform origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Additional Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JWT Authentication", "Role-Permission Management", "Logging Systems",
              "Database Optimization", "API Design", "Unit Testing", "Code Review",
              "Agile Development", "Problem Solving", "Team Collaboration"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;