import { useMemo, useState } from 'react';

import {
  AnimatePresence,
  motion,
  MotionValue,
  useAnimationControls,
  useDragControls,
  useMotionValueEvent,
} from 'framer-motion';
import { GripHorizontal, RefreshCcw } from 'lucide-react';

import { cn } from '@/lib/cn';
import { SUPPORTED_FONT_STYLES } from '@/lib/fonts';
import { SUPPORTED_LANGUAGES } from '@/lib/languages';
import { SUPPORTED_THEMES } from '@/lib/theme';
import {
  BASE_COLOR_MODES,
  BASE_FONT_SIZES,
  BASE_PADDING_VALUES,
} from '@/lib/values';

import Angle from './Angel';
import Choices from './Choices';
import Picker from './Picker';
import Select from './Select';
import Switch from './Switch';

function DraggableHandle({
  dragControls,
  animationControls,
  hasMoved,
  isDragging,
}: {
  dragControls: ReturnType<typeof useDragControls>;
  animationControls: ReturnType<typeof useAnimationControls>;
  hasMoved: boolean;
  isDragging: MotionValue<boolean>;
}) {
  const [localIsDragging, setIsLocalDragging] = useState(false);
  useMotionValueEvent(isDragging, 'change', (latest) => {
    setIsLocalDragging(latest);
  });

  const icon = useMemo(() => {
    if (!hasMoved && localIsDragging) {
      return <GripHorizontal size={16} aria-hidden="true" />;
    }

    return <RefreshCcw size={14} aria-hidden="true" />;
  }, [hasMoved, localIsDragging]);

  return (
    <motion.div
      onPointerDown={(e) => {
        dragControls.start(e, { snapToCursor: false });
      }}
      onTap={() => {
        if (hasMoved) {
          animationControls.start({ x: 0, y: 0 });
        }
      }}
      whileTap={{ cursor: 'grabbing' }}
      tabIndex={-1}
      className={cn(
        'absolute -top-[15px] left-1/2 z-50 flex h-7 w-9 items-center justify-center rounded-md',
        'touch-none select-noneo outline-none',
        'border border-white/20 bg-black',
        'transition-all duration-200 ease-in-out',
        'hover:scale-110 hover:cursor-grab hover:border-almost-white',
        'active:scale-110 active:border-almost-white',
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={hasMoved && !localIsDragging ? 'refresh' : 'grip'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.08, delay: 0.08 }}
        >
          {icon}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function CustomThemeControls() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.2 }}
      className={cn(
        'flex mt-4 justify-evenly gap-8 rounded-xl pb-4 pt-5',
        'stripes border border-dashed border-white/20 bg-white/[0.04]',
      )}
    >
      <Control htmlFor="colors" label="Colors">
        <Picker />
      </Control>
      <Control htmlFor="colorMode" label="Color Mode">
        <Choices type="colorMode" choices={BASE_COLOR_MODES} />
      </Control>
      <Control htmlFor="gradientAngle" label="Gradient Angle">
        <Angle />
      </Control>
      <Control htmlFor="grain" label="Grain">
        <Switch type="grain" />
      </Control>
    </motion.div>
  );
}

function BasicSnippetControls() {
  return (
    <div className={cn('flex justify-evenly gap-8')}>
      <Control htmlFor="language" label="Language">
        <Select type="language" options={SUPPORTED_LANGUAGES} />
      </Control>
      <Control htmlFor="theme" label="Theme">
        <Select type="theme" options={SUPPORTED_THEMES} />
      </Control>
      <Control htmlFor="fontFamily" label="Font Family">
        <Select type="fontFamily" options={SUPPORTED_FONT_STYLES} />
      </Control>
      <Control htmlFor="fontSize" label="Font Size">
        <Choices type="fontSize" choices={BASE_FONT_SIZES} />
      </Control>
      <Control htmlFor="lineNumbers" label="Line Numbers">
        <Switch type="lineNumbers" />
      </Control>
      <Control htmlFor="padding" label="Padding">
        <Choices type="padding" choices={BASE_PADDING_VALUES} />
      </Control>
    </div>
  );
}

function Control({
  htmlFor,
  label,
  children,
}: {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn('relative flex min-w-max flex-col justify-between gap-3')}
    >
      <label htmlFor={htmlFor} className={cn('text-xs font-bold')}>
        {label}
      </label>
      {children}
    </div>
  );
}
