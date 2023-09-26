import FormUnit from '@/components/ui/form-unit';
import Intro from '@/components/ui/intro';
import { FIELDS } from '@/lib/fields';
import fs from 'fs';
import path from 'path';

/**
 * TODO: 離脱防止
 * https://github.com/vercel/next.js/discussions/41934
 */

export default function Home() {
  const units = FIELDS.map((field) => {
    const html = getFile(field.id, 'html.html');
    const zod = getFile(field.id, 'zod.ts');

    return {
      id: field.id,
      sources: [
        {
          code: html,
          lang: 'html',
          label: 'HTML',
        },
        {
          code: zod,
          lang: 'typescript',
          label: 'Zod',
        },
      ],
    };
  });

  return (
    <div className="container max-w-xl">
      <div className="my-20">
        <h1 className="font-bold text-3xl mt-8 mb-2">フォームガイド 🇯🇵</h1>
        <p className="text-muted-foreground">
          オープンソースのフォーム実装ガイド
        </p>
      </div>

      <div className="space-y-10">
        <Intro />

        <div className="space-y-14">
          {units.map(({ id, sources }) => (
            <FormUnit key={id} id={id} sources={sources} />
          ))}
        </div>
      </div>
    </div>
  );
}

const getFile = (name: string, file: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `/fields/${name}/${file}`),
    'utf-8'
  );
};
