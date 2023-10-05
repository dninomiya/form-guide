'use client';

import { useState } from 'react';

export default function CorrectTextareaForm() {
  const [data, setData] = useState<string>();

  return (
    <div className="not-prose">
      <form>
        <textarea
          onKeyDown={(e) => {
            // e.keyCode === 229 is for the Japanese IME and Safari.
            // isComposing does not work with Japanese IME and Safari combination.
            const preventDefault =
              e.nativeEvent.isComposing || e.keyCode === 229;

            if (e.key === 'Enter' && !preventDefault) {
              setData(e.currentTarget.value);
              e.preventDefault();
            }
          }}
          className="rounded-md p-2 border w-full h-40 block"
        />
      </form>

      {data && <p>submitted: {data}</p>}
    </div>
  );
}
