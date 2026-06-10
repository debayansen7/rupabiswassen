"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import portfolioData from "../../rupa-portfolio-data.json";

export interface ArtistInfo {
  name: string;
  roles: {
    gold: string;
    ruby: string;
  };
  portraitUrl: string;
}

export interface ThemeData {
  name: string;
  heroTitleMain: string;
  heroTitleItalic: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;
  colors: {
    primary: string;
    primaryContainer: string;
    background: string;
    surface: string;
    onSurface: string;
  };
}

export interface Track {
  id: string;
  title: string;
  album: string;
  raga: string;
  duration: string;
  durationSeconds: number;
  src: string;
  cover: string;
  ragaMood: string;
  ragaTiming: string;
  ragaDescription: string;
}

export interface GalleryItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  email: string;
  social: string;
  inquiryCategories: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  headline: string;
  body: string;
}

export interface FooterInfo {
  built_by: string;
  buildByLink: string;
}

export interface PortfolioState {
  artist: ArtistInfo;
  themes: {
    gold: ThemeData;
    ruby: ThemeData;
  };
  discography: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    musicPageLabel: string;
    revivalLinkLabel: string;
    technicalNote: {
      title: string;
      body: string;
    };
    tracks: Track[];
  };
  gallery: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    viewAllLabel: string;
    items: GalleryItem[];
  };
  contact: ContactInfo;
  news: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    items: NewsItem[];
  };
  footer: FooterInfo;
}

const initialState: PortfolioState = portfolioData as PortfolioState;

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateArtistInfo: (state, action: PayloadAction<Partial<ArtistInfo>>) => {
      state.artist = { ...state.artist, ...action.payload };
    },
    updateThemeConfig: (
      state,
      action: PayloadAction<{
        theme: "gold" | "ruby";
        data: Partial<ThemeData>;
      }>,
    ) => {
      const { theme, data } = action.payload;
      state.themes[theme] = { ...state.themes[theme], ...data };
    },
    updateContactDetails: (
      state,
      action: PayloadAction<Partial<ContactInfo>>,
    ) => {
      state.contact = { ...state.contact, ...action.payload };
    },
  },
});

export const { updateArtistInfo, updateThemeConfig, updateContactDetails } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
