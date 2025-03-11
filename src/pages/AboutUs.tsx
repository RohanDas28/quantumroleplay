import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

// Staff data for the team section
const staffMembers = [
  {
    id: 1,
    name: "VOID",
    role: "Owner",
    avatar: "https://cdn.discordapp.com/avatars/680621550273298487/39a10f1ce940fef30d25ceb52bdb3781.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Owner with full administrative permissions across all platforms."
  },
  {
    id: 2,
    name: "RORO",
    role: "Owner",
    avatar: "https://media.discordapp.net/attachments/1057671276551995414/1345841569340588123/image.png?ex=67d138e2&is=67cfe762&hm=fe0d243c76d369452cf67e544b85fcdbb49ca0ef4a90c606ce0d33ecca3c09a2&=&format=webp&quality=lossless&width=137&height=133",
    description: "Owner with extensive management capabilities and oversight."
  },
  {
    id: 3,
    name: "Samuel",
    role: "Management",
    avatar: "https://media.discordapp.net/attachments/1239804414315859989/1345835641858166804/image.png?ex=67d1335d&is=67cfe1dd&hm=1858da75637c213c8cd3c86002de50f40e0c48f88daf8fc61d818743d894b59d&=&format=webp&quality=lossless&width=428&height=383",
    description: "Management team ensuring smooth operations and player engagement."
  },
  {
    id: 4,
    name: "Daichi",
    role: "Management",
    avatar: "https://cdn.discordapp.com/avatars/590944873209790484/410fc853921458d6be6e5d4079a0c28e.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Management team ensuring smooth operations and player engagement."
  },
  {
    id: 5,
    name: "Lex",
    role: "Developer",
    avatar: "https://cdn.discordapp.com/avatars/510705890287026178/ad4f45330a6721b9d93af43e9ed3de2c.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Developer responsible for creating and maintaining game features."
  },
  {
    id: 5,
    name: "Vinayak",
    role: "Developer",
    avatar: "https://cdn.discordapp.com/avatars/552701955999268894/62da76228716195867ce186d4493c96b.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Developer responsible for creating and maintaining game features."
  },
  {
    id: 5,
    name: "Skyaimer",
    role: "Developer",
    avatar: "https://cdn.discordapp.com/avatars/512551029326217216/e2bfc51a0595f666d02a85c9f67b3f2e.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Developer responsible for creating and maintaining game features."
  },
  {
    id: 7,
    name: "Vatsa",
    role: "Asset Developer",
    avatar: "https://cdn.discordapp.com/avatars/1102116373703954513/ecc7a6e2e388582cc545f72ccbae0565.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Asset Developer focused on creating immersive game assets."
  },
  {
    id: 8,
    name: "Rifty",
    role: "Asset Developer",
    avatar: "https://cdn.discordapp.com/avatars/280974460440412160/ed8098d59eee051742f9e803fe8412fb.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Asset Developer dedicated to enhancing the game's visual experience."
  },
  {
    id: 9,
    name: "Ronny",
    role: "Admin",
    avatar: "https://cdn.discordapp.com/avatars/1138129559351476335/419834bd74fb22f9965eaa8eff64614d.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Admin overseeing various game management aspects."
  },
  {
    id: 10,
    name: "4DxAssassin",
    role: "Admin",
    avatar: "https://cdn.discordapp.com/avatars/701178026117038152/a_356abf2211b2531c30b62a3f86e0ad72.gif?size=4096&width=461&height=461",
    description: "Admin overseeing various game management aspects."
  },
  {
    id: 12,
    name: "Octet",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/421967415509778433/d67a05c9c0e7728663f40693a73bb8e7.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Crew member assisting in various game operations."
  },
  {
    id: 13,
    name: "Ralfie",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/492732453513854986/a_9f3b820c41b489de6b6cd9dd0f4ace4d.gif?size=4096&width=461&height=461",
    description: "Crew member helping in game operations and events."
  },
  {
    id: 14,
    name: "Tony",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/494195093419327520/3717bb4d74704188b88b149688822d0d.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Crew member assisting with in-game tasks and logistics."
  },
  {
    id: 15,
    name: "Spyker",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/691352270872248330/013597d78bbd889f53101398c9928720.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Crew member contributing to game activities and roleplay events."
  },
  {
    id: 16,
    name: "Mercenary",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/843443533671170068/a_dd1ed069732b8575b0ffd550ff95eea2.gif?size=4096&width=461&height=461",
    description: "Crew member providing additional support in various game tasks."
  },
  {
    id: 17,
    name: "Clashing",
    role: "Crew",
    avatar: "https://cdn.discordapp.com/avatars/536171174225379359/ab910a82d7f37e2f5087db145e66e5f9.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Crew member engaging in roleplay and helping maintain game order."
  },
  {
    id: 18,
    name: "Mitul",
    role: "Support",
    avatar: "https://cdn.discordapp.com/avatars/716899319680335921/f5de9e43797e3e5e8d6ca0d2d4a09b68.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Support staff dedicated to resolving player issues and enhancing experience."
  },
  {
    id: 19,
    name: "Tarun",
    role: "Support",
    avatar: "https://cdn.discordapp.com/avatars/979129876634292275/001e6d4e05d772d406463fdd5166e5b7.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Support staff focused on player assistance and community relations."
  },
  {
    id: 20,
    name: "Rigbyte",
    role: "Support",
    avatar: "https://cdn.discordapp.com/avatars/437161594515095553/47a60ba64407b9f4bfa06eb2e12a67ca.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Support staff focused on player assistance and community relations."
  },
  {
    id: 21,
    name: "Joy",
    role: "Support",
    avatar: "https://cdn.discordapp.com/avatars/952532013351591966/592a2a8bad69dffe71f65487cb19b87c.png?size=4096&format=webp&quality=lossless&width=461&height=461",
    description: "Support staff focused on player assistance and community relations."
  },
];


const AboutUs = () => {
  // Group staff by role
  const ownerStaff = staffMembers.filter(member => member.role === "Owner");
  const managementStaff = staffMembers.filter(member => member.role === "Management");
  const developerStaff = staffMembers.filter(member => member.role.includes("Developer") || member.role === "Developer");
  const adminStaff = staffMembers.filter(member => member.role === "Admin");
  const crewStaff = staffMembers.filter(member => member.role === "Crew");
  const supportStaff = staffMembers.filter(member => member.role === "Support");

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

  // Function to get color values for styling elements
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

  // Render staff section
  const renderStaffSection = (title, staffList, colorKey) => {
    const colorValues = getColorValues(colorKey);

    return (
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {staffList.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.05) }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm flex justify-center"
            >
              <Card className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden relative w-full flex flex-col items-center justify-center">
                {/* Gradient top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colorValues.primary}80, transparent)`
                  }}
                ></div>

                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-10 z-0"
                  style={{
                    background: `radial-gradient(circle at center, ${colorValues.primary}30 0%, transparent 70%)`
                  }}
                ></div>

                <div className="p-6 text-center relative z-10">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <img src={member.avatar} alt={member.name} />
                  </Avatar>

                  <h3 className="text-xl font-bold mb-1"
                    style={{
                      color: colorValues.primary
                    }}
                  >
                    {member.name}
                  </h3>

                  <Badge
                    className="mb-4"
                    style={{
                      backgroundColor: `${colorValues.primary}40`
                    }}
                  >
                    {member.role}
                  </Badge>

                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
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

          {/* Team Sections - Grouped by role */}
          <div className="mb-16">
            {renderStaffSection("OWNERS", ownerStaff, "gold")}
            {renderStaffSection("MANAGEMENT", managementStaff, "purple")}
            {renderStaffSection("DEVELOPERS", developerStaff, "purple")}
            {renderStaffSection("ADMINS", adminStaff, "purple")}
            {renderStaffSection("CREW", crewStaff, "blue")}
            {renderStaffSection("SUPPORT", supportStaff, "blue")}
          </div>

          {/* Our Mission Section */}
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 relative overflow-hidden w-full max-w-4xl">
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
                  Quantum Roleplay is dedicated to creating the most immersive and engaging roleplaying experience in India.
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center"
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
