import markdownIt from 'markdown-it';

export const mdIt = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

mdIt.linkify.set({ fuzzyEmail: false, fuzzyIP: false });
