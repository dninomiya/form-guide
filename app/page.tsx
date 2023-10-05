import FieldList from '@/app/_components/field-list';
import Hero from '@/app/_components/hero';
import Intro from '@/app/_components/intro';
import GithubLink from '@/components/ui/github-link';
import { AppConfig } from '@/lib/config';

/**
 * TODO: 離脱防止
 * https://github.com/vercel/next.js/discussions/41934
 */

export default function Home() {
  return (
    <div className="container max-w-xl">
      <div className="mt-20 mb-10">
        <Hero />
      </div>
      <div className="space-y-10">
        <Intro />
        <FieldList />
      </div>
      <GithubLink href={AppConfig.githubURL} />
    </div>
  );
}
