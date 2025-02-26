
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'About', path: '/about' },
    // { name: 'Cart', path: '/cart' },
    // { name: 'Orders', path: '/orders' },
  ];

  const navbarVariants = {
    initial: { 
      opacity: 0,
      y: -20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism' : 'bg-transparent'
      }`}
      initial="initial"
      animate="animate"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-cyberpunk tracking-wider neon-text-blue">
                QUANTUM<span className="neon-text-purple">RP</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`
                      font-tech text-sm uppercase tracking-wider px-3 py-2 transition-all duration-300
                      ${location.pathname === link.path 
                        ? 'neon-text-blue font-medium' 
                        : 'text-gray-300 hover:text-white hover:neon-text-blue'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <motion.a
                  href="https://cfx.re/join/yxyvox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyberpunk-button ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Server
                </motion.a>
              </div>
            </div>
          )}
          
          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6 text-cyberpunk-neon-purple" />
                ) : (
                  <Menu className="block h-6 w-6 text-cyberpunk-neon-blue" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="md:hidden glassmorphism border-t border-cyberpunk-blue-primary/20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={mobileItemVariants}>
                  <Link
                    to={link.path}
                    className={`
                      block font-tech text-sm uppercase tracking-wider px-3 py-3 
                      ${location.pathname === link.path 
                        ? 'neon-text-blue font-medium' 
                        : 'text-gray-300 hover:text-white hover:neon-text-blue'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} className="pt-2">
                <a
                  href="https://cfx.re/join/yxyvox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center cyberpunk-button mx-auto my-2"
                >
                  Join Server
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative scanline effect */}
      <div className="scanline"></div>
    </motion.nav>
  );
};

export default Navbar;
