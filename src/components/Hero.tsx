import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const Hero: React.FC = () => {
  const { animationsEnabled } = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20`}
            style={{
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' 
                : 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={animationsEnabled ? {
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            } : {}}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: animationsEnabled ? y : 0, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: animationsEnabled ? '0 0 40px rgba(139, 92, 246, 0.3)' : 'none'
            }}
          >
            Connect.
            <br />
            Customize.
            <br />
            <span className="text-cyan-400">Thrive.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            ChatterBox is a next-generation chat platform designed to transform the way you connect—offering 
            immersive, customizable interfaces and a dynamic, user-first experience that brings friends and 
            communities closer together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.button
              onClick={() => scrollToSection('#download')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(34, 197, 244, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold rounded-full shadow-2xl hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#features')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;