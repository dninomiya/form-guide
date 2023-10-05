'use client';

import { Button } from '@/components/ui/button';
import copy from 'copy-to-clipboard';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CopyButton({
  value,
  className = 'absolute top-2 right-2 bg-transparent text-muted-foreground bg-gray-50',
}: {
  value: string;
  className?: string;
}) {
  const [showCheck, setShowCheck] = useState(false);

  return (
    <Button
      onClick={() => {
        if (showCheck) return;

        setShowCheck(true);
        copy(value);

        setTimeout(() => {
          setShowCheck(false);
        }, 2000);
      }}
      size="smIcon"
      variant="outline"
      className={className}
    >
      {showCheck ? <Check size={18} /> : <Copy size={18} />}
    </Button>
  );
}
