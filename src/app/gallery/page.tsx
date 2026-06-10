'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import Navbar from '@/components/Navbar';
import ParallaxBackground from '@/components/ParallaxBackground';
import GalleryModal from '@/components/GalleryModal';
import Footer from '@/components/Footer';

interface GalleryItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function GalleryPage() {
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);
  const portfolioData = useAppSelector((state) => state.portfolio);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Retrieve items from Redux store state
  const galleryItems: GalleryItem[] = portfolioData.gallery.items;

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className={`min-h-screen pt-28 pb-16 text-on-surface transition-colors duration-700 ${
        activeTheme === 'ruby' ? 'ruby-gradient' : 'gold-gradient'
      }`}>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          
          {/* Header section */}
          <div className="mb-12 text-center md:text-left space-y-4">
            <span className="font-label text-xs text-primary uppercase tracking-[0.25em] font-bold block transition-colors duration-700">
              Visual Archives
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface leading-tight transition-colors duration-700">
              {portfolioData.gallery.title}
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {portfolioData.gallery.subtitle}
            </p>
          </div>

          {/* Premium Asymmetric Masonry layout for global gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch w-full max-w-6xl mx-auto">
            
            {/* Image 1: Main Large Card (London Concerts) */}
            <div
              onClick={() => setSelectedPhoto(galleryItems[0])}
              className="lg:col-span-7 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/15 hover:border-primary/40 shadow-xl transition-all duration-500 bg-surface-container-low min-h-[380px] md:min-h-[460px] flex items-stretch"
            >
              <img
                src={galleryItems[0].imageSrc}
                alt={galleryItems[0].imageAlt}
                className="w-full h-full object-cover filter contrast-[1.03] scale-102 group-hover:scale-100 transition-all duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 select-none text-left">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mb-1">Live Concert Still</span>
                <h3 className="font-display text-xl sm:text-2xl text-white font-medium italic">{galleryItems[0].title}</h3>
                <p className="font-body text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed max-w-md">
                  {galleryItems[0].description}
                </p>
              </div>
            </div>

            {/* Image 2: Studio Sessions */}
            <div
              onClick={() => setSelectedPhoto(galleryItems[1])}
              className="lg:col-span-5 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/15 hover:border-primary/40 shadow-xl transition-all duration-500 bg-surface-container-low min-h-[280px] md:min-h-[460px] flex items-stretch"
            >
              <img
                src={galleryItems[1].imageSrc}
                alt={galleryItems[1].imageAlt}
                className="w-full h-full object-cover scale-102 group-hover:scale-100 transition-all duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 select-none text-left">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mb-1">Creative Sessions</span>
                <h3 className="font-display text-xl text-white font-medium italic">{galleryItems[1].title}</h3>
                <p className="font-body text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed max-w-sm">
                  {galleryItems[1].description}
                </p>
              </div>
            </div>

            {/* Image 3: Composing Silence */}
            <div
              onClick={() => setSelectedPhoto(galleryItems[2])}
              className="lg:col-span-6 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/15 hover:border-primary/40 shadow-xl transition-all duration-500 bg-surface-container-low min-h-[260px] md:min-h-[380px] flex items-stretch"
            >
              <img
                src={galleryItems[2].imageSrc}
                alt={galleryItems[2].imageAlt}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 select-none text-left">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mb-1">Notations & Frets</span>
                <h3 className="font-display text-xl text-white font-medium italic">{galleryItems[2].title}</h3>
                <p className="font-body text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed max-w-sm">
                  {galleryItems[2].description}
                </p>
              </div>
            </div>

            {/* Image 4: Soul Resonance */}
            <div
              onClick={() => setSelectedPhoto(galleryItems[3])}
              className="lg:col-span-6 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/15 hover:border-primary/40 shadow-xl transition-all duration-500 bg-surface-container-low min-h-[260px] md:min-h-[380px] flex items-stretch"
            >
              <img
                src={galleryItems[3].imageSrc}
                alt={galleryItems[3].imageAlt}
                className="w-full h-full object-cover scale-102 group-hover:scale-100 transition-all duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 select-none text-left">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mb-1">Auditorium Connection</span>
                <h3 className="font-display text-xl text-white font-medium italic">{galleryItems[3].title}</h3>
                <p className="font-body text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed max-w-sm">
                  {galleryItems[3].description}
                </p>
              </div>
            </div>

          </div>

          {/* Premium Footer Area inside the Gallery page */}
          <Footer />

        </div>
      </main>

      {/* Expanded Lightbox Modal Overlay */}
      {selectedPhoto && (
        <GalleryModal
          isOpen={!!selectedPhoto}
          imageSrc={selectedPhoto.imageSrc}
          imageAlt={selectedPhoto.imageAlt}
          title={selectedPhoto.title}
          description={selectedPhoto.description}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}
