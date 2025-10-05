import CorrectForm from "@/app/stop-enter-submit/_components/correct-form";
import CorrectTextareaForm from "@/app/stop-enter-submit/_components/correct-textarea-form";
import IncorrectForm from "@/app/stop-enter-submit/_components/incorrect-form";
import PetitionForm from "@/app/stop-enter-submit/_components/petition-form";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/code-block";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ExternalLink from "@/components/ui/external-link";
import GithubLink from "@/components/ui/github-link";
import { AppConfig } from "@/lib/config";
import { getFile } from "@/lib/file";
import { format } from "date-fns";
import { Code } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import CopyPromptButton from "./_components/copy-prompt-button";

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
        Stop implementing &quot;Enter to submit&quot; by listening directly to
        raw keydown events. 🙏🏻
      </h1>
      <CopyPromptButton />
      <p className="not-prose text-right text-muted-foreground">
        <Button variant="ghost" asChild>
          <a href={AppConfig.jaEnterKey.historyURL} target="_blank">
            Last Updated:&nbsp;
            {format(new Date(AppConfig.jaEnterKey.updatedAt), "MMM dd, yyyy")}
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
        muted
        src={`${AppConfig.basePath}/stop-enter-trigger/chrome.mp4`}
        className="rounded-md border bg-gray-500"
      />
      <h3>Safari 🚫</h3>
      <video
        controls
        muted
        src={`${AppConfig.basePath}/stop-enter-trigger/safari.mp4`}
        className="rounded-md border bg-gray-500"
      />

      <p>{`If you have difficulty understanding the problem even after watching the video, imagine a situation where "the space key acts as a send trigger." It's like when you try to type "I am Taro", and just after typing "I", it gets sent.`}</p>

      <h2>To Reproduce</h2>

      <ol>
        <li>Enable Japanese input from the Mac settings.</li>
        <li>Launch this page in Safari.</li>
        <li>
          In the form below, type <code>watasi</code> using the Japanese
          keyboard, and when the conversion balloon appears, press{" "}
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
              "app/stop-enter-submit/_components/incorrect-form.tsx"
            )}
          />
        </CollapsibleContent>
      </Collapsible>

      <h2 id="solution" className="scroll-mt-6">
        Suggested remedy
      </h2>

      <p>
        When there is only one input field, using{" "}
        <ExternalLink href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission">
          implicit submission
        </ExternalLink>{" "}
        simplifies the solution.
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
            code={getFile("app/stop-enter-submit/_components/correct-form.tsx")}
          />
        </CollapsibleContent>
      </Collapsible>

      <p>
        For text areas, the solution is to use{" "}
        <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode">
          keyCode
        </ExternalLink>
        . Although it is marked as deprecated, it is currently the only
        effective approach.
      </p>

      <CorrectTextareaForm />

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
              "app/stop-enter-submit/_components/correct-textarea-form.tsx"
            )}
          />
        </CollapsibleContent>
      </Collapsible>

      <p>
        Lastly, these issues would be resolved if Safari handled{" "}
        <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/isComposing">
          isComposing
        </ExternalLink>{" "}
        properly. Upon completion of the conversion, isComposing becomes false,
        and then the Enter event is processed, resulting in submission during
        the conversion.
      </p>

      <h2>Many Japanese users agree with this sentiment.</h2>

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
        any questions, please join{" "}
        <ExternalLink href={AppConfig.jaEnterKey.discussionURL}>
          the discussion
        </ExternalLink>
        !
      </p>

      <h2>Related Links</h2>

      <ul>
        {AppConfig.jaEnterKey.relatedLinks.map((link) => (
          <li key={link.title}>
            <ExternalLink href={link.url}>{link.title}</ExternalLink>
          </li>
        ))}
      </ul>

      <h2>Author</h2>
      <ul>
        <li>
          <ExternalLink href={AppConfig.jaEnterKey.author.url}>
            {AppConfig.jaEnterKey.author.name}
          </ExternalLink>
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

      <h2>Petition Form</h2>

      <PetitionForm />

      <h3>Image</h3>
      <Image
        src={`${AppConfig.basePath}/stop-enter-trigger/ogimage.png`}
        alt=""
        className="border"
        width={2400}
        height={1350}
      />
    </div>
  );
}
