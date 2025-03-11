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
      "50k In Game Money",
      "Custom Phone Number 7 Digits",
      "Exclusive Discord Role"
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
      "1x Tier 1 EDM",
      "1x Tier 2 EDM",
      "75K In-Game Money",
      "1x PDM Vehicle (Under 150K)",
      "Tier 1 House",
      "Custom 6-Digit Phone Number",
      "1x Custom 6-Digit License Plate",
      "Level 4 Queue Priority",
      "Exclusive Discord Role"
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
      "2x Tier 1 EDM",
      "1x Tier 2 EDM",
      "1x EDM Bike",
      "150K In-Game Money",
      "1 PDM under 200k",
      "Tier 2 House",
      "Custom 5-Digit Phone Number",
      "2x Custom 5-Digit License Plates",
      "Level 3 Queue Priority",
      "Exclusive Discord Role"
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
      "1x Tier 3 EDM",
      "3x Tier 1 EDM",
      "2x Tier 2 EDM",
      "2x EDM Bike",
      "200K In-Game Money",
      "Tier 3 House",
      "Custom 4-Digit Phone Number",
      "4x Custom 4-Digit License Plates",
      "Custom Storage (500kg)",
      "Heli Access (1 Month)",
      "Level 2 Queue Priority",
      "Exclusive Discord Role"
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
      "1x Exclusive EDM",
      "2x Tier 3 EDM",
      "4x Tier 1 EDM",
      "3x Tier 2 EDM",
      "3x EDM Bike",
      "250K In-Game Money",
      "Tier 1 Mansion",
      "Custom 3-Digit Phone Number",
      "8x Custom 3-Digit License Plates",
      "1x Custom Livery",
      "Custom Storage (1000kg)",
      "Heli Access (3 Months)",
      "Yacht Access (1 Month)",
      "Level 1 Queue Priority",
      "Exclusive Discord Role"
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
      "1x 1/1 EDM",
      "2x Exclusive EDM",
      "3x Tier 3 EDM",
      "5x Tier 1 EDM",
      "4x Tier 2 EDM",
      "4x EDM Bike",
      "300K In-Game Money",
      "Tier 2 Mansion",
      "Custom 2-Digit Phone Number",
      "10x Custom 2-Digit License Plates",
      "2x Custom Livery",
      "Custom Storage (2000kg)",
      "Heli Access",
      "Yacht Access",
      "Direct Entry Priority",
      "Exclusive Discord Role"
    ],
    recommended: false
  },
  {
    id: "gang",
    title: "Gang Perk",
    price: "499",
    period: "custom",
    category: "Streamer",
    description: "Special perks Gangs/ Crews",
    color: "red",
    features: [
      "1x Custom Gang Livery",
      "1x Custom Gang Clothing",
    ],
    recommended: false,
    special: true
  },
  {
    id: "gang",
    title: "Elite Gang Perk",
    price: "999",
    period: "custom",
    category: "Streamer",
    description: "Special perks Gangs/ Crews",
    color: "red",
    features: [
      "1x Custom Gang Livery",
      "1x Custom Gang Clothing",
      "Gang Jobs",
      "Custom Gang Territory",
      "Gang Traphouse",
      "Gang Bossmenu/ Boss Stash"
    ],
    recommended: false,
    special: true
  },
  {
    id: "streamer",
    title: "Addon Perk",
    price: "Streamer",
    period: "custom",
    category: "Streamer",
    description: "Special perks for content creators",
    color: "red",
    features: [
      "1x Tier 1 EDM",
      "50k In Game Money",
      "Discord Role (Notify)",
      "Level 4 Queue Priority",
      "Stream Promotion on Discord"
    ],
    recommended: false,
    special: true
  },
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
    switch (color) {
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
      case 'red':
        return {
          primary: '#FF0000',
          hover: '#E00000',
          border: 'border-[#FF0000]/30',
          text: 'text-[#FF0000]',
          bgGradient: 'from-[#FF0000]/20 to-transparent',
          shadow: '0 0 15px rgba(255, 0, 0, 0.3)',
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

  // Default color for most elements
  const mainColor = getColorValues('blue');
  const accentColor = getColorValues('purple');
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
                      <a href="https://discord.com/channels/1048253749321281566/1343927790436876348" target="_blank">
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
                      </a>
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
                  "question": "How do I book a membership?",
                  "answer": "Join our Discord, go to the ticket support section, and open a ticket to proceed with membership booking."
                },
                {
                  "question": "Are there streamer perks?",
                  "answer": "Yes! Open a ticket in our Discord to learn more about exclusive streamer perks."
                },
                {
                  "question": "What is a One-on-One Car?",
                  "answer": "A One-on-One Car is a unique vehicle exclusively available to a single player. To inquire about getting one, open a ticket in our Discord."
                },
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


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center mt-12"
            >
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 text-center relative overflow-hidden w-full max-w-2xl">
                {/* Gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/80 to-transparent"></div>

                {/* Background glow */}
                <div className="absolute inset-0 opacity-10 z-0"
                  style={{
                    background: `radial-gradient(circle at center, ${mainColor.primary}30 0%, transparent 70%)`
                  }}
                ></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    JOIN OUR COMMUNITY
                  </h2>

                  <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
                    Ready to experience the best roleplaying server in India? Join our Discord community and start your adventure today!
                  </p>

                  <button
                    className="py-3 px-8 rounded font-bold tracking-wide transition-all duration-300 flex items-center justify-center mx-auto"
                    style={{
                      backgroundColor: mainColor.primary,
                      color: 'black',
                      boxShadow: mainColor.shadow
                    }}
                  >
                    <a className="relative z-10"
                      href="https://discord.gg/4SBd3S4Fcd"
                      target="_blank"
                      rel="noopener noreferrer"

                    >JOIN DISCORD </a>
                  </button>
                </div>
              </Card>
            </motion.div>
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