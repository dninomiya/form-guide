'use client';

import GitHubLink from '@/components/ui/github-link';
import { AppConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="text-center border-t py-6 text-muted-foreground/60">
      <p className="text-sm container">
        Built by{' '}
        <a
          className="underline font-medium underline-offset-4"
          href={AppConfig.xURL}
          target="_blank"
        >
          Daichi Ninomiya
        </a>
        . The source code is available on{' '}
        <a
          className="underline font-medium underline-offset-4"
          href={AppConfig.githubURL}
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <GitHubLink />
    </footer>
  );
}
