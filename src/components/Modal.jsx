import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePageModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000); // show modal after 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal container */}
          <motion.div
            className="relative w-[90%] max-w-lg p-6 rounded-2xl shadow-2xl
                       bg-gradient-to-br from-white/20 via-white/10 to-white/20
                       backdrop-blur-xl border border-white/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white text-lg"
            >
              ✕
            </button>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                🎥 New Video Uploaded!
              </h2>
              <p className="mt-2 text-white/80 text-sm md:text-base">
                We’ve added an exciting new project video. <br />
                Watch the preview below or explore more in our gallery.
              </p>

              {/* Video Preview */}
              <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-white/20">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=ddinnivn2&public_id=fb586fa4-4075-4cb3-bce9-494ad9c4b62e_noq4cr&profile=cld-default"
                  title="New Project Video"
                  className="w-full h-56 md:h-64 rounded-xl"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>

              {/* CTA */}
              <Link to="/gallery"
                className="inline-block mt-5 px-6 py-3 text-white font-semibold text-sm md:text-base
                           rounded-xl bg-gradient-to-r from-blue-500 to-purple-600
                           hover:from-purple-600 hover:to-blue-500
                           shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Visit Full Gallery →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
