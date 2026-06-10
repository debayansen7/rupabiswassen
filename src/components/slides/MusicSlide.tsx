"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  togglePlay,
  setActiveTrackIndex,
  setPlaying,
} from "@/store/audioSlice";
import { useTheme } from "@/hooks/useTheme";
import Turntable from "@/components/Turntable";

interface MusicSlideProps {
  sectionStyle: React.CSSProperties;
  portraitStyle: React.CSSProperties;
  getParallaxBgTextStyle: (index: number) => React.CSSProperties;
}

export default function MusicSlide({
  sectionStyle,
  portraitStyle,
  getParallaxBgTextStyle,
}: MusicSlideProps) {
  const dispatch = useAppDispatch();
  const { activeTheme } = useTheme();
  const portfolioData = useAppSelector((state) => state.portfolio);
  const { playing, activeTrackIndex, tracks } = useAppSelector(
    (state) => state.audio,
  );

  const handleTrackSelect = (index: number) => {
    if (activeTrackIndex === index) {
      dispatch(togglePlay());
    } else {
      dispatch(setActiveTrackIndex(index));
      dispatch(setPlaying(true));
    }
  };

  return (
    <section
      className={`section flex items-center justify-center min-h-screen relative ${
        activeTheme === "ruby" ? "ruby-gradient-2" : "gold-gradient-2"
      }`}
      id="story"
      style={sectionStyle}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-bg-text"
        style={getParallaxBgTextStyle(1)}
      >
        <h2 className="font-display text-[26vw] text-primary whitespace-nowrap leading-none transition-colors duration-700">
          MUSIC
        </h2>
      </div>

      <div className="w-full max-w-container-max px-6 md:px-margin-desktop py-12 md:py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 text-left mobile-fade-up">
            <div className="space-y-3">
              <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-bold block">
                {portfolioData.discography.sectionLabel}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold leading-tight">
                {portfolioData.discography.title}
              </h2>
              <div className="h-[2px] w-20 bg-primary transition-all duration-700"></div>
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {tracks.slice(0, 4).map((track, idx) => (
                <div
                  key={track.id}
                  onClick={() => handleTrackSelect(idx)}
                  className={`p-4 flex items-center justify-between border-b border-outline-variant/15 hover:bg-surface-container/60 transition-all duration-300 rounded cursor-pointer group ${
                    activeTrackIndex === idx ? "bg-surface-container/80" : ""
                  }`}
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <span className="font-label text-xs text-outline w-5 text-center font-bold">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 bg-outline-variant/10 rounded overflow-hidden flex-shrink-0 hidden sm:block">
                      <img
                        src={track.cover}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0">
                      <h4
                        className={`font-body text-sm sm:text-base font-bold truncate transition-colors ${
                          activeTrackIndex === idx
                            ? "text-primary"
                            : "text-on-surface"
                        }`}
                      >
                        {track.title}
                      </h4>
                      <p className="text-[10px] text-on-surface-variant/80 uppercase tracking-widest font-label truncate max-w-[150px] sm:max-w-[200px]">
                        {track.raga}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-label text-xs text-on-surface-variant hidden sm:inline">
                      {track.duration}
                    </span>
                    <span
                      className={`material-symbols-outlined text-xl text-primary transition-all duration-300 ${
                        activeTrackIndex === idx && playing
                          ? "scale-110"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {activeTrackIndex === idx && playing
                        ? "pause"
                        : "play_arrow"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/her-revival"
                className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary hover:opacity-80 transition-opacity font-bold animate-pulse"
              >
                <span>{portfolioData.discography.revivalLinkLabel}</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div
            className="flex justify-center parallax-portrait mobile-fade-up delay-1"
            style={portraitStyle}
          >
            <Turntable />
          </div>
        </div>
      </div>
    </section>
  );
}
