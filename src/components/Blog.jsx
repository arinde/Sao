import React from 'react';
import { CalendarDays, Tag, ChevronRight } from 'lucide-react';

const defaultBlogPosts = [
  {
    imageUrl: 'https://placehold.co/600x400/0d9488/f1f5f9?text=Future+of+Construction',
    title: "The Future of Sustainable Construction in Nigeria",
    excerpt: "Explore how innovative green building techniques are shaping the landscape of civil engineering, focusing on local applications and benefits.",
    date: "July 1, 2024",
    categories: ["Sustainability", "Innovation", "Nigeria"],
    link: "https://example.com/blog/sustainable-construction-nigeria"
  },
  {
    imageUrl: 'https://placehold.co/600x400/1e40af/bfdbfe?text=Bridge+Tech',
    title: "Advanced Materials: Revolutionizing Bridge Construction",
    excerpt: "A deep dive into the latest advancements in materials science that are making bridges stronger, lighter, and more resilient to environmental challenges.",
    date: "June 20, 2024",
    categories: ["Infrastructure", "Technology", "Materials"],
    link: "https://example.com/blog/advanced-bridge-materials"
  },
  {
    imageUrl: 'https://placehold.co/600x400/d97706/fff7ed?text=Urban+Planning',
    title: "Smart Cities: Civil Engineering's Role in Urban Development",
    excerpt: "Understanding how civil engineers are integrating smart technologies and data-driven approaches to create more efficient and livable urban environments.",
    date: "June 5, 2024",
    categories: ["Urban Planning", "Smart Cities"],
    link: "https://example.com/blog/smart-cities-civil-engineering"
  },
  {
    imageUrl: 'https://placehold.co/600x400/4d7c0f/f1f5f9?text=Safety+Standards',
    title: "Ensuring Safety on Industrial Construction Sites",
    excerpt: "A comprehensive guide to the best practices and latest regulations for maintaining unparalleled safety standards in industrial and factory construction.",
    date: "May 28, 2024",
    categories: ["Safety", "Industrial"],
    link: "https://example.com/blog/industrial-site-safety"
  },
  {
    imageUrl: 'https://placehold.co/600x400/7c3aed/ede9fe?text=Water+Management',
    title: "Innovations in Water Resource Management for Arid Regions",
    excerpt: "Discover how civil engineering solutions are addressing water scarcity through advanced hydraulic structures and sustainable management strategies.",
    date: "May 15, 2024",
    categories: ["Water", "Sustainability"],
    link: "https://example.com/blog/water-management-innovations"
  },
  {
    imageUrl: 'https://placehold.co/600x400/a3a3a3/e2e8f0?text=Team+Insights',
    title: "Behind the Blueprint: A Day in the Life of Our Engineers",
    excerpt: "Get an exclusive look into the daily challenges and triumphs of our civil and structural engineering teams, from design to on-site execution.",
    date: "April 30, 2024",
    categories: ["Team", "Company Culture"],
    link: "https://www.takeoffpros.com/blog/"
  }
];

const Blog = ({
  blogPosts = defaultBlogPosts,
  pageTitle = "Our Latest Insights & News",
  pageSubtitle = "Stay informed with our expert articles, industry trends, and company updates in civil and construction engineering."
}) => {
  return (
    <section className="py-16 lg:py-32 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {pageTitle}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={post.imageUrl}
                  alt={post.title}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/94a3b8/e2e8f0?text=Blog+Image+Error'; }} // Fallback
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
                  <span className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1 text-teal-600" />
                    {post.date}
                  </span>
                  {post.categories && post.categories.length > 0 && (
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1 text-teal-600" />
                      {post.categories.join(', ')}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-['Montserrat'] leading-tight group-hover:text-teal-700 transition-colors duration-200">
                    <a href={post.link} className="hover:underline">
                      {post.title}
                    </a>
                  </h3>

                <p className="text-gray-700 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors duration-300"
                >
                  Read More
                  <ChevronRight className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => console.log("Load More Posts clicked!")}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-[1.02]"
          >
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
