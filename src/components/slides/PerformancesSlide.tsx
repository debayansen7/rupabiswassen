"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { useTheme } from "@/hooks/useTheme";
import { GalleryItem } from "@/store/portfolioSlice";

interface PerformancesSlideProps {
  sectionStyle: React.CSSProperties;
  portraitStyle: React.CSSProperties;
  getParallaxBgTextStyle: (index: number) => React.CSSProperties;
  galleryItems: GalleryItem[];
  onPhotoSelect: (item: GalleryItem) => void;
}

export default function PerformancesSlide({
  sectionStyle,
  portraitStyle,
  getParallaxBgTextStyle,
  galleryItems,
  onPhotoSelect,
}: PerformancesSlideProps) {
  const { activeTheme } = useTheme();
  const portfolioData = useAppSelector((state) => state.portfolio);

  return (
    <section
      className={`section flex items-center justify-center min-h-screen relative ${
        activeTheme === "ruby" ? "ruby-gradient-3" : "gold-gradient-3"
      }`}
      id="gallery"
      style={sectionStyle}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-bg-text"
        style={getParallaxBgTextStyle(2)}
      >
        <h2 className="font-display text-[26vw] text-primary whitespace-nowrap leading-none transition-colors duration-700">
          VISUAL
        </h2>
      </div>

      <div className="w-full max-w-container-max px-6 md:px-margin-desktop py-12 md:py-0 flex flex-col justify-center relative z-10">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-left mobile-fade-up">
          <div>
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-bold block mb-2">
              {portfolioData.gallery.sectionLabel}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold leading-tight">
              {portfolioData.gallery.title}
            </h2>
          </div>
          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary hover:opacity-80 transition-opacity font-bold animate-pulse"
            >
              <span>{portfolioData.gallery.viewAllLabel}</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 h-[320px] md:h-[400px] max-w-5xl mx-auto w-full mobile-fade-up delay-1">
          <div
            onClick={() => onPhotoSelect(galleryItems[0])}
            className="col-span-12 sm:col-span-5 h-full rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant/15 shadow-lg"
          >
            <img
              src={galleryItems[0].imageSrc}
              alt={galleryItems[0].imageAlt}
              className="w-full h-full object-cover filter contrast-[1.05] scale-105 group-hover:scale-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 select-none pointer-events-none text-left">
              <div>
                <p className="font-display text-base text-white italic font-medium">
                  {galleryItems[0].title}
                </p>
                <p className="font-body text-[10px] text-gray-300 line-clamp-1 mt-1">
                  {galleryItems[0].description}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 sm:col-span-7 h-full flex flex-col gap-5 parallax-portrait"
            style={portraitStyle}
          >
            <div
              onClick={() => onPhotoSelect(galleryItems[1])}
              className="h-1/2 rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant/15 shadow-lg"
            >
              <img
                src={galleryItems[1].imageSrc}
                alt={galleryItems[1].imageAlt}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 select-none pointer-events-none text-left">
                <p className="font-display text-sm text-white italic font-medium">
                  {galleryItems[1].title}
                </p>
              </div>
            </div>

            <div className="h-1/2 flex gap-5">
              <div
                onClick={() => onPhotoSelect(galleryItems[2])}
                className="w-1/2 h-full rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant/15 shadow-lg"
              >
                <img
                  src={galleryItems[2].imageSrc}
                  alt={galleryItems[2].imageAlt}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 select-none pointer-events-none text-left">
                  <p className="font-display text-xs text-white italic font-medium">
                    {galleryItems[2].title}
                  </p>
                </div>
              </div>

              <div
                onClick={() => onPhotoSelect(galleryItems[3])}
                className="w-1/2 h-full rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant/15 shadow-lg"
              >
                <img
                  src={galleryItems[3].imageSrc}
                  alt={galleryItems[3].imageAlt}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 select-none pointer-events-none text-left">
                  <p className="font-display text-xs text-white italic font-medium">
                    {galleryItems[3].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
