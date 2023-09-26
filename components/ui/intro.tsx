'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ExternalLink } from 'lucide-react';

const links = [
  {
    title: '58 Form Design & UX Best Practices',
    url: 'https://www.ventureharbour.com/form-design-best-practices',
  },
  {
    title: '支払いフォームと住所フォームのベストプラクティス',
    url: 'https://web.dev/payment-and-address-form-best-practices/',
  },
  {
    title: 'アドレスフォームのベストプラクティス',
    url: 'https://web.dev/codelab-address-form-best-practices/',
  },
  {
    title: 'アドレスフィールドデザインのベストプラクティス',
    url: 'https://uxplanet.org/address-field-design-best-practices-a80390caaee0',
  },
  {
    title:
      '名前、電話番号、メールアドレス、郵便番号等の最適なmaxlengthはいくつか調べてみた',
    url: 'https://qiita.com/kyogom/items/49fe51044d57e3b19929',
  },
  {
    title:
      '今どきの入力フォームはこう書く！HTMLコーダーがおさえるべきinputタグの書き方まとめ',
    url: 'https://ics.media/entry/11221',
  },
  {
    title: 'これだけは押さえよう！住所フォームの作り方',
    url: 'https://blog.kenall.jp/entry/address-form-best-practice',
  },
  {
    title: 'Form Design Principles: 13 Empirically Backed Best Practices',
    url: 'https://cxl.com/blog/form-design-best-practices/',
  },
  {
    title: 'Form design best practices',
    url: 'https://coyleandrew.medium.com/form-design-best-practices-9525c321d759',
  },
];

export default function Intro() {
  return (
    <Collapsible className="border rounded-lg group">
      <CollapsibleTrigger className="px-4 py-2.5 w-full text-left flex items-center justify-between data-[state=open]:border-b">
        🔰 はじめに
        <ChevronDown size={20} className="group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4">
        <div className="prose prose-h2:text-base">
          <p>
            このページはオープンソースのフォーム実装ガイドです。フォームの実装において、ユーザー体験を向上させるためのベストプラクティスをまとめています。プルリクエストやコメントを歓迎しています。
          </p>

          <h2>参考資料</h2>

          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  {link.title}
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground/60 ml-2 inline align-baseline"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
