"use client";

import React from "react";
import { useAppSelector } from "@/store";

interface FooterProps {
  isAbsolute?: boolean;
}

export default function Footer({ isAbsolute = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const footerData = useAppSelector((state) => state.portfolio.footer);
  const { built_by, buildByLink } = footerData;
  return (
    <footer
      className={`w-full text-center border-t border-outline-variant/10 bg-transparent transition-all duration-700 ${
        isAbsolute
          ? "mt-12 md:mt-0 md:absolute md:bottom-6 md:left-0 md:z-20 md:border-t-0 pointer-events-none select-none px-6"
          : "mt-20 pt-8 px-6"
      }`}
    >
      <p className="font-label text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-outline">
        &copy; {currentYear} All rights reserved.{" "}
        <a
          href={buildByLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={built_by}
          className="text-slate-400 cursor-pointer dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 border-b border-transparent hover:border-slate-400 dark:hover:border-slate-500 pb-1"
        >
          {built_by}
        </a>
      </p>
    </footer>
  );
}
