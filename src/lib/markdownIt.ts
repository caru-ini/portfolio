import markdownIt from 'markdown-it';

export const mdIt = markdownIt({
  html: true,
  linkify: true,
});

mdIt.linkify.set({ fuzzyEmail: false, fuzzyIP: false });
