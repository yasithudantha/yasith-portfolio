import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SectionTransition({ section, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`section-${section}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [section]);

  const transitions = {
  home: null,
  about: null,      // ← Circle removed
  projects: (       // Keep meteor shower
    <motion.div
      className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
            boxShadow: '0 0 10px rgba(100, 200, 255, 0.8)',
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeIn',
          }}
        />
      ))}
    </motion.div>
  ),
  skills: null,     // ← Circle removed
  contact: null,    // ← Circle removed
};

return (
    <div id={`section-${section}`} className="relative">
      {transitions[section]}
      {children}
    </div>
  );
}