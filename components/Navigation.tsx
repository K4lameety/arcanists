'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Homes', href: '/' },
    { label: 'Members', href: '/member' },
    { label: 'Contests', href: '/contest' },
    { label: 'Contacts', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src="icon.png" 
            alt="Arcanists Icon" 
            className="w-7 h-auto"
          />
          <span className="text-white font-mono font-bold text-lg tracking-tighter uppercase neon-cyan">
            Arcanists
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="terminal-text text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-orange-500 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href="/contact#recruitment"
            className="ml-4 px-5 py-2 text-orange-500 rounded-md terminal-text text-[10px] uppercase tracking-widest font-bold border border-orange-500/30 hover:bg-orange-500/5 transition-all"
          >
            Recruitment
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-black/95 border-b border-white/10 md:hidden transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="terminal-text text-xs uppercase tracking-[0.3em] text-neutral-400 active:text-orange-500"
            >
              <span className="text-orange-500 mr-3 opacity-50">&gt;</span>
              {item.label}
            </a>
          ))}
          
          <a 
            href="/contact#recruitment"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 text-center text-orange-500 border border-orange-500/30 rounded-lg terminal-text text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Apply Recruitment
          </a>
        </div>
      </div>
    </nav>
  );
}