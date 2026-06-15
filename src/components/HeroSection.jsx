import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowDown, Mail, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import userProfile from '../assets/user_profile.jpg';

const ROLES = [
  "FullStack MERN Developer",
  "Frontend Developer",
  "Web Developer"
];

export default function HeroSection({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section 
      className="bg-card-bg/75 border border-theme-border rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      {/* Floating Navbar */}
      <motion.div 
        className="relative flex items-center justify-between bg-black/40 border border-theme-border backdrop-blur-md rounded-full px-6 py-3.5 max-w-3xl mx-auto mb-16 shadow-lg z-30"
        variants={itemVariants}
      >
        <motion.div 
          className="font-extrabold text-2xl tracking-tight cursor-default"
          whileHover={{ scale: 1.02 }}
        >
          Phabindra<span className="text-brand-orange">.</span>
        </motion.div>
        
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-text-secondary">
          <a href="#home" className="relative hover:text-brand-text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Home</a>
          <a href="#about" className="relative hover:text-brand-text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">About</a>
          <a href="#projects" className="relative hover:text-brand-text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Projects</a>
          <a href="#skills" className="relative hover:text-brand-text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Skills</a>
          <a href="#contact" className="relative hover:text-brand-text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <motion.button 
            onClick={onToggleTheme}
            className="p-2.5 text-brand-text-secondary hover:text-brand-text-primary rounded-full bg-brand-text-primary/5 border border-theme-border transition-colors cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          
          <motion.a 
            href="#contact" 
            className="hidden sm:flex bg-orange-gradient font-bold text-sm px-6 py-2.5 rounded-full text-black cursor-pointer shadow-md shadow-brand-orange/20 flex items-center justify-center"
            whileHover={{ scale: 1.05, shadow: "0 10px 25px rgba(255, 123, 2, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile hamburger menu toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 text-brand-text-secondary hover:text-brand-text-primary rounded-full bg-brand-text-primary/5 border border-theme-border transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="absolute top-16 left-0 right-0 z-30 bg-slate-950/95 border border-theme-border rounded-3xl p-5 shadow-2xl flex flex-col gap-3 md:hidden backdrop-blur-xl"
            >
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-xl transition-all">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-xl transition-all">About</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-xl transition-all">Skills</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-xl transition-all">Projects</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-xl transition-all">Contact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="sm:hidden text-center bg-orange-gradient font-bold text-sm py-2.5 rounded-xl text-black">Hire Me</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hero Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Intro content */}
        <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
          {/* Social Icons row */}
          <div className="flex items-center gap-3.5">
            <motion.a 
              href="https://github.com/Ahaan99" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-slate-200 hover:text-white hover:border-brand-orange/50 transition-colors shadow-md"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/phabindra-kumar-sah-4241942b3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:text-white hover:border-brand-orange/50 transition-colors shadow-md"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </motion.a>
            <motion.a 
              href="mailto:phabindrakumar777@gmail.com" 
              className="p-3 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-400 hover:text-white hover:border-brand-orange/50 transition-colors shadow-md"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-extrabold tracking-tight leading-[1.15] text-brand-text-primary">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 font-black">Phabindra Kumar Sah</span>
            </h1>
            
            {/* Changing dynamic titles */}
            <div 
              className="text-2xl md:text-4xl font-extrabold tracking-wide min-h-[2.5rem] flex items-center"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ rotateX: -90, opacity: 0, y: 15 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: 90, opacity: 0, y: -15 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 110,
                    damping: 13,
                    mass: 0.8
                  }}
                  className="inline-block origin-center text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-rose-400 to-amber-300 font-black drop-shadow-[0_8px_16px_rgba(255,123,2,0.12)]"
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed max-w-xl font-medium tracking-wide">
            Dedicated Full-Stack MERN Developer and CSE graduate. Specializing in high-performance web applications, database design, and real-time backend engines.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              href="https://drive.google.com/file/d/1XD7rRgFzgpINsrTzX7CcmdpwXBt55tm-/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-orange-gradient text-black font-extrabold px-7 py-4 rounded-2xl hover:shadow-xl hover:shadow-brand-orange/20 transition-all tracking-wide text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowDown size={18} /> Download CV
            </motion.a>
            <motion.a 
              href="#contact" 
              className="flex items-center gap-2.5 border border-slate-700 bg-slate-900/40 text-white font-bold px-7 py-4 rounded-2xl hover:border-brand-orange hover:bg-slate-900 transition-all tracking-wide text-sm shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Character Column */}
        <motion.div className="lg:col-span-5 flex justify-center relative" variants={itemVariants}>
          <div className="w-80 h-80 md:w-[26rem] md:h-[26rem] relative flex items-center justify-center">
            {/* Background glowing sphere/rings */}
            <div className="absolute inset-0 bg-brand-orange/15 blur-[70px] rounded-full" />
            
            {/* User Profile Avatar with border glow */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-brand-orange to-rose-500 rounded-full flex items-center justify-center p-1.5 shadow-[0_15px_50px_rgba(239,68,68,0.25)] z-10"
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="w-full h-full bg-transparent rounded-full overflow-hidden flex items-center justify-center relative">
                <img 
                  src={userProfile} 
                  alt="Phabindra Kumar Sah" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 10%' }}
                />
              </div>
            </motion.div>
            
            {/* Floating Badges */}
            <motion.div 
              className="absolute top-8 left-2 z-20 bg-pink-500 text-white font-extrabold text-sm px-4.5 py-2 rounded-2xl shadow-xl -rotate-12 border border-pink-400/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              Hi 👋
            </motion.div>
            <motion.div 
              className="absolute top-12 right-4 z-20 bg-amber-500 text-white font-extrabold text-xs p-3 rounded-2xl shadow-xl rotate-12 border border-amber-400/30"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            >
              Ai
            </motion.div>
            <motion.div 
              className="absolute bottom-12 right-6 z-20 bg-purple-700 text-white font-extrabold text-xs p-3 rounded-2xl shadow-xl -rotate-6 border border-purple-500/30"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1 }}
            >
              Pr
            </motion.div>
            <motion.div 
              className="absolute bottom-8 left-10 z-20 bg-teal-500 text-white font-extrabold text-xs p-3 rounded-full shadow-xl border border-teal-400/30"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.2 }}
            >
              <Laptop size={16} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
