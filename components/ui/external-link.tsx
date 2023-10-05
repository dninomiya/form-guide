import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export default function ExternalLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank">
      {children}
      <ArrowUpRight className="inline ml-0.5" size={16} />
    </a>
  );
}
