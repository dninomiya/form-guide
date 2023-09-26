'use client';

import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import { Form } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppConfig } from '@/lib/config';
import { FIELDS } from '@/lib/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
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
    <div id={id} className="pb-1 border-b scroll-m-8">
      <Form {...form}>
        <div className="mb-6 flex justify-between items-center pb-1 border-b">
          <h2 className="font-bold text-lg">{meta.title}</h2>
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            <a
              href={AppConfig.githubURL + '/commits/main/fields/' + id}
              target="_blank"
            >
              最終更新
              <time className="ml-2">
                {formatDistanceToNow(meta.lastUpdatedAt, {
                  addSuffix: true,
                  locale: ja,
                })}
              </time>
            </a>
          </Button>
        </div>

        <div className="prose prose-h2:text-base prose-h3:text-sm prose-h3:text-slate-600 mb-6">
          <Doc />
        </div>

        <Tabs defaultValue="preview">
          <TabsList>
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
              編集リクエスト
            </a>
          </Button>
          <Button size="sm" asChild variant="ghost">
            <a
              href={AppConfig.githubURL + '/discussions/' + meta.discussionId}
              target="_blank"
            >
              <MessageSquare size={20} className="mr-2" />
              コメント
            </a>
          </Button>
        </div>
      </Form>
    </div>
  );
}
