import fg from "fast-glob";
import matter from "gray-matter";
import fs from "node:fs";
import os from "node:os";
import path from "path";
import { dayjs } from "./dayjs";

export async function setFrontmatter() {
  const paths = await fg("docs/**/*.md", {
    ignore: ["docs/index.md", "docs/.vitepress/**", "docs/public/**"],
  });

  paths.map(async (postPath) => {
    const { data, excerpt, content } = matter.read(postPath);

    // no title/date/order
    let tag = false;
    if (!("title" in data) || !("date" in data) || !("order" in data)) {
      tag = true;
    }

    !data.title && (data.title = path.basename(postPath, path.extname(postPath)));
    data.date = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
    !data.order && (data.order = "");

    if (tag) {
      const fmData = `---
title: ${data.title}
date: ${data.date}
order: ${data.order}
---`;

      const contents = `${fmData}${os.EOL}${content}`;
      fs.writeFileSync(postPath, contents, "utf8");
    }
  });
}
