import { useState } from 'react';
import { motion } from 'framer-motion';

const SKILLS_GROUPS = [
  {
    title: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js']
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL']
  },
  {
    title: 'Languages',
    items: ['C++', 'Python', 'Java']
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Canva', 'Power BI — Business intelligence & dashboards']
  }
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

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.section 
      className="bg-card-bg/80 border border-theme-border/40 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl space-y-6 h-full backdrop-blur-xl flex flex-col transition-all duration-300 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6"
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

      {/* Premium 3D flip cards: responsive auto-fit grid */}
      <div className="w-full">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 items-start">
          {SKILLS_GROUPS.map((group, idx) => (
            <div key={idx} className="w-full">
              <PremiumFlipCard group={group} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
function PremiumFlipCard({ group, index }) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const icons = {
    Frontend: '⚡',
    Backend: '🧰',
    Databases: '🗄️',
    Languages: '💬',
    Tools: '🛠️'
  };

  const listVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.35 } })
  };

  const maxTilt = 8; // degrees

  function handleMove(e) {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const px = (x / card.width) - 0.5; // -0.5 .. 0.5
    const py = (y / card.height) - 0.5;
    setTilt({ x: (-py) * maxTilt, y: px * maxTilt });
  }

  function resetTilt() { setTilt({ x: 0, y: 0 }); }

  const transformString = `rotateX(${tilt.x}deg) rotateY(${flipped ? 180 + tilt.y : tilt.y}deg)`;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(v => !v); } }}
        onClick={() => setFlipped(v => !v)}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="w-full h-48 sm:h-44 md:h-48 lg:h-52 rounded-2xl bg-gradient-to-tr from-slate-900/18 to-slate-900/6 border border-theme-border/30 shadow-2xl overflow-hidden relative cursor-pointer"
        style={{ perspective: 1200 }}
      >
        <motion.div
          style={{ transformStyle: 'preserve-3d', transform: transformString, transition: 'transform 0.65s cubic-bezier(.2,.9,.2,1)' }}
          className="w-full h-full relative"
        >
          {/* Front */}
          <div style={{ backfaceVisibility: 'hidden' }} className="absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-br from-slate-700/60 to-slate-900/20">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-2xl shadow-lg text-black">
                {icons[group.title] || '⭐'}
              </div>
              <div>
                <h3 className="text-xl font-extrabold leading-tight text-white">{group.title}</h3>
                <p className="text-xs text-white/80 mt-1">{group.items.length} technologies</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Click to explore</span>
              <div className="text-sm font-bold text-brand-orange">Explore →</div>
            </div>
          </div>

          {/* Back */}
          <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className="absolute inset-0 p-5 flex flex-col bg-gradient-to-br from-slate-800/70 to-slate-700/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-white">{group.title}</h3>
              <button onClick={(e) => { e.stopPropagation(); setFlipped(false); }} className="text-sm text-white/80">Close</button>
            </div>

            <motion.ul className="mt-3 grid grid-cols-1 gap-2 overflow-auto" initial="hidden" animate="visible" style={{ maxHeight: 'calc(100% - 48px)' }}>
              {group.items.map((it, i) => (
                <motion.li key={i} custom={i} variants={listVariants} className="flex items-center gap-3 py-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange inline-block" />
                  <span className="font-medium text-sm text-white">{it}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
