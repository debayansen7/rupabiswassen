"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { useTheme } from "@/hooks/useTheme";

interface NewsSlideProps {
  sectionStyle: React.CSSProperties;
  getParallaxBgTextStyle: (index: number) => React.CSSProperties;
}

export default function NewsSlide({
  sectionStyle,
  getParallaxBgTextStyle,
}: NewsSlideProps) {
  const { activeTheme } = useTheme();
  const { news } = useAppSelector((state) => state.portfolio);

  return (
    <section
      className={`section flex items-center justify-center min-h-screen relative ${
        activeTheme === "ruby" ? "ruby-gradient-4" : "gold-gradient-4"
      }`}
      id="news"
      style={sectionStyle}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-bg-text"
        style={getParallaxBgTextStyle(3)}
      >
        <h2 className="font-display text-[26vw] text-primary whitespace-nowrap leading-none transition-colors duration-700">
          NEWS
        </h2>
      </div>

      <div className="w-full max-w-container-max px-6 md:px-margin-desktop py-12 md:py-0 md:pb-24 flex flex-col justify-center h-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left">
          <div className="flex flex-col justify-center space-y-8 mobile-fade-up">
            <div className="space-y-4">
              <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-bold block">
                {news.sectionLabel}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-on-surface leading-tight font-semibold">
                {news.title}
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-sm leading-relaxed">
                {news.subtitle}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary hover:opacity-80 transition-opacity font-bold w-fit"
            >
              <span>Book a Performance</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="space-y-4 mobile-fade-up delay-1">
            {news.items.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-surface-container/50 border border-outline-variant/15 rounded-xl space-y-2 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold border border-primary/30 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-wider">
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg text-on-surface font-semibold leading-snug">
                  {item.headline}
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
