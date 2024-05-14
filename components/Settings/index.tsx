import { motion } from 'framer-motion';

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
