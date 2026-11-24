'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  nextTrack,
  prevTrack,
  setProgress,
  setPlaying,
  setVolume,
} from '@/store/audioSlice';

export default function AudioPlayer() {
  const dispatch = useAppDispatch();
  const { playing, activeTrackIndex, progress, volume, tracks, hasStarted } = useAppSelector(
    (state) => state.audio
  );
  const currentTrack = tracks[activeTrackIndex];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Initialize and handle source audio updates
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.src = currentTrack.src;
    audio.volume = volume;
    audio.load();

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onTimeUpdate = () => {
      dispatch(setProgress(audio.currentTime));
    };

    const onEnded = () => {
      dispatch(nextTrack());
    };

    // Play as soon as enough data is buffered
    const onCanPlay = () => {
      if (playing) {
        audio.play().catch(() => dispatch(setPlaying(false)));
      }
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('canplay', onCanPlay);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('canplay', onCanPlay);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack, dispatch]);

  // Handle Play/Pause triggers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {
        dispatch(setPlaying(false));
      });
    } else {
      audio.pause();
    }
  }, [playing, dispatch]);

  // Handle Volume triggers
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  // Format seconds to MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayToggle = () => {
    dispatch(setPlaying(!playing));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    dispatch(setProgress(newProgress));
    if (audioRef.current) {
      audioRef.current.currentTime = newProgress;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    dispatch(setVolume(newVolume));
  };

  // Stay out of the way entirely until the visitor has actually pressed play somewhere
  if (!hasStarted) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 rounded-2xl bg-surface-container/90 backdrop-blur-2xl border border-outline-variant/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 ${
        expanded ? 'w-[calc(100vw-2.5rem)] sm:w-96 p-4' : 'w-16 h-16 p-0'
      }`}
    >
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          aria-label="Expand music preview player"
          className="relative w-16 h-16 rounded-2xl overflow-hidden group"
        >
          <img
            alt={currentTrack.title}
            className="w-full h-full object-cover"
            src={currentTrack.cover}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/55 transition-colors">
            <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {playing ? 'pause_circle' : 'play_circle'}
            </span>
          </span>
        </button>
      ) : (
        <div className="space-y-3">
          {/* Header row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-md overflow-hidden border border-outline-variant/20 flex-shrink-0">
                <img alt={currentTrack.title} className="w-full h-full object-cover" src={currentTrack.cover} />
              </div>
              <div className="min-w-0">
                <p className="font-label text-[9px] text-primary tracking-widest uppercase font-semibold">
                  Preview Clip
                </p>
                <p className="font-body text-xs text-on-surface font-semibold truncate">
                  {currentTrack.title}
                </p>
              </div>
            </div>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Collapse player"
              className="text-on-surface-variant hover:text-primary transition-colors flex-shrink-0"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => dispatch(prevTrack())}
              className="text-on-surface-variant hover:text-primary transition-colors active:scale-90"
            >
              <span className="material-symbols-outlined text-2xl font-semibold">skip_previous</span>
            </button>
            <button
              onClick={handlePlayToggle}
              className="text-primary hover:scale-110 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {playing ? 'pause_circle' : 'play_circle'}
              </span>
            </button>
            <button
              onClick={() => dispatch(nextTrack())}
              className="text-on-surface-variant hover:text-primary transition-colors active:scale-90"
            >
              <span className="material-symbols-outlined text-2xl font-semibold">skip_next</span>
            </button>
          </div>

          {/* Scrubber Timeline */}
          <div className="w-full flex items-center gap-3 px-1">
            <span className="font-label text-[10px] text-on-surface-variant w-9 text-right select-none">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={handleProgressChange}
              className="flex-1 h-[3px] rounded-full appearance-none cursor-pointer bg-outline-variant/30 accent-primary focus:outline-none"
              style={{
                background: `linear-gradient(to right, var(--primary) ${
                  (progress / (duration || 100)) * 100
                }%, var(--outline-variant) ${(progress / (duration || 100)) * 100}%)`,
              }}
            />
            <span className="font-label text-[10px] text-on-surface-variant w-9 text-left select-none">
              {formatTime(duration || currentTrack.durationSeconds)}
            </span>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">
              {volume === 0 ? 'volume_off' : volume < 0.5 ? 'volume_down' : 'volume_up'}
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-[3px] rounded-full appearance-none cursor-pointer bg-outline-variant/30 accent-primary focus:outline-none"
              style={{
                background: `linear-gradient(to right, var(--primary) ${volume * 100}%, var(--outline-variant) ${volume * 100}%)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
