'use client';

import CopyButton from '@/components/ui/copy-button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({
  lang,
  code,
}: {
  lang: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden text-sm rounded-md border relative">
      <SyntaxHighlighter
        style={prism}
        customStyle={{
          margin: 0,
          background: 'none',
          paddingRight: 48,
        }}
        language={lang}
      >
        {code}
      </SyntaxHighlighter>

      <CopyButton value={code} />
    </div>
  );
}
