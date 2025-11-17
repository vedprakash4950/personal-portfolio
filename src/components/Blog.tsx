import React from 'react';
import { BookOpen, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Multi-tenant SaaS with Laravel",
      excerpt: "A comprehensive guide to implementing multi-tenancy in Laravel applications using Stancl Tenancy package.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Laravel", "Multi-tenancy", "SaaS"],
      url: "#"
    },
    {
      title: "Clean Architecture in Node.js: A Practical Approach",
      excerpt: "How to structure your Node.js applications for maintainability and scalability using clean architecture principles.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Node.js", "Clean Architecture", "Best Practices"],
      url: "#"
    },
    {
      title: "Database Optimization Techniques for High-Traffic Applications",
      excerpt: "Performance optimization strategies for MySQL databases in production environments.",
      date: "2023-11-28",
      readTime: "12 min read",
      tags: ["MySQL", "Performance", "Optimization"],
      url: "#"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts about backend development and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={post.url}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to read more?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I regularly share technical insights, tutorials, and thoughts about backend development. 
              Follow me on my blog platforms for the latest content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://hashnode.com/@vedprakashpandey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                <ExternalLink size={20} />
                <span>Hashnode Blog</span>
              </a>
              <a
                href="https://medium.com/@vedprakashpandey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <ExternalLink size={20} />
                <span>Medium</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;