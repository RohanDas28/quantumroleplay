import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Index = () => {
  const heroRef = useRef(null);

  // Glitch effect for hero title
  useEffect(() => {
    const interval = setInterval(() => {
      const glitchElements = document.querySelectorAll('.glitch-effect');
      glitchElements.forEach(element => {
        element.classList.add('glitching');
        setTimeout(() => {
          element.classList.remove('glitching');
        }, 200);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white overflow-hidden bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden"
      >
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-black"></div>

          {/* Horizontal grid lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px w-full bg-cyan-500/20"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>

          {/* Vertical grid lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px h-full bg-purple-500/20"
                style={{ left: `${i * 5}%` }}
              />
            ))}
          </div>
        </div>

        {/* Cyber circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glitch-container"
          >
            <h1 className="glitch-effect text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">QUANTUM</span>
                <span className="absolute top-0 left-0 text-cyan-400 opacity-70 blur-[1px] glitch-1">QUANTUM</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">ROLEPLAY</span>
                <span className="absolute top-0 left-0 text-purple-500 opacity-70 blur-[1px] glitch-2">ROLEPLAY</span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300 tracking-wide">
                Where Dreams Become Reality!
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <motion.a
                href="https://cfx.re/join/yxyvox"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="z-10 font-medium tracking-wider neon-button cyan px-8 py-4 text-lg relative overflow-hidden w-64 text-center">
                  JOIN SERVER <ArrowRight className="inline ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/memberships" className="neon-button purple px-8 py-4 text-lg relative overflow-hidden w-64 text-center block">
                  <span className="relative z-10 font-medium tracking-wider">VIEW MEMBERSHIPS</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Digital scanline effect */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-scanline opacity-10"></div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 w-full flex justify-center z-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-cyan-400 font-light tracking-wider">SCROLL DOWN</span>
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </motion.div>


      </section>

      {/* Server Features Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">SERVER FEATURES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                "title": "Supportive Roleplay",
                "desc": "Engage in immersive roleplay, whether you're a seasoned player or new to FiveM/GTA V.",
                "icon": "🎭"
              },
              {
                "title": "Supportive Economy",
                "desc": "Thrive in a balanced economy with jobs, businesses, and opportunities for all players.",
                "icon": "💰"
              },
              {
                "title": "Gangs & Crews",
                "desc": "Form alliances, build reputations, and dominate the streets with your crew.",
                "icon": "⚔️"
              },
              {
                "title": "Races",
                "desc": "Compete in high-speed street races and climb the ranks of the underground racing scene.",
                "icon": "🏁"
              },
              {
                "title": "Active Community",
                "desc": "Be part of a welcoming and engaging community with frequent interactions and support.",
                "icon": "👥"
              },
              {
                "title": "Community Events",
                "desc": "Join exciting events, competitions, and roleplay-driven activities hosted regularly.",
                "icon": "✨"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-purple-500/20 hover:border-cyan-400/40 transition-colors duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:from-cyan-300 group-hover:to-purple-500 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900/20 to-black overflow-hidden">
        {/* Cyber circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">READY TO DIVE IN?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of roleplayers and immerse yourself in the futuristic world of Quantum Roleplay. The next chapter of your story begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://cfx.re/join/yxyvox"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button cyan px-8 py-4 text-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium tracking-wider">
                  JOIN NOW <ArrowRight className="inline ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
              </motion.a>
              <motion.a
                href="https://discord.gg/4SBd3S4Fcd"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button purple px-8 py-4 text-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium tracking-wider">
                  <MessageSquare className="inline mr-2 h-5 w-5" /> JOIN DISCORD
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* CSS for cyberpunk elements */}
      <style>{`        
        /* Neon buttons */
        .neon-button {
          position: relative;
          display: inline-block;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .neon-button.cyan {
          background-color: rgba(8, 145, 178, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.7);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3), 
                      inset 0 0 5px rgba(6, 182, 212, 0.2);
          color: rgba(6, 182, 212, 1);
        }
        
        .neon-button.purple {
          background-color: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.7);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3), 
                      inset 0 0 5px rgba(168, 85, 247, 0.2);
          color: rgba(168, 85, 247, 1);
        }
        
        .neon-button:hover {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 
                      inset 0 0 10px rgba(6, 182, 212, 0.3);
        }
        
        .neon-button.purple:hover {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 
                      inset 0 0 10px rgba(168, 85, 247, 0.3);
        }
        
        /* Glitch effect */
        .glitching .glitch-1 {
          animation: glitch1 0.2s linear infinite alternate;
        }
        
        .glitching .glitch-2 {
          animation: glitch2 0.2s linear infinite alternate;
        }
        
        @keyframes glitch1 {
          0% { transform: translate(0); }
          25% { transform: translate(-2px, 1px); }
          50% { transform: translate(1px, -1px); }
          75% { transform: translate(-1px, -1px); }
          100% { transform: translate(2px, 1px); }
        }
        
        @keyframes glitch2 {
          0% { transform: translate(0); }
          25% { transform: translate(2px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(-2px, -1px); }
        }
      `}</style>
    </div>
  );
};

export default Index;