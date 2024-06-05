'use client';

import { cn } from '@/lib/cn';

import ChangeListener from './ChangeListener';
import Code from './Code';
import TitleBar from './TitleBar';
import Views from './Views';
import Wrapper from './Wrapper';

export default function Editor({
  views,
  editable,
  isAuthenticated,
}: {
  views?: number;
  editable: boolean;
  isAuthenticated: boolean;
}) {
  return (
    <div
      id="editor"
      className={cn('relative flex h-full w-full flex-col items-center p-6')}
    >
      {views !== undefined && <Views views={views} />}

      <Wrapper>
        <TitleBar editable={editable} />

        <Code editable={editable} />
      </Wrapper>

      {editable && <></>}
      {editable && isAuthenticated && <ChangeListener />}
    </div>
  );
}
