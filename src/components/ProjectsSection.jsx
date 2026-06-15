import { ExternalLink, Code, CheckSquare, Users, Search, HelpCircle, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';
import printoApparelPreview from '../assets/printo_apparel_preview.png';

const PROJECTS_DATA = [
  {
    id: "apparel",
    title: "Printo Custom Apparel",
    desc: "Custom print-on-demand clothing designer tool with drag-and-drop art canvases.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    img: printoApparelPreview,
    icon: <Shirt className="text-orange-500" size={18} />,
    codeClient: "https://github.com/Ahaan99/frontendprinto",
    codeServer: "https://github.com/Ahaan99/printobackend",
    demo: "#"
  },
  {
    id: "todo",
    title: "To - DO Task",
    desc: "A high-performance personal scheduler with drag categorization and subtask track records.",
    tags: ["React", "LocalForage", "Context API"],
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500",
    icon: <CheckSquare className="text-teal-400" size={18} />,
    code: "https://github.com/Ahaan99/todoapp",
    demo: "#"
  },
  {
    id: "team",
    title: "Team Task Management",
    desc: "Sprint board planner featuring real-time chat websockets and scrum metrics analysis.",
    tags: ["Vite", "Socket.io", "Express.js"],
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
    icon: <Users className="text-blue-400" size={18} />,
    codeClient: "https://github.com/Ahaan99/team-task-manager-frontend",
    codeServer: "https://github.com/Ahaan99/team-task-manager-backend",
    demo: "https://team-task-manager-frontend-main-production.up.railway.app/"
  },
  {
    id: "job",
    title: "Internship Job Finder",
    desc: "Portal matching college students with tech startups using custom recommendation tags.",
    tags: ["React", "REST API", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
    icon: <Search className="text-purple-400" size={18} />,
    code: "https://github.com/Ahaan99",
    demo: "#"
  },
  {
    id: "quiz",
    title: "Online Quiz System",
    desc: "Gamified examination engine with timer counts, instant feedback, and global ranking boards.",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
    icon: <HelpCircle className="text-amber-400" size={18} />,
    code: "https://github.com/Ahaan99/Ahaan99-Quizzy-main",
    demo: "#"
  }
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const getHoverVariants = (id) => {
    switch (id) {
      case 'apparel':
        return {
          hover: { rotateY: 8, scale: 1.025, transition: { duration: 0.4, ease: 'easeOut' } }
        };
      case 'todo':
        return {
          hover: { y: -8, scale: 1.025, transition: { duration: 0.3, ease: 'easeOut' } }
        };
      case 'team':
        return {
          hover: { scale: 1.025, x: [0, -3, 3, 0], transition: { duration: 0.5 } }
        };
      case 'job':
        return {
          hover: { scale: 1.035, transition: { duration: 0.3, ease: 'easeOut' } }
        };
      case 'quiz':
        return {
          hover: { rotateX: 6, scale: 1.025, transition: { duration: 0.4, ease: 'easeOut' } }
        };
      default:
        return {
          hover: { y: -6, scale: 1.025 }
        };
    }
  };

  return (
    <motion.section 
      className="bg-card-bg/75 border border-theme-border rounded-[2.5rem] p-6 md:p-10 shadow-2xl space-y-6 h-full backdrop-blur-xl transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="projects"
    >
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-text-primary to-brand-orange bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-xs text-brand-text-secondary mt-1 font-medium tracking-wide">
          A collection of product engineering builds from my software journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => {
          const mergedVariants = {
            ...cardVariants,
            ...getHoverVariants(project.id)
          };
          return (
            <motion.div 
              key={project.id} 
              className="bg-black/20 border border-theme-border rounded-3xl overflow-hidden group hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
              variants={mergedVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
            {/* Image Preview */}
            <div className="h-44 overflow-hidden relative">
              <motion.img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover"
                variants={{
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/30 to-transparent" />
              
              {/* Specialized Project Icon overlay */}
              <motion.div 
                className="absolute top-4 right-4 bg-black/75 border border-white/10 backdrop-blur-md p-2 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {project.icon}
              </motion.div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-1.5">
                {project.id === 'todo' ? (
                  <motion.h3 
                    className="font-bold text-lg text-brand-text-primary flex items-center gap-1.5 tracking-wide"
                    variants={{
                      hover: { textDecorationLine: 'line-through', textDecorationColor: '#14b8a6' }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                ) : (
                  <h3 className="font-bold text-lg text-brand-text-primary tracking-wide">{project.title}</h3>
                )}
                
                <p className="text-xs text-brand-text-secondary leading-relaxed font-medium line-clamp-2">{project.desc}</p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, t) => (
                    <span key={t} className="text-[10px] font-bold bg-white/5 border border-theme-border px-3 py-1 rounded-full text-brand-text-secondary tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`grid gap-2 ${project.codeClient ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {project.codeClient ? (
                    <>
                      <motion.a 
                        href={project.codeClient} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 border border-theme-border bg-black/10 text-[10px] font-bold py-2 rounded-lg text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-orange/40 transition-colors shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Code size={12} /> Client
                      </motion.a>
                      <motion.a 
                        href={project.codeServer} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 border border-theme-border bg-black/10 text-[10px] font-bold py-2 rounded-lg text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-orange/40 transition-colors shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Code size={12} /> Server
                      </motion.a>
                    </>
                  ) : (
                    <motion.a 
                      href={project.code} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 border border-theme-border bg-black/10 text-xs font-bold py-2.5 rounded-xl text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-orange/40 transition-colors shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Code size={14} /> Code
                    </motion.a>
                  )}
                  <motion.a 
                    href={project.demo} 
                    target={project.demo === "#" ? undefined : "_blank"}
                    rel={project.demo === "#" ? undefined : "noopener noreferrer"}
                    className={`flex items-center justify-center gap-1 bg-orange-gradient text-black font-extrabold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition-all ${project.demo === "#" ? "opacity-40 cursor-not-allowed" : ""} ${project.codeClient ? "text-[10px] py-2" : "text-xs py-2.5 gap-1.5"}`}
                    whileHover={project.demo === "#" ? {} : { scale: 1.02 }}
                    whileTap={project.demo === "#" ? {} : { scale: 0.98 }}
                  >
                    <ExternalLink size={project.codeClient ? 12 : 14} /> Demo
                  </motion.a>
                </div>
              </div>
            </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
