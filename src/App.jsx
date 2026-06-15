import { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  };

  return (
    <BackgroundCanvas>
      {/* 1. Hero Section (Full Width) */}
      <HeroSection isDark={isDark} onToggleTheme={toggleTheme} />

      {/* 2. Middle Row: About Me (Left) & Skills (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <AboutSection />
        </div>
        <div className="lg:col-span-7">
          <SkillsSection />
        </div>
      </div>

      {/* 3. Bottom Row: Projects (Left) & Contact (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <ProjectsSection />
        </div>
        <div className="lg:col-span-5">
          <ContactSection />
        </div>
      </div>
    </BackgroundCanvas>
  );
}
