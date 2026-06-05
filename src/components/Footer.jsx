import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-400 border-opacity-30 mt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary to-primary opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Yasith Udantha</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI & ML Engineer building intelligent systems that solve real-world problems. Passionate about Machine Learning and Deep Learning.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Email: <span className="text-cyan-400">yasith.udantha@gmail.com</span>
              </p>
              <p className="text-gray-400 text-sm">
                Location: <span className="text-pink-400">Minuwangoda, Gampaha, Sri Lanka</span>
              </p>
              <p className="text-gray-400 text-sm">
                Status: <span className="text-green-400">Open to Internship Opportunities</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Yasith Udantha. All rights reserved. Built with React + Tailwind CSS
          </p>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:bg-opacity-10 transition-all text-sm"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}