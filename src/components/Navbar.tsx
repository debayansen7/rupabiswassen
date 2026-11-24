'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const pathname = usePathname();
  const { activeTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close drawer on route change (state adjustment during render, not an effect)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Her Story', href: '/her-story' },
    { name: 'Her Revival', href: '/her-revival' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  // Escape key closes drawer; lock body scroll while open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b-[0.5px] border-outline-variant/15 transition-colors duration-700">
        <div className="flex justify-between items-center px-6 md:px-margin-desktop py-5 w-full max-w-container-max mx-auto">

          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-display text-xl sm:text-2xl text-primary tracking-tighter cursor-pointer hover:opacity-90 transition-opacity"
          >
            Rupa Biswas Sen
          </Link>

          <div className="flex items-center gap-4 md:gap-12">
            {/* Desktop nav links */}
            <div className="hidden md:flex gap-8 lg:gap-12">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-label text-xs tracking-widest uppercase pb-1 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-primary border-b border-primary'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Theme switcher — desktop only */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex group relative items-center justify-between gap-3 px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/30 rounded-full cursor-pointer transition-all duration-500 hover:border-primary/50 shadow-md select-none"
              title="Toggle design style theme"
            >
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-500 shrink-0 ${
                  activeTheme === 'gold'
                    ? 'bg-primary shadow-[0_0_10px_#e9c176]'
                    : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]'
                }`}
              />
              <span className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface select-none">
                {activeTheme === 'gold' ? 'Serene Gold' : 'Ruby & Copper'}
              </span>
            </button>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 cursor-pointer shrink-0"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-[1.5px] bg-on-surface transition-all duration-300 origin-center ${
                  menuOpen ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-on-surface transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-5' : 'w-3.5'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-on-surface transition-all duration-300 origin-center ${
                  menuOpen ? 'w-5 -rotate-45 translate-y-[-6.5px]' : 'w-5'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[78vw] max-w-xs z-50 md:hidden flex flex-col border-l border-outline-variant/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${activeTheme === 'ruby' ? 'ruby-gradient' : 'gold-gradient'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-outline-variant/15">
          <span className="font-display text-primary text-lg tracking-tighter">
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Nav links with staggered entrance */}
        <div className="flex flex-col px-7 py-6 flex-1">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  transitionDelay: menuOpen ? `${80 + idx * 60}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(1.5rem)',
                  opacity: menuOpen ? 1 : 0,
                }}
                className={`group flex items-center justify-between py-5 border-b border-outline-variant/15 font-label text-xs tracking-[0.2em] uppercase transition-[opacity,transform,color] duration-300 ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive ? 'text-primary' : 'text-outline'
                  }`}
                >
                  arrow_forward
                </span>
              </Link>
            );
          })}
        </div>

        {/* Drawer footer */}
        <div className="px-7 py-6 border-t border-outline-variant/15 space-y-5">
          {/* Theme switcher inside drawer */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-3 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/30 rounded-full cursor-pointer transition-all duration-500 hover:border-primary/50 select-none"
            title="Toggle design style theme"
          >
            <div
              className={`w-3.5 h-3.5 rounded-full transition-all duration-500 shrink-0 ${
                activeTheme === 'gold'
                  ? 'bg-primary shadow-[0_0_10px_#e9c176]'
                  : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]'
              }`}
            />
            <span className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface">
              {activeTheme === 'gold' ? 'Serene Gold' : 'Ruby & Copper'}
            </span>
          </button>

          <div>
            <p className="font-label text-[10px] text-outline uppercase tracking-widest">
              Rupa Biswas Sen
            </p>
            <p className="font-body text-[11px] text-on-surface-variant mt-1">
              Classical Fusion Sitarist
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
