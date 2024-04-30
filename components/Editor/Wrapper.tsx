import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import chroma from 'chroma-js';

import { useStore } from '@/lib/store';

export default function Wrapper({ children }: { children: ReactNode }) {
  const [marginTop, setMarginTop] = useState(15);

  const wrapperRef = useRef<HTMLDivElement>();

  const hasCustomTheme = useStore((state) => state.hasCustomTheme);
  const code = useStore((state) => state.code);
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);
  const fontFamily = useStore((state) => state.fontFamily);
  const fontSize = useStore((state) => state.fontSize);
  const lineNumbers = useStore((state) => state.lineNumbers);
  const customColors = useStore((state) => state.customColors);
  const update = useStore((state) => state.update);
  const colorMode = useStore((state) => state.colorMode);

  const baseColors = useMemo(() => {
    return hasCustomTheme ? customColors : theme.generatedColors;
  }, [hasCustomTheme, theme.generatedColors, customColors]);

  const gradientColors = useMemo(() => {
    return baseColors.length === 1
      ? [...baseColors, baseColors[0]]
      : chroma
          .scale(baseColors)
          .mode(colorMode)
          .colors(baseColors.length + (baseColors.length - 1));
  }, [baseColors, colorMode]);

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const viewportHeight = window.innerHeight;
        const divHeight = wrapperRef.current.clientHeight;
        const heightPercentage = (divHeight / viewportHeight) * 100;
      }
    };
  });
}
