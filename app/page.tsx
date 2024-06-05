import Code from '@/components/Code';
import Editor from '@/components/Editor';
import Settings from '@/components/Settings';
import { getSession } from 'next-auth/react';
import {
  Fira_Code,
  IBM_Plex_Mono,
  Inconsolata,
  Inter,
  JetBrains_Mono,
  Source_Code_Pro,
} from 'next/font/google';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const inconssolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

export default async function Home() {
  const session = await getSession();
  const isAuthenticated = !!session;

  if (session) {
    redirect('/dashboard');
  }
  return (
    <>
      <Editor editable={true} isAuthenticated={isAuthenticated} />
    </>
  );
}
