import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "gold" | "ruby";

interface ThemeState {
  activeTheme: ThemeType;
}

const initialState: ThemeState = {
  activeTheme: "ruby",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.activeTheme = action.payload;
    },
    toggleTheme: (state) => {
      state.activeTheme = state.activeTheme === "ruby" ? "gold" : "ruby";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
