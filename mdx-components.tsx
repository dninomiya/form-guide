import Ref from '@/components/ui/ref';
import { ExternalLink } from 'lucide-react';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    a: ({ children, href }) => {
      if (href?.match(/^(https?:)?\/\//)) {
        return (
          <a href={href} target="_blank">
            {children}
            <ExternalLink
              size={14}
              className="ml-0.5 opacity-60 inline align-baseline"
            />
          </a>
        );
      } else {
        return <a href={href}>{children}</a>;
      }
    },
    Ref,
    ...components,
  };
}
