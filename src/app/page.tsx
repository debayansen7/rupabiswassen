"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import ParallaxBackground from "@/components/ParallaxBackground";
import GalleryModal from "@/components/GalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlide from "@/components/slides/HeroSlide";
import MusicSlide from "@/components/slides/MusicSlide";
import PerformancesSlide from "@/components/slides/PerformancesSlide";
import NewsSlide from "@/components/slides/NewsSlide";

interface GalleryItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function HomePage() {
  useIntersectionObserver();
  const portfolioData = useAppSelector((state) => state.portfolio);

  const containerRef = useRef<HTMLDivElement>(null);

  // State for horizontal scroll active index and window size
  const [activeSection, setActiveSection] = useState(0);
  const windowWidth = useWindowWidth();

  // Scroll/gesture ref accumulators
  const accumulatedDeltaRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const clearAccumulatedRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef(0);

  // Lightbox Modal state
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Handle wheel, keyboard, and touch swipe transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;
      e.preventDefault();

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      accumulatedDeltaRef.current += delta;

      if (clearAccumulatedRef.current)
        clearTimeout(clearAccumulatedRef.current);
      clearAccumulatedRef.current = setTimeout(() => {
        accumulatedDeltaRef.current = 0;
      }, 150);

      if (isAnimatingRef.current) return;

      if (Math.abs(accumulatedDeltaRef.current) >= 60) {
        const direction = accumulatedDeltaRef.current > 0 ? 1 : -1;
        accumulatedDeltaRef.current = 0;

        setActiveSection((prev) => {
          const next = prev + direction;
          if (next >= 0 && next <= 3) {
            isAnimatingRef.current = true;
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 1000);
            return next;
          }
          return prev;
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 768) return;
      if (isAnimatingRef.current) return;

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "PageDown"
      ) {
        setActiveSection((prev) => {
          if (prev < 3) {
            isAnimatingRef.current = true;
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 1000);
            return prev + 1;
          }
          return prev;
        });
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        setActiveSection((prev) => {
          if (prev > 0) {
            isAnimatingRef.current = true;
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 1000);
            return prev - 1;
          }
          return prev;
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 768) return;
      touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (window.innerWidth < 768) return;
      if (isAnimatingRef.current) return;

      const deltaX = touchStartRef.current - e.changedTouches[0].clientX;
      if (Math.abs(deltaX) > 60) {
        const direction = deltaX > 0 ? 1 : -1;
        setActiveSection((prev) => {
          const next = prev + direction;
          if (next >= 0 && next <= 3) {
            isAnimatingRef.current = true;
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 1000);
            return next;
          }
          return prev;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (clearAccumulatedRef.current)
        clearTimeout(clearAccumulatedRef.current);
    };
  }, []);

  // Helper to compute dynamic 3D folding screen styles based on active index
  const getSectionStyle = (index: number) => {
    if (typeof window === "undefined" || windowWidth < 768) return {};

    if (index === activeSection) {
      return {
        transform: "perspective(1600px) rotateY(0deg) scale(1) translateZ(0px)",
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    } else if (index < activeSection) {
      return {
        transform:
          "perspective(1600px) rotateY(38deg) scale(0.85) translateZ(-250px) translateX(-60px)",
        opacity: 0,
        pointerEvents: "none" as const,
      };
    } else {
      return {
        transform:
          "perspective(1600px) rotateY(-38deg) scale(0.85) translateZ(-250px) translateX(60px)",
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  // Helper for Horizontal Parallax background text translation
  const getParallaxBgTextStyle = (index: number) => {
    if (typeof window === "undefined" || windowWidth < 768) return {};

    if (index === activeSection) {
      return {
        transform: "translate3d(0, 0, 0) scale(1)",
        opacity: 0.04,
      };
    } else if (index < activeSection) {
      return {
        transform: "translate3d(-18vw, 0, 0) scale(0.9)",
        opacity: 0,
      };
    } else {
      return {
        transform: "translate3d(18vw, 0, 0) scale(1.1)",
        opacity: 0,
      };
    }
  };

  // Helper for portrait parallax translation
  const getPortraitStyle = (index: number) => {
    if (typeof window === "undefined" || windowWidth < 768) return {};

    if (index === activeSection) {
      return {
        transform: "translate3d(0, 0, 0) scale(1)",
        opacity: 1,
      };
    } else if (index < activeSection) {
      return {
        transform: "translate3d(8vw, 0, 0) scale(0.95)",
        opacity: 0.4,
      };
    } else {
      return {
        transform: "translate3d(-8vw, 0, 0) scale(0.95)",
        opacity: 0.4,
      };
    }
  };

  const galleryItems: GalleryItem[] = portfolioData.gallery.items;

  return (
    <>
      {/* Dynamic Parallax blurred glowing lights underneath */}
      <ParallaxBackground />
      <Navbar />

      {/* Main horizontal scrolling container for desktop, vertical on mobile */}
      <main
        ref={containerRef}
        className="horizontal-container transition-all no-scrollbar md:overflow-hidden md:relative md:w-[400vw] md:h-screen"
        id="scroll-wrapper"
        style={{
          transform:
            typeof window !== "undefined" && windowWidth >= 768
              ? `translate3d(-${activeSection * 100}vw, 0, 0)`
              : "none",
        }}
      >
        {/* SLIDE 1: HERO/INTRODUCTION */}
        <HeroSlide
          sectionStyle={getSectionStyle(0)}
          portraitStyle={getPortraitStyle(0)}
          getParallaxBgTextStyle={getParallaxBgTextStyle}
        />

        {/* SLIDE 2: HER MUSIC */}
        <MusicSlide
          sectionStyle={getSectionStyle(1)}
          portraitStyle={getPortraitStyle(1)}
          getParallaxBgTextStyle={getParallaxBgTextStyle}
        />

        {/* SLIDE 3: PERFORMANCES */}
        <PerformancesSlide
          sectionStyle={getSectionStyle(2)}
          portraitStyle={getPortraitStyle(2)}
          getParallaxBgTextStyle={getParallaxBgTextStyle}
          galleryItems={galleryItems}
          onPhotoSelect={setSelectedPhoto}
        />

        {/* SLIDE 4: LATEST NEWS */}
        <NewsSlide
          sectionStyle={getSectionStyle(3)}
          getParallaxBgTextStyle={getParallaxBgTextStyle}
        />
      </main>

      {/* Premium Minimalist Dot Indicators */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 bg-surface-container/60 backdrop-blur-xl px-5 py-3 border border-outline-variant/25 rounded-full shadow-2xl select-none transition-colors duration-700">
        <span className="font-label text-[10px] uppercase font-bold tracking-widest text-primary mr-2 transition-all duration-500">
          {`0${activeSection + 1}. ${["Introduction", "Her Music", "Performances", "News"][activeSection]}`}
        </span>
        <div className="flex items-center gap-2">
          {["Introduction", "Music", "Performances", "News"].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimatingRef.current) return;
                isAnimatingRef.current = true;
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 1000);
                setActiveSection(idx);
              }}
              className={`h-2 transition-all duration-500 cursor-pointer ${
                activeSection === idx
                  ? "w-6 bg-primary rounded-full"
                  : "w-2 bg-outline/40 hover:bg-primary/60 rounded-full"
              }`}
              title={`Go to ${["Introduction", "Her Music", "Performances", "News"][idx]}`}
            />
          ))}
        </div>
      </div>

      {/* Expanded Lightbox Modal for visual images */}
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

      <Footer isAbsolute={true} />
    </>
  );
}
