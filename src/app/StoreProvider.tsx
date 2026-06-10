'use client';

import { store } from '@/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
