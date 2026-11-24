"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/store";
import ErrorBoundary from "@/components/ErrorBoundary";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);

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

  return <ErrorBoundary>{children}</ErrorBoundary>;
}
