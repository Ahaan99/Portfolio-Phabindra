import { motion } from 'framer-motion';
import userProfile from '../assets/user_profile.jpg';

export default function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  const statItemVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.section 
      className="bg-card-bg/75 border border-theme-border rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-center shadow-2xl h-full backdrop-blur-xl transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      id="about"
    >
      {/* 3D Illustration Star Container */}
      <div className="w-full sm:w-1/2 flex justify-center relative">
        <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center">
          {/* Star Backdrop SVG */}
          <motion.svg 
            viewBox="0 0 24 24" 
            className="absolute w-full h-full text-brand-orange/20 fill-brand-orange/10 filter drop-shadow-[0_0_15px_rgba(255,123,2,0.1)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
          </motion.svg>
          
          {/* User profile image container with glow */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-brand-orange-light to-brand-orange rounded-full p-1 shadow-[0_10px_35px_rgba(255,123,2,0.2)] z-10 overflow-hidden">
            <div className="w-full h-full bg-card-bg rounded-full overflow-hidden flex items-center justify-center relative">
              <img 
                src={userProfile} 
                alt="About Phabindra" 
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Info content */}
      <div className="w-full sm:w-1/2 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-text-primary to-brand-orange bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-brand-text-secondary text-sm leading-relaxed font-medium">
            I am a B.Tech in Computer Science Engineering graduate from Maharishi Markandeshwar University. I build responsive, secure, and scalable web solutions using React, Node.js, Spring Boot, and PostgreSQL.
          </p>
        </div>

        {/* Stats Row (Vertical List Style to prevent overflow) */}
        <div className="flex flex-col gap-2 pt-6 border-t border-theme-border w-full">
          <motion.div 
            className="bg-black/20 border border-theme-border px-4 py-2.5 rounded-xl flex items-center justify-between group hover:border-brand-orange/40 hover:bg-black/30 transition-all duration-300 shadow-sm"
            variants={statItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider font-extrabold">Education</span>
            <span className="text-sm font-black text-brand-orange">B.Tech</span>
          </motion.div>
          <motion.div 
            className="bg-black/20 border border-theme-border px-4 py-2.5 rounded-xl flex items-center justify-between group hover:border-brand-orange/40 hover:bg-black/30 transition-all duration-300 shadow-sm"
            variants={statItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider font-extrabold">Internship</span>
            <span className="text-sm font-black text-brand-orange">1</span>
          </motion.div>
          <motion.div 
            className="bg-black/20 border border-theme-border px-4 py-2.5 rounded-xl flex items-center justify-between group hover:border-brand-orange/40 hover:bg-black/30 transition-all duration-300 shadow-sm"
            variants={statItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider font-extrabold">Projects</span>
            <span className="text-sm font-black text-brand-orange">4+</span>
          </motion.div>
        </div>

        <motion.a 
          href="#projects"
          className="inline-block border border-brand-orange text-brand-orange font-bold text-xs px-6 py-3 rounded-xl hover:bg-brand-orange hover:text-black transition-all cursor-pointer text-center tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </motion.section>
  );
}
