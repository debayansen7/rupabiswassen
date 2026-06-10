"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { useTheme } from "@/hooks/useTheme";

interface HeroSlideProps {
  sectionStyle: React.CSSProperties;
  portraitStyle: React.CSSProperties;
  getParallaxBgTextStyle: (index: number) => React.CSSProperties;
}

export default function HeroSlide({
  sectionStyle,
  portraitStyle,
  getParallaxBgTextStyle,
}: HeroSlideProps) {
  const { activeTheme } = useTheme();
  const portfolioData = useAppSelector((state) => state.portfolio);
  const currentThemeData =
    activeTheme === "ruby"
      ? portfolioData.themes.ruby
      : portfolioData.themes.gold;

  return (
    <section
      className={`section flex items-center justify-center min-h-screen relative ${
        activeTheme === "ruby" ? "ruby-gradient" : "gold-gradient"
      }`}
      id="home"
      style={sectionStyle}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-bg-text"
        style={getParallaxBgTextStyle(0)}
      >
        <h2 className="font-display text-[30vw] md:text-[38vw] text-primary whitespace-nowrap leading-none transition-colors duration-700">
          RUPA
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-container-max px-6 md:px-margin-desktop flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-24 md:pt-0">
        <div className="w-full md:w-1/2 space-y-6 text-left mobile-fade-up">
          <span className="font-label text-xs text-primary tracking-[0.25em] uppercase font-bold transition-colors duration-700 block">
            {activeTheme === "gold"
              ? portfolioData.artist.roles.gold
              : portfolioData.artist.roles.ruby}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] text-on-surface leading-tight transition-all duration-700">
            {currentThemeData.heroTitleMain}
            {activeTheme === "ruby" ? <br /> : " "}
            <span className="italic text-primary">
              {currentThemeData.heroTitleItalic}
            </span>
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed">
            {currentThemeData.heroSubtitle}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/her-story"
              className="px-8 py-3.5 border border-primary text-primary font-label text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 rounded cursor-pointer shadow-sm hover:shadow-[0_4px_20px_rgba(233,193,118,0.15)] active:scale-95 text-center"
            >
              {currentThemeData.heroCta1}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface font-label text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer active:scale-95 text-center"
            >
              {currentThemeData.heroCta2}
            </Link>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 relative group max-w-sm sm:max-w-md parallax-portrait mobile-fade-up delay-1"
          style={portraitStyle}
        >
          <div className="absolute -inset-4 border border-outline-variant/25 rounded-md group-hover:border-primary/40 transition-colors duration-500 pointer-events-none"></div>
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded border border-outline-variant/15 shadow-2xl relative z-10">
            <img
              alt={`${portfolioData.artist.name} portrait`}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 contrast-105 hover:contrast-100 transition-all duration-[12000ms]"
              src={portfolioData.artist.portraitUrl}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 -z-10 transition-colors duration-700"></div>
        </div>
      </div>
    </section>
  );
}
