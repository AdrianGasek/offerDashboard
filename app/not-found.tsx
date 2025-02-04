"use client";
import { motion } from 'framer-motion';
export default function NotFound() {
  return (
    <div className="h-full max-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 24 24" fill="none">
            {/* Astronaut SVG */}
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#ffffff"/>
            <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#ffffff" strokeWidth="2"/>
            <path d="M19 12h2M3 12h2M12 3v2M12 19v2" stroke="#ffffff" strokeWidth="2"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity
          }}
        >
          {/* Planet SVG */}
          <svg className="w-20 h-20" viewBox="0 0 24 24" fill="#6366f1">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4"
          animate={{ 
            x: [-10, 10, -10],
            rotate: 45
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          {/* Rocket SVG */}
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M12 2L8 6v12l4 4 4-4V6l-4-4z"/>
          </svg>
        </motion.div>

        <h1 className="text-6xl font-bold text-white mt-8">404</h1>
        <p className="text-xl text-gray-400 mt-4">Mamy problem!</p>
        <p className="text-gray-500 mt-2">
            Ale Cię wywiało w kosmos! 🚀 
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          onClick={() => window.location.href = '/'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Wróć do strony głownej
        </motion.button>
      </div>
    </div>
  );
}