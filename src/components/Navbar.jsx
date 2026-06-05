import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        {/* Glassmorphic Background */}
        <div
          className={`glass px-6 py-4 rounded-full border border-cyan-400 border-opacity-30 transition-all duration-300 ${
            scrolled ? 'backdrop-blur-xl bg-opacity-20' : 'backdrop-blur-md bg-opacity-10'
          }`}
          style={{
            background: scrolled
              ? 'rgba(10, 14, 39, 0.4)'
              : 'rgba(10, 14, 39, 0.2)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 212, 255, 0.15)'
              : '0 4px 16px rgba(0, 212, 255, 0.1)',
          }}
        >
          <div className="flex items-center justify-between gap-8 max-w-6xl">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center gap-2"
            >
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition"></div>
                {/* Logo text */}
                <span className="relative text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  YU
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-200 hidden sm:inline">
                Yasith
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  {link.name}
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Right Section - Dark Mode Toggle + Menu Button */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
                title="Toggle dark mode"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121-2.121a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414-1.414zM2.458 12.568a1 1 0 10-1.414-1.414L1.044 11.45a1 1 0 001.414 1.414l.018.018zm9.542-4.944a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zm2.121 2.121a1 1 0 10-1.414-1.414l-2.121 2.121a1 1 0 101.414 1.414l2.121-2.121zm-8.546.414a1 1 0 111.414-1.414L9.172 9.172a1 1 0 00-1.414 1.414l.707.707zm0 2.121a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM12 6a1 1 0 110-2 1 1 0 010 2zm0 8a1 1 0 110-2 1 1 0 010 2zm4-3a1 1 0 110-2 1 1 0 010 2zm-8 4a1 1 0 110-2 1 1 0 010 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.button>

              {/* Hamburger Menu Button (Mobile) */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 border-t border-cyan-400 border-opacity-20 mt-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white hover:bg-opacity-5 rounded transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Add padding to page to account for fixed navbar */}
      <div className="h-20" />
    </>
  );
}