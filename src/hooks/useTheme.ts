import { useAppDispatch, useAppSelector } from "@/store";
import { setTheme, toggleTheme, ThemeType } from "@/store/themeSlice";

export function useTheme() {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);

  return {
    activeTheme,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (theme: ThemeType) => dispatch(setTheme(theme)),
  };
}
