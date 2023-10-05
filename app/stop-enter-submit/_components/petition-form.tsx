import CopyButton from '@/components/ui/copy-button';
import { AppConfig } from '@/lib/config';
import React from 'react';

export default function PetitionForm() {
  const text = `
Currently, on <SERVICE_NAME>, many Japanese IME users are unable to use the form in Safari. As this is a serious issue, we would greatly appreciate your assistance.🙏🏻

Please see the details.👇🏻
${AppConfig.jaEnterKey.url}?ogv=${AppConfig.jaEnterKey.ogImageVersion}`.trim();

  return (
    <div className="relative">
      <textarea
        readOnly
        className="text-muted-foreground rounded-md p-2 pr-14 border w-full h-40 block"
      >
        {text}
      </textarea>
      <CopyButton value={text} />
    </div>
  );
}
