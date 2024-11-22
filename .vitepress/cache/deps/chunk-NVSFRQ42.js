import {
  c
} from "./chunk-B52AVJZK.js";
import {
  Fragment,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  normalizeStyle,
  openBlock,
  renderSlot,
  toDisplayString,
  unref
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/Title-DYNLqCCT.js
var x = {
  __name: "Title",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    lineHeight: {
      type: [String, Boolean],
      default: false
    }
  },
  setup(i) {
    const t = c({
      userConfig: i.config,
      defaultConfig: {
        title: {
          cy: "",
          text: "",
          color: "",
          fontSize: 20,
          bold: true,
          textAlign: "center",
          paddingLeft: 0,
          paddingRight: 0
        },
        subtitle: {
          cy: "",
          text: "",
          color: "",
          fontSize: 14,
          bold: false
        }
      }
    });
    return (a, s) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        style: normalizeStyle(`width: calc(100% - ${unref(t).title.paddingLeft + unref(t).title.paddingRight}px); text-align:${unref(t).title.textAlign};color:${unref(t).title.color};font-size:${unref(t).title.fontSize}px;font-weight:${unref(t).title.bold ? "bold" : ""};padding-left:${unref(t).title.paddingLeft}px;padding-right:${unref(t).title.paddingRight}px;${i.lineHeight ? `line-height:${i.lineHeight}` : ""}`)
      }, toDisplayString(unref(t).title.text), 5),
      unref(t).subtitle.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(`width: calc(100% - ${unref(t).title.paddingLeft + unref(t).title.paddingRight}px); text-align:${unref(t).title.textAlign};color:${unref(t).subtitle.color};font-size:${unref(t).subtitle.fontSize}px;font-weight:${unref(t).subtitle.bold ? "bold" : ""};padding-left:${unref(t).title.paddingLeft}px;padding-right:${unref(t).title.paddingRight}px;${i.lineHeight ? `line-height:${i.lineHeight}` : ""}`)
      }, toDisplayString(unref(t).subtitle.text), 5)) : createCommentVNode("", true),
      unref(t).subtitle.text ? (openBlock(), createElementBlock("div", {
        key: 1,
        style: normalizeStyle(`width: calc(100% - ${unref(t).title.paddingLeft + unref(t).title.paddingRight}px); text-align:${unref(t).title.textAlign};color:${unref(t).subtitle.color};font-size:${unref(t).subtitle.fontSize}px;font-weight:${unref(t).subtitle.bold ? "bold" : ""};padding-left:${unref(t).title.paddingLeft}px;padding-right:${unref(t).title.paddingRight}px;${i.lineHeight ? `line-height:${i.lineHeight}` : ""}`)
      }, [
        renderSlot(a.$slots, "default")
      ], 4)) : createCommentVNode("", true)
    ], 64));
  }
};

export {
  x
};
//# sourceMappingURL=chunk-NVSFRQ42.js.map
