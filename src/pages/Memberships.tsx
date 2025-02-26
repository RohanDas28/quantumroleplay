import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Define the types of available memberships
const membershipTiers = [
  {
    id: "elite",
    title: "Elite",
    price: "₹399",
    period: "monthly",
    category: "Monthly",
    description: "Entry-level membership for casual players",
    color: "blue",
    features: [
      "1x PDM under 100k",
      "1x Tier 1 EDM",
      "1x EDM Bike",
      "50k In Game Money",
      "Custom Phone Number 7 Digits",
      "Discord Role"
    ],
    recommended: false
  },
  {
    id: "vip",
    title: "V.I.P",
    price: "₹799",
    period: "monthly",
    category: "Monthly",
    description: "Enhanced features for serious players",
    color: "purple",
    features: [
      "2x EDM Bike",
      "1x Tier 1 EDM",
      "1x Tier 2 EDM",
      "75k In Game Money",
      "Custom Phone Number 6 Digits",
      "Level 4 Queue Prio",
      "Discord Role"
    ],
    recommended: false
  },
  {
    id: "prestige",
    title: "Prestige",
    price: "₹1199",
    period: "monthly",
    category: "Monthly",
    description: "Premium experience with exclusive features",
    color: "purple",
    features: [
      "3x EDM Bike",
      "2x Tier 1 EDM",
      "1x Tier 2 EDM",
      "150k In Game Money",
      "1x Tier 3 EDM",
      "Custom Phone Number 5 Digits",
      "Level 3 Queue Prio",
      "Discord Role"
    ],
    recommended: false
  },
  {
    id: "legendary",
    title: "Legendary",
    price: "₹2199",
    period: "monthly",
    category: "Monthly",
    description: "Legendary status with high-tier benefits",
    color: "gold",
    features: [
      "4x EDM Bike",
      "3x Tier 1 EDM",
      "2x Tier 2 EDM",
      "200k In Game Money",
      "1x Exclusive EDM",
      "Custom Phone Number 4 Digits",
      "1/1 EDM",
      "1x Custom No. Plate 6 Digits",
      "Discord Role",
      "Tier 1 House"
    ],
    recommended: true
  },
  {
    id: "supreme",
    title: "Supreme",
    price: "₹3499",
    period: "monthly",
    category: "Monthly",
    description: "Supreme membership for the dedicated elite",
    color: "gold",
    features: [
      "4x Tier 1 EDM",
      "3x Tier 2 EDM",
      "250k In Game Money",
      "2x Exclusive EDM",
      "Custom Phone Number 3 Digits",
      "1 PDM under 150k",
      "2x Custom No. Plate 5 Digits",
      "Tier 2 House",
      "Level 2 Queue Prio",
      "1x Custom Livery",
      "Heli Access (1 Months)"
    ],
    recommended: false
  },
  {
    id: "overlord",
    title: "Overlord",
    price: "₹6499",
    period: "monthly",
    category: "Monthly",
    description: "Ultimate overlord status with exclusive access",
    color: "gold",
    features: [
      "5x Tier 1 EDM",
      "4x Tier 2 EDM",
      "3x Tier 3 EDM",
      "300k In Game Money",
      "4x Custom No. Plate 4 Digits",
      "Custom Phone Number 2 Digits",
      "Tier 3 House",
      "8x Custom No. Plate 3 Digits",
      "10x Custom No. Plate 2 Digits",
      "Custom Storage 2000kg",
      "Level 1 Queue Prio",
      "Direct Entry Prio",
      "Heli Access",
      "Yacht Access"
    ],
    recommended: false
  }
];

const Memberships = () => {
  // Glitch effect for title
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

  // Function to get color values based on tier color
  const getColorValues = (color) => {
    switch(color) {
      case 'gold':
        return {
          primary: '#FFD700',
          hover: '#F5CB4C',
          border: 'border-[#FFD700]/30',
          text: 'text-[#FFD700]',
          bgGradient: 'from-[#FFD700]/20 to-transparent',
          shadow: '0 0 15px rgba(255, 215, 0, 0.3)',
          buttonText: 'text-black'
        };
      case 'purple':
        return {
          primary: '#B14EFF',
          hover: '#9D3EE8',
          border: 'border-[#B14EFF]/30',
          text: 'text-[#B14EFF]',
          bgGradient: 'from-[#B14EFF]/20 to-transparent',
          shadow: '0 0 15px rgba(177, 78, 255, 0.3)',
          buttonText: 'text-white'
        };
      default: // blue
        return {
          primary: '#00F0FF',
          hover: '#00D6E4',
          border: 'border-[#00F0FF]/30',
          text: 'text-[#00F0FF]',
          bgGradient: 'from-[#00F0FF]/20 to-transparent',
          shadow: '0 0 15px rgba(0, 240, 255, 0.3)',
          buttonText: 'text-black'
        };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Cyberpunk grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-cyan-900/5 to-black"></div>
          
          {/* Horizontal grid lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`h-${i}`} 
                className="absolute h-px w-full bg-cyan-500/10" 
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
          
          {/* Vertical grid lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`v-${i}`} 
                className="absolute w-px h-full bg-purple-500/10" 
                style={{ left: `${i * 5}%` }}
              />
            ))}
          </div>
        </div>
        
        {/* Cyber circles */}
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>
      
      {/* Digital scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-scanline opacity-10"></div>
      
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="glitch-effect text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">MEMBERSHIP</span>
                <span className="absolute top-0 left-0 text-cyan-400 opacity-70 blur-[1px] glitch-1">MEMBERSHIP</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">TIERS</span>
                <span className="absolute top-0 left-0 text-purple-500 opacity-70 blur-[1px] glitch-2">TIERS</span>
              </span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Enhance your roleplaying experience with premium features and exclusive benefits
            </p>
          </motion.div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier, index) => {
              const colors = getColorValues(tier.color);
              
              return (
                <motion.div 
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="relative h-full flex flex-col overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    {/* Gradient top border based on tier color */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/80 to-transparent" 
                      style={{
                        background: `linear-gradient(90deg, transparent, ${colors.primary}80, transparent)`
                      }}
                    ></div>
                    
                    {/* Recommended badge */}
                    {tier.recommended && (
                      <div className="absolute top-0 right-0 bg-[#FFD700] text-black font-bold text-xs px-4 py-1 transform translate-x-8 translate-y-4 rotate-45 shadow-lg z-20">
                        BEST VALUE
                      </div>
                    )}
                    
                    {/* Background glow effect for cards */}
                    <div 
                      className="absolute inset-0 opacity-10 z-0" 
                      style={{
                        background: `radial-gradient(circle at center, ${colors.primary}30 0%, transparent 70%)`
                      }}
                    ></div>
                    
                    <div className={`p-6 border-b border-gray-800 relative z-10`}>
                      <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                        {tier.title}
                      </h3>
                      <div className="flex items-baseline">
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {tier.price}
                        </span>
                        <span className="text-gray-400 ml-1">/{tier.period}</span>
                      </div>
                      <p className="text-gray-300 mt-2">{tier.description}</p>
                    </div>
                    
                    <div className="p-6 flex-grow relative z-10">
                      <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-bold">Features</h4>
                      <ul className="space-y-3">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className={`mr-2 h-5 w-5 flex-shrink-0 ${colors.text}`} />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-6 mt-auto relative z-10">
                      <button
                        className={`w-full py-3 px-6 rounded font-bold tracking-wide transition-all duration-300 
                          ${colors.buttonText} flex items-center justify-center overflow-hidden relative`}
                        style={{
                          backgroundColor: colors.primary,
                          boxShadow: colors.shadow
                        }}
                      >
                        <span className="relative z-10">SELECT {tier.title.toUpperCase()}</span>
                        <span 
                          className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${colors.primary}, ${colors.hover})`
                          }}
                        ></span>
                        <ArrowRight className="inline ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What are EDM vehicles?",
                  answer: "EDM (Exclusive Donor Motors) vehicles are special cars only available to members. They come in different tiers with Tier 1 being standard models, while higher tiers offer enhanced performance and exclusive customization options."
                },
                {
                  question: "How does queue priority work?",
                  answer: "Queue priority allows you to bypass waiting times when logging into the server. Higher membership tiers provide better queue positions, with Level 1 offering the fastest server entry experience possible."
                },
                {
                  question: "What are custom number plates?",
                  answer: "Custom number plates allow you to personalize your vehicles with unique identification plates. The digit number refers to how many characters you can customize, with lower digits offering more exclusive customization options."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg p-6 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start">
                    <HelpCircle className="text-cyan-400 h-6 w-6 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for cyberpunk elements */}
      <style>{`
        /* Scanline effect */
        .bg-scanline {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
          background-repeat: repeat;
          pointer-events: none;
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

export default Memberships;