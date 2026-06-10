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
  const { playing, activeTrackIndex, progress, volume, tracks } = useAppSelector(
    (state) => state.audio
  );
  const currentTrack = tracks[activeTrackIndex];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState(0);

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

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 h-24 bg-surface-container/90 backdrop-blur-2xl border-t border-outline-variant/10 shadow-[0_-8px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-4 sm:px-margin-desktop h-full max-w-container-max mx-auto gap-4">
        
        {/* Track Details */}
        <div className="flex items-center gap-4 w-1/3 md:w-1/4">
          <div className="w-12 h-12 bg-outline-variant/20 overflow-hidden rounded-md border border-outline-variant/20 flex-shrink-0 hidden sm:block">
            <img
              alt={currentTrack.title}
              className="w-full h-full object-cover"
              src={currentTrack.cover}
            />
          </div>
          <div className="min-w-0">
            <p className="font-label text-[9px] text-primary tracking-widest uppercase font-semibold">
              Now Playing
            </p>
            <p className="font-body text-xs md:text-sm text-on-surface font-semibold truncate max-w-[120px] sm:max-w-[160px]">
              {currentTrack.title}
            </p>
            <p className="font-body text-[10px] text-on-surface-variant/70 truncate hidden md:block">
              {currentTrack.raga}
            </p>
          </div>
        </div>

        {/* Central Controls */}
        <div className="flex-1 max-w-xl flex flex-col items-center gap-1">
          <div className="flex items-center gap-6">
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
              <span className="material-symbols-outlined text-4xl font-fill" style={{ fontVariationSettings: "'FILL' 1" }}>
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
            <span className="font-label text-[10px] text-on-surface-variant w-10 text-right select-none">
              {formatTime(progress)}
            </span>
            <div className="flex-1 relative flex items-center group">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-[3px] rounded-full appearance-none cursor-pointer bg-outline-variant/30 accent-primary focus:outline-none"
                style={{
                  background: `linear-gradient(to right, var(--primary) ${
                    (progress / (duration || 100)) * 100
                  }%, var(--outline-variant) ${(progress / (duration || 100)) * 100}%)`,
                }}
              />
            </div>
            <span className="font-label text-[10px] text-on-surface-variant w-10 text-left select-none">
              {formatTime(duration || currentTrack.durationSeconds)}
            </span>
          </div>
        </div>

        {/* Volume controls */}
        <div className="flex items-center justify-end gap-3 w-1/3 md:w-1/4">
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
            className="w-16 sm:w-20 md:w-24 h-[3px] rounded-full appearance-none cursor-pointer bg-outline-variant/30 accent-primary focus:outline-none"
            style={{
              background: `linear-gradient(to right, var(--primary) ${volume * 100}%, var(--outline-variant) ${volume * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
