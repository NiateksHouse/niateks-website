/* SVG asset validator — dev utility (not part of the website).
   Checks: tag balance, malformed hex colors, stray words inside numeric attributes. */
const fs = require("fs");
const path = require("path");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".svg") ? [p] : [];
  });
}

let failures = 0;
for (const file of walk("assets/images")) {
  const s = fs.readFileSync(file, "utf8");
  const problems = [];

  // tag balance (excluding self-closing)
  const openTags = (s.match(/<([a-zA-Z][\w-]*)/g) || []).length;
  const closeTags = (s.match(/<\//g) || []).length;
  const selfClose = (s.match(/\/>/g) || []).length;
  if (openTags !== closeTags + selfClose)
    problems.push(`tag balance: open=${openTags} close=${closeTags} self=${selfClose}`);

  // hex colors: # followed by valid hex chars only (skip url(#id) references)
  const noUrls = s.replace(/url\([^)]*\)/g, "");
  for (const m of noUrls.matchAll(/#([0-9A-Za-z]*)/g)) {
    if (!/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/.test(m[1]))
      problems.push(`bad hex color: "#${m[1]}"`);
  }

  // stray alphabetic words inside transform/numeric attrs (corruption signature)
  for (const m of s.matchAll(/\s([a-zA-Z-]+)="?([a-zA-Z][^\"]*)"?(?=[\s>])/g)) {
    const attr = m[1], val = m[2] || "";
    const okAttrs = /^(fill|stroke|id|xlink|preserveAspectRatio|viewBox|xmlns|offset|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|font-family|font-size|letter-spacing|text-transform|d|opacity|transform|rx|ry|cx|cy|x|y|x1|x2|y1|y2|width|height|points|gradientUnits|spreadMethod|gradientTransform|role|aria-labelledby|aria-hidden|class|style|in|in2|stdDeviation|values|result|mode|operator|flood-color|flood-opacity|type|dx|dy|mask|clip-path|filter|version|encoding|standalone|patternUnits|patternTransform|fr|r)$/;
    if (!okAttrs.test(attr) && !val.startsWith("url("))
      problems.push(`unknown attribute: ${attr}="${val}"`);
  }

  // unmatched quotes
  const quotes = (s.match(/"/g) || []).length;
  if (quotes % 2 !== 0) problems.push("unbalanced quotes");

  if (problems.length) {
    failures++;
    console.log(`✗ ${file}`);
    problems.forEach((p) => console.log(`   - ${p}`));
  } else {
    console.log(`✓ ${file}`);
  }
}
process.exit(failures ? 1 : 0);
