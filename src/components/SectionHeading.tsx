import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  );
}
