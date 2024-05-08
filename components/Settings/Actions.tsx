import { useSession } from 'next-auth/react';

import { Check, Copy, ImageIcon, Link, X } from 'lucide-react';

import { snap } from '@/lib/snap';

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

  const buttons: Button[] = [
    {
      id: 'copy-link',
      label: {
        DEFAULT: 'Copy Link',
        SUCCESS: 'Link Copied',
      },
      icon: {
        DEFAULT: <Link size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap('COPY_LINK'),
      isDisabled: sessionStatus === 'unauthenticated',
      hotKey: {
        key: 'meta+shift+c',
        options: {
          preventDefault: true,
        },
      },
    },
    {
      id: 'copy-image',
      label: {
        DEFAULT: 'Copy Image',
        SUCCESS: 'Image copied',
      },
      icon: {
        DEFAULT: <Copy size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap('COPY_IMAGE'),
      isDisabled: sessionStatus === 'unauthenticated',
      hotKey: {
        key: 'meta+c',
      },
    },
    {
      id: 'download-image',
      label: {
        DEFAULT: 'Download as PNG',
        SUCCESS: 'Image download started',
      },
      icon: {
        DEFAULT: <ImageIcon size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap('DOWNLOAD_IMAGE'),
      isDisabled: sessionStatus === 'unauthenticated',
      hotKey: {
        key: 'meta+s',
        options: {
          preventDefault: true,
        },
      },
    },
  ];
}
