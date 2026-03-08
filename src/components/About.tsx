import { motion } from 'motion/react';
import { portfolioData } from '../data';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="About Me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-zinc-300 leading-relaxed">
              {portfolioData.summary}
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 bg-zinc-900/50 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Experience</span>
              <span className="text-white font-medium">1+ Years</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Role</span>
              <span className="text-white font-medium">Frontend Dev</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Location</span>
              <span className="text-white font-medium text-right max-w-[150px] truncate" title={portfolioData.contact.location}>
                {portfolioData.contact.location.split(',')[0]}
              </span>
            </li>
            <li className="flex justify-between items-center pb-2">
              <span className="text-zinc-400">Availability</span>
              <span className="text-emerald-400 font-medium">Open to work</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
