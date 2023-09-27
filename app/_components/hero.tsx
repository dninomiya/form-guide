import { AppConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Cherry_Bomb_One } from 'next/font/google';

const cherry = Cherry_Bomb_One({
  weight: '400',
  preload: false,
  display: 'swap',
});

export default function Hero() {
  return (
    <div>
      <div className="h-64 md:h-80 mx-auto mb-6 relative">
        <Image src={`${AppConfig.basePath}/hero.svg`} alt="" fill />
      </div>
      <div className="flex items-end gap-2 mb-3 mt-8">
        <h1
          className={cn('font-bold text-5xl text-gray-700', cherry.className)}
        >
          ふぉーむがいど
        </h1>
        <span className="text-muted-foreground/60 font-bold">
          {AppConfig.version}
        </span>
      </div>
      <p className="text-muted-foreground">
        オープンソースのフォーム実装ガイド
      </p>
    </div>
  );
}
