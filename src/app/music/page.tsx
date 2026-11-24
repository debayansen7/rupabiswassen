"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  togglePlay,
  setActiveTrackIndex,
  setPlaying,
} from "@/store/audioSlice";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import Turntable from "@/components/Turntable";
import Footer from "@/components/Footer";


export default function MusicPage() {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);
  const portfolioData = useAppSelector((state) => state.portfolio);
  const { playing, activeTrackIndex, tracks } = useAppSelector(
    (state) => state.audio,
  );
  const currentTrack = tracks[activeTrackIndex];

  const handleTrackSelect = (index: number) => {
    if (activeTrackIndex === index) {
      dispatch(togglePlay());
    } else {
      dispatch(setActiveTrackIndex(index));
      dispatch(setPlaying(true));
    }
  };

  const currentRagaInfo = currentTrack
    ? {
        mood: currentTrack.ragaMood,
        timing: currentTrack.ragaTiming,
        description: currentTrack.ragaDescription,
      }
    : {
        mood: "Classical Fusion",
        timing: "Various",
        description: "A contemporary Hindustani classical fusion sitar masterpiece.",
      };

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main
        className={`min-h-screen pt-28 pb-0 text-on-surface transition-colors duration-700 ${
          activeTheme === "ruby" ? "ruby-gradient" : "gold-gradient"
        }`}
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          {/* Header Description */}
          <div className="mb-12 text-center md:text-left space-y-4">
            <span className="font-label text-xs text-primary uppercase tracking-[0.25em] font-bold block transition-colors duration-700">
              {portfolioData.discography.musicPageLabel}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface leading-tight transition-colors duration-700">
              {portfolioData.discography.title}
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {portfolioData.discography.subtitle}
            </p>
            <p className="font-label text-[11px] text-on-surface-variant/60 uppercase tracking-widest">
              Short preview clips shown below &mdash; full recordings available on streaming platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Interactive Turntable & Raga Details Card */}
            <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-stretch">
              {/* Premium Turntable Container */}
              <div className="bg-surface-container/30 border border-outline-variant/15 p-6 rounded-2xl w-full flex justify-center backdrop-blur-md shadow-lg">
                <Turntable />
              </div>

              {/* Raga Context Details Panel */}
              <div className="bg-surface-container/55 border border-outline-variant/15 p-6 sm:p-8 rounded-2xl w-full backdrop-blur-xl shadow-xl space-y-6 text-left">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">
                      Raga Profile
                    </span>
                    <h3 className="font-display text-xl text-on-surface font-semibold mt-1">
                      {currentTrack.raga.split(" - ")[0]}
                    </h3>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-primary text-[10px] uppercase font-bold tracking-wider">
                    {currentRagaInfo.timing}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-outline-variant/15"></div>

                <div className="space-y-4">
                  <div>
                    <span className="font-label text-[10px] text-outline uppercase tracking-wider block mb-1">
                      Emotional Essence
                    </span>
                    <p className="font-body text-sm font-semibold text-primary">
                      {currentRagaInfo.mood}
                    </p>
                  </div>
                  <div>
                    <span className="font-label text-[10px] text-outline uppercase tracking-wider block mb-1">
                      Auditory Narrative
                    </span>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {currentRagaInfo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Playlist & Album Notes */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="bg-surface-container/45 border border-outline-variant/15 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-xl space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-label text-xs text-outline uppercase tracking-widest font-bold">
                    Tracks Catalog ({tracks.length})
                  </span>
                  <span className="font-label text-xs text-on-surface-variant font-semibold">
                    Interactive Player
                  </span>
                </div>

                <div className="space-y-3">
                  {tracks.map((track, idx) => {
                    const isSelected = activeTrackIndex === idx;
                    return (
                      <div
                        key={track.id}
                        onClick={() => handleTrackSelect(idx)}
                        className={`p-4 flex items-center justify-between border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container/70 transition-all duration-300 rounded-xl cursor-pointer group ${
                          isSelected
                            ? "bg-surface-container/90 border-primary/45 shadow-sm"
                            : "bg-surface-container-low/20"
                        }`}
                      >
                        <div className="flex items-center gap-5 min-w-0">
                          <span
                            className={`font-label text-xs w-6 text-center font-bold ${
                              isSelected ? "text-primary" : "text-outline"
                            }`}
                          >
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>

                          {/* Mini Album Cover */}
                          <div className="w-12 h-12 bg-outline-variant/10 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <img
                              src={track.cover}
                              className="w-full h-full object-cover"
                              alt=""
                            />
                            {isSelected && playing && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="flex gap-[2px] items-end h-4 w-4">
                                  <div
                                    className="bg-primary w-[3px] h-2 animate-pulse"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="bg-primary w-[3px] h-4 animate-pulse"
                                    style={{ animationDelay: "0.3s" }}
                                  ></div>
                                  <div
                                    className="bg-primary w-[3px] h-3 animate-pulse"
                                    style={{ animationDelay: "0.5s" }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="min-w-0">
                            <h4
                              className={`font-body text-sm sm:text-base font-bold truncate transition-colors ${
                                isSelected
                                  ? "text-primary"
                                  : "text-on-surface hover:text-primary"
                              }`}
                            >
                              {track.title}
                            </h4>
                            <p className="text-[10px] text-on-surface-variant/80 uppercase tracking-widest font-label truncate mt-0.5">
                              {track.raga}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-label text-xs text-on-surface-variant">
                            {track.duration}
                          </span>
                          <button
                            className={`w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300 ${
                              isSelected
                                ? "bg-primary/10 border-primary/40"
                                : ""
                            }`}
                          >
                            <span className="material-symbols-outlined text-lg leading-none">
                              {isSelected && playing ? "pause" : "play_arrow"}
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Composition Studio notes */}
              <div className="bg-surface-container/20 border border-outline-variant/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md space-y-4">
                <h4 className="font-display text-lg text-on-surface font-semibold">
                  {portfolioData.discography.technicalNote.title}
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {portfolioData.discography.technicalNote.body}
                </p>
              </div>
            </div>
          </div>

          {/* Premium Footer Area inside the Music page */}
          <Footer />
        </div>
      </main>
    </>
  );
}
