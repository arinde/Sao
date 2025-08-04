import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white p-10 rounded-2xl shadow-xl w-[90%] max-w-4xl relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Image */}
              <img
                src="/development.jfif" // Replace this path
                alt="Under Development"
                className="w-32 md:w-64"
              />

              {/* Text */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">🚧 Site Under Development</h2>
                <p className="text-gray-700 text-lg md:text-xl">
                  We're working hard to bring you the best experience.<br />
                  Please check back in <strong>3 days</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
