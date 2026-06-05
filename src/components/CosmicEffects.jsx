import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CosmicEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 50 - 25,
        y: (e.clientY / window.innerHeight) * 50 - 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Nebula Clouds */}
      <motion.div
        className="fixed inset-0 z-10 pointer-events-none"
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animation: 'cosmic-drift 20s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animation: 'cosmic-drift 25s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          style={{ animation: 'cosmic-drift 30s ease-in-out infinite' }}
        />
      </motion.div>

      {/* Cosmic Rays */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" style={{ opacity: 0.3 }}>
          <defs>
            <linearGradient id="cosmic-ray-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(100, 200, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(100, 200, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#cosmic-ray-1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      {/* Style animations */}
      <style>{`
        @keyframes cosmic-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes cosmic-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(100, 200, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(100, 200, 255, 0.8); }
        }

        @keyframes meteor-fall {
          0% {
            transform: translate(-100vw, -100vh);
            opacity: 1;
          }
          100% {
            transform: translate(100vw, 100vh);
            opacity: 0;
          }
        }

        @keyframes aurora-wave {
          0%, 100% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-20px) scaleY(1.2); }
        }

        .cosmic-glow {
          animation: cosmic-glow 3s ease-in-out infinite;
        }

        .twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}