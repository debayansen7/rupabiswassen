'use client';

import React from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  onClose: () => void;
}

export default function GalleryModal({
  isOpen,
  imageSrc,
  imageAlt,
  title,
  description,
  onClose,
}: GalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-2xl transition-all duration-500 p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2 rounded-full border border-outline-variant/20 hover:border-primary/50"
      >
        <span className="material-symbols-outlined text-3xl font-light">close</span>
      </button>

      {/* Modal Content */}
      <div
        className="w-full max-w-5xl bg-surface-container border border-outline-variant/10 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row gap-8 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Column */}
        <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-auto md:h-[60vh] bg-surface-container-lowest overflow-hidden rounded-md border border-outline-variant/10">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-700"
          />
        </div>

        {/* Text/Context Column */}
        <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
          <div>
            <span className="font-label text-xs text-primary uppercase tracking-widest block mb-2 font-bold">
              Visual Archives
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-on-surface leading-tight font-semibold">
              {title}
            </h3>
            <div className="w-12 h-[1px] bg-primary mt-4"></div>
          </div>

          <div className="space-y-4">
            <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
              {description}
            </p>
            <p className="font-body text-[11px] text-primary/70 tracking-wide uppercase font-semibold">
              Captured during global tours • 2022 - 2024
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-primary/40 text-primary font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 rounded"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
