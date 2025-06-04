import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaHospital, FaStethoscope, FaHeart, FaClinicMedical, FaAmbulance } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  const slides = [
    {
      heading: 'Compassionate Care for Every Heart',
      subheading: 'Our expert team is here to support your health journey with personalized care and advanced treatments.',
      cta: 'Book Appointment',
      icon: <FaHeartbeat className="text-blue-600 text-4xl" />,
      color: 'from-blue-600/80 to-teal-500/80',
    },
    {
      heading: 'World-Class Medical Expertise',
      subheading: 'Trust our specialists for advanced treatments and cutting-edge medical technology.',
      cta: 'Explore Services',
      icon: <FaUserMd className="text-emerald-600 text-4xl" />,
      color: 'from-emerald-600/80 to-cyan-500/80',
    },
    {
      heading: 'Your Health, Our Community',
      subheading: 'Serving our community with dedicated care for all generations and backgrounds.',
      cta: 'Contact Us',
      icon: <FaHospital className="text-indigo-600 text-4xl" />,
      color: 'from-indigo-600/80 to-purple-500/80',
    },
  ];

  // Floating icons for background decoration
  const floatingIcons = [
    { icon: <FaHeart className="text-red-400" />, size: 24 },
    { icon: <FaStethoscope className="text-blue-400" />, size: 28 },
    { icon: <FaClinicMedical className="text-emerald-400" />, size: 32 },
    { icon: <FaAmbulance className="text-amber-400" />, size: 30 },
    { icon: <FaHeartbeat className="text-pink-400" />, size: 26 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: { opacity: 0, y: 50, scale: 0.95 },
    center: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.32, 0.72, 0, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      transition: { 
        duration: 0.6, 
        ease: "easeIn" 
      } 
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200 z-0"
          style={{
            top: `${10 + (index * 15) % 80}%`,
            left: `${5 + (index * 20) % 85}%`,
          }}
          variants={floatingVariants}
          animate="float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, transition: { delay: index * 0.3, duration: 1 } }}
        >
          <div className="text-4xl opacity-70">{icon.icon}</div>
        </motion.div>
      ))}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 w-full h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-300 rounded-sm" />
          ))}
        </div>
      </div>
      <motion.div 
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-400/10 z-0"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-emerald-400/10 z-0"
        animate={{ 
          scale: [1, 1.8, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) =>
                index === currentSlide ? (
                  <motion.div
                    key={index}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute"
                  >
                    <div className="flex justify-center lg:justify-start mb-6">
                      <motion.div
                        className="bg-white p-4 rounded-full shadow-lg border-2 border-white/20"
                        animate={{ 
                          rotate: [0, 10, -10, 5, 0],
                          scale: [1, 1.1, 1.05, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        {slide.icon}
                      </motion.div>
                    </div>
                    
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {slide.heading}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {slide.subheading}
                    </motion.p>
                    
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <Link href="/appointment">
                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 10px 25px -10px rgba(59, 130, 246, 0.5)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group`}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          <AnimatePresence>
                            {isHovered && (
                              <motion.span
                                className="absolute inset-0 bg-white/20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </AnimatePresence>
                          <span className="relative flex items-center justify-center gap-2">
                            <span>{slide.cta}</span>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                repeatType: "loop"
                              }}
                            >
                              →
                            </motion.span>
                          </span>
                        </motion.button>
                      </Link>
                      
                      <Link href="/services">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full text-lg font-medium shadow-sm"
                        >
                          Our Services
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative">
              <motion.div
                className="bg-gray-800 rounded-full w-80 h-80 flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-gray-700 rounded-full w-64 h-64 flex items-center justify-center">
                  <FaUserMd className="text-white text-9xl" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl border-2 border-blue-100"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeartbeat className="text-red-500 text-3xl" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-xl border-2 border-emerald-100"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <FaStethoscope className="text-blue-500 text-3xl" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-16 bg-white p-3 rounded-full shadow-xl border-2 border-indigo-100"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaHospital className="text-indigo-500 text-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 border-t border-gray-100"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Medical Experts" },
              { value: "24/7", label: "Emergency Care" },
              { value: "98%", label: "Patient Satisfaction" },
              { value: "50k+", label: "Patients Treated" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;