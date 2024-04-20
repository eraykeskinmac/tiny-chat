import { useEffect, useRef } from 'react';

import isEqual from 'lodash.isequal';
import useSWRMutation from 'swr/mutation';

import { fetcher } from '@/lib/fetcher';
import { useStore } from '@/lib/store';
import { AppState } from '@/lib/types';

export default function ChangeListener() {
  const prevState = useRef<AppState | null>(null);
  const pendingSave = useRef<boolean>(false);

  const state = useStore((state) => state.getAppState());
  const update = useStore((state) => state.update);

  const {
    trigger: updateSnippet,
    error: updateErorr,
    data: updatedSnippet,
  } = useSWRMutation(
    'api/snippets',
    (url, { arg }: { arg: AppState }) =>
      fetcher(url, {
        method: 'PATCH',
        body: JSON.stringify(arg),
      }),
    {
      revalidate: false,
    },
  );

  const handleStateChange = () => {
    if (!isEqual(prevState.current, state)) {
      if (!pendingSave.current) {
        update('message', 'PENDING');
        pendingSave.current = true;
      }

      const timeout = setTimeout(() => {
        if (!isEqual(prevState.current, state)) {
          prevState.current = state;

          updateSnippet(state);
        }

        pendingSave.current = false;
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    } else if (pendingSave.current) {
      update('message', 'IDLE');

      pendingSave.current = false;
    }
  };

  useEffect(() => {
    if (prevState.current === null) {
      prevState.current = state;
    } else {
      const cleanup = handleStateChange();

      if (cleanup) {
        return cleanup;
      }
    }
  }, [state, updateSnippet, update]);

  useEffect(() => {
    if (updateErorr) {
      update('message', 'ERROR');

      pendingSave.current = false;
    }
  }, [updateErorr, update]);

  useEffect(() => {
    if (updatedSnippet) {
      update('message', 'SUCCESS');
      pendingSave.current = false;
    }
  }, [updatedSnippet, update]);
}
