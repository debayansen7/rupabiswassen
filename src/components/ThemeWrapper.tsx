"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store";
import ErrorBoundary from "@/components/ErrorBoundary";
import AudioPlayer from "@/components/AudioPlayer";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (activeTheme === "ruby") {
      root.classList.remove("theme-gold");
      root.classList.add("theme-ruby");
    } else {
      root.classList.remove("theme-ruby");
      root.classList.add("theme-gold");
    }
  }, [activeTheme]);

  const showPlayer = pathname === "/music";

  return (
    <ErrorBoundary>
      {children}
      <div
        className={`transition-all duration-700 ease-in-out ${
          showPlayer
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-24 pointer-events-none"
        }`}
      ></div>
    </ErrorBoundary>
  );
}
