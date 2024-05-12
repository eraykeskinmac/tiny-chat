import { HexColorInput, HexColorPicker } from 'react-colorful';

import { cn } from '@/lib/cn';
import { debounce } from '@/lib/debounce';
import { useStore } from '@/lib/store';

export default function Picker() {
  const customColors = useStore((state) => state.customColors);
  const setCustomColors = useStore((state) => state.setCustomColor);
  const addCustomColor = useStore((state) => state.addCustomColor);
  const removeCustomColor = useStore((state) => state.removeCustomColor);

  return (
    <div className={cn('flex h-8 w-28 gap-2 rounded-lg')}>{/* Popover */}</div>
  );
}

function SingleColor({
  color,
  setCustomColor,
}: {
  color: string;
  setCustomColor: (color: string) => void;
}) {
  return (
    <section className={cn('flex flex-col gap-3', 'picker')}>
      <HexColorPicker color={color} onChange={debounce(setCustomColor, 300)} />

      <HexColorInput
        color={color}
        onChange={debounce(setCustomColor, 300)}
        className={cn(
          'text-center font-medium uppercase',
          'outline-none',
          'bg-transparent text-almost-white/40',
          'transition-all duration-100 ease-in-out',
          'focus:text-almost-white',
        )}
      />
    </section>
  );
}
