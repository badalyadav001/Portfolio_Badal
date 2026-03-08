import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold text-white tracking-tighter mb-2 block">
            {portfolioData.name.split(' ')[0]}<span className="text-emerald-500">.dev</span>
          </a>
          <p className="text-zinc-500 text-sm">
            Building digital experiences with modern web technologies.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
