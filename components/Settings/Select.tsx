import { memo } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/lib/cn';
import { find } from '@/lib/find';
import { SUPPORTED_FONT_STYLES } from '@/lib/fonts';
import { SUPPORTED_LANGUAGES } from '@/lib/languages';
import { useStore } from '@/lib/store';
import { SUPPORTED_THEMES } from '@/lib/theme';
import {
  FontDefinition,
  LanguageDefinition,
  ThemeDefinition,
} from '@/lib/types';

import ThemeBubble from '../ui/ThemeBubble';

export default memo(function Select<
  T extends LanguageDefinition | ThemeDefinition | FontDefinition,
>({
  type,
  options,
}: {
  type: 'language' | 'theme' | 'fontFamily';
  options: T[];
}) {
  const value = useStore((state) => state[type]);
  const update = useStore((state) => state.update);

  const get = {
    language: {
      initialValue: <span>{value.label}</span>,
      optionContent: (option: T) => (
        <span className={cn('block truncate pr-11')}>
          {(option as LanguageDefinition).label}
        </span>
      ),
      valueForKey: (key: string) => find(SUPPORTED_LANGUAGES, key),
    },
    theme: {
      initialValue: (
        <ThemeBubble
          colors={(value as ThemeDefinition).generatedColors}
          useCustomColorsFromStore={value.id === 'custom'}
        />
      ),
      optionContent: (option: T) => (
        <div className={cn('flex items-center gap-3')}>
          <ThemeBubble
            colors={(value as ThemeDefinition).generatedColors}
            useCustomColorsFromStore={value.id === 'custom'}
          />
          <span className={cn('block truncate ')}>
            {(option as ThemeDefinition).label}
          </span>
        </div>
      ),
      valueForKey: (key: string) => find(SUPPORTED_THEMES, key),
    },
    fontFamily: {
      initialValue: (
        <span className={(value as FontDefinition).class}>{value.label}</span>
      ),
      optionConent: (option: T) => (
        <span
          className={cn('block truncate', (option as FontDefinition).class)}
        >
          {(option as ThemeDefinition).label}
        </span>
      ),
      valueForKey: (key: string) => find(SUPPORTED_FONT_STYLES, key),
    },
  };

  return (
    <SelectPrimitive.Root
      defaultValue={value.id}
      value={value.id}
      onValueChange={(value: string) => {
        update(
          type,
          get[type].valueForKey(value) as LanguageDefinition &
            ThemeDefinition &
            FontDefinition,
        );

        if (type === 'theme') {
          if (value === 'custom') {
            update('hasCustomTheme', true);
          } else {
            update('hasCustomTheme', false);
          }
        }
      }}
    ></SelectPrimitive.Root>
  );
});
