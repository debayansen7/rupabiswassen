import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ThemeWrapper from "@/components/ThemeWrapper";
import AudioPlayer from "@/components/AudioPlayer";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rupa Biswas Sen | Classical Fusion Artist",
  description:
    "An immersive portfolio showcasing the modern classical fusion sitar works, global concert discography, and auditory archives of Rupa Biswas Sen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${hankenGrotesk.variable} ${manrope.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <StoreProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
          <AudioPlayer />
        </StoreProvider>
      </body>
    </html>
  );
}
