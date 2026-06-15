import { motion } from 'framer-motion';

const SKILLS_DATA = [
  { name: 'React.js', level: 95, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.25)', icon: '🟦' },
  { name: 'Next.js', level: 88, color: '#E2E8F0', glow: 'rgba(226, 232, 240, 0.15)', icon: '⬛' },
  { name: 'Node.js / Express', level: 85, color: '#339933', glow: 'rgba(51, 153, 51, 0.2)', icon: '🟩' },
  { name: 'Spring Boot', level: 80, color: '#6DB33F', glow: 'rgba(109, 179, 63, 0.2)', icon: '🌱' },
  { name: 'Tailwind CSS', level: 92, color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.25)', icon: '🔷' },
  { name: 'MongoDB / Postgres', level: 85, color: '#47A248', glow: 'rgba(71, 162, 72, 0.2)', icon: '🍃' },
  { name: 'Fabric.js', level: 82, color: '#F05340', glow: 'rgba(240, 83, 64, 0.2)', icon: '🎨' },
  { name: 'Python', level: 75, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.2)', icon: '🟡' },
];

export default function SkillsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <motion.section 
      className="bg-card-bg/75 border border-theme-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-6 h-full backdrop-blur-xl flex flex-col justify-center transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      id="skills"
    >
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-text-primary to-brand-orange bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-xs text-brand-text-secondary mt-1 font-medium tracking-wide">
          Technologies and tools from my engineering resume that I use to build robust full-stack apps
        </p>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-black/20 border border-theme-border p-5 rounded-2xl flex flex-col justify-between gap-3 cursor-default transition-colors"
            whileHover={{ 
              scale: 1.02, 
              borderColor: skill.color,
              boxShadow: `0 10px 30px -5px ${skill.glow}`,
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl transform group-hover:scale-110 transition-transform">{skill.icon}</span>
              <span className="font-bold text-sm tracking-wide">{skill.name}</span>
            </div>
            
            {/* Custom Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-semibold text-brand-text-secondary tracking-wider uppercase">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-950/60 h-2 rounded-full overflow-hidden p-[1px]">
                <motion.div 
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                  style={{ 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}` 
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
