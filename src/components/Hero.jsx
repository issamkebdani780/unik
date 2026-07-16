import React from 'react';
import { motion } from 'framer-motion';
import FloatingBackground from './FloatingBackground';

const Hero = () => {
  return (
    <section className="w-full bg-[#fcfcfc] relative overflow-hidden">
      <FloatingBackground gamme="all" />
      
      <div className="max-w-[96%] mx-auto relative rounded-3xl md:rounded-[3rem] overflow-hidden shadow-xl h-[55vh] sm:h-[70vh] md:h-[100vh] min-h-[420px] md:min-h-[500px] z-10">
        
        {/* Background Video - Desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Background Video - Mobile */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videoMobile.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

        {/* Text and Button Overlay (Bottom Left on Mobile, Bottom Right on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 md:left-auto md:right-0 p-6 sm:p-12 md:p-16 flex flex-col items-start md:items-end text-left md:text-right z-20 space-y-4 md:space-y-5 w-full md:w-auto pr-16 md:pr-16"
        >
          <h2 className="text-white text-[28px] leading-[1.15] sm:text-3xl md:text-[2.5rem] font-medium tracking-tight poppins-regular">
            Clair, efficace et instantané.
          </h2>
          <a
            href="#"
            className="inline-block border border-white text-white px-5 py-2.5 md:px-8 md:py-3 text-[11px] md:text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-all uppercase rounded-full backdrop-blur-sm poppins-medium"
          >
            VOIR LA COLLECTION
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
