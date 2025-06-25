import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  Bot, 
  Users, 
  Shield, 
  Smartphone, 
  Zap,
  Palette,
  Lock,
  Globe
} from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: MessageCircle,
      title: 'Immersive Chat Experience',
      description: 'Dive into rich, dynamic conversations with advanced formatting, media sharing, and interactive elements that make every message count.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Unmatched Customization',
      description: 'Personalize your interface, themes, and notifications to create a unique chat environment that reflects your personality.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Seamless Community Building',
      description: 'Effortlessly create and manage communities, fostering engagement and collaboration with powerful moderation tools.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Communicate with confidence using end-to-end encryption, advanced authentication, and compliance-ready security features.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Excellence',
      description: 'Stay connected on desktop, web, and mobile with a seamless experience that syncs perfectly across all your devices.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Enjoy blazing-fast load times and smooth interactions, even with large communities and high message volumes.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays yours with advanced privacy controls, anonymous messaging options, and transparent data practices.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with people worldwide through built-in translation, cultural customization, and 24/7 global support.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Bot,
      title: 'AI Server Assistant',
      description: 'Let our intelligent chatbot create and configure servers for you automatically, handling setup, permissions, and channel organization.',
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="features" 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Unleash the Power of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Connection
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the features that make ChatterBox the most advanced communication platform, 
            designed for the modern world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}
                className="group relative bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-slate-800 rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;