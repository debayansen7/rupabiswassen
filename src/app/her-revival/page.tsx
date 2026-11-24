"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

export default function HerRevivalPage() {
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
              The Comeback
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-on-surface leading-tight transition-colors duration-700">
              Her Revival
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              How a forgotten masterpiece was rediscovered and how Rupa&rsquo;s vision found its moment in the spotlight.
            </p>
          </div>

          {/* The Discovery Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                The Rediscovery (2012)
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  In 2012, filmmaker Ashim Ahluwalia was searching for music for his film &ldquo;Miss Lovely,&rdquo; which would compete in the Un Certain Regard section at the Cannes Film Festival. In his search through obscure Indian music archives, he discovered something extraordinary: Rupa&rsquo;s &ldquo;Disco Jazz.&rdquo;
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  The album resonated with him immediately. Its fusion of East and West, its fearless blending of genres, and its timeless quality made it perfect for his film. When &ldquo;Miss Lovely&rdquo; premiered at Cannes, Rupa&rsquo;s music was heard by international audiences for the first time in decades.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  The screening sparked curiosity. Music collectors and journalists began searching for more information. Bootleg copies appeared online. YouTube videos accumulated thousands, then hundreds of thousands of views. The forgotten album was being discovered.
                </p>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-lg border border-outline-variant/15 shadow-lg"></div>
            </div>
          </section>

          {/* The Numero Group Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Numero Group: Official Reissue (2019)
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-surface-container-low rounded-lg border border-outline-variant/15 shadow-lg order-2 md:order-1"></div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  By 2019, Numero Group—an independent record label known for discovering and reissuing forgotten gems—recognized the significance of &ldquo;Disco Jazz.&rdquo; They contacted Rupa and officially reissued the album with pristine remastering, extensive liner notes, and proper documentation.
                </p>

                <div className="bg-surface-container/40 border-l-4 border-primary p-6 rounded space-y-3">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    The Impact
                  </p>
                  <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                    <li>✓ Over 1 million YouTube views on bootleg versions</li>
                    <li>✓ Copies selling for hundreds of dollars on the collector&rsquo;s market</li>
                    <li>✓ Critical re-evaluation from major music publications</li>
                    <li>✓ Recognition as a &ldquo;holy grail&rdquo; of world fusion music</li>
                    <li>✓ Streaming availability on all major platforms</li>
                  </ul>
                </div>

                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  The official release finally gave Rupa and her collaborators the recognition they deserved. Music journalists who had been searching for information about the mysterious artist could now tell her complete story.
                </p>
              </div>
            </div>
          </section>

          {/* Critical Reception Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Critical Recognition
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-surface-container/50 border border-outline-variant/15 rounded-lg space-y-4">
                <p className="font-display text-lg text-primary font-semibold">Wax Poetics</p>
                <p className="font-body text-sm text-on-surface-variant italic">
                  &ldquo;Rupa speaks out after 40 years: The voice behind one of the most important fusion albums of the 1980s finally tells her story.&rdquo;
                </p>
              </div>

              <div className="p-8 bg-surface-container/50 border border-outline-variant/15 rounded-lg space-y-4">
                <p className="font-display text-lg text-primary font-semibold">Music is My Sanctuary</p>
                <p className="font-body text-sm text-on-surface-variant italic">
                  &ldquo;A masterpiece of East-West fusion that sounds as fresh today as it did in 1982. Truly ahead of its time.&rdquo;
                </p>
              </div>

              <div className="p-8 bg-surface-container/50 border border-outline-variant/15 rounded-lg space-y-4">
                <p className="font-display text-lg text-primary font-semibold">Scroll.in</p>
                <p className="font-body text-sm text-on-surface-variant italic">
                  &ldquo;The Bengali homemaker whose Disco Jazz album became a &lsquo;holy grail&rsquo; after 40 years of anonymity—and why it matters now.&rdquo;
                </p>
              </div>

              <div className="p-8 bg-surface-container/50 border border-outline-variant/15 rounded-lg space-y-4">
                <p className="font-display text-lg text-primary font-semibold">The Revolver Club</p>
                <p className="font-body text-sm text-on-surface-variant italic">
                  &ldquo;A blast from the past that proves timeless music always finds its audience, no matter how long it takes.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* The Present & Future Section */}
          <section className="mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                The Present & Future
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="bg-surface-container/60 border border-outline-variant/15 rounded-lg p-8 space-y-6">
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Today, Rupa Biswas Sen is recognized as a visionary artist whose work transcended time and genre. Her story is one of artistic integrity, courage, and the enduring power of music that speaks truth.
              </p>

              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                The &ldquo;Disco Jazz&rdquo; album continues to influence contemporary musicians exploring fusion, world music, and experimental sounds. Her voice—powerful, expressive, and utterly distinctive—reaches new audiences through streaming platforms and renewed critical attention.
              </p>

              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Rupa&rsquo;s revival reminds us that great art is never truly lost. It waits, preserved and patient, for the moment when the world is ready to listen. That moment came in 2019, and the world is still listening.
              </p>

              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Now, as her story continues to unfold, Rupa stands as a testament to the power of artistic vision and the importance of preserving and celebrating the work of visionary musicians who pushed boundaries and refused to be confined by genre, tradition, or expectation.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-24 py-16 px-8 bg-surface-container/60 border border-outline-variant/15 rounded-lg text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Experience the Complete Story
              </h2>
              <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
                Listen to the Disco Jazz album, explore the performances, and join the conversation about one of music&rsquo;s greatest comebacks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <Link
                href="/music"
                className="px-6 py-3 bg-primary text-on-primary font-label text-xs tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer rounded shadow-md inline-block"
              >
                Listen to the Album
              </Link>
              <Link
                href="/gallery"
                className="px-6 py-3 border border-primary text-primary font-label text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 rounded cursor-pointer shadow-sm active:scale-95 inline-block"
              >
                View Performances
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface font-label text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer active:scale-95 inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-semibold">
                Timeline
              </h2>
              <div className="h-[2px] w-24 bg-primary transition-all duration-700"></div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 pb-6 border-b border-outline-variant/15">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary">
                    <span className="font-label text-primary font-bold">1982</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    Disco Jazz Recorded
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2">
                    Rupa records the iconic &ldquo;Disco Jazz&rdquo; album in Calgary with Ustad Aashish Khan and collaborators.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 pb-6 border-b border-outline-variant/15">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary">
                    <span className="font-label text-primary font-bold">1982-2012</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    40-Year Silence
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2">
                    The album fades into obscurity, known only to a handful of collectors and music enthusiasts.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 pb-6 border-b border-outline-variant/15">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary">
                    <span className="font-label text-primary font-bold">2012</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    Rediscovered by Filmmaker
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2">
                    Ashim Ahluwalia selects &ldquo;Disco Jazz&rdquo; for his film &ldquo;Miss Lovely,&rdquo; which competes at Cannes Film Festival.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 pb-6 border-b border-outline-variant/15">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary">
                    <span className="font-label text-primary font-bold">2012-2019</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    Growing Recognition
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2">
                    Bootlegs go viral online, accumulating millions of views. Copies become collector&rsquo;s items selling for hundreds of dollars.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary border border-primary">
                    <span className="font-label text-on-primary font-bold">2019</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-label text-xs text-primary uppercase tracking-widest font-bold">
                    Official Reissue & Revival
                  </p>
                  <p className="font-body text-sm text-on-surface-variant mt-2">
                    Numero Group officially reissues &ldquo;Disco Jazz&rdquo; with proper documentation. The album reaches millions through streaming. Rupa&rsquo;s story is told globally.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer isAbsolute={false} />
    </>
  );
}
