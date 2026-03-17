import { w as useClipboard, m as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/h3/dist/index.mjs';
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
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nanoid/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/@vueuse/integrations/useFuse.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/devalue/index.js';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useClipboard();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black" }, _attrs))}>`);
      if (unref(state) === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-check",
          class: "h-4 w-4"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-copy",
          class: "h-4 w-4"
        }, null, _parent));
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CopyButton-iCT1MjHT.mjs.map
