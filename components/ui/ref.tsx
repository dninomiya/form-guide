export default function Ref({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      title={title}
      className="text-xs align-[2px] not-prose px-1 py-0.5 border rounded inline-block ml-1 text-muted-foreground bg-muted"
    >
      出典
    </a>
  );
}
