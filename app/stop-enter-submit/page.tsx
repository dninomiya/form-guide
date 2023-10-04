import CorrectForm from '@/app/stop-enter-submit/_components/correct-form';
import IncorrectForm from '@/app/stop-enter-submit/_components/incorrect-form';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/code-block';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { AppConfig } from '@/lib/config';
import { getFile } from '@/lib/file';
import { Code } from 'lucide-react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Please do not use the Enter key as a send trigger. 🙏🏻',
  description:
    'Setting the Enter key as a send trigger can make it challenging for Japanese users utilizing Safari to use the form. In Japanese, users compose text using the Enter key to convert into Kanji. If the Enter key is set as the send trigger, the text might be submitted prematurely.',
  openGraph: {
    title: 'Please do not use the Enter key as a send trigger. 🙏🏻',
    description:
      'Setting the Enter key as a send trigger can make it challenging for Japanese users utilizing Safari to use the form. In Japanese, users compose text using the Enter key to convert into Kanji. If the Enter key is set as the send trigger, the text might be submitted prematurely.',
  },
};

export default async function Page() {
  return (
    <div className="container max-w-lg mx-auto mt-10 prose">
      <h1>Please do not use the Enter key as a send trigger. 🙏🏻</h1>
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
        src={`${AppConfig.basePath}/stop-enter-trigger/chrome.mp4`}
        className="rounded-md"
      />
      <h3>Safari 🚫</h3>
      <video
        controls
        loop
        src={`${AppConfig.basePath}/stop-enter-trigger/safari.mp4`}
        className="rounded-md"
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
        <a href={AppConfig.jaSubmitDiscussionURL} target="_blank">
          the discussion
        </a>
        !
      </p>
    </div>
  );
}
