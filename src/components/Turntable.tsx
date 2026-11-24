'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { togglePlay } from '@/store/audioSlice';

export default function Turntable() {
  const dispatch = useAppDispatch();
  const { playing, tracks, activeTrackIndex } = useAppSelector((state) => state.audio);
  const currentTrack = tracks[activeTrackIndex];

  const handlePlayToggle = () => {
    dispatch(togglePlay());
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]">
        {/* Turntable Wooden/Metallic Square Base */}
        <div className="absolute inset-0 bg-surface-container rounded-3xl border-[0.5px] border-outline-variant/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center">
          <div className="absolute top-4 left-4 w-4 h-4 bg-outline/20 rounded-full shadow-inner"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-outline/20 rounded-full shadow-inner"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-outline/20 rounded-full shadow-inner"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-outline/20 rounded-full shadow-inner"></div>
        </div>

        {/* Circular Platter */}
        <div className="absolute inset-6 bg-surface-container-lowest rounded-full border-4 border-outline-variant/10 shadow-2xl flex items-center justify-center">
          {/* Vinyl Record */}
          <div
            className={`absolute inset-4 bg-zinc-950 rounded-full border-[0.5px] border-zinc-800 flex items-center justify-center overflow-hidden turntable-record ${
              playing ? 'turntable-playing' : ''
            }`}
            style={{
              backgroundImage: 'radial-gradient(circle, #09090b 2px, transparent 3px), radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0.03) 21%, transparent 22%, rgba(255, 255, 255, 0.03) 30%, transparent 31%, rgba(255, 255, 255, 0.03) 45%, transparent 46%, rgba(255, 255, 255, 0.02) 60%, transparent 61%)',
            }}
          >
            {/* Glossy grooves sheen layer */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.06)_50%,transparent_55%)] pointer-events-none"></div>
            
            {/* Record Center Label */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-primary rounded-full flex items-center justify-center p-2 text-center shadow-lg transition-colors duration-700">
              <div className="w-full h-full rounded-full border border-on-primary/20 flex flex-col items-center justify-center gap-1 select-none">
                <span className="font-display text-on-primary text-[10px] md:text-xs uppercase font-extrabold tracking-widest leading-none">
                  Rupa Sen
                </span>
                <div className="w-8 h-[0.5px] bg-on-primary/30 my-0.5"></div>
                <span className="font-body text-on-primary text-[8px] md:text-[9px] font-medium max-w-[70px] truncate px-1">
                  {currentTrack.title}
                </span>
              </div>
            </div>

            {/* Vinyl Spindle Center Hole */}
            <div className="absolute w-3 h-3 bg-zinc-950 rounded-full border border-zinc-700 shadow-inner z-10"></div>
          </div>
        </div>

        {/* ToneArm (Needle) Assembly */}
        <div
          className="absolute top-4 right-10 origin-top z-20 transition-transform duration-700 ease-out"
          style={{
            transform: playing ? 'rotate(34deg)' : 'rotate(12deg)',
          }}
        >
          {/* Base Pivot pivot-point */}
          <div className="w-10 h-10 bg-outline rounded-full border border-outline-variant/30 shadow-md flex items-center justify-center">
            <div className="w-4 h-4 bg-zinc-900 rounded-full"></div>
          </div>
          
          {/* Arm metallic line */}
          <div className="w-1.5 h-32 bg-zinc-400 mx-auto shadow-sm relative">
            <div className="absolute -bottom-8 -left-2 w-5 h-8 bg-zinc-700 rounded-sm flex items-center justify-center border border-zinc-600 shadow-md">
              {/* Cartridge and Stylus */}
              <div className="w-1.5 h-3 bg-primary rounded-full absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Trigger Button */}
      <button
        onClick={handlePlayToggle}
        className="flex items-center gap-4 bg-primary text-on-primary px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(233,193,118,0.2)]"
      >
        <span className="material-symbols-outlined text-2xl font-bold">
          {playing ? 'pause_circle' : 'play_circle'}
        </span>
        <span className="font-label text-sm uppercase tracking-widest font-semibold">
          {playing ? 'Pause Composition' : 'Preview Composition'}
        </span>
      </button>
    </div>
  );
}
