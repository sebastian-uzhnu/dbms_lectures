import { u as useAppConfig } from '../../nitro/nitro.mjs';
import { defineEventHandler } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/h3/dist/index.mjs';
import { s as serverQueryContent$1 } from '../../_/storage.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unified/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-parse/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-rehype/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-gfm/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-external-links/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-raw/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/detab/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/scule/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/hast-util-to-string/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/github-slugger/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/destr/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/klona/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/pathe/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ohash/dist/index.mjs';
import '../../_/path-meta.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/slugify/slugify.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark-util-character/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark-util-resolve-all/index.js';

const serverQueryContent = serverQueryContent$1;

const search = defineEventHandler(async (event) => {
  var _a, _b;
  const appConfig = useAppConfig();
  ((_b = (_a = appConfig == null ? void 0 : appConfig.docus) == null ? void 0 : _a.search) == null ? void 0 : _b.mode) || "meta";
  let docs = await serverQueryContent(event).find();
  docs = await Promise.all(
    docs.filter(
      (doc) => {
        return (doc == null ? void 0 : doc._extension) === "md" && (doc == null ? void 0 : doc._draft) === false && !(doc == null ? void 0 : doc._empty);
      }
    ).map(
      async ({ _id: id, _path: path, _dir: dir, title = "", description = "", body = void 0, ...rest }) => {
        var _a2;
        const { directoryIcon } = rest;
        if (directoryIcon) {
          console.log({ directoryIcon });
        }
        return {
          id,
          path,
          dir,
          title,
          description,
          keywords: (_a2 = body == null ? void 0 : body.toc) == null ? void 0 : _a2.links.map((link) => link == null ? void 0 : link.text),
          // Only fetch body for `full-text` mode.
          body: extractTextFromAst(body) || ""
        };
      }
    )
  );
  return docs;
});
function extractTextFromAst(node) {
  let text = "";
  if (node.type === "text") {
    text += node.value;
  }
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child);
    }
  }
  return text;
}

export { search as default };
//# sourceMappingURL=search.mjs.map
