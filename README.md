ProjectsSection Component
The ProjectsSection is a dynamic and interactive React component designed to showcase your company's civil and construction engineering projects. It features a card-based layout, responsive design, and includes filtering capabilities to differentiate between "Ongoing" and "Completed" projects.

Features
Responsive Grid Layout: Adapts elegantly across various screen sizes (mobile, tablet, desktop).

Interactive Filtering: Users can filter projects by "All," "Ongoing," or "Completed" status.

Visually Engaging Cards: Each project card includes an image, title, location, year, description, and a link to more details.

Hover Effects: Subtle hover animations for a more engaging user experience.

Customizable Content: Easily update section titles, subtitles, CTA text, and project data via props.

Installation
This component relies on lucide-react for icons and assumes you are using Tailwind CSS for styling within a React project.

Install lucide-react:

npm install lucide-react
# or
yarn add lucide-react

Ensure Tailwind CSS is configured in your React project.

Usage
1. Import the Component
First, save the component code (the App component from the "Creative Projects Section (React & Tailwind CSS)" Canvas) into a file in your project, for example, src/components/ProjectsSection.jsx (or .tsx).

Then, import it into the parent component where you want to display it (e.g., your main App.jsx or a specific page component):

// src/App.jsx (or your page component)
import React from 'react';
import ProjectsSection from './components/ProjectsSection'; // Adjust path as needed

// ... (other imports and components)

2. Basic Integration
Render the ProjectsSection component in your desired parent component. It comes with default content, so you can integrate it directly:

// src/App.jsx (or your page component)

function App() {
  const handleViewAllProjectsClick = () => {
    // Logic to navigate to a dedicated "All Projects" page
    console.log("View All Projects button clicked!");
  };

  return (
    <div>
      {/* Other sections of your website */}

      <ProjectsSection
        onCtaClick={handleViewAllProjectsClick}
      />

      {/* Footer or other sections */}
    </div>
  );
}

export default App;

3. Customizing Content via Props
You can customize the section's content and behavior by passing props to the ProjectsSection component:

// src/App.jsx (or your page component)

import React from 'react';
import ProjectsSection from './components/ProjectsSection';

// Define your custom project data
const myCustomProjects = [
  {
    imageUrl: '/path/to/your-project1.jpg',
    title: "Eco-Friendly Office Building",
    location: "Accra, Ghana",
    year: 2024,
    description: "Designed with sustainable materials and smart energy systems.",
    detailsLink: "/projects/eco-office",
    status: "ongoing"
  },
  {
    imageUrl: '/path/to/your-project2.jpg',
    title: "Rural Water Supply Network",
    location: "Kwara State, Nigeria",
    year: 2023,
    description: "Providing clean and accessible water to remote communities.",
    detailsLink: "/projects/water-network",
    status: "completed"
  },
  // Add more projects here
];

function App() {
  const handleViewAllProjectsClick = () => {
    // Logic to navigate to a dedicated "All Projects" page
    console.log("Custom 'View All Projects' clicked!");
  };

  return (
    <div>
      <ProjectsSection
        projects={myCustomProjects} // Pass your custom project data
        sectionTitle="Showcasing Our Latest Triumphs"
        sectionSubtitle="A glimpse into the engineering marvels we've brought to life."
        ctaText="See More Case Studies"
        onCtaClick={handleViewAllProjectsClick}
      />
    </div>
  );
}

export default App;

Props
The ProjectsSection component accepts the following props:

Prop Name

Type

Default Value

Description

projects

Array<Object>

defaultProjects (defined in component)

An array of project objects to display. See Project Object Structure below.

sectionTitle

string

"Our Landmark Projects"

The main title for the projects section.

sectionSubtitle

string

"Witness the impact..."

A descriptive subtitle for the section.

ctaText

string

"View All Projects"

The text displayed on the main call-to-action button.

onCtaClick

Function

() => console.log(...)

Callback function for when the main CTA button is clicked.

Project Object Structure
Each object within the projects array should conform to the following structure:

Property Name

Type

Description

Example Value

imageUrl

string

URL for the project's featured image.

'https://placehold.co/600x400/...'

title

string

The title of the project.

"Coastal Landmark Bridge"

location

string

The geographical location of the project.

"Lagos, Nigeria"

year

number

The completion or initiation year of the project.

2023

description

string

A brief description of the project (supports line-clamp-3).

"A pivotal infrastructure project..."

detailsLink

string

(Optional) URL to a dedicated page for more project details.

"#" or "/projects/bridge-details"

category

string

(Optional) A category for the project (e.g., "Infrastructure").

"Infrastructure"

status

string

The current status of the project ("ongoing" or "completed"). Required for filtering.

"ongoing"

Customization Notes
Styling: All styling is managed via Tailwind CSS classes directly within the JSX. You can modify these classes to match your brand's aesthetic.

Icons: The project uses lucide-react for icons. You can change the icons by replacing the component name (e.g., <MapPin /> to <Globe />) in the respective <span> elements.

Placeholder Images: Remember to replace the https://placehold.co/... imageUrl values in defaultProjects (or your custom projects array) with actual paths to your project images. If you are importing images from your src folder, ensure your bundler is configured to handle image imports and that you pass the imported URL string to the imageUrl property. If using Next.js, consider next/image for optimized images.

This README.md provides a comprehensive guide for integrating and customizing your ProjectsSection component.
