import React from 'react';
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react';

const defaultTeamMembers = [
  {
    imageUrl: 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=John+Doe',
    name: "John Doe",
    title: "CEO & Lead Civil Engineer",
    bio: "With over 25 years in the industry, John leads our strategic vision, ensuring every project aligns with our commitment to excellence and innovation.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "mailto:john.doe@example.com"
    }
  },
  {
    imageUrl: 'https://placehold.co/400x400/94a3b8/e2e8f0?text=Jane+Smith',
    name: "Jane Smith",
    title: "Chief Operations Officer",
    bio: "Jane oversees all operational aspects, optimizing workflows and ensuring seamless execution across our diverse portfolio of construction projects.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "mailto:jane.smith@example.com"
    }
  },
  {
    imageUrl: 'https://placehold.co/400x400/64748b/e2e8f0?text=Mike+Johnson',
    name: "Michael Johnson",
    title: "Head of Project Management",
    bio: "Michael is a certified PMP with a proven track record of delivering large-scale infrastructure projects on time and within budget.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:michael.j@example.com"
    }
  },
  {
    imageUrl: 'https://placehold.co/400x400/334155/e2e8f0?text=Sarah+Williams',
    name: "Sarah Williams",
    title: "Lead Structural Engineer",
    bio: "Sarah's expertise in structural design ensures the integrity and resilience of every building we construct, pushing boundaries with innovative solutions.",
    social: {
      linkedin: "#",
      email: "mailto:sarah.w@example.com"
    }
  },
  {
    imageUrl: 'https://placehold.co/400x400/0f766e/f1f5f9?text=David+Brown',
    name: "David Brown",
    title: "Sustainability Lead",
    bio: "David champions our green initiatives, integrating sustainable practices and materials to minimize environmental impact across all our developments.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    imageUrl: 'https://placehold.co/400x400/4d7c0f/f1f5f9?text=Emily+Davis',
    name: "Emily Davis",
    title: "Client Relations Manager",
    bio: "Emily is dedicated to fostering strong client relationships, ensuring transparent communication and tailored solutions from project inception to completion.",
    social: {
      linkedin: "#",
      email: "mailto:emily.d@example.com"
    }
  }
];


const Team = ({
  teamMembers = defaultTeamMembers,
  sectionTitle = "Meet Our Visionaries",
  sectionSubtitle = "Our dedicated team of experts is the driving force behind every successful project, committed to building a better future."
}) => {
  return (
    <section className="py-24 lg:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-['Montserrat'] leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="w-full h-64 md:h-72 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  src={member.imageUrl}
                  alt={member.name}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/a3a3a3/e2e8f0?text=Image+Not+Found'; }} // Fallback
                />
              </div>
              <div className="p-6 text-center">
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1 font-['Montserrat'] leading-tight">
                  {member.name}
                </h3>
                
                <p className="text-teal-600 text-lg font-medium mb-4">
                  {member.title}
                </p>
                {member.bio && (
                  <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                    {member.bio}
                  </p>
                )}

                <div className="flex justify-center space-x-4 mt-auto">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
                      <Globe className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={member.social.email} className="text-gray-500 hover:text-red-600 transition-colors duration-200">
                      <Mail className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
