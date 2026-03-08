import { motion } from 'motion/react';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="Professional Experience" subtitle="My journey in building scalable frontend solutions." />
      
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-emerald-400 font-medium mt-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-zinc-400 font-mono">
                <div className="flex items-center gap-2 md:justify-end">
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              {exp.points.map((point, i) => (
                <li key={i} className="text-zinc-300 leading-relaxed flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
