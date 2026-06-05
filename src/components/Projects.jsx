import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const videoRef = useRef(null);
  const imageRotationTimer = useRef(null);
  const videoContainerRef = useRef(null);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (!selectedProject || !isAutoRotating) return;

    imageRotationTimer.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedProject.images.length
      );
    }, 4000);

    return () => {
      if (imageRotationTimer.current) {
        clearInterval(imageRotationTimer.current);
      }
    };
  }, [selectedProject, isAutoRotating]);

  // Handle image dot click - pause auto-rotation temporarily
  const handleImageDotClick = (idx) => {
    setCurrentImageIndex(idx);
    setIsAutoRotating(false);
    
    // Resume auto-rotation after 6 seconds
    setTimeout(() => setIsAutoRotating(true), 6000);
  };

  // Handle video play/pause
  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Handle fullscreen
  const handleVideoFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch(err => {
          console.log('Fullscreen request failed:', err);
          // Fallback: use webkit for older browsers
          if (videoContainerRef.current.webkitRequestFullscreen) {
            videoContainerRef.current.webkitRequestFullscreen();
          }
        });
        setIsVideoFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsVideoFullscreen(false);
      }
    }
  };

  // Your projects - UPDATED
  const projects = [
    {
      id: 1,
      title: 'SmartVest - Investment AI Assistant',
      category: 'AI & Machine Learning/ Web Application / FinTech',
      shortDescription: 'An AI-powered investment platform that provides intelligent insights and predictive analytics for stocks, cryptocurrencies, and commodities to support financial decision-making.',
      fullDescription: 'SmartVest is a comprehensive, AI-driven financial platform designed to assist users in making informed investment decisions. The application aggregates real-time market data across multiple asset classes and leverages advanced machine learning models alongside natural language processing for sentiment analysis. It features personalized dashboards, secure portfolio tracking, curated financial news, and an interactive AI chatbot powered by Google Generative AI that answers complex investment-related queries.',
      problem: 'Navigating financial markets is often overwhelming for retail investors. They typically struggle to gather real-time data across different asset classes, perform robust technical and fundamental analysis, and filter market noise to make informed, data-driven investment decisions.',
      solution: 'SmartVest centralizes market data, financial news, and AI-driven predictive analytics into a single, intuitive web application. By leveraging machine learning models to forecast market trends and NLP to analyze market sentiment from news articles, the platform equips users with professional-grade tools. Additionally, a conversational AI assistant provides personalized, real-time financial insights.',
      result: 'The application successfully delivers an accessible, all-in-one ecosystem for investors. It significantly reduces the time spent on manual research, empowers users with data-backed market predictions and sentiment analysis, and provides a secure, user-friendly environment for managing financial portfolios.',
      techStack: ['Python', 'Flask','flask-bcrypt', 'HTML/CSS/JavaScript', 'NLP', 'LSTM', 'ARIMA', 'Random Forest', 'Monte Carlo', 'SQL','pandas', 'numpy', 'scikit-learn', 'yfinance', 'FinBERT', 'TextBlob', 'joblib', 'matplotlib', 'google-generativeai Gemini API', ' statsmodels'],
      images: [
        '/assets/projects/images/smartvest-1.png',
        '/assets/projects/images/smartvest-2.png',
        '/assets/projects/images/smartvest-3.png',
      ],
      videoUrl: '/assets/projects/videos/smartvest-demo.mp4',
      github: 'https://github.com/yasithudantha/SmartVest',
      highlights: [
        'Real-time tracking and AI-powered predictive analytics for stocks, crypto, and commodities',
        'Interactive AI chatbot providing personalized investment guidance and financial insights',
        'Automated sentiment analysis of financial news to evaluate market trends',
        'Secure user authentication with personalized dashboards and portfolio management',
        'Dedicated admin portal for system monitoring and user management',
      ],
    },
    {
      id: 2,
      title: 'NutriNexus - Diet Planning & Health Checkup System',
      category: 'Full-Stack Web Application / HealthTech',
      shortDescription: 'A comprehensive full-stack platform for diet planning and health checkups, featuring dedicated portals and dashboards for Administrators, Doctors, Nutritionists, and Patients.',
      fullDescription: 'NutriNexus is a robust, role-based healthcare management system designed to facilitate seamless interactions between patients and healthcare professionals. It centralizes key functionalities such as patient registration, medical records management, personalized diet planning, appointment management, and notifications. The frontend features a modern 3D glassmorphism design built with React, Vite, and Tailwind CSS, delivering an engaging and intuitive user experience. The backend is powered by Java Spring Boot and MySQL, providing a secure, scalable RESTful API with JWT-based authentication and role-based access control.',
      problem: 'Healthcare providers, including doctors and nutritionists, often struggle with disjointed tools for managing patient records, diet plans, and appointments. Additionally, many healthcare portals suffer from outdated user interfaces, leading to poor user engagement and a frustrating experience for patients.',
      solution: 'Developed a unified and secure web application that brings Administrators, Doctors, Nutritionists, and Patients onto a single platform. Implemented a reliable Spring Boot backend with MySQL for secure data management and JWT-based authentication. Designed a premium 3D glassmorphism user interface using React and Tailwind CSS, creating an intuitive, modern, and highly responsive experience across all modules.',
      result: 'Delivered a cohesive and visually appealing application that streamlines clinical workflows and diet planning processes. The modern user interface enhances user engagement and accessibility, while the robust backend ensures data integrity and secure role-based access for all stakeholders.',
      techStack: ['Java (Spring Boot 3)','React.js (Vite)','MySQL','Tailwind CSS','JWT (JSON Web Tokens)','Framer Motion','Flyway'],
      images: [
        '/assets/projects/images/healthapp1.png',
        '/assets/projects/images/healthapp2.png',
        '/assets/projects/images/healthapp3.png',
      ],
      videoUrl: '/assets/projects/videos/healthapp-demo.mp4',
      github: 'https://github.com/yasithudantha/NutriNexus',
      highlights: [
        'Role-based access control with dedicated portals for Administrators, Doctors, Nutritionists, and Patients.',
        'Premium 3D glassmorphism UI/UX design with a modern and fully responsive interface.',
        'Secure RESTful backend powered by Spring Security and JWT authentication.',
        'Comprehensive features including interactive dashboards, medical records management, diet plan management, and notification systems.'
      ],
    },
    {
      id: 3,
      title: 'ClinicApp - Comprehensive Healthcare & Clinic Management System',
      category: 'Full-Stack Web & Mobile Development / Healthcare Technology',
      shortDescription: 'A cross-platform healthcare solution featuring a React-based web dashboard for clinic administration and a React Native mobile application for patients to manage appointments, medical records, and payments seamlessly.',
      fullDescription: 'ClinicApp is a unified full-stack healthcare platform designed to bridge the gap between medical providers and patients. The architecture consists of three core components: a robust Node.js/Express backend API powered by MongoDB, a dynamic Vite/React web portal for clinic staff, and an intuitive React Native mobile application for patients. It digitizes the entire clinic workflow, handling everything from secure user authentication (JWT) to appointment scheduling and comprehensive medical records management. The platform goes beyond basic management by integrating Stripe for secure online payments, using Expo for real-time push notifications, and automatically generating downloadable PDFs for invoices and medical prescriptions.',
      problem: 'Traditional clinics often rely on fragmented systems, paper records, or manual processes for scheduling and billing. This leads to administrative inefficiencies, booking conflicts, lost medical histories, and delayed payments. Furthermore, patients lack a centralized platform to easily book appointments, review digital prescriptions, or pay medical bills remotely.',
      solution: 'I developed a centralized and synchronized platform that connects web and mobile interfaces to a single unified backend. The React web dashboard equips doctors and clinic administrators with tools to manage staff, patient records, and daily schedules efficiently. Concurrently, the React Native mobile application empowers patients with self-service capabilities, allowing them to book available time slots, view consultation history and prescriptions, and process payments securely from their personal devices.',
      result: 'The platform significantly reduces administrative overhead and minimizes appointment no-shows through automated push notifications. It enhances the patient experience by providing 24/7 mobile access to personal health records and a seamless billing process, ultimately improving operational efficiency and patient satisfaction.',
      techStack: ['MongoDB', 'Express.js', 'React (Vite)', 'React Native (Expo)', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      images: [
        '/assets/projects/images/clinickapp1.png',
        '/assets/projects/images/clinickapp2.png',
        '/assets/projects/images/clinickapp3.png',
      ],
      videoUrl: '/assets/projects/videos/clinickapp-demo.mp4',
      github: 'https://github.com/yasithudantha/ClinicAppProject',
      highlights: [
        'Cross-platform patient mobile application (iOS/Android) built with Expo Router',
        'Interactive administrative web dashboard built with React and Tailwind CSS',
        'Secure end-to-end payment processing integrated with Stripe API',
        'Automated backend generation of PDF invoices and digital prescriptions',
        'Real-time push notifications for appointment updates',
        'Role-based authentication using JWT (JSON Web Tokens)'
      ],
    },
    {
      id: 4,
      title: 'Project #4 Name',
      category: 'Category',
      shortDescription: '[Add your short description]',
      fullDescription: '[Add your full description]',
      problem: '[Describe the problem you solved]',
      solution: '[Explain your solution]',
      result: '[Share the results/impact]',
      techStack: ['Technology 1', 'Technology 2', 'Technology 3'],
      images: [
        '/assets/projects/images/project4-1.jpg',
        '/assets/projects/images/project4-2.jpg',
        '/assets/projects/images/project4-3.jpg',
      ],
      videoUrl: '/assets/projects/videos/project4-demo.mp4',
      github: 'https://github.com/yasithudantha/project4',
      demo: 'https://project4-demo.com',
      highlights: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    {
      id: 5,
      title: 'Project #5 Name',
      category: 'Category',
      shortDescription: '[Add your short description]',
      fullDescription: '[Add your full description]',
      problem: '[Describe the problem you solved]',
      solution: '[Explain your solution]',
      result: '[Share the results/impact]',
      techStack: ['Technology 1', 'Technology 2', 'Technology 3'],
      images: [
        '/assets/projects/images/project5-1.jpg',
        '/assets/projects/images/project5-2.jpg',
        '/assets/projects/images/project5-3.jpg',
      ],
      videoUrl: '/assets/projects/videos/project5-demo.mp4',
      github: 'https://github.com/yasithudantha/project5',
      demo: 'https://project5-demo.com',
      highlights: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
  ];

  // Featured projects (show on main page)
  const featuredProjects = projects.slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
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
              Featured Projects
            </span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-4 text-lg">Showcasing my best AI, ML, and full-stack projects</p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
                setIsAutoRotating(true);
                setIsVideoPlaying(true);
              }}
              className="group cursor-pointer"
            >
              {/* Project Card */}
              <div
                className="glass rounded-2xl border border-cyan-400 border-opacity-30 overflow-hidden h-full hover:border-opacity-60 transition-all duration-300"
                style={{
                  background: 'rgba(0, 212, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-pink-500 overflow-hidden">
                  {/* Project Image */}
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-center"
                    >
                      <p className="font-bold text-lg">View Details</p>
                    </motion.div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-50 px-3 py-1 rounded-full text-xs text-white">
                    {project.images.length} images
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-400 text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.shortDescription}</p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-pink-500 bg-opacity-20 text-pink-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 text-gray-400">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                      setIsAutoRotating(true);
                      setIsVideoPlaying(true);
                    }}
                    className="w-full py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300 font-semibold"
                  >
                    View Full Project →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedProject(projects[0]);
              setCurrentImageIndex(0);
              setIsAutoRotating(true);
              setIsVideoPlaying(true);
            }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Full-Screen Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl border border-cyan-400 border-opacity-50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: 'rgba(10, 14, 39, 0.95)',
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.3)',
              }}
            >
              <div className="relative">
                {/* Header with AUTO-ROTATING Image Carousel */}
                <div className="relative w-full bg-black overflow-hidden rounded-t-3xl" style={{ aspectRatio: '16/9' }}>
                  {/* Project Image - Auto-rotates */}
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Close Button - Top Right */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all z-10"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  {/* Image Navigation - Bottom Center */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black bg-opacity-50 px-4 py-3 rounded-full z-10">
                      {selectedProject.images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleImageDotClick(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentImageIndex === idx
                              ? 'bg-cyan-400 w-8'
                              : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                      {/* Auto-rotate indicator text */}
                      <span className="text-xs text-gray-300 ml-2">
                        {isAutoRotating ? '⏱️ ' : '⏸️'}
                      </span>
                    </div>
                  )}

                  {/* Auto-rotate status indicator */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute top-6 left-6 bg-black bg-opacity-50 px-3 py-1 rounded-full text-xs text-white z-10">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Title & Category */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-cyan-500 bg-opacity-20 text-cyan-400 text-sm font-semibold rounded-full mb-4">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Problem - Solution - Result */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 py-8 border-y border-cyan-400 border-opacity-30">
                    <div>
                      <h3 className="text-cyan-400 font-bold text-lg mb-2">🎯 Problem</h3>
                      <p className="text-gray-300 text-sm">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-pink-400 font-bold text-lg mb-2">💡 Solution</h3>
                      <p className="text-gray-300 text-sm">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-bold text-lg mb-2">🏆 Result</h3>
                      <p className="text-gray-300 text-sm">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">✨ Key Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-cyan-400 text-xl">→</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">🛠️ Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Demo Video - CUSTOM CONTROLS */}
                  {selectedProject.videoUrl && !selectedProject.videoUrl.includes('Add') && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">🎬 Project Demo Video</h3>
                      <motion.div
                        ref={videoContainerRef}
                        className="relative rounded-2xl overflow-hidden border border-cyan-400 border-opacity-50 bg-black"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ aspectRatio: '16/9' }}
                      >
                        <video
                          ref={videoRef}
                          muted
                          loop
                          className="w-full h-full"
                          onLoadedMetadata={(e) => {
                            e.target.play().catch(() => {
                              console.log('Auto-play prevented');
                            });
                          }}
                        >
                          <source src={selectedProject.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        {/* Custom Video Controls - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center justify-between">
                          {/* Play/Pause Button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleVideoPlayPause}
                            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition-all"
                            title={isVideoPlaying ? 'Pause' : 'Play'}
                          >
                            {isVideoPlaying ? (
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </motion.button>

                          {/* Fullscreen Button - Only Button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleVideoFullscreen}
                            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition-all"
                            title={isVideoFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                          >
                            {isVideoFullscreen ? (
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                              </svg>
                            )}
                          </motion.button>
                        </div>

                        {/* Loading/Info Text */}
                        <p className="absolute inset-0 flex items-center justify-center text-white text-sm pointer-events-none opacity-0 group-hover:opacity-100">
                          Muted • Controls at bottom
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedProject.github && !selectedProject.github.includes('Add') && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all font-bold text-center"
                      >
                        💻 View Code
                      </motion.a>
                    )}
                    {selectedProject.demo && !selectedProject.demo.includes('Add') && (
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all font-bold text-center"
                      >
                        🚀 Live Demo
                      </motion.a>
                    )}
                  </div>

                  {/* Placeholder for missing links */}
                  {(selectedProject.github?.includes('Add') || selectedProject.demo?.includes('Add')) && (
                    <div className="mt-6 p-4 bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg">
                      <p className="text-yellow-300 text-sm">
                        ℹ️ Add your GitHub and Demo links to Projects.jsx to enable these buttons
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}