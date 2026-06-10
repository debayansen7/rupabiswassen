import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Track {
  id: string;
  title: string;
  album: string;
  raga: string;
  duration: string;
  durationSeconds: number;
  src: string;
  cover: string;
}

interface AudioState {
  playing: boolean;
  activeTrackIndex: number;
  progress: number;
  volume: number;
  tracks: Track[];
}

const defaultTracks: Track[] = [
  {
    id: 'track-1',
    title: 'Morning Alaap',
    album: 'Echoes of the Eternal',
    raga: 'Bhairav - The Dawn Raga',
    duration: '08:42',
    durationSeconds: 522,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALC3PWhfDGc6brC5Y9QuUVzsMf2mwLcrfbBXlE2ypYFhOZzRr4mByP7DGD4Hra41Yhq__c7jL4EyURZY5BwDwrbUKIOqSiLwGStCxfQNvUW5mSC7S4PLFQlLCaCkxixtxMZaQMf2heFbXKpI9iPjDQucA6GjkyJugSnYr0ujRIpLtgpTLKKVLnt1c-Il7JkIwz2z_DjeP6gSI_1CCJtbua3Uay0mI0DVnZx-3oekAS-bz5CXTRiCkrtteLkOEUcBgjOvzGyDMtLn_2',
  },
  {
    id: 'track-2',
    title: 'Indigo Sky',
    album: 'Echoes of the Eternal',
    raga: 'Yaman - Twilight Melodies',
    duration: '12:15',
    durationSeconds: 735,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnKxIEhI5VTTy0uc7JbHHGHp-HWiBHkzCaHVt6WiKSwocjI8mWbSoy-GRG2gNNV7vJ9DzkvCcnd45S65YbrCPaMjSTHdEvDPTcKpCR1bJZQRosQRJZpPtqKbjvLrsof5QrJJq-ymmlIbnlDIlBOFO_CY4ce5eGoyyFXLEuJNzF5WxYoczCUdGR-iJQ1H7pa4wK6AL7dEVt6QWhF5q0FY5lTOBMwNEo3GeaQjvj7MrOlqjZxuFgsKMszNEYNxeZqJVToehN6D-fcNgy',
  },
  {
    id: 'track-3',
    title: 'Desert Monologue',
    album: 'Echoes of the Eternal',
    raga: 'Marwa - The Solitary Path',
    duration: '07:58',
    durationSeconds: 478,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_4HgT_TIY4OU3Zi2lzqIM7DhfMccsMWl_4qqO016eE-p_q-4npCVNExdJcdo7C_v2bxIt0Mb39W10-7inRL9dgNjRarkfG4a9q5HhfMMVaXMLDaT83ehhTCP91JZm7sThw3wBrvwdPCFcC-gIYCriIbfXiADQxArH9aw_59y-jnmwXsmOclKEhuDjd3gBKZb3xHyzbqvTsJbq9OzNsCQW_Ty--FkrNxLTygezn0awpFt6T6g7RUNpA8rNspc9AZXr60zWqIMtU_I',
  },
  {
    id: 'track-4',
    title: 'Copper Strings',
    album: 'Sitar Fusion Single',
    raga: 'Bhairavi - Rhythmic Strings',
    duration: '05:10',
    durationSeconds: 310,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXo0OE9E4iDlSQk1TwsP8bcitj41MtIyXC8MJ8wzdxxfvPP6D8sUhT0PuPsaZVvpM0pD7ioUUYjJX5bzI66MOMDGfIMTIFiBq0IulYvY8okuPl_6GAyOEEauQdR-h8iI04WMo8pFW9Z_QSwVMumy_AtKHMjBfns1Ueb-l5djSJmoi-8fyIRzU2toLWT5jbZNJQzO6NljubEGONX0Zua6VBnC5Pyfndv3x-F2Gv2jJ5YTr-1dPpYp-aMu-WlvHrLe5ygsWT25Hx2B2W',
  },
  {
    id: 'track-5',
    title: 'Velvet Nocturne',
    album: 'Echoes of the Eternal',
    raga: 'Darbari - Late Night Ambient',
    duration: '09:30',
    durationSeconds: 570,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7u-a53uXHo6RgtymwzvfFphXxBANkbspRD93Lx_1B2uXfcl55_WqqsvlqXSuUhW9Rsht5VLJRDJky_0EJnXnC3JtReWK4yD2uP-t6GbWKD79AODaQQ1YZD0S3ee8peO7liQn2FW5rM89vPPje8-L2fmZmbhANw_0e9MamqVGigUyXd5qH1zj8Xkptdh6b5gwBhLtXpa-D7UzY-c1DkPwCjTejdYNb3v1kke0vcM6gS9PNVqc76EHuDw8IqmbhDA_wtfG1IGMrI03Y',
  },
];

const initialState: AudioState = {
  playing: false,
  activeTrackIndex: 0,
  progress: 0,
  volume: 0.8,
  tracks: defaultTracks,
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
    togglePlay: (state) => {
      state.playing = !state.playing;
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
