import FormUnit from '@/components/ui/form-unit';
import { FIELDS } from '@/lib/fields';
import fs from 'fs';
import path from 'path';

export default function FieldList() {
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
    <div className="space-y-14">
      {units.map(({ id, sources }) => (
        <FormUnit key={id} id={id} sources={sources} />
      ))}
    </div>
  );
}

const getFile = (name: string, file: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `/fields/${name}/${file}`),
    'utf-8'
  );
};
