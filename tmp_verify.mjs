import fs from "node:fs";
const c = fs.readFileSync("src/data/blog.ts", "utf8");
const slugs = c.match(/slug: "/g);
console.log("Total posts:", slugs.length);

const blocks = c.split("content: `");
for (let i = 1; i < blocks.length; i++) {
  const text = blocks[i].split("`")[0];
  const words = text.split(/\s+/).filter(Boolean).length;
  const headings = (text.match(/^## /gm) || []).length;
  const slugMatch = blocks[i - 1].match(/slug: "([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : "(unknown)";
  console.log(`Post ${i} (${slug}): ${words} words, ${headings} ## headings`);
}
