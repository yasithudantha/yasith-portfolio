import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiCoursera } from 'react-icons/si';
import { MdVerified } from 'react-icons/md';

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null);

  // Your certifications
  const certifications = [
    {
      id: 1,
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'DeepLearning.AI & Stanford University',
      platform: 'Coursera',
      date: '2026',
      icon: <SiCoursera className="text-[#0056D2] text-4xl" />,
      color: 'from-cyan-500 to-blue-500',
      certificateUrl: 'https://coursera.org/share/c27a3ad762e83ed86ef7944b4dadbf7d',
      skills: ['Unsupervised Learning', 'Recommender Systems', 'Reinforcement Learning'],
    },
    {
      id: 2,
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI & Stanford University',
      platform: 'Coursera',
      date: '2026',
      icon: <SiCoursera className="text-pink-500 text-4xl" />,
      color: 'from-pink-500 to-red-500',
      certificateUrl: 'https://coursera.org/share/0e326bc2e40da323865fddf22ff21da4',
      skills: ['Supervised Learning', 'Deep Learning', 'Decision Tree Learning'],
    },
    {
      id: 3,
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford University',
      platform: 'Coursera',
      date: '2025',
      icon: <SiCoursera className="text-purple-500 text-4xl" />,
      color: 'from-purple-500 to-indigo-500',
      certificateUrl: 'https://coursera.org/share/a539a6afff56834b87059090e440ba69',
      skills: ['Regression', 'Classification', 'Machine Learning'],
    },
  ];

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
    <section id="certifications" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
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
              Certifications & Achievements
            </span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-4 text-lg">
            Professional certifications from top institutions
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Certificate Card */}
              <div
                className="glass rounded-2xl border border-opacity-50 p-8 overflow-hidden h-full flex flex-col hover:border-opacity-100 transition-all duration-300"
                style={{
                  borderColor: cert.color.includes('cyan') ? '#00d4ff' :
                               cert.color.includes('pink') ? '#ff006e' :
                               '#a855f7',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: hoveredCert === cert.id 
                    ? `0 20px 40px ${cert.color.includes('cyan') ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 0, 110, 0.3)'}` 
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Section - Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-5xl"
                      animate={{ rotate: hoveredCert === cert.id ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <span
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        background: cert.color.includes('cyan') ? 'rgba(0, 212, 255, 0.2)' :
                                   cert.color.includes('pink') ? 'rgba(255, 0, 110, 0.2)' :
                                   'rgba(168, 85, 247, 0.2)',
                        color: cert.color.includes('cyan') ? '#00d4ff' :
                               cert.color.includes('pink') ? '#ff006e' :
                               '#a855f7',
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-gray-400 text-sm mb-2">
                    <span className="font-semibold text-cyan-400">{cert.issuer}</span>
                  </p>

                  {/* Platform */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-white bg-opacity-10 rounded text-gray-300">
                      {cert.platform}
                    </span>
                  </div>

                  {/* Skills/Topics */}
                  <div className="mb-6 flex-grow">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Key Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: cert.color.includes('cyan') ? 'rgba(0, 212, 255, 0.15)' :
                                       cert.color.includes('pink') ? 'rgba(255, 0, 110, 0.15)' :
                                       'rgba(168, 85, 247, 0.15)',
                            color: cert.color.includes('cyan') ? '#00d4ff' :
                                   cert.color.includes('pink') ? '#ff006e' :
                                   '#a855f7',
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (cert.certificateUrl.includes('Add your')) {
                        e.preventDefault();
                        alert('📜 Certificate URL not set. Add your Coursera certificate URL in Certifications.jsx');
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 border-2 rounded-lg font-semibold transition-all duration-300 text-center"
                    style={{
                      borderColor: cert.color.includes('cyan') ? '#00d4ff' :
                                  cert.color.includes('pink') ? '#ff006e' :
                                  '#a855f7',
                      color: cert.color.includes('cyan') ? '#00d4ff' :
                             cert.color.includes('pink') ? '#ff006e' :
                             '#a855f7',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = cert.color.includes('cyan') ? 'rgba(0, 212, 255, 0.2)' :
                                                  cert.color.includes('pink') ? 'rgba(255, 0, 110, 0.2)' :
                                                  'rgba(168, 85, 247, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                    }}
                  >
                    View Certificate →
                  </motion.a>
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)',
                  pointerEvents: 'none',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 0.6,
                  repeat: hoveredCert === cert.id ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Verification Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div
            className="glass rounded-2xl border border-cyan-400 border-opacity-50 p-8 text-center"
            style={{
              background: 'rgba(0, 212, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
            }}
          >
            <h3 className="flex items-center justify-center text-2xl font-bold text-white mb-3"> <MdVerified className="text-blue-400 text-3xl mr-3" /> Verified Credentials</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All certifications are verified through official platforms. Each certificate can be viewed and validated directly from the issuing institutions. Click "View Certificate" to open the official certification in a new window.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}