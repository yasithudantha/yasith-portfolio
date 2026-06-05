import { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Photo entrance animation - comes from bottom
  const photoVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.3
      }
    }
  };

  // Your unique strengths
  const strengths = [
    {
      id: 1,
      title: 'Cross-Domain Expertise',
      description: 'Coming from a Commerce/IT background gives me a unique vantage point to apply artificial intelligence to financial contexts, seamlessly bridging the gap between technical development and business utility.',
      icon: '🌉',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'Applied Machine Learning',
      description: "I don't just study AI theory; I actively build it. I have hands-on experience designing architectures that utilize advanced techniques like Natural Language Processing (NLP) sentiment analysis, Monte Carlo simulations, and Random Forest models.",
      icon: '🤖',
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 3,
      title: 'Rapid Mastery & Academic Rigor',
      description: 'From securing top grades in my O/Levels and A/Levels to excelling in a demanding BSc (Hons) IT specializing in AI degree, I have a proven track record of mastering complex, highly technical concepts and applying them quickly.',
      icon: '⚡',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 4,
      title: 'Full-Stack Awareness',
      description: 'Through hands-on project experience with Java, Python, and SQL/MongoDB, I have developed a strong foundation in navigating full-stack development environments.',
      icon: '🏗️',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 5,
      title: 'Deep AI Specialization',
      description: "Going beyond traditional frontend and backend development, I've invested in understanding AI/ML fundamentals, neural networks, and practical applications. This unique positioning allows me to build intelligent systems, not just interfaces.",
      icon: '🧠',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Creative Problem Solving',
      description: "I don't just write code, I identify problems worth solving. My projects like SmartVest demonstrate my ability to combine AI with real-world financial planning challenges.",
      icon: '💡',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  // Your story sections
  const storyPoints = [
    {
      title: 'Academic Excellence',
      description: 'My journey began at Bandaranayake College Gampaha, where a foundation of academic excellence highlighted by achieving 9 A\'s in my O/Levels and 2 A\'s and 1 B in my A/Levels (Commerce/IT stream) sparked my passion for bridging business logic with technology.',
    },
    {
      title: 'Professional Journey',
      description: 'I am currently in the first semester of my third year, pursuing a BSc (Hons) in Information Technology specializing in Artificial Intelligence at SLIIT University. I am applying my strong analytical background to develop intelligent, data-driven systems.',
    },
    {
      title: 'Core Belief',
      description: 'I am actively working toward a career as an AI & ML Engineer by transforming complex machine learning theories into practical, real-world solutions through creativity and problem-solving.',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-4 text-lg">Building the future with AI & Intelligence</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Professional Photo with Advanced Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <div className="relative w-80 h-96 flex items-center justify-center">
              {/* Animated Background - Circuit Board Effect */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 110, 0.1))',
                  backdropFilter: 'blur(10px)',
                }}
              />

              {/* Outer Rotating Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-cyan-400 border-r-pink-400"
              />

              {/* Outer Rotating Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-2xl border-2 border-transparent border-t-pink-400 border-r-cyan-400"
              />

              {/* Animated Dots Circuit */}
              <motion.div
                className="absolute top-0 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/4 right-0 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-2.5 h-2.5 bg-purple-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 left-0 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />

              {/* Animated connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
                <motion.line
                  x1="30%"
                  y1="20%"
                  x2="70%"
                  y2="70%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{
                    strokeDasharray: [0, 100],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#ff006e" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Professional Photo Container - Animates from Bottom */}
              <motion.div
                variants={photoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-20 w-72 h-80 rounded-2xl overflow-hidden border-2 border-cyan-400 border-opacity-60"
                whileHover={{
                  scale: 1.05,
                  borderColor: '#ff006e',
                }}
              >
                {/* Photo Image */}
                <img
                  src="public/assets/professional-photo.PNG"
                  alt="Yasith Udantha - AI Engineer"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-transparent opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Info Badge on Photo */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 glass rounded-lg p-3 backdrop-blur-md border border-cyan-400 border-opacity-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-bold text-sm">Yasith Udantha</h3>
                  <p className="text-cyan-300 text-xs">3rd-Year Undergraduate at SLIIT</p>
                </motion.div>
              </motion.div>

              {/* Floating Orbs Around Photo */}
              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full filter blur-lg opacity-50"
              />
              <motion.div
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 right-2 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full filter blur-lg opacity-50"
              />
              <motion.div
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full filter blur-lg opacity-40"
              />
            </div>
          </motion.div>

          {/* Right Side - Your Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Story sections */}
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full" />
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}

            {/* CV Download Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1K1Yd3n7wXtNJN-IX_a9uxFCWAxp_pOPj"
                download="Yasith_Udantha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Download My CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Strengths/Qualities Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Unique Strengths
            </span>
          </h3>
          <p className="text-gray-400 text-center mb-12 text-lg">
            What sets me apart in AI & ML Technology
          </p>

          {/* Strength Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strengths.map((strength) => (
              <motion.div
                key={strength.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(strength.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-2xl border border-opacity-30 p-8 overflow-hidden cursor-pointer"
                style={{
                  borderColor: strength.color.includes('cyan') ? '#00d4ff' : 
                               strength.color.includes('pink') ? '#ff006e' : 
                               strength.color.includes('purple') ? '#a855f7' :
                               strength.color.includes('green') ? '#10b981' : '#f59e0b',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: hoveredCard === strength.id ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl mb-4"
                  >
                    {strength.icon}
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {strength.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === strength.id ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div
            className="glass rounded-3xl border border-cyan-400 border-opacity-50 p-12 text-center relative overflow-hidden"
            style={{
              background: 'rgba(0, 212, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
            }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6 font-display">My Philosophy</h3>
              <blockquote className="text-xl text-gray-200 leading-relaxed mb-6">
                "Technology should serve humanity. The best AI systems are those that{' '}
                <span className="text-pink-400 font-semibold">amplify human capabilities</span>, not replace human judgment."
              </blockquote>
              <p className="text-gray-300 text-lg">
                I believe the true power of Artificial Intelligence lies in its ability to simplify complexity and deliver tangible, real-world value. I am driven by the goal of building accessible and intelligent tools that solve genuine problems by replacing complex systems with streamlined, user-centric solutions. I approach development with the mindset that every line of code should ultimately serve to make data more understandable and actionable for the end user. I also believe that my creative thinking enables me to solve critical problems using AI-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}