import { motion } from 'motion/react';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950">
      <SectionHeading title="Featured Projects" subtitle="Real-world applications I've built from the ground up." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-zinc-900/40 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-zinc-500 px-3 py-1 rounded-full border border-white/5 bg-zinc-950">
                {project.date}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {project.points.map((point, i) => (
                <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
              >
                View Project Details
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
