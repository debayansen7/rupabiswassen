'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  isLoading: boolean;
  fadeOut: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    isLoading: true,
    fadeOut: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, isLoading: false, fadeOut: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  componentDidMount() {
    // Show 'RUPA' loading spinner only on initial hard reload / mount
    // After 1.2s start fadeout, at 1.5s completely remove loader overlay
    const fadeTimer = setTimeout(() => {
      this.setState({ fadeOut: true });
    }, 1200);

    const removeTimer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d0d0d] text-[#e5e2e1] flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping"></div>
            <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined text-3xl">error</span>
            </div>
          </div>
          <div className="space-y-2 max-w-md">
            <h1 className="font-display text-3xl font-semibold tracking-wide text-red-400">Harmony Interrupted</h1>
            <p className="font-body text-sm text-[#9a8f80]/80 leading-relaxed">
              A temporary dissonance has occurred in the auditory matrix. We apologize for the interruption.
            </p>
            {this.state.error && (
              <pre className="mt-4 p-4 bg-[#1c1b1b] text-left rounded border border-[#4e4639]/35 text-xs text-red-300 overflow-x-auto max-w-full font-mono">
                {this.state.error.message}
              </pre>
            )}
          </div>
          <button
            onClick={this.handleReset}
            className="px-8 py-3.5 bg-red-950/20 border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white font-label text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer active:scale-95 shadow-md"
          >
            Restore Harmony
          </button>
        </div>
      );
    }

    return (
      <>
        {/* 'RUPA' Spinner / App Loader overlay */}
        {this.state.isLoading && (
          <div 
            className={`fixed inset-0 z-[9999] bg-[#0c0f0f] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              this.state.fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Premium Gold rotating/pulsing outline rings */}
              <div 
                className="absolute inset-0 rounded-full border-t border-b border-[#e9c176]/50 animate-spin" 
                style={{ animationDuration: '3s' }}
              ></div>
              <div 
                className="absolute inset-2 rounded-full border-r border-l border-[#e9c176]/30 animate-spin" 
                style={{ animationDuration: '6s', animationDirection: 'reverse' }}
              ></div>
              <div className="absolute inset-4 rounded-full border border-[#e9c176]/10 animate-pulse"></div>
              
              {/* Central 'RUPA' text pulsing */}
              <h1 className="font-display text-2xl tracking-[0.25em] text-[#e9c176] font-bold uppercase animate-pulse select-none">
                RUPA
              </h1>
            </div>
            
            <p className="mt-6 font-label text-[10px] tracking-[0.3em] uppercase text-[#9a8f80]/70 animate-pulse">
              Tuning Instrument...
            </p>
          </div>
        )}
        {this.props.children}
      </>
    );
  }
}
