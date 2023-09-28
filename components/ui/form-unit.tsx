'use client';

import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import { Form } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppConfig } from '@/lib/config';
import { FIELDS } from '@/lib/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { MessageSquare, Pen } from 'lucide-react';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function FormUnit({
  id,
  sources,
}: {
  id: string;
  sources: {
    code: string;
    lang: string;
    label: string;
  }[];
}) {
  const Component = useMemo(
    () => require(`@/fields/${id}/component`).default,
    [id]
  );
  const Doc = useMemo(() => require(`@/fields/${id}/doc.mdx`).default, [id]);
  const zod = useMemo(() => require(`@/fields/${id}/zod`).default, [id]);
  const meta = FIELDS.find((field) => field.id === id)!;

  const formSchema = useMemo(() => z.object({ [id]: zod }), [id, zod]);

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  return (
    <div id={id} className="p-4 md:p-6 border scroll-m-8 rounded-lg">
      <Form {...form}>
        <div className="mb-6 flex justify-between items-center pb-1 border-b">
          <h2 className="font-bold text-gray-500 text-lg">{meta.title}</h2>
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            <a
              href={AppConfig.githubURL + '/commits/main/fields/' + id}
              target="_blank"
            >
              <time className="ml-2">
                {format(meta.lastUpdatedAt, 'yyyy年MM月dd日')}
              </time>
              更新
            </a>
          </Button>
        </div>

        <div className="prose prose-h2:text-base prose-h2:text-gray-600 prose-h3:text-sm prose-h3:text-slate-600 mb-6">
          <Doc />
        </div>

        <Tabs defaultValue="preview">
          <TabsList className="mb-3 border-none">
            <TabsTrigger value="preview">プレビュー</TabsTrigger>
            {sources.map((source) => (
              <TabsTrigger key={source.lang} value={source.lang}>
                {source.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="preview">
            <div className="p-6 rounded-md border">
              <Component />
            </div>
          </TabsContent>
          {sources.map((source) => (
            <TabsContent key={`content-${source.lang}`} value={source.lang}>
              <CodeBlock code={source.code} lang={source.lang} />
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-2 mt-6 text-muted-foreground items-center">
          <Button size="sm" variant="ghost" asChild>
            <a
              href={AppConfig.githubURL + '/tree/main/fields/' + id}
              target="_blank"
            >
              <Pen size={20} className="mr-2" />
              編集
            </a>
          </Button>
          <Button size="sm" asChild variant="ghost">
            <a href={AppConfig.commentURL} target="_blank">
              <MessageSquare size={20} className="mr-2" />
              コメント
            </a>
          </Button>
        </div>
      </Form>
    </div>
  );
}
