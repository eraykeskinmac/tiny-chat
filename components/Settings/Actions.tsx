import { useSession } from 'next-auth/react';

import { Check, X } from 'lucide-react';

import Loader from '../ui/Loader';

type ButtonType = 'DEFAULT' | 'SUCCESS' | 'FAILURE' | 'LOADING';

interface Button {
  id: string;
  label: Partial<{ [key in ButtonType]: string }>;
  icon: { [key in ButtonType]: JSX.Element };
  action: () => Promise<void>;
  isDisabled?: boolean;
  hotKey: {
    key: string;
    options?: {
      enabled?: boolean;
      preventDefault?: boolean;
    };
  };
}

export default function Actions() {
  const { status: sessionStatus } = useSession();

  const statusIcons = {
    SUCCESS: <Check size={16} aria-hidden={true} />,
    FAILURE: <X size={16} aria-hidden={true} />,
    LOADING: <Loader />,
  };

  const buttons: Button[] = [];
}
