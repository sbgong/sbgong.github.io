import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import MarkdownAbbr from "markdown-it-abbr";
import MarkdownDeflist from "markdown-it-deflist";
import MarkdownFootnote from "markdown-it-footnote";
import MarkdownIns from "markdown-it-ins";
import MarkdownKbd from "markdown-it-kbd";
import MarkdownMark from "markdown-it-mark";
import MarkdownItMultimdTable from "markdown-it-multimd-table";
import MarkdownSub from "markdown-it-sub";
import MarkdownSup from "markdown-it-sup";
import MarkdownTaskLists from "markdown-it-task-lists";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
export default {
  config(md) {
    md.use(MarkdownItMultimdTable, {
      multiline: true,
      rowspan: true,
      headerless: true,
      multibody: true,
      aotolabel: true,
    });
    md.use(MarkdownAbbr);
    md.use(MarkdownDeflist);
    md.use(MarkdownFootnote);
    md.use(MarkdownIns);
    md.use(MarkdownKbd);
    md.use(MarkdownMark);
    md.use(MarkdownSup);
    md.use(MarkdownSub);
    md.use(MarkdownTaskLists);
    md.use(tabsMarkdownPlugin);
  },
  math: true,
  typographer: true,
  codeTransformers: [
    transformerTwoslash(),
    {
      postprocess(code) {
        return code.replace(/\[\!\!code/g, "[!code");
      },
    },
  ],
};
