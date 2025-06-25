import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="download" 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${50 + i * 20}px`,
              height: `${50 + i * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              Connections?
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join millions of users who have already discovered the future of communication. 
            Start your ChatterBox journey today—it's completely free to get started!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Download for Desktop</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Try Web Version
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-purple-200"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-400" />
            <span>Free forever plan</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-400" />
            <span>Setup in under 2 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;