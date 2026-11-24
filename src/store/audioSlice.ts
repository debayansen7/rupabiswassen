import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import portfolioData from '../../rupa-portfolio-data.json';
import type { Track } from './portfolioSlice';

export type { Track };

interface AudioState {
  playing: boolean;
  hasStarted: boolean;
  activeTrackIndex: number;
  progress: number;
  volume: number;
  tracks: Track[];
}

const initialState: AudioState = {
  playing: false,
  hasStarted: false,
  activeTrackIndex: 0,
  progress: 0,
  volume: 0.8,
  tracks: portfolioData.discography.tracks as Track[],
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
      if (action.payload) state.hasStarted = true;
    },
    togglePlay: (state) => {
      state.playing = !state.playing;
      if (state.playing) state.hasStarted = true;
    },
    setActiveTrackIndex: (state, action: PayloadAction<number>) => {
      state.activeTrackIndex = action.payload;
      state.progress = 0;
    },
    nextTrack: (state) => {
      state.activeTrackIndex = (state.activeTrackIndex + 1) % state.tracks.length;
      state.progress = 0;
    },
    prevTrack: (state) => {
      state.activeTrackIndex =
        state.activeTrackIndex === 0
          ? state.tracks.length - 1
          : state.activeTrackIndex - 1;
      state.progress = 0;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const {
  setPlaying,
  togglePlay,
  setActiveTrackIndex,
  nextTrack,
  prevTrack,
  setProgress,
  setVolume,
} = audioSlice.actions;

export default audioSlice.reducer;
