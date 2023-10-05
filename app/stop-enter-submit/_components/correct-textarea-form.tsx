'use client';

import { useState } from 'react';

export default function CorrectTextareaForm() {
  const [data, setData] = useState<string>();

  return (
    <div className="not-prose">
      <form>
        <textarea
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setData(e.currentTarget.value);
            }
          }}
          className="rounded-md p-2 border w-full h-40 block"
        />
      </form>

      {data && <p>submitted: {data}</p>}
    </div>
  );
}
