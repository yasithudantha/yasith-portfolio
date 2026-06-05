import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  // Get the form element
  const form = e.target;

  // Create FormData from the form
  const formDataObj = new FormData(form);

  // Send to Formspree
  fetch(form.action, {
    method: 'POST',
    body: formDataObj,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
};

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-white text-3xl mb-2 mx-auto" />,
      url: 'https://github.com/yasithudantha',
      description: 'Check out my projects',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-[#0A66C2] text-3xl mb-2 mx-auto" />,
      url: 'https://linkedin.com/in/yasith-udantha',
      description: 'Connect professionally',
    },
    {
      name: 'X',
      icon: <FaXTwitter className="text-white text-3xl mb-2 mx-auto" />,
      url: 'https://x.com/UdanthaYas93546',
      description: 'Follow my thoughts',
    },
    {
      name: 'Instagram',
      icon:<FaInstagram className="text-[#E1306C] text-3xl mb-2 mx-auto" />,
      url: 'https://www.instagram.com/yasithudantha',
      description: 'Behind the scenes',
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-3xl mb-2" />,
      label: 'Email',
      value: 'yasith.udantha@gmail.com',
      description: 'I will respond as soon as possible.',
    },
    {
      icon: <FaMapMarkerAlt className="text-pink-500 text-3xl mb-2" />,
      label: 'Location',
      value: 'Minuwangoda, Gampaha, Sri Lanka',
      description: 'Open to remote, hybrid, and on-site roles.',
    },
    {
      icon: <FaBriefcase className="text-purple-500 text-3xl mb-2" />,
      label: 'Status',
      value: 'Open to Internship Opportunities',
      description: 'Actively looking for AI & ML Engineer internship positions.',
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
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
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
              Get In Touch
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
            Let's create something amazing together
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-display">
              Let's Connect
            </h3>

            {/* Contact Information Cards */}
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass rounded-xl p-6 border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{info.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {info.label}
                    </h4>
                    <p className="text-cyan-400 font-semibold mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Follow Me On
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass rounded-lg p-4 border border-pink-400 border-opacity-30 hover:border-opacity-60 transition-all text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <p className="text-white font-semibold text-sm">
                      {link.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {link.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="glass rounded-3xl border border-cyan-400 border-opacity-50 p-10"
              style={{
                background: 'rgba(0, 212, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 font-display">
                Send Me a Message
              </h3>

              <form action="https://formspree.io/f/meedvpeq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                 {/* Name Input */}
                 <div>
                   <label className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alan Turing"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-cyan-400 border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all"
                  />
                  </div>

                  {/* Email Input */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                  Your Email
                  </label>
                  <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Alan@example.com"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-cyan-400 border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all"
                  />
                </div>

                  {/* Message Input */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                  Your Message
                  </label>
                  <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-cyan-400 border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all resize-none"
                  />
                </div>

                  {/* Submit Button */}
                  <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                >
                  {loading ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  'Send Message'
                )}
                  </motion.button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-50 rounded-lg text-green-400 text-center font-semibold"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}