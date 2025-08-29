import React, { useState } from 'react';

const galleryImages = [
  { src: '/Images2/CastingRCPL.jpeg', title: 'Casting area preparation'},
  { src: '/Images2/CastingRCPL2.jpeg', title: 'Casting area preparation'},
  { src: '/Images2/Column.jpeg', title: 'Stop column base'},
  { src: '/Images/Gallery23.jpeg', title: 'Furnace Pit structure' },
  { src: '/Images/Gallery17.jpeg', title: 'Casting of furnace wall' },
  { src: '/Images/Gallery13.jpeg', title: 'Casted base for chimney structure' },
  { src: '/Images/Gallery21.jpeg', title: 'Casted furncace regenerator' },
  { src: '/Images/Gallery1.jpeg', title: 'Casting of furnace wall' },
  { src: '/Images/Gallery6.jpeg', title: 'Casted Columns' },
  { src: '/Images/Gallery3.jpeg', title: 'Casting board Setup' },
  { src: '/Images/Gallery4.jpeg', title: 'Setting of iron rod for columns' },
  { src: '/Images/Gallery2.jpeg', title: 'Onsite Iron works' },
  { src: '/Images/Gallery20.jpeg', title: 'Onsite Iron works' },
  { src: '/Images/Gallery11.jpeg', title: 'Setting of iron for furnace base' },
  { src: '/Images/Gallery26.jpeg', title: 'Setting of iron for furnace base' },
  { src: '/Images/Gallery10.jpeg', title: 'Onsite Iron works' },
  { src: '/Images2/CNG.jpeg', title: 'Concrete blast wall'},
  { src: '/Images2/FloorMarking1.jpeg', title: 'Floor marking'},
  { src: '/Images2/FloorMarking2.jpeg', title: 'Floor marking'},
  { src: '/Images2/FloorPainting3.jpeg', title: 'Floor marking'},
  { src: '/Images2/Epoxyl.jpeg', title: 'Expoxyl flooring'},
  { src: '/Images2/Painting.jpeg', title: 'Painting'},
  { src: '/Images/Gallery7.jpeg', title: 'Interlocking' },
  { src: '/Images/Gallery12.jpeg', title: 'Interlocking' },
  { src: '/Images/Gallery27.jpeg', title: 'Interlocking' },
  { src: '/Images2/Drainage.jpeg', title: 'Drainage Cover'},
  { src: '/Images2/Drainage2.jpeg', title: 'Drainage Cover'},
  { src: '/Images/Gallery25.jpeg', title: 'Drainage works' },
  { src: '/Images2/Hydrant.jpeg', title: 'CNG station'},
  { src: '/Images2/Hydrant2.jpeg', title: 'CNG station'},
  { src: '/Images2/IndianSchool.jpeg', title: 'Indian school building'},
  { src: '/Images/Gallery14.jpeg', title: 'Skeleton structure for the aluminum partion' },
  { src: '/Images/Gallery8.jpeg', title: 'Office Partioning with aluminum' },
  { src: '/Images/Gallery19.jpeg', title: 'Office Partioning with aluminum' },
  { src: '/Images/Gallery5.jpeg', title: 'Installation of Suspended Ceiling' }, 
  { src: '/Images/Gallery9.jpeg', title: 'Excavation' },
  { src: '/Images2/Excavation.jpeg', title: 'Excavation'},
  { src: '/Images2/Excavation2.jpeg', title: 'Excavation'},
  { src: '/Images/Gallery16.jpeg', title: 'Insatallation of suspended ceiling' },
  { src: '/Images/Gallery24.jpeg', title: 'MCC room block setting' },
  { src: '/Images/Gallery18.jpeg', title: 'MCC room block setting' },
  { src: '/Images/Gallery22.jpeg', title: 'Tiling' },
];

// ✅ Replace with your actual Cloudinary video links
const galleryVideos = [
  { src: "https://res.cloudinary.com/ddinnivn2/video/upload/v1756456405/fb586fa4-4075-4cb3-bce9-494ad9c4b62e_noq4cr.mov", title: "Project Walkthrough" },
  { src: "https://res.cloudinary.com/ddinnivn2/video/upload/v1752491368/IMG_9246_oweewj.mov", title: "Excavation Process" },
  { src: "https://res.cloudinary.com/ddinnivn2/video/upload/v1752491301/IMG_9245_gp8t8z.mov", title: "Excvation process" },
];

const GalleryImage = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img
        src={src}
        alt={title}
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ${
          loaded ? 'blur-0' : 'blur-md'
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-sm font-medium text-blue-800">
          Loading...
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-blue-900 text-sm font-semibold text-center px-4 py-2">
        {title}
      </div>
    </div>
  );
};

const GalleryVideo = ({ src, title }) => (
  <div className="relative rounded-xl shadow-lg overflow-hidden">
    <video
      controls
      className="w-full h-64 object-cover"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-blue-900 text-sm font-semibold text-center px-4 py-2">
      {title}
    </div>
  </div>
);

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Full Project Gallery</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-300 mb-10">
          <button
            onClick={() => setActiveTab("photos")}
            className={`pb-2 px-4 ${
              activeTab === "photos"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`pb-2 px-4 ${
              activeTab === "videos"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeTab === "photos" &&
            galleryImages.map((image, index) => (
              <GalleryImage key={index} src={image.src} title={image.title} />
            ))}

          {activeTab === "videos" &&
            galleryVideos.map((video, index) => (
              <GalleryVideo key={index} src={video.src} title={video.title} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
