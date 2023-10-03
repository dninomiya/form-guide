'use client';

import { useState } from 'react';

export default function CorrectForm() {
  const [data, setData] = useState<string>();

  return (
    <div className="not-prose">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData((e?.currentTarget[0] as HTMLFormElement).value);
        }}
      >
        <input name="demo" className="rounded-md p-2 border w-full" />
      </form>

      {data && <p>submitted: {data}</p>}
    </div>
  );
}
