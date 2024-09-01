import hljs from 'highlight.js';
import markdownIt from 'markdown-it';

export const mdIt = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  },
});

mdIt.linkify.set({ fuzzyEmail: false, fuzzyIP: false });
