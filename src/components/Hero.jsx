import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
      />
      <motion.div
        animate={{
          x: -mousePosition.x * 0.5,
          y: -mousePosition.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Building Intelligent
                </span>
              </motion.h1>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
                  AI Systems
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle/Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed"
            >
              I&apos;m an aspiring <span className="text-cyan-400 font-semibold">AI & ML Engineer</span> driven by creative problem-solving. I transform complex machine learning theories into practical, real-world solutions that amplify human capabilities.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-8 border-y border-cyan-400 border-opacity-30"
            >
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400">9A&apos;s</p>
                <p className="text-sm text-gray-400">G.C.E. O/Level</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400">2 A&apos;s 1B</p>
                <p className="text-sm text-gray-400">G.C.E. A/Level</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-pink-400">3rd Year</p>
                <p className="text-sm text-gray-400">BSc (Hons) IT Specializing in Artificial Intelligence</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400">15+</p>
                <p className="text-sm text-gray-400">Tech Skills</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-primary font-bold rounded-full text-center transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 0, 110, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-full text-center hover:bg-pink-400 hover:text-primary transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 text-gray-400 pt-8"
            >
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating 3D Elements */}
          <motion.div
            className="relative min-h-[500px] sm:h-full flex items-center justify-center w-full mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Floating Card Stack Effect */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="relative w-full max-w-md h-[450px]"
            >
              {/* Card 1 - Top (Moved Up & Right) */}
              <motion.div
                className="absolute -top-8 right-0 lg:-right-8 w-64 h-70 glass rounded-2xl border border-cyan-400 border-opacity-50 p-6 z-30"
                style={{
                  background: 'rgba(0, 212, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
                }}
              >
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="text-cyan-400 font-bold text-lg mb-2">Aspiring AI & ML Engineer</h3>
                <p className="text-gray-300 text-sm">Building intelligent systems with ML & DL. <br></br> ✨ Specializing in supervised and unsupervised learning, neural networks, CNNs, and LLM architectures.</p>
              </motion.div>

              {/* Card 2 - Middle Left (Moved Down & Left) */}
              <motion.div
                className="absolute top-40 -left-4 lg:-left-16 w-64 h-64 glass rounded-2xl border border-pink-400 border-opacity-50 p-6 z-20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 0, -2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
                style={{
                  background: 'rgba(255, 0, 110, 0.1)',
                  boxShadow: '0 8px 32px rgba(255, 0, 110, 0.15)',
                }}
              >
                <div className="text-4xl mb-2">📊</div>
                <h3 className="text-pink-400 font-bold text-lg mb-2">Data Science</h3>
                <p className="text-gray-300 text-sm">Building deep learning & predictive ML models. <br></br> ✨ Utilizing Pandas, NumPy, Scikit-Learn, and NLP for predictive analytics.</p>
              </motion.div>

              {/* Card 3 - Bottom Right (Moved Down & Right) */}
              <motion.div
                className="absolute -bottom-20 right-4 lg:-right-12 w-64 h-64 glass rounded-2xl border border-purple-400 border-opacity-50 p-6 z-10"
                animate={{
                  y: [0, 15, 0],
                  rotate: [2, 0, 2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15)',
                }}
              >
                <div className="text-4xl mb-2">💻</div>
                <h3 className="text-purple-400 font-bold text-lg mb-2">Full Stack Projects </h3>
                <p className="text-gray-300 text-sm">Frontend + Backend + Database integration <br></br> ✨ Building scalable solutions with React, Python, Java, Node.js and SQL/NoSQL.</p>
              </motion.div>

              {/* Central Glow Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 blur-3xl opacity-20 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
}