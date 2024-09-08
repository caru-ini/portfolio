import { Marked } from 'marked';

// Configure marked options
const marked = new Marked({
  gfm: true,
  breaks: true,
});

const disableFuzzyMatching = () => {
  const renderer = new marked.Renderer();
  renderer.link = function ({ href, title, text }) {
    if (/^mailto:/.test(href) || /^(\d{1,3}\.){3}\d{1,3}$/.test(href)) {
      return text;
    }
    return `<a href="${href}" title="${title || ''}">${text}</a>`;
  };
  return renderer;
};

marked.use({ renderer: disableFuzzyMatching() });

export default marked;
