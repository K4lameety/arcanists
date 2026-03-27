'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Trophy, Users, Target, Clock, Shield } from 'lucide-react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'ARCANISTS';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Competitions', value: '1', icon: <Trophy size={48} /> },
    { label: 'Members', value: '18', icon: <Users size={48} /> },
    { label: 'Challenges Solved', value: '18', icon: <Target size={48} /> },
    { label: 'Active Since', value: '2025', icon: <Clock size={48} /> },
  ];

  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      <Navigation />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 md:pt-0 md:justify-center overflow-hidden px-6 bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

          <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-5xl w-full">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 mb-2 group transition-all duration-300 hover:border-orange-500/40">
              <span className="relative flex h-1.5 w-1.5 ml-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              <span className="terminal-text text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-orange-200/70">
                Capture The Flag
              </span>
            </div>

            <div className="py-2">
              <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight md:tracking-[0.1em] text-white leading-tight">
                <span className="neon-cyan">
                  {displayText}
                  <span className="animate-pulse font-thin text-orange-500">|</span>
                </span>
              </h1>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-2xl text-orange-500 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase">
                Cybersecurity & Networking
              </p>
              <div className="text-xs md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light px-4 md:px-0">
                <p>
                  Operating under the auspices of <span className="text-white font-medium">Forticode Club</span>, this community was founded by students of Universitas Muhammadiyah Yogyakarta, born out of a profound dedication to digital system integrity. We focus on developing technical expertise and security research to meet the challenges of an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-10 px-8 sm:px-0">
              <a href="/contact#recruitment" className="px-8 py-3 text-center text-orange-500 rounded-lg terminal-text text-xs md:text-sm font-bold glow-border">
                Join Team
              </a>
              <a href="#about" onClick={scrollToAbout} className="px-8 py-3 text-center text-white rounded-lg terminal-text text-xs md:text-sm font-bold glow-border-purple border-white/20 hover:bg-white/5 transition-all">
                Learn More
              </a>
            </div>
          </div>

          <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer animate-bounce">
            <div className="text-neutral-500 group-hover:text-orange-500 terminal-text text-[10px] uppercase tracking-widest transition-colors">
              scroll to explore
            </div>
            <svg className="w-4 h-4 mx-auto mt-2 text-neutral-500 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 relative w-full py-16 md:py-24 px-6 md:px-12 bg-black overflow-hidden z-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] pointer-events-none" />
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-12 md:mb-20 space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-6xl font-mono font-bold text-white tracking-tighter uppercase leading-tight text-center md:text-left">
                About <span className="text-orange-500">Us</span>
              </h2>
              <div className="h-[2px] w-16 md:w-24 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] mx-auto md:mx-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-sm md:text-lg text-neutral-400 leading-relaxed text-center md:text-left">
                    At <span className="text-white font-medium">Arcanists</span>, we believe that cybersecurity is more than just lines of code—it is a mindset. As a collaborative hub, we are dedicated to bridging the gap between academic theory and the practical, real-world security challenges faced in the industry today.
                  </p>
                  <p className="text-sm md:text-lg text-neutral-400 leading-relaxed text-center md:text-left">
                    Through continuous research, Capture The Flag (CTF) simulations, and active knowledge sharing, we foster an ecosystem where technical sharpness meets ethical integrity. Our mission is to empower our members with the skills necessary to combat increasingly complex digital threats in an ever-evolving technological landscape.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-neutral-800">
                  {[
                    "Regular CTF competitions at both national and international levels.",
                    "In-depth research on the latest exploitation techniques and defensive strategies.",
                    "Intensive mentoring for new members to sharpen their technical skills."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 group">
                      <div className="mt-1 flex-shrink-0">
                        <ArrowRight size={16} className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                      </div>
                      <p className="text-xs md:text-base text-neutral-300 leading-snug">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-10 border border-neutral-800 bg-neutral-900/20 shadow-2xl relative overflow-hidden group hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500 pointer-events-none">
                  <Shield size={96} className="text-white group-hover:text-orange-500 transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  Core Values
                </h3>
                <ul className="space-y-5 md:space-y-6 terminal-text">
                  {[
                    { 
                      "n": "01", 
                      "t": "Expertise", 
                      "d": "Continuously evolving and sharpening technical mastery without limits to master the digital landscape." 
                    },
                    { 
                      "n": "02", 
                      "t": "Collaboration", 
                      "d": "Uniting diverse talents within a strategic hub to conquer every complex security challenge." 
                    },
                    { 
                      "n": "03", 
                      "t": "Innovation", 
                      "d": "Developing creative solutions and proactive approaches to identify and mitigate modern vulnerabilities." 
                    },
                    { 
                      "n": "04", 
                      "t": "Integrity", 
                      "d": "Upholding the highest ethical standards and professional conduct in every operation and research." 
                    }
                  ].map((item, i) => (
                    <li key={i} className="space-y-1">
                      <div className="text-orange-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.n}. {item.t}</div>
                      <div className="text-neutral-400 text-[11px] md:text-sm leading-relaxed">{item.d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative overflow-hidden bg-neutral-900/30 border border-neutral-800 rounded-lg md:rounded-xl p-4 md:p-8 text-center hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group">
                  <div className="absolute -top-2 -right-2 opacity-[0.03] group-hover:opacity-[0.1] group-hover:-rotate-12 transition-all duration-500 text-white group-hover:text-orange-500 pointer-events-none">
                    {stat.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl md:text-5xl font-mono font-bold text-white group-hover:text-orange-500 transition-colors mb-1 md:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[8px] md:text-xs text-neutral-500 uppercase tracking-[0.1em] md:tracking-[0.2em] terminal-text">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}