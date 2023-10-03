'use client';

import { useState } from 'react';

export default function IncorrectForm() {
  const [data, setData] = useState<string>();

  return (
    <div className="not-prose">
      <form>
        <input
          className="rounded-md p-2 border w-full"
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              e.preventDefault();
              setData(e.currentTarget.value);
            }
          }}
        />
      </form>

      {data && <p>submitted: {data}</p>}
    </div>
  );
}
