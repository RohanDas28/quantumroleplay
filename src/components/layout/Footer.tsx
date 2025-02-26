
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <MessageSquare className="w-5 h-5" />, url: "https://discord.gg/quantumrp", name: "Discord" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com", name: "YouTube" }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'About', path: '/about' },
    // { name: 'Cart', path: '/cart' },
    // { name: 'Orders', path: '/orders' }
  ];

  return (
    <footer className="relative bg-black text-white py-16 border-t border-[#00F0FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description */}
          <motion.div 
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-2xl font-cyberpunk neon-text-blue mb-4">QUANTUM<span className="neon-text-purple">RP</span></h2>
            <p className="text-gray-300 font-tech mb-6">
              Your ultimate roleplaying experience. Join our community today and become part of the story.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center cyberpunk-card hover:border-[#00F0FF]/50 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            className="md:col-span-3 md:ml-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-lg font-cyberpunk neon-text-blue mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-[#00F0FF] font-tech transition-colors inline-flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Join server */}
          <motion.div 
            className="md:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-lg font-cyberpunk neon-text-blue mb-4">JOIN US</h3>
            <p className="text-gray-300 font-tech mb-6">
              Ready to start your journey? Join our server today or connect with our community on Discord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cfx.re/join/yxyvox"
                target="_blank"
                rel="noopener noreferrer"
                className="cyberpunk-button text-sm flex items-center justify-center"
              >
                Join Server <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a 
                href="https://discord.gg/quantumrp"
                target="_blank"
                rel="noopener noreferrer"
                className="cyberpunk-button purple text-sm flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Join Discord
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#00F0FF]/10 text-center">
          <p className="text-gray-400 font-tech text-sm">
            © {new Date().getFullYear()} Quantum Roleplay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
