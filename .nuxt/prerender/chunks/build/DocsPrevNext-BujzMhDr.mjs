import { _ as _export_sfc, g as useContent, t as useContentHelpers, a as __nuxt_component_0$5, m as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/server-renderer/index.mjs';
import { upperFirst } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/scule/dist/index.mjs';
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
  __name: "DocsPrevNext",
  __ssrInlineRender: true,
  setup(__props) {
    const { prev, next, navigation } = useContent();
    const { navDirFromPath } = useContentHelpers();
    const directory = (link) => {
      var _a2;
      var _a;
      const nav = navDirFromPath(link._path, navigation.value || []);
      if (nav && nav[0]) {
        return (_a2 = (_a = nav[0]) == null ? void 0 : _a._path) != null ? _a2 : "";
      } else {
        const dirs = link.split("/");
        const directory2 = dirs.length > 1 ? dirs[dirs.length - 2] : "";
        return directory2.split("-").map(upperFirst).join(" ");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$3;
      if (unref(prev) || unref(next)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-prev-next" }, _attrs))} data-v-30e1aea1>`);
        if (unref(prev) && unref(prev)._path) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(prev)._path,
            class: "prev"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-left",
                  class: "icon"
                }, null, _parent2, _scopeId));
                _push2(`<div class="wrapper" data-v-30e1aea1${_scopeId}>`);
                if (directory(unref(prev)._path)) {
                  _push2(`<span class="directory" data-v-30e1aea1${_scopeId}>${ssrInterpolate(directory(unref(prev)._path))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="title" data-v-30e1aea1${_scopeId}>${ssrInterpolate(unref(prev).title)}</span></div>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-left",
                    class: "icon"
                  }),
                  createVNode("div", { class: "wrapper" }, [
                    directory(unref(prev)._path) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "directory"
                    }, toDisplayString(directory(unref(prev)._path)), 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "title" }, toDisplayString(unref(prev).title), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span data-v-30e1aea1></span>`);
        }
        if (unref(next) && unref(next)._path) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(next)._path,
            class: "next"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="wrapper" data-v-30e1aea1${_scopeId}>`);
                if (directory(unref(next)._path)) {
                  _push2(`<span class="directory" data-v-30e1aea1${_scopeId}>${ssrInterpolate(directory(unref(next)._path))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="title" data-v-30e1aea1${_scopeId}>${ssrInterpolate(unref(next).title)}</span></div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-right",
                  class: "icon"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "wrapper" }, [
                    directory(unref(next)._path) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "directory"
                    }, toDisplayString(directory(unref(next)._path)), 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "title" }, toDisplayString(unref(next).title), 1)
                  ]),
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-right",
                    class: "icon"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30e1aea1"]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=DocsPrevNext-BujzMhDr.mjs.map
