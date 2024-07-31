import { createContentLoader } from "vitepress";
import { dayjs } from "./dayjs";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("**/*.md", {
  excerpt: "<!-- more -->",
  transform(raw): Post[] {
    return raw
      .filter((post) => post.url != "/")
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): Post["date"] {
  const date = dayjs(raw);
  return {
    time: +date,
    string: date.format("YYYY年MM月DD日 HH:mm:ss"),
  };
}
