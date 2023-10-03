import FormUnit from '@/components/ui/form-unit';
import { FIELDS } from '@/lib/fields';
import { getFile } from '@/lib/file';

export default function FieldList() {
  const units = FIELDS.map((field) => {
    const html = getFile(`fields/${field.id}/html.html`);
    const zod = getFile(`fields/${field.id}/zod.ts`);

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
          lang: 'ts',
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
