export const AppConfig = {
  version: '0.1',
  title: 'ふぉーむがいど',
  description: 'オープンソースのフォーム実装ガイド',
  xURL: 'https://twitter.com/d151005',
  githubURL: 'https://github.com/dninomiya/form-guide',
  commentURL: 'https://twitter.com/d151005/status/1706913202410590498',
  basePath: '/form-guide',

  jaEnterKey: {
    title:
      'Please do not implement `Enter key to Submit` behaviors by directly hooking into the raw keypress event.',
    description:
      'Setting the Enter key as a send trigger can make it challenging for Japanese users utilizing Safari to use the form. In Japanese, users compose text using the Enter key to convert into Kanji. If the Enter key is set as the send trigger, the text might be submitted prematurely.',
    discussionURL: 'https://github.com/dninomiya/form-guide/discussions/8',
    updatedAt: '2023-10-05',
    historyURL:
      'https://github.com/dninomiya/form-guide/commits/main/app/stop-enter-submit',
    editURL:
      'https://github.com/dninomiya/form-guide/tree/main/app/stop-enter-submit',
    relatedLinks: [
      {
        title: 'Your Code Displays Japanese Wrong',
        url: 'https://heistak.github.io/your-code-displays-japanese-wrong/',
      },
      {
        title: 'Components: Resolving unintended key events in IME composition',
        url: 'https://github.com/WordPress/gutenberg/issues/45605',
      },
      {
        title: 'KeyboardEvent.isComposing',
        url: 'https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/isComposing',
      },
    ],
    author: {
      name: 'Daichi Ninomiya',
      url: 'https://twitter.com/d151005',
    },
    advicers: [
      {
        name: 'Heis',
        url: 'https://heistak.github.io/',
      },
    ],
  },
};
