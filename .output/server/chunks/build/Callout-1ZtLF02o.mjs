import { _ as _export_sfc, m as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-XAAQ_o-w.mjs';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '../_/index.mjs';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/integrations/useFuse';
import '@vueuse/integrations/useFocusTrap';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './node-D3l1mkOf.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Callout",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    },
    modelValue: {
      required: false,
      default: () => ref(false)
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["callout", [__props.type]]
      }, _attrs))} data-v-63fa4c2e><span class="preview" data-v-63fa4c2e><span class="summary" data-v-63fa4c2e>`);
      ssrRenderSlot(_ctx.$slots, "summary", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:chevron-right",
        class: ["icon", [unref(isOpen) && "rotate"]]
      }, null, _parent));
      _push(`</span><div class="content" style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" data-v-63fa4c2e>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Callout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63fa4c2e"]]);

export { Callout as default };
//# sourceMappingURL=Callout-1ZtLF02o.mjs.map
