"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

export default function HerStoryPage() {
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main
        className={`min-h-screen pt-28 pb-16 text-on-surface transition-colors duration-700 ${
          activeTheme === "ruby" ? "ruby-gradient" : "gold-gradient"
        }`}
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          {/* Header Section */}
          <div className="mb-16 text-left space-y-4">
            <span className="font-label text-xs text-primary uppercase tracking-[0.25em] font-bold block transition-colors duration-700">
              The Journey
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-on-surface leading-tight transition-colors duration-700">
              Her Story
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              From early musical training through the iconic Disco Jazz era, this is the story of an artist&rsquo;s vision, innovation, and journey.
            </p>
          </div>

          {/* Early Years Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                The Early Years
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  Rupa Biswas Sen&rsquo;s musical journey began in her early years, immersed in the rich traditions of Hindustani classical music. Her dedication to the craft was evident as she pursued formal education in music, eventually completing her Master&rsquo;s degree (MA) in Music.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  Her early career saw her establish herself as a recognized vocalist, earning recognition through All India Radio where she successfully auditioned and performed. This was the foundation of a promising classical music career, deeply rooted in tradition and excellence.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  During this period, she developed a unique perspective: how could the ancient wisdom of Hindustani classical music speak to contemporary audiences? This question would shape everything that followed.
                </p>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-lg border border-outline-variant/15 shadow-lg"></div>
            </div>
          </section>

          {/* Disco Jazz Era Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Disco Jazz: The Vision
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-surface-container-low rounded-lg border border-outline-variant/15 shadow-lg order-2 md:order-1"></div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  In 1981, Rupa traveled to Calgary, Canada on a family visit. There, she connected with a visionary group of musicians, including the legendary Ustad Aashish Khan on sarod. Together, they conceived something revolutionary: a fusion of Indian classical music with disco, jazz, and funk.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  At Calgary&rsquo;s Living Room Studios in 1982, they recorded what would become the iconic &ldquo;Disco Jazz&rdquo; album. Four tracks that blended East and West seamlessly:
                </p>
                <ul className="space-y-3 font-body text-base text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>&ldquo;Moja Bhari Moja&rdquo;</strong> - An explosive opening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>&ldquo;East West Shuffle&rdquo;</strong> - The bridge between worlds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>&ldquo;Aaj Shanibar&rdquo;</strong> - A contemplative moment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>&ldquo;Ayee Morshume Be-Reham Duniya&rdquo;</strong> - The profound closing</span>
                  </li>
                </ul>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  The album represented something ahead of its time—a genuine fusion, not a novelty. Rupa&rsquo;s voice, backed by sarod, guitar, drums, and keyboards, created something that was simultaneously classical and contemporary, Indian and international.
                </p>
              </div>
            </div>
          </section>

          {/* The Vanishing Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                The Mysterious Silence: 40 Years
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="bg-surface-container/50 border border-outline-variant/15 rounded-lg p-8 space-y-6">
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                After 1982, Rupa sold only a handful of copies of &ldquo;Disco Jazz&rdquo; and then disappeared from public view. There was no social media, no viral moments, no streaming platforms. The album faded into obscurity, known only to a small circle of music enthusiasts and collectors.
              </p>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                For nearly four decades, her groundbreaking work remained virtually unknown to the world. The artist who had envisioned a revolutionary fusion of classical and contemporary music retreated from the spotlight, her vision seemingly lost to time.
              </p>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                It was a period of silence, but not of irrelevance. Unbeknownst to Rupa, her music was waiting—preserved, protected, and ultimately rediscovered by those who would understand its true worth.
              </p>
            </div>
          </section>

          {/* Legacy & Significance Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Why Her Story Matters
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-surface-container/40 rounded-lg border border-outline-variant/15 space-y-4">
                <h3 className="font-display text-2xl text-primary">Visionary</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Rupa was thinking about musical fusion decades before it became mainstream. She understood that tradition and innovation could coexist beautifully.
                </p>
              </div>

              <div className="p-6 bg-surface-container/40 rounded-lg border border-outline-variant/15 space-y-4">
                <h3 className="font-display text-2xl text-primary">Courageous</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  In 1982, blending Indian classical with disco was a bold, experimental choice. She took an artistic risk that transcended conventional categories.
                </p>
              </div>

              <div className="p-6 bg-surface-container/40 rounded-lg border border-outline-variant/15 space-y-4">
                <h3 className="font-display text-2xl text-primary">Timeless</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  40 years later, &ldquo;Disco Jazz&rdquo; sounds neither dated nor derivative. It remains a testament to music that speaks beyond era and genre.
                </p>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="mb-24 py-16 px-8 bg-surface-container/60 border border-outline-variant/15 rounded-lg text-center space-y-6">
            <p className="font-display text-3xl text-on-surface italic font-light leading-relaxed">
              &ldquo;An artist&rsquo;s vision is never truly lost. It waits, preserved in the grooves of vinyl, ready to speak to a generation that finally understands.&rdquo;
            </p>
            <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
              The Disco Jazz Legacy
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
              Ready to Experience the Sound?
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
              Dive into the complete Disco Jazz album and discover why this music continues to inspire, influence, and move audiences worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/music"
                className="px-8 py-3.5 border border-primary text-primary font-label text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 rounded cursor-pointer shadow-sm hover:shadow-[0_4px_20px_rgba(233,193,118,0.15)] active:scale-95 inline-block"
              >
                Listen to the Album
              </Link>
              <Link
                href="/her-revival"
                className="px-8 py-3.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface font-label text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer active:scale-95 inline-block"
              >
                The Revival Story →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer isAbsolute={false} />
    </>
  );
}
