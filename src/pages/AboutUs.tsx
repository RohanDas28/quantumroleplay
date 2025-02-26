import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { CheckCircle, HelpCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

// Staff data for the team section
const staffMembers = [
  {
    id: 1,
    name: "VOID",
    role: "Owner",
    avatar: "/placeholder.svg",
    description: "Owner with full administrative permissions across all platforms.",
    achievements: ["Founder of Quantum RolePlay"]
  },
  {
    id: 2,
    name: "RORO",
    role: "Owner",
    avatar: "/placeholder.svg",
    description: "Owner with extensive management capabilities and oversight.",
    achievements: ["Grinder of Quantum RolePlay"]
  },
  {
    id: 3,
    name: "Daichi",
    role: "Management",
    avatar: "/placeholder.svg",
    description: "Management team ensuring smooth operations and player engagement.",
    achievements: ["Server Management"]
  },
  {
    id: 5,
    name: "Lex",
    role: "Developer",
    avatar: "/placeholder.svg",
    description: "Developer responsible for creating and maintaining game features.",
    achievements: ["Server Developer"]
  },
  {
    id: 7,
    name: "Vatsa",
    role: "Asset Developer",
    avatar: "/placeholder.svg",
    description: "Asset Developer focused on creating immersive game assets.",
    achievements: ["Discord Bot Developer"]
  },
  {
    id: 8,
    name: "Rifty",
    role: "Asset Developer",
    avatar: "/placeholder.svg",
    description: "Asset Developer dedicated to enhancing the game's visual experience.",
    achievements: ["Vehicle Developer"]
  },
  {
    id: 9,
    name: "Ronny",
    role: "Admin",
    avatar: "/placeholder.svg",
    description: "Admin with limited permissions, ensuring player support and community management.",
    achievements: ["EMS Management"]
  },
  {
    id: 10,
    name: "4DxAssassin",
    role: "Admin",
    avatar: "/placeholder.svg",
    description: "Admin overseeing various game management aspects.",
    achievements: ["S.A.L.E Management"]
  },
  {
    id: 12,
    name: "Octet",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member assisting in various game operations.",
    achievements: ["Food Business Management", "Gang Management"]
  },
  {
    id: 13,
    name: "Ralfie",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member helping in game operations and events.",
    achievements: []
  },
  {
    id: 14,
    name: "Tony",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member assisting with in-game tasks and logistics.",
    achievements: []
  },
  {
    id: 15,
    name: "Spyker",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member contributing to game activities and roleplay events.",
    achievements: []
  },
  {
    id: 16,
    name: "Mercenary",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member providing additional support in various game tasks.",
    achievements: []
  },
  {
    id: 17,
    name: "Clashing",
    role: "Crew",
    avatar: "/placeholder.svg",
    description: "Crew member engaging in roleplay and helping maintain game order.",
    achievements: []
  },
  {
    id: 18,
    name: "Mitul",
    role: "Support",
    avatar: "/placeholder.svg",
    description: "Support staff dedicated to resolving player issues and enhancing experience.",
    achievements: ["Player Support", "Community Engagement"]
  },
  {
    id: 19,
    name: "Tarun",
    role: "Support",
    avatar: "/placeholder.svg",
    description: "Support staff focused on player assistance and community relations.",
    achievements: ["Player Support", "Community Engagement"]
  },
];

// Testimonials from players
const testimonials = [
  {
    id: 1,
    name: "CyberRider",
    avatar: "/placeholder.svg",
    quote: "The best roleplay experience I've had! The custom features and vehicles make it incredibly immersive.",
    rating: 5
  },
  {
    id: 2,
    name: "NeonDreamer",
    avatar: "/placeholder.svg",
    quote: "Amazing community and staff. They're always helpful and make the server a great place to be.",
    rating: 5
  },
  {
    id: 3,
    name: "SynthWave",
    avatar: "/placeholder.svg",
    quote: "The attention to detail in this server is unmatched. From custom cars to businesses, everything feels real.",
    rating: 5
  }
];

const AboutUs = () => {
  // Glitch effect for title - same as in Memberships component
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

  // Function to get color values for styling elements - similar to the Memberships function
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

  // Default color for most elements
  const mainColor = getColorValues('blue');
  const accentColor = getColorValues('purple');

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Background elements - same as the Memberships background */}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">ABOUT</span>
                <span className="absolute top-0 left-0 text-cyan-400 opacity-70 blur-[1px] glitch-1">ABOUT</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">US</span>
                <span className="absolute top-0 left-0 text-purple-500 opacity-70 blur-[1px] glitch-2">US</span>
              </span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Meet the team behind QUANTUM ROLEPLAY and discover what makes our community special
            </p>
          </motion.div>
          {/* Team Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              OUR TEAM
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.05) }}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                >
                  <Card className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden relative">
                    {/* Gradient top border */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: member.role === "Owner" 
                          ? `linear-gradient(90deg, transparent, ${getColorValues('gold').primary}80, transparent)`
                          : member.role === "Management" || member.role === "Developer" || member.role === "Admin" 
                            ? `linear-gradient(90deg, transparent, ${getColorValues('purple').primary}80, transparent)`
                            : `linear-gradient(90deg, transparent, ${getColorValues('blue').primary}80, transparent)`
                      }}
                    ></div>
                    
                    {/* Background glow */}
                    <div 
                      className="absolute inset-0 opacity-10 z-0"
                      style={{
                        background: member.role === "Owner" 
                          ? `radial-gradient(circle at center, ${getColorValues('gold').primary}30 0%, transparent 70%)`
                          : member.role === "Management" || member.role === "Developer" || member.role === "Admin"
                            ? `radial-gradient(circle at center, ${getColorValues('purple').primary}30 0%, transparent 70%)`
                            : `radial-gradient(circle at center, ${getColorValues('blue').primary}30 0%, transparent 70%)`
                      }}
                    ></div>
                    
                    <div className="p-6 text-center relative z-10">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <img src={member.avatar} alt={member.name} />
                      </Avatar>
                      
                      <h3 className="text-xl font-bold mb-1"
                        style={{
                          color: member.role === "Owner" 
                            ? getColorValues('gold').primary
                            : member.role === "Management" || member.role === "Developer" || member.role === "Admin"
                              ? getColorValues('purple').primary
                              : getColorValues('blue').primary
                        }}
                      >
                        {member.name}
                      </h3>
                      
                      <Badge 
                        className="mb-4" 
                        style={{
                          backgroundColor: member.role === "Owner" 
                            ? `${getColorValues('gold').primary}40`
                            : member.role === "Management" || member.role === "Developer" || member.role === "Admin"
                              ? `${getColorValues('purple').primary}40`
                              : `${getColorValues('blue').primary}40`
                        }}
                      >
                        {member.role}
                      </Badge>
                      
                      <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                      
                      {member.achievements.length > 0 && (
                        <div className="text-left space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" 
                                style={{
                                  color: member.role === "Owner" 
                                    ? getColorValues('gold').primary
                                    : member.role === "Management" || member.role === "Developer" || member.role === "Admin"
                                      ? getColorValues('purple').primary
                                      : getColorValues('blue').primary
                                }}
                              />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          {/* Our Mission Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 relative overflow-hidden">
              {/* Gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B14EFF]/80 to-transparent"></div>
              
              {/* Background glow */}
              <div className="absolute inset-0 opacity-10 z-0" 
                style={{
                  background: `radial-gradient(circle at center, ${accentColor.primary}30 0%, transparent 70%)`
                }}
              ></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  OUR MISSION
                </h2>
                
                <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto mb-6">
                  BACK TO ROLEPLAY is dedicated to creating the most immersive and engaging roleplaying experience in India. 
                  Our mission is to build a community where players can escape reality and dive into a world of endless possibilities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${accentColor.text}`}>Community First</div>
                    <p className="text-gray-300">We prioritize building a welcoming and supportive community where everyone feels valued</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${accentColor.text}`}>Innovation</div>
                    <p className="text-gray-300">Constantly evolving with new features, vehicles, and experiences to keep gameplay fresh</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${accentColor.text}`}>Quality Experience</div>
                    <p className="text-gray-300">Committed to providing a stable, high-quality server with minimal downtime</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>


          {/* Testimonials */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              PLAYER TESTIMONIALS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden relative">
                    {/* Gradient top border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/80 to-transparent"></div>
                    
                    {/* Background glow */}
                    <div className="absolute inset-0 opacity-10 z-0" 
                      style={{
                        background: `radial-gradient(circle at center, ${mainColor.primary}30 0%, transparent 70%)`
                      }}
                    ></div>
                    
                    <div className="p-6 relative z-10">
                      <div className="flex items-center mb-4">
                        <Avatar className="w-12 h-12 mr-4">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </Avatar>
                        <div>
                          <div className={`font-bold ${mainColor.text}`}>{testimonial.name}</div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <MessageCircle className={`absolute -top-1 -left-1 w-8 h-8 opacity-20 ${mainColor.text}`} />
                        <p className="text-gray-300 italic pl-6">"{testimonial.quote}"</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 text-center relative overflow-hidden">
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
                  <span className="relative z-10">JOIN DISCORD</span>
                </button>
              </div>
            </Card>
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

export default AboutUs;