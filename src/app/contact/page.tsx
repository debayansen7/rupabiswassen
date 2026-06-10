"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/store";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const activeTheme = useAppSelector((state) => state.theme.activeTheme);
  const portfolioData = useAppSelector((state) => state.portfolio);

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "Concert Stage Booking",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: "",
        email: "",
        type: "Concert Stage Booking",
        message: "",
      });
    }, 4000);
  };

  const categories = portfolioData.contact.inquiryCategories;

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
          {/* Header section */}
          <div className="mb-12 text-center md:text-left space-y-4">
            <span className="font-label text-xs text-primary uppercase tracking-[0.25em] font-bold block transition-colors duration-700">
              Booking & Liaison
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface leading-tight transition-colors duration-700">
              {portfolioData.contact.title}
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {portfolioData.contact.subtitle}
            </p>
          </div>

          {/* Central Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left Column: Glassmorphic Contact coordinates */}
            <div className="flex flex-col justify-center space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl text-on-surface leading-tight font-semibold">
                  Bring the Sounds of Fusion to Your Stage.
                </h2>
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-lg">
                  Rupa Biswas Sen performs extensively at international music
                  halls, world fusion festivals, conservatory seminars, and
                  exclusive private commissions. Our administrative team handles
                  all details regarding stage layout, visual lighting plots, and
                  technical sitar sound riders.
                </p>
              </div>

              {/* High-fidelity Glassmorphic cards */}
              <div className="space-y-4 max-w-md">
                <div className="p-5 bg-surface-container/35 hover:bg-surface-container/50 border border-outline-variant/15 rounded-xl flex items-center gap-5 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      mail
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label text-[10px] text-outline uppercase tracking-wider font-semibold">
                      Direct Representative
                    </p>
                    <p className="font-body text-sm sm:text-base text-on-surface font-semibold truncate select-all">
                      {portfolioData.contact.email}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface-container/35 hover:bg-surface-container/50 border border-outline-variant/15 rounded-xl flex items-center gap-5 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      public
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label text-[10px] text-outline uppercase tracking-wider font-semibold">
                      Social Archives
                    </p>
                    <p className="font-body text-sm sm:text-base text-on-surface font-semibold truncate">
                      {portfolioData.contact.social}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface-container/20 border border-outline-variant/10 rounded-xl">
                  <h4 className="font-label text-[10px] text-outline uppercase tracking-wider font-bold mb-2">
                    Technical Rider Standard
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    Standard rider requires a silent projection stage, dynamic
                    spot lighting, 2 high-grade condenser microphones for sitar
                    gourd/strings, and direct inputs for ambient synthesizers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form card */}
            <div className="bg-surface-container/55 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-outline-variant/15 shadow-2xl relative flex flex-col justify-between">
              {formSubmitted && (
                <div className="absolute inset-0 bg-surface-container rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-4 animate-in fade-in duration-300 z-10 backdrop-blur-xl">
                  <span className="material-symbols-outlined text-6xl text-primary animate-bounce">
                    check_circle
                  </span>
                  <h3 className="font-display text-2xl text-on-surface font-semibold">
                    Inquiry Dispatched Successfully
                  </h3>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xs leading-relaxed">
                    Thank you. A representative will contact you with booking
                    options and technical riders shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                    type="text"
                    className="w-full bg-surface-container-low/30 border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary text-on-surface text-sm transition-colors py-3 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                    Email Address
                  </label>
                  <input
                    required
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    type="email"
                    className="w-full bg-surface-container-low/30 border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary text-on-surface text-sm transition-colors py-3 focus:outline-none"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                    Inquiry Category
                  </label>
                  <select
                    name="type"
                    value={formState.type}
                    onChange={handleFormChange}
                    className="w-full bg-surface-container-low/30 border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary text-on-surface text-sm transition-colors py-3 focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option
                        key={cat}
                        value={cat}
                        className="bg-surface-container"
                      >
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                    Message Details
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formState.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full bg-surface-container-low/30 border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary text-on-surface text-sm transition-colors py-3 focus:outline-none resize-none"
                    placeholder="Describe your concert venue, scheduled timing, or request details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-xs uppercase tracking-[0.2em] font-semibold hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md hover:shadow-primary/10 hover:shadow-lg"
                >
                  Send Booking Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Premium Footer Area inside the Contact page */}
          <Footer />
        </div>
      </main>
    </>
  );
}
