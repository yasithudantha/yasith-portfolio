import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Your skills organized by category
  const skillCategories = [
    {
      category: 'Frontend Development',
      color: 'from-cyan-500 to-blue-500',
      icon: '💻',
      skills: [
        { name: 'HTML5 & CSS3', level: 95, description: 'Advanced' },
        { name: 'JavaScript ES6+', level: 60, description: 'Intermediate' },
        { name: 'React.js', level: 60, description: 'Intermediate' },
        { name: 'Tailwind CSS', level: 30, description: 'Beginner' },
        { name: 'Vue.js', level: 50, description: 'Beginner' },
      ],
    },
    {
      category: 'Backend Development',
      color: 'from-pink-500 to-red-500',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 80, description: 'Intermediate' },
        { name: 'Node.js & Express', level: 60, description: 'Intermediate' },
        { name: 'Flask', level: 60, description: 'Intermediate' },
        { name: 'Java', level: 80, description: 'Intermediate' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      color: 'from-purple-500 to-indigo-500',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow & Keras', level: 60, description: 'Beginner' },
        { name: 'PyTorch', level: 60, description: 'Beginner' },
        { name: 'Deep Learning', level: 80, description: 'Intermediate' },
        { name: 'LSTM & RNN', level: 80, description: 'Intermediate' },
        { name: 'Random Forest & Decision Trees', level: 80, description: 'Intermediate' },
        { name: 'ARIMA & Time Series', level: 80, description: 'Intermediate' },
        { name: 'Scikit-Learn', level: 80, description: 'Intermediate' },
        { name: 'Natural Language Processing', level: 80, description: 'Intermediate' },
      ],
    },
    {
      category: 'Databases & Tools',
      color: 'from-green-500 to-teal-500',
      icon: '🗄️',
      skills: [
        { name: 'SQL', level: 80, description: 'Intermediate' },
        { name: 'NoSQL', level: 60, description: 'Intermediate' },
        { name: 'Git & GitHub', level: 80, description: 'Advanced' },
        { name: 'MongoDB', level: 60, description: 'Intermediate' },
      ],
    },
  ];

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

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
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
              Technical Skills
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
            Proficiency levels across Frontend, Backend, AI/ML, and Tools
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIdx) => (
            <motion.div key={categoryIdx} variants={itemVariants}>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {category.category}
                  </h3>
                </div>

                {/* Skills in this category */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      onMouseEnter={() =>
                        setHoveredSkill(`${categoryIdx}-${skillIdx}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ x: 10 }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white font-semibold">
                          {skill.name}
                        </h4>
                        <span className="text-xs px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-400 rounded-full">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="glass rounded-full h-3 overflow-hidden border border-cyan-400 border-opacity-30">
                        {/* Animated Progress Fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: skillIdx * 0.1,
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} relative`}
                          style={{
                            boxShadow: `0 0 20px ${
                              category.color.includes('cyan')
                                ? 'rgba(0, 212, 255, 0.5)'
                                : category.color.includes('pink')
                                ? 'rgba(255, 0, 110, 0.5)'
                                : 'rgba(147, 51, 234, 0.5)'
                            }`,
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                            animate={{ x: ['0%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIdx * 0.1,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill Description */}
                      <p className="text-gray-400 text-xs mt-1">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-display">
            Skills Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Languages & Frameworks',
                count: '15+',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'AI/ML Technologies',
                count: '8',
                color: 'from-pink-500 to-red-500',
              },
              {
                title: 'Database Systems',
                count: '4',
                color: 'from-purple-500 to-indigo-500',
              },
              {
                title: 'Professional Tools',
                count: '10+',
                color: 'from-green-500 to-teal-500',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 border border-cyan-400 border-opacity-30 text-center hover:border-opacity-60 transition-all"
              >
                <div
                  className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.count}
                </div>
                <p className="text-gray-300 font-semibold">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning & Continuous Growth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div
            className="glass rounded-3xl border border-pink-400 border-opacity-50 p-10 text-center"
            style={{
              background: 'rgba(255, 0, 110, 0.08)',
              boxShadow: '0 8px 32px rgba(255, 0, 110, 0.1)',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-display">
              🚀 Continuous Learning
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm constantly expanding my skill set. Currently exploring advanced
              topics in{' '}
              <span className="text-cyan-400 font-semibold">
                Computer Vision, Reinforcement Learning
              </span>
              , and{' '}
              <span className="text-pink-400 font-semibold">
                Generative AI Models
              </span>
              . My philosophy: Master the fundamentals, then innovate at the
              edges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}