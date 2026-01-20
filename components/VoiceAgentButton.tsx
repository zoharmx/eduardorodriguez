'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Wifi } from 'lucide-react';

const VoiceAgentButton = () => {
  return (
    <motion.a
      href="tel:+16192573672"
      className="fixed bottom-6 right-6 z-[100] group flex items-center justify-end"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Floating Tooltip (Appears on the left on Desktop) */}
      <div className="absolute right-full mr-4 bg-slate-900/90 text-white px-4 py-2 rounded-lg border border-emerald-500/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl hidden md:block">
        <p className="text-xs font-mono text-emerald-400 mb-1">AI AGENT (BETA)</p>
        <p className="text-sm font-bold">Talk to My AI (Demo)</p>
      </div>

      {/* Main Button */}
      <div className="relative">
        {/* Pulse Wave Rings */}
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 duration-1000"></div>
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>

        {/* Button Container */}
        <button className="relative bg-slate-950 border border-emerald-500/50 text-white h-16 w-16 md:h-auto md:w-auto md:px-6 md:py-4 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] flex items-center justify-center md:justify-start gap-3 overflow-hidden group-hover:border-emerald-400 transition-colors">

          {/* Vibrating Phone Icon */}
          <div className="relative z-10">
            <Phone className="w-6 h-6 text-emerald-400 fill-emerald-400/10" />

            {/* Status Indicator (Green Dot) */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900"></span>
            </span>
          </div>

          {/* Text (Visible only on Desktop) */}
          <div className="hidden md:block text-left">
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest leading-none">
                System Online
              </p>
              <Wifi className="w-3 h-3 text-emerald-500" />
            </div>
            <p className="text-sm font-bold text-slate-100 leading-tight mt-0.5">
              Call My AI Agent
            </p>
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent z-0"></div>
        </button>

        {/* Beta Label - Mobile Only */}
        <span className="md:hidden absolute -top-2 -right-2 bg-emerald-500 text-slate-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
          BETA
        </span>
      </div>
    </motion.a>
  );
};

export default VoiceAgentButton;
