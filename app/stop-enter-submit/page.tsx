import CorrectForm from '@/app/stop-enter-submit/_components/correct-form';
import IncorrectForm from '@/app/stop-enter-submit/_components/incorrect-form';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import GithubLink from '@/components/ui/github-link';
import { AppConfig } from '@/lib/config';
import { getFile } from '@/lib/file';
import { format } from 'date-fns';
import { ArrowUpRight, Code } from 'lucide-react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: AppConfig.jaEnterKey.title,
  description: AppConfig.jaEnterKey.description,
  openGraph: {
    title: AppConfig.jaEnterKey.title,
    description: AppConfig.jaEnterKey.description,
  },
};

export default async function Page() {
  return (
    <div className="container max-w-lg mx-auto mt-20 prose">
      <h1 className="leading-normal">
        Please do not implement <code>Enter key to Submit</code> behaviors by
        directly hooking into the raw keypress event. 🙏🏻
      </h1>
      <p className="not-prose text-right text-muted-foreground">
        <Button variant="ghost" asChild>
          <a href={AppConfig.jaEnterKey.historyURL} target="_blank">
            Last Updated:&nbsp;
            {format(new Date(AppConfig.jaEnterKey.updatedAt), 'MMM dd, yyyy')}
          </a>
        </Button>
      </p>
      <p>
        Setting the Enter key as a send trigger can make it challenging for
        Japanese users utilizing Safari to use the form. In Japanese, users
        compose text using the Enter key to convert into Kanji. If the Enter key
        is set as the send trigger, the text might be submitted prematurely.
      </p>

      <p>
        This issue is currently prevalent in many web applications abroad.
        Regrettably, solutions are not being actively implemented, and products
        with similar problems continue to be produced daily.
      </p>

      <h3>Chrome ✅</h3>
      <video
        controls
        loop
        muted
        src={`${AppConfig.basePath}/stop-enter-trigger/chrome.mp4`}
        className="rounded-md border bg-gray-500"
      />
      <h3>Safari 🚫</h3>
      <video
        controls
        loop
        muted
        src={`${AppConfig.basePath}/stop-enter-trigger/safari.mp4`}
        className="rounded-md border bg-gray-500"
      />

      <h2>To Reproduce</h2>

      <ol>
        <li>Enable Japanese input from the Mac settings.</li>
        <li>Launch this page in Safari.</li>
        <li>
          In the form below, type <code>watasi</code> using the Japanese
          keyboard, and when the conversion balloon appears, press{' '}
          <code>enter</code>.
        </li>
        <li>The text will be submitted.</li>
      </ol>

      <IncorrectForm />

      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="text-right">
            <Button size="icon" variant="ghost">
              <Code size={16} />
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CodeBlock
            lang="tsx"
            code={getFile(
              'app/stop-enter-submit/_components/incorrect-form.tsx'
            )}
          />
        </CollapsibleContent>
      </Collapsible>

      <h2 id="solution" className="scroll-mt-6">
        Suggested remedy
      </h2>

      <p>
        Please use the <code>onSubmit</code> event as the trigger for the form
        containing a single input element.
      </p>

      <CorrectForm />

      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="text-right">
            <Button size="icon" variant="ghost">
              <Code size={16} />
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CodeBlock
            lang="tsx"
            code={getFile('app/stop-enter-submit/_components/correct-form.tsx')}
          />
        </CollapsibleContent>
      </Collapsible>

      <h2>Many Japanese people agree with this sentiment.</h2>

      <p>
        <a
          className="github-button"
          href="https://github.com/dninomiya/form-guide"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star dninomiya/form-guide on GitHub"
        >
          Star
        </a>
      </p>

      <Script async defer src="https://buttons.github.io/buttons.js" />

      <p>
        Thank you for everyone&apos;s support. If you have a better approach or
        any questions, please join{' '}
        <a href={AppConfig.jaEnterKey.discussionURL} target="_blank">
          the discussion
        </a>
        !
      </p>

      <h2>Related Links</h2>

      <ul>
        {AppConfig.jaEnterKey.relatedLinks.map((link) => (
          <li key={link.title}>
            <a href={link.url} target="_blank">
              {link.title}
              <ArrowUpRight className="inline ml-1" size={16} />
            </a>
          </li>
        ))}
      </ul>

      <h2>Author</h2>
      <ul>
        <li>
          <a href={AppConfig.jaEnterKey.author.url} target="_blank">
            {AppConfig.jaEnterKey.author.name}
            <ArrowUpRight className="inline ml-1" size={16} />
          </a>
        </li>
      </ul>
      <p>
        <i>
          {`I am not familiar with English, so this text
        was primarily composed using ChatGPT. I apologize if it's difficult to
        read. If you find any expressions that seem off, please provide
        feedback!🙏🏻`}
        </i>
      </p>

      <GithubLink href={AppConfig.jaEnterKey.editURL} />
    </div>
  );
}
