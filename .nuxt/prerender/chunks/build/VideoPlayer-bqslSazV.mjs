import _sfc_main$1 from './NuxtImg-xhY2BGpi.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/h3/dist/index.mjs';
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
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    poster: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    sources: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const provider = computed(() => {
      if (props.src && props.src.includes("youtube.com/watch")) {
        const match = props.src.match(/\?v=([^&]*)/);
        return {
          name: "youtube",
          src: `https://www.youtube-nocookie.com/embed/${(match == null ? void 0 : match[1]) || ""}?autoplay=1`,
          poster: props.poster || `https://i3.ytimg.com/vi/${(match == null ? void 0 : match[1]) || ""}/hqdefault.jpg`
        };
      }
    });
    const loaded = ref(false);
    if (!props.src && !props.sources.length) {
      throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");
    }
    const src = computed(() => {
      var _a, _b;
      return props.src || ((_b = (_a = props.sources) == null ? void 0 : _a[0]) == null ? void 0 : _b.src) || false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["video-player", { loaded: unref(loaded) }]
      }, _attrs))} data-v-cfa5f079>`);
      if (unref(provider) ? unref(provider).poster : __props.poster) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(provider) ? unref(provider).poster : __props.poster
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loaded)) {
        _push(`<div class="loaded" data-v-cfa5f079>`);
        if (!unref(provider)) {
          _push(`<video${ssrRenderAttr("poster", __props.poster)} controls autoplay data-v-cfa5f079>`);
          if (unref(src)) {
            _push(`<source${ssrRenderAttr("src", unref(src))} data-v-cfa5f079>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(__props.sources, (source) => {
            _push(`<source${ssrRenderAttr("src", source.src || source)}${ssrRenderAttr("type", source.type)} data-v-cfa5f079>`);
          });
          _push(`<!--]--></video>`);
        } else if (unref(provider).name === "youtube") {
          _push(`<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"${ssrIncludeBooleanAttr(__props.autoplay) ? " autoplay" : ""}${ssrRenderAttr("src", unref(provider).src)} data-v-cfa5f079></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loaded)) {
        _push(`<div class="play-button" data-v-cfa5f079><button data-v-cfa5f079></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cfa5f079"]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=VideoPlayer-bqslSazV.mjs.map
