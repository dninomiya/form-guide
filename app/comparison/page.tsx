import After from '@/app/comparison/_components/after';
import Before from '@/app/comparison/_components/before';
import React from 'react';

export default function Page() {
  return (
    <div className="grid grid-cols-2 divide-x container max-w-4xl">
      <div className="p-6">
        <Before />
      </div>
      <div className="p-6">
        <After />
      </div>
    </div>
  );
}
