import { motion } from 'motion/react';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="Education" />
      
      <div className="space-y-6">
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-1 md:mt-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-zinc-400 text-lg">
                  {edu.institution}
                </p>
                <p className="text-zinc-500 text-sm mt-2 flex items-center gap-2">
                  {edu.location}
                </p>
              </div>
            </div>
            
            <div className="md:text-right shrink-0">
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-mono border border-white/5">
                {edu.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
