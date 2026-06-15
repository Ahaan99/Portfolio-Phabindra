import { useState } from 'react';
import { Heart, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import userProfile from '../assets/user_profile.jpg';
import resumeImg from '../assets/resume.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill out the required fields: First Name, Email, and Message.");
      return;
    }
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.section 
      className="bg-card-bg/75 border border-theme-border rounded-[2.5rem] p-6 md:p-10 shadow-2xl flex flex-col justify-between gap-10 h-full backdrop-blur-xl transition-all duration-300 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      id="contact"
    >
      {/* Success Modal */}
      {status === 'success' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-slate-900 border border-brand-orange/20 p-8 rounded-3xl text-center max-w-sm w-full space-y-4 shadow-2xl relative"
          >
            <div className="w-16 h-16 bg-brand-orange/15 border border-brand-orange text-brand-orange rounded-full flex items-center justify-center mx-auto text-2xl font-bold animate-pulse">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Message Sent!</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Thank you for reaching out! Phabindra has received your message and will respond to you shortly.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="bg-orange-gradient text-black font-extrabold text-xs px-6 py-3 rounded-xl cursor-pointer w-full hover:opacity-90 transition-opacity shadow-md shadow-brand-orange/15"
            >
              Awesome
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Form Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Avatar character */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-44 h-44 sm:w-48 sm:h-48 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-orange/10 blur-[40px] rounded-full" />
            <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-tr from-brand-orange to-blue-500 rounded-full p-1 shadow-lg z-10 overflow-hidden">
              <div className="w-full h-full bg-transparent rounded-full overflow-hidden flex items-center justify-center relative">
                <img 
                  src={userProfile} 
                  alt="Contact Phabindra" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 10%' }}
                />
              </div>
            </div>
            {/* Chat Notification Badge */}
            <motion.div 
              className="absolute -top-1 -right-1 bg-blue-500 border-2 border-slate-900 text-white rounded-full p-2 shadow-lg flex items-center justify-center z-20"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <span className="text-xs">✉️</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">1</span>
            </motion.div>
          </div>
          <div className="text-center mt-4 space-y-3">
            <div>
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-brand-text-primary to-brand-orange bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xs text-brand-text-secondary mt-1 font-semibold tracking-wide">Let's discuss your project</p>
            </div>
            
            <div className="pt-1.5 space-y-1">
              <a 
                href="mailto:phabindrakumar777@gmail.com" 
                className="block text-xs text-brand-text-secondary hover:text-brand-orange transition-colors font-medium tracking-wide"
              >
                phabindrakumar777@gmail.com
              </a>
              <a 
                href="tel:+919992785583" 
                className="block text-xs text-brand-text-secondary hover:text-brand-orange transition-colors font-medium tracking-wide"
              >
                +91 99927 85583
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-7">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *" 
                required
                className="bg-black/20 border border-theme-border focus:border-brand-orange/55 outline-none rounded-xl px-4 py-3 text-xs text-brand-text-primary transition-all w-full focus:ring-1 focus:ring-brand-orange/20"
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
                className="bg-black/20 border border-theme-border focus:border-brand-orange/55 outline-none rounded-xl px-4 py-3 text-xs text-brand-text-primary transition-all w-full focus:ring-1 focus:ring-brand-orange/20"
              />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *" 
              required
              className="bg-black/20 border border-theme-border focus:border-brand-orange/55 outline-none rounded-xl px-4 py-3 text-xs text-brand-text-primary transition-all w-full focus:ring-1 focus:ring-brand-orange/20"
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number" 
              className="bg-black/20 border border-theme-border focus:border-brand-orange/55 outline-none rounded-xl px-4 py-3 text-xs text-brand-text-primary transition-all w-full focus:ring-1 focus:ring-brand-orange/20"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *" 
              rows={3} 
              required
              className="bg-black/20 border border-theme-border focus:border-brand-orange/55 outline-none rounded-xl px-4 py-3 text-xs text-brand-text-primary transition-all w-full resize-none focus:ring-1 focus:ring-brand-orange/20"
            />
            <motion.button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-orange-gradient hover:shadow-lg hover:shadow-brand-orange/20 transition-all text-black font-extrabold text-xs py-3.5 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={14} /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Center Animated Resume Preview */}
      <div className="flex-grow flex flex-col items-center justify-center py-4 my-2">
        <motion.div 
          className="w-60 sm:w-72 md:w-80 aspect-[1/1.414] relative group cursor-pointer"
          whileHover={{ scale: 1.04, rotateY: -4, rotateX: 2 }}
          style={{ perspective: 1000 }}
          onClick={() => window.open("https://drive.google.com/file/d/1XD7rRgFzgpINsrTzX7CcmdpwXBt55tm-/view?usp=sharing", "_blank")}
        >
          {/* Holographic glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-blue-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          
          {/* Document Frame */}
          <div className="w-full h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-brand-orange/40 relative">
            <img 
              src={resumeImg} 
              alt="Phabindra Kumar Sah Resume" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <span className="bg-orange-gradient text-black font-extrabold text-[10px] px-3.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                📄 View Resume PDF
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Segment */}
      <div className="border-t border-theme-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-text-secondary">
        <div>
          <span className="font-extrabold text-sm text-brand-text-primary">Phabindra Kumar Sah</span>
          <p className="mt-0.5">Full Stack Developer & Software Engineer</p>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-4 text-brand-text-primary">
          <motion.a 
            href="https://www.linkedin.com/in/phabindra-kumar-sah-4241942b3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-orange transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </motion.a>
          <motion.a 
            href="https://github.com/Ahaan99" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-orange transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </motion.a>
        </div>

        <div className="flex items-center gap-1">
          <span>&copy; {new Date().getFullYear()} Phabindra Kumar Sah</span>
        </div>
      </div>
    </motion.section>
  );
}
