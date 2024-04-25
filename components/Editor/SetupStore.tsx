import { useRef } from 'react';

import { Snippet } from '@prisma/client';

import { useStore } from '@/lib/store';

export default function SetupStore({ snippet }: { snippet: Snippet }) {
  const initalized = useRef(false);

  if (!initalized.current) {
    useStore.getState().setAppState(snippet);

    initalized.current = true;
  }

  return null;
}
