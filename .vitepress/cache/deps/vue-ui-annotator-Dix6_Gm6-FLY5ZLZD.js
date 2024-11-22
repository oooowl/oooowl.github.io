import {
  Ht
} from "./chunk-GR634IEI.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  K,
  Qe,
  at,
  oe
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  normalizeClass,
  normalizeStyle,
  openBlock,
  popScopeId,
  pushScopeId,
  renderList,
  renderSlot,
  toDisplayString,
  vModelCheckbox,
  vModelText,
  withDirectives
} from "./chunk-CQOUZRMK.js";
import {
  xQ
} from "./chunk-GYVK32RL.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-annotator-Dix6_Gm6.js
var D = {
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Object,
      default() {
        return {
          shapes: [],
          lastSelectedShape: void 0
        };
      }
    }
  },
  data() {
    return {
      activeShape: void 0,
      strokeSize: 1,
      currentPointer: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          end: 0
        }
      },
      currentTarget: void 0,
      hoveredShapeId: void 0,
      isBold: false,
      isBulletTextMode: false,
      isDash: false,
      isDeleteMode: false,
      isDrawing: false,
      isDrawingNewShape: true,
      isDrawMode: false,
      isItalic: false,
      isMouseDown: false,
      isMoveMode: false,
      isPrinting: false,
      isResizeMode: false,
      isSelectMode: false,
      isSummaryOpen: false,
      isTextMode: false,
      isUnderline: false,
      isWriting: false,
      lastSelectedShape: this.dataset.lastSelectedShape,
      pointerDownId: -1,
      pointerPosition: {
        x: 0,
        y: 0
      },
      preventEdit: true,
      selectedGroup: [],
      shapes: this.dataset.shapes ? this.dataset.shapes : [],
      shapesOrder: [],
      step: Math.round(Math.random()) * 1e5,
      svgHeight: 1e3,
      svgWidth: 1e3,
      options: {
        arrow: {
          color: "grey",
          filled: true
        },
        circle: {
          color: "grey",
          filled: false,
          radius: 3,
          strokeWidth: 2
        },
        rect: {
          color: "grey",
          filled: false,
          strokeWidth: 2,
          height: 12,
          width: 12
        }
      },
      selectedColor: "#000000",
      showCaret: false,
      sizeRatio: 1,
      slottedSvg: void 0,
      sourceWidth: 1,
      sourceHeight: 1,
      textAlign: "start",
      textFont: 20,
      transparency: 100,
      transparencyCodes: K
    };
  },
  watch: {
    shapes: {
      handler(t) {
        t.length === 0 && (this.lastSelectedShape = void 0);
      }
    }
  },
  computed: {
    FINAL_CONFIG() {
      const t = oe().vue_ui_annotator;
      if (!Object.keys(this.config || {}).length)
        return t;
      const s2 = this.treeShake({
        defaultConfig: t,
        userConfig: this.config
      });
      return this.convertConfigColors(s2);
    },
    canSelect() {
      return this.shapes.filter((t) => !["line", "group"].includes(t.type)).length > 1;
    },
    colorTransparency() {
      return this.transparencyCodes[this.transparency > 98 ? 98 : this.transparency];
    },
    cursorClass() {
      switch (true) {
        case this.isDeleteMode:
          return "default";
        case this.isMoveMode:
          return "move";
        case this.isTextMode:
          return "text";
        case this.isResizeMode:
          return "se-resize";
        default:
          return "";
      }
    },
    records() {
      return this.shapes;
    },
    userShapes() {
      return this.records.map((t) => {
        switch (true) {
          case (t && t.type === "arrow"):
            const s2 = t.strokeWidth > 3 ? 5 : 10, o = t.strokeWidth > 3 ? 2.5 : 5;
            return `
                        <defs>
                        <marker 
                            id="${t.id}" 
                            markerWidth="${s2}" 
                            markerHeight="${s2}" 
                            refX="0" 
                            refY="${o}" 
                            orient="auto"
                        >
                            <polygon 
                            points="0 0,${s2} ${o}, 0 ${s2}" 
                            fill="${t.color}"
                            />
                        </marker>
                        </defs>
                        ${this.includeSelectionIndicator(t)}
                        <g id="${t.id}">
                            <path 
                            style="stroke-linecap: round !important; ${t.isDash ? `stroke-dasharray: ${t.strokeWidth * 3}` : ""}" 
                            stroke="${t.color}" 
                            id="${t.id}" 
                            d="M${t.x},${t.y} ${t.endX},${t.endY}" 
                            stroke-width="${t.strokeWidth}" 
                            marker-end="url(#${t.id})"
                            />
                        </g>
                        <g id="${t.id}">
                        <rect 
                            id="${t.id}"
                            x="${t.x - 10}"
                            y="${t.y - 10}"
                            height="20"
                            width="20"
                            fill="rgba(0,0,0,0.3)"
                            style="display:${this.isResizeMode || this.isMoveMode ? "initial" : "none"}; rx:1 !important; ry:1 !important;"
                        />
                        </g>
                        ${this.includeDeleteButton(t)}
                        </g>
                        `;
          case (t && t.type === "circle"):
            return `
                            <g id="${t.id}">
                                ${this.includeSelectionIndicator(t)}
                                <circle 
                                id="${t.id}" 
                                cx="${t.x}" 
                                cy="${t.y}" 
                                r="${t.circleRadius ? t.circleRadius : Number.MIN_VALUE}"
                                fill="${t.isFilled ? t.color + t.alpha : "rgba(255,255,255,0.001)"}" 
                                stroke="${t.color + t.alpha}" 
                                stroke-width="${t.strokeWidth}"
                                style="${t.isDash ? `stroke-dasharray: ${t.strokeWidth * 3}` : ""}"
                                >
                                </circle>
                            </g>
                            
                            ${this.includeDeleteButton(t)}`;
          case (t && t.type === "group"):
            return `<g id="${t.id}">
                            <rect
                                id="${this.isResizeMode ? "" : t.id}"
                                x="${t.x}"
                                y="${t.y}"
                                fill="transparent"
                                height="${t.rectHeight}"
                                width="${t.rectWidth}"
                                stroke="grey"
                                stroke-width="1"
                                style="rx:1 !important; ry:1 !important; ${t.isDash ? `stroke-dasharray: ${t.strokeWidth * 3}` : ""}; display:${this.isSelectMode || this.isDeleteMode || this.hoveredShapeId && this.hoveredShapeId === t.id ? "initial" : "none"};"
                            />
                <g id="${t.id}">
                ${t.content ? t.content : ""}
                </g>
                            ${this.includeDeleteButton(t)}
                            </g> `;
          case (t && t.type === "rect"):
            return `<g id="${t.id}">
                            ${this.includeSelectionIndicator(t)}
                            <rect
                                id="${this.isResizeMode ? "" : t.id}"
                                x="${t.x}"
                                y="${t.y}"
                                fill="${t.isFilled ? t.color + t.alpha : "rgba(255,255,255,0.001)"}"
                                height="${t.rectHeight}"
                                width="${t.rectWidth}"
                                stroke="${t.color + t.alpha}"
                                stroke-width="${t.strokeWidth}"
                                style="rx:1 !important; ry:1 !important; ${t.isDash ? `stroke-dasharray: ${t.strokeWidth * 3}` : ""}"
                            />
                            <rect id="${t.id}"
                                x="${t.x + t.rectWidth}"
                                y="${t.y + t.rectHeight}"
                                height="20"
                                width="20"
                                fill="rgba(0,0,0,0.3)"
                                style="display:${this.isResizeMode ? "initial" : "none"}; rx:1 !important; ry:1 !important;"
                            />
                            ${this.includeDeleteButton(t)}
                            </g> `;
          case (t && t.type === "line"):
            return `
                    <g id="${t.id}">
                        <path 
                        id="${t.id}" 
                        d="M${t.path ? t.path : ""}" 
                        style="stroke:${t.color + t.alpha} !important; fill:none; stroke-width:${t.strokeWidth} !important; stroke-linecap: round !important; stroke-linejoin: round !important;"        
                        />
                ${this.includeDeleteButton(t)}
                    </g>
                    `;
          case (t && t.type === "text"):
            const h = t.textContent.split("‎"), i = [];
            for (let e = 0; e < h.length; e += 1)
              i.push(`
            ${t.isBulletTextMode ? `<tspan x="${t.x - t.fontSize}" y="${t.y + t.fontSize * e}" id="${t.id}" font-size="${t.fontSize / 2}">⬤</tspan>` : ""}
                    <tspan id="${t.id}" x="${t.x}" y="${t.y + t.fontSize * e}">
                        ${h[e]}
                    </tspan>`);
            return `
                            ${this.includeSelectionIndicator(t)}
                            ${this.computeTextElement(
              t,
              i,
              t.isBulletTextMode
            )}
                            `;
        }
      });
    }
  },
  mounted() {
    const t = this.$refs.drawSvgContainer;
    let s2 = false;
    this.walkTheDOM(t, (i) => {
      if (!s2 && ["DIV", "svg", "section", "canvas"].includes(i.tagName)) {
        this.slottedSvg = i, s2 = true;
        return;
      }
    });
    const o = this.slottedSvg.getBoundingClientRect();
    this.sizeRatio = o.height / o.width, this.svgWidth = 1e3, this.svgHeight = this.sizeRatio * 1e3, this.sourceWidth = o.width, this.sourceHeight = o.height, new ResizeObserver((i) => {
      i.forEach((e) => {
        this.sourceWidth = e.contentRect.width, this.sourceHeight = e.contentRect.height, this.sizeRatio = e.contentRect.height / e.contentRect.width, this.svgHeight = this.sizeRatio * 1e3;
      });
    }).observe(this.slottedSvg), window.addEventListener("keydown", (i) => {
      this.write(i);
    });
  },
  destroyed() {
    window.removeEventListener("keydown", (t) => {
      this.write(t);
    });
  },
  methods: {
    treeShake: Qe,
    convertConfigColors: at,
    bringShapeTo(t) {
      const s2 = this.shapes.find(
        (o) => o.id === this.lastSelectedShape.id
      );
      switch (true) {
        case t === "front":
          this.shapes = this.shapes.filter((o) => o.id !== s2.id), this.shapes.push(s2);
          break;
        case t === "back":
          this.shapes = this.shapes.filter((o) => o.id !== s2.id), this.shapes = [s2, ...this.shapes];
          break;
        default:
          return;
      }
    },
    clickSvg(t) {
      if (this.isDeleteMode)
        return;
      this.deleteEmptyTextElement(), this.isTextMode ? (this.isWriting = true, this.showCaret = true) : (this.isWriting = false, this.showCaret = false, this.isTextMode = false);
      let s2 = `text_${Math.random() * 1e4}_${Math.random() * 99999}`;
      if (this.isWriting) {
        this.shapes.push({
          id: s2,
          type: "text",
          lines: 0,
          x: this.pointerPosition.x,
          y: this.pointerPosition.y,
          textContent: "",
          fontSize: this.copy(this.textFont),
          textAlign: this.copy(this.textAlign),
          isBold: this.copy(this.isBold),
          isItalic: this.copy(this.isItalic),
          isUnderline: this.copy(this.isUnderline),
          color: this.copy(this.selectedColor),
          isBulletTextMode: this.copy(this.isBulletTextMode)
        }), this.currentTarget = this.shapes.at(-1), this.lastSelectedShape = this.shapes.at(-1);
        return;
      }
      const o = () => {
        this.isDash = this.shapes.find((i) => i.id === t.target.id).isDash;
      }, h = () => {
        this.strokeSize = this.shapes.find(
          (i) => i.id === t.target.id
        ).strokeWidth;
      };
      if (this.isSelectMode = false, t.target.id.includes("arrow")) {
        this.activeShape = "arrow", o(), h();
        return;
      }
      if (t.target.id.includes("circle")) {
        this.activeShape = "circle", this.options.circle.filled = this.shapes.find(
          (i) => i.id === t.target.id
        ).isFilled, o(), h();
        return;
      }
      if (t.target.id.includes("rect")) {
        this.activeShape = "rect", this.options.rect.filled = this.shapes.find(
          (i) => i.id === t.target.id
        ).isFilled, o(), h();
        return;
      }
      if (t.target.id.includes("line")) {
        this.activeShape = "line", h();
        return;
      }
      if (t.target.id.includes("text")) {
        this.isTextMode = true, this.isWriting = true, this.showCaret = true;
        const i = this.shapes.find((e) => e.id === t.target.id);
        i && i.textAlign && (this.textAlign = this.shapes.find(
          (e) => e.id === t.target.id
        ).textAlign), i && (this.isBulletTextMode = this.shapes.find(
          (e) => e.id === t.target.id
        ).isBulletTextMode);
        return;
      }
    },
    copyPaste() {
      const t = {
        ...this.lastSelectedShape,
        id: `${this.lastSelectedShape.id}_copy`,
        x: this.lastSelectedShape.x - 100 < 0 ? 1 : this.lastSelectedShape.x - 100,
        y: this.lastSelectedShape.y - 100 < 0 ? 1 : this.lastSelectedShape.y - 100
      };
      this.shapes.push(t);
    },
    includeDeleteButton(t, s2 = false) {
      switch (true) {
        case t.type === "circle":
          return `
                    <g id="${t.id}" style="display:${this.isDeleteMode ? "initial" : "none"};">
                        <circle id="${t.id}" cx="${t.x}" cy="${t.y}" r="12" fill="red"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x - 4}" y1="${t.y - 4}" x2="${t.x + 4}" y2="${t.y + 4}"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x + 4}" y1="${t.y - 4}" x2="${t.x - 4}" y2="${t.y + 4}"/>
                    </g>
                `;
        case t.type === "text":
          let o, h = [-8, -12, -4, -12, -4];
          switch (true) {
            case t.textAlign === "start":
              s2 ? o = [-20, -24, -16, -16, -24] : o = [-16, -20, -12, -12, -20];
              break;
            case t.textAlign === "middle":
              o = [0, -4, 4, 4, -4], h = [-32, -36, -28, -36, -28];
              break;
            case t.textAlign === "end":
              o = [16, 20, 12, 12, 20];
              break;
            default:
              o = [0, 0, 0];
              break;
          }
          return `
                    <g id="${t.id}" style="display:${this.isDeleteMode ? "initial" : "none"};">
                        <circle id="${t.id}" cx="${t.x + o[0]}" cy="${t.y + h[0]}" r="12" fill="red"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x + o[1]}" y1="${t.y + h[1]}" x2="${t.x + o[2]}" y2="${t.y + h[2]}"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x + o[3]}" y1="${t.y + h[3]}" x2="${t.x + o[4]}" y2="${t.y + h[4]}"/>
                    </g>
                `;
        default:
          return `
                    <g id="${t.id}" style="display:${this.isDeleteMode ? "initial" : "none"};">
                        <circle id="${t.id}" cx="${t.x - 4}" cy="${t.y - 4}" r="12" fill="red"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x - 8}" y1="${t.y - 8}" x2="${t.x}" y2="${t.y}"/>
                        <line stroke="white" stroke-width="2" id="${t.id}" x1="${t.x}" y1="${t.y - 8}" x2="${t.x - 8}" y2="${t.y}"/>
                    </g>
                `;
      }
    },
    includeSelectionIndicator(t) {
      if (t)
        switch (true) {
          case t.type === "rect":
            return `
                    <rect
                    id="${t.id}" 
                    style="stroke-dasharray: 10; display:${this.hoveredShapeId && this.hoveredShapeId === t.id ? "initial" : "none"}"
                    x="${t.x - 20}"
                    y="${t.y - 20}"
                    height="${t.rectHeight + 40}"
                    width="${t.rectWidth + 40}"
                    fill="transparent"
                    stroke="grey"
                    />
                `;
          case t.type === "circle":
            return `
                    <rect
                    id="${t.id}" 
                    style="stroke-dasharray: 10; display:${this.hoveredShapeId && this.hoveredShapeId === t.id ? "initial" : "none"}"
                    x="${t.x - t.circleRadius - 20}"
                    y="${t.y - t.circleRadius - 20}"
                    height="${t.circleRadius * 2 + 40}"
                    width="${t.circleRadius * 2 + 40}"
                    fill="transparent"
                    stroke="grey"
                    />
                `;
          case t.type === "arrow":
            const s2 = t.endX - t.x > 0, o = t.endY - t.y > 0;
            return `
                    <rect
                    id="${t.id}" 
                    style="stroke-dasharray: 10; display:${this.hoveredShapeId && this.hoveredShapeId === t.id ? "initial" : "none"}"
                    x="${s2 ? t.x - 20 : t.endX - 20}"
                    y="${o ? t.y - 20 : t.endY - 20}"
                    height="${o ? t.endY - t.y + 40 : t.y - t.endY + 40}"
                    width="${s2 ? t.endX - t.x + 40 : t.x - t.endX + 40}"
                    fill="transparent"
                    stroke="grey"
                    />
                `;
          case t.type === "text":
            const h = Array.from(document.getElementsByTagName("text")).find(
              (I) => I.id === t.id
            );
            if (!h)
              return;
            const { x: i, y: e, width: l, height: b } = h.getBBox();
            return `
                    <rect
                    id="${t.id}" 
                    style="stroke-dasharray: 10; display:${this.hoveredShapeId && this.hoveredShapeId === t.id ? "initial" : "none"}"
                    x="${i - 20}"
                    y="${e - 20}"
                    height="${b + 40}"
                    width="${l + 40}"
                    fill="transparent"
                    stroke="grey"
                    />
                `;
          default:
            return "";
        }
    },
    allowEditAndHoverShapes(t) {
      t.preventDefault(), this.preventEdit = false, t.target && t.target.id && (this.hoveredShapeId = t.target.id);
    },
    setSelectedTextAlignTo(t) {
      !this.lastSelectedShape || this.lastSelectedShape.type !== "text" || (this.lastSelectedShape.textAlign = t);
    },
    undoLastShape() {
      this.lastSelectedShape = void 0, this.shapes = this.shapes.slice(0, -1);
    },
    write(t) {
      if (this.preventEdit)
        return;
      t.preventDefault();
      const s2 = t.keyCode;
      if (!this.isWriting)
        return;
      this.showCaret = true;
      let o;
      if (this.lastSelectedShape.type === "text" ? o = this.shapes.find((i) => i.id === this.lastSelectedShape.id) : o = this.shapes.at(-1), this.currentTarget = o, o.type !== "text")
        return;
      this.currentTarget.isBold = this.copy(this.isBold), this.currentTarget.isItalic = this.copy(this.isItalic), this.currentTarget.isUnderline = this.copy(this.isUnderline);
      const h = [
        16,
        17,
        18,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        45,
        91,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        221,
        255,
        "Unidentified"
      ];
      switch (true) {
        case s2 === 8:
          o.textContent = o.textContent.slice(0, -1);
          break;
        case s2 === 9:
          o.textContent += "&nbsp; &nbsp; &nbsp; &nbsp;";
          break;
        case s2 === 13:
          o.lines += 1, o.textContent += "‎";
          return;
        case h.includes(s2):
          return;
        default:
          o.textContent += t.key;
      }
    },
    groupShapes() {
      if (this.selectedGroup = [], this.activeShape !== "group") {
        this.isSelectMode = false, this.shapes = this.shapes.filter((s2) => s2.type !== "group");
        return;
      }
      const t = this.shapes.at(-1);
      if (this.shapes.forEach((s2) => {
        if (s2.type !== "group")
          switch (true) {
            case s2.type === "arrow":
              const o = s2.x <= s2.endX && s2.y <= s2.endY && t.x <= s2.x && t.y <= s2.y && t.x + t.rectWidth >= s2.endX && t.y + t.rectHeight >= s2.endY, h = s2.endY < s2.y && s2.x < s2.endX && t.x <= s2.x && t.y <= s2.y && t.x + t.rectWidth >= s2.endX && t.y + t.rectHeight >= s2.y, i = s2.x > s2.endX && s2.y < s2.endY && t.x <= s2.endX && t.y <= s2.endY && t.x + t.rectWidth >= s2.x && t.y + t.rectHeight >= s2.endY, e = s2.x > s2.endX && s2.y > s2.endY && t.x <= s2.endX && t.y <= s2.endY && t.x + t.rectWidth >= s2.x && t.y + t.rectHeight >= s2.y;
              (o || h || i || e) && this.selectedGroup.push(s2);
              break;
            case s2.type === "circle":
              t.x <= s2.x + s2.circleRadius && t.y <= s2.y + s2.circleRadius && s2.x + s2.circleRadius <= t.x + t.rectWidth && s2.y + s2.circleRadius <= t.y + t.rectHeight && this.selectedGroup.push(s2);
              break;
            case s2.type === "rect":
              t.x <= s2.x && t.y <= s2.y && s2.x <= t.x + t.rectWidth && s2.y <= t.y + t.rectHeight && s2.x + s2.rectWidth <= t.x + t.rectWidth && s2.y + s2.rectHeight <= t.y + t.rectHeight && s2.rectWidth <= t.rectWidth && s2.rectHeight <= t.rectHeight && this.selectedGroup.push(s2);
              break;
            case s2.type === "text":
              t.x <= s2.x && t.y <= s2.y && this.selectedGroup.push(s2);
              break;
          }
      }), this.selectedGroup = this.selectedGroup.map((s2) => ({
        ...s2,
        id: t.id,
        oldId: s2.id,
        diffX: s2.x - t.x,
        diffY: s2.y - t.y,
        diffEndX: s2.endX ? s2.endX - t.x : 0,
        diffEndY: s2.endY ? s2.endY - t.y : 0
      })), t.source = this.selectedGroup, this.selectedGroup.length > 1) {
        const s2 = this.copy(this.selectedGroup).map((o) => o.oldId);
        this.shapes = this.shapes.filter((o) => !s2.includes(o.id)), this.selectedGroup.forEach((o) => {
          switch (true) {
            case o.type === "circle":
              t.content += `
                <circle
                id="${o.id}"
                cx="${o.x}"
                cy="${o.y}"
                r="${o.circleRadius ? o.circleRadius : Number.MIN_VALUE}"
                fill="${o.isFilled ? o.color + o.alpha : "rgba(255,255,255,0.001)"}"
                stroke="${o.color + o.alpha}" 
                                stroke-width="${o.strokeWidth}"
                                style="${o.isDash ? `stroke-dasharray: ${o.strokeWidth * 3}` : ""}"
                                />
            `;
              break;
            case o.type === "rect":
              t.content += `
                <rect
                id="${this.isResizeMode ? "" : o.id}"
                x="${o.x}"
                y="${o.y}"
                fill="${o.isFilled ? o.color + o.alpha : "rgba(255,255,255,0.001)"}"
                height="${o.rectHeight}"
                width="${o.rectWidth}"
                stroke="${o.color + o.alpha}"
                stroke-width="${o.strokeWidth}"
                style="rx:1 !important; ry:1 !important; ${o.isDash ? `stroke-dasharray: ${o.strokeWidth * 3}` : ""}"
                            />
            `;
              break;
            case o.type === "arrow":
              const h = o.strokeWidth > 3 ? 5 : 10, i = o.strokeWidth > 3 ? 2.5 : 5, e = Date.now();
              t.content += `
                <g id="${o.id}">
                <defs>
                    <marker 
                    id="${e}" 
                    markerWidth="${h}" 
                    markerHeight="${h}" 
                    refX="0" 
                    refY="${i}" 
                    orient="auto"
                    >
                    <polygon 
                    points="0 0,${h} ${i}, 0 ${h}" 
                    fill="${o.color}"
                    />
                    </marker>
                </defs>

                <path 
                    style="stroke-linecap: round !important; ${o.isDash ? `stroke-dasharray: ${o.strokeWidth * 3}` : ""}" 
                    stroke="${o.color}" 
                    id="${o.id}" 
                    d="M${o.x},${o.y} ${o.endX},${o.endY}" 
                    stroke-width="${o.strokeWidth}" 
                    marker-end="url(#${e})"
                />
                </g>
            `;
              break;
            case o.type === "text":
              const l = o.textContent.split("‎"), b = [];
              for (let I = 0; I < l.length; I += 1)
                b.push(`
                ${o.isBulletTextMode ? `<tspan x="${o.x - o.fontSize}" y="${o.y + o.fontSize * I}" id="${o.id}" font-size="${o.fontSize / 2}">⬤</tspan>` : ""}
                <tspan id="${o.id}" x="${o.x}" y="${o.y + o.fontSize * I}">
                    ${l[I]}
                </tspan>`);
              t.content += `
                ${this.computeTextElement(o, b, o.isBulletTextMode)}
                `;
              break;
          }
        });
      } else
        this.shapes = this.shapes.filter((s2) => s2.id !== t.id);
    },
    moveGroup(t) {
      t.content = "", t.x = this.copy(this.pointerPosition.x) - t.rectWidth / 2, t.y = this.copy(this.pointerPosition.y) - t.rectHeight / 2, t.source.forEach((s2) => {
        switch (true) {
          case s2.type === "circle":
            t.content += `
                <circle
                id="${s2.id}"
                cx="${this.copy(this.pointerPosition.x) + s2.diffX - t.rectWidth / 2}"
                cy="${this.copy(this.pointerPosition.y) + s2.diffY - t.rectHeight / 2}"
                r="${s2.circleRadius ? s2.circleRadius : Number.MIN_VALUE}"
                fill="${s2.isFilled ? s2.color + s2.alpha : "rgba(255,255,255,0.001)"}"
                stroke="${s2.color + s2.alpha}" 
                                stroke-width="${s2.strokeWidth}"
                                style="${s2.isDash ? `stroke-dasharray: ${s2.strokeWidth * 3}` : ""}"
                                />
            `;
            break;
          case s2.type === "rect":
            t.content += `
                <rect
                id="${this.isResizeMode ? "" : s2.id}"
                x="${this.copy(this.pointerPosition.x) + s2.diffX - t.rectWidth / 2}"
                y="${this.copy(this.pointerPosition.y) + s2.diffY - t.rectHeight / 2}"
                fill="${s2.isFilled ? s2.color + s2.alpha : "rgba(255,255,255,0.001)"}"
                height="${s2.rectHeight}"
                width="${s2.rectWidth}"
                stroke="${s2.color + s2.alpha}"
                stroke-width="${s2.strokeWidth}"
                style="rx:1 !important; ry:1 !important; ${s2.isDash ? `stroke-dasharray: ${s2.strokeWidth * 3}` : ""}"
                            />
            `;
            break;
          case s2.type === "arrow":
            const o = s2.strokeWidth > 3 ? 5 : 10, h = s2.strokeWidth > 3 ? 2.5 : 5, i = Date.now();
            t.content += `
                <g id="${s2.id}">
                <defs>
                    <marker 
                    id="${i}" 
                    markerWidth="${o}" 
                    markerHeight="${o}" 
                    refX="0" 
                    refY="${h}" 
                    orient="auto"
                    >
                    <polygon 
                    points="0 0,${o} ${h}, 0 ${o}" 
                    fill="${s2.color}"
                    />
                    </marker>
                </defs>

                <path 
                    style="stroke-linecap: round !important; ${s2.isDash ? `stroke-dasharray: ${s2.strokeWidth * 3}` : ""}" 
                    stroke="${s2.color}" 
                    id="${s2.id}" 
                    d="M${this.copy(this.pointerPosition.x) + s2.diffX - t.rectWidth / 2},${this.copy(this.pointerPosition.y) + s2.diffY - t.rectHeight / 2} ${this.copy(this.pointerPosition.x) + s2.diffEndX - t.rectWidth / 2},${this.copy(this.pointerPosition.y) + s2.diffEndY - t.rectHeight / 2}" 
                    stroke-width="${s2.strokeWidth}" 
                    marker-end="url(#${i})"
                />
                </g>
            `;
            break;
          case s2.type === "text":
            const e = s2.textContent.split("‎"), l = [];
            for (let b = 0; b < e.length; b += 1)
              l.push(`
                ${s2.isBulletTextMode ? `<tspan x="${this.copy(this.pointerPosition.x) + s2.diffX - s2.fontSize - t.rectWidth / 2}" y="${this.copy(this.pointerPosition.y) + s2.diffY + s2.fontSize * b - t.rectHeight / 2}" id="${s2.id}" font-size="${s2.fontSize / 2}">⬤</tspan>` : ""}
                <tspan id="${s2.id}" x="${this.copy(this.pointerPosition.x) + s2.diffX - t.rectWidth / 2}" y="${this.copy(this.pointerPosition.y) + s2.diffY + s2.fontSize * b - t.rectHeight / 2}">
                    ${e[b]}
                </tspan>`);
            t.content += `
                ${this.computeTextElement(s2, l, s2.isBulletTextMode)}
                `;
            break;
        }
      });
    },
    chooseAction(t) {
      switch (t.preventDefault(), this.isMouseDown = true, true) {
        case this.isDrawMode:
          this.drawDown();
          break;
      }
    },
    chooseMove(t) {
      switch (t.preventDefault(), t.target.localName !== "svg" && (this.currentTarget = t.target), true) {
        case (this.isMoveMode && this.isMouseDown):
          this.moveDown();
          break;
        case (this.isResizeMode && this.isMouseDown):
          this.resize();
          break;
      }
    },
    computeCaretPosition(t) {
      switch (true) {
        case t.textAlign === "middle":
          return `<path stroke="black" stroke-width="2" d="M${t.x},${t.y - t.fontSize} ${t.x},${t.y - t.fontSize - 15}" /> <path stroke="black" stroke-width="2" d="M${t.x - 3},${t.y - t.fontSize - 5} ${t.x},${t.y - t.fontSize} ${t.x + 3},${t.y - t.fontSize - 5}"/>`;
        case t.textAlign === "start":
          const s2 = t.isBulletTextMode ? t.fontSize : 0;
          return `<path d="M${t.x - 20 - s2},${t.y - t.fontSize / 6} ${t.x - 5 - s2},${t.y - t.fontSize / 6}" stroke="black" stroke-width="2" />
                        <path  d="M${t.x - 10 - s2},${t.y - t.fontSize / 3} ${t.x - 5 - s2},${t.y - t.fontSize / 6} ${t.x - 10 - s2},${t.y}" stroke="black" stroke-width="2">`;
        case t.textAlign === "end":
          return `<path d="M${t.x + 20},${t.y - t.fontSize / 6} ${t.x + 5},${t.y - t.fontSize / 6}" stroke="black" stroke-width="2" />
                        <path d="M${t.x + 10},${t.y - t.fontSize / 3} ${t.x + 5},${t.y - t.fontSize / 6} ${t.x + 10},${t.y}" stroke="black" stroke-width="2">`;
        default:
          return "";
      }
    },
    computeTextElement(t, s2, o = false) {
      switch (true) {
        case t.textAlign === "start":
          return `
                <g id="${t.id}">
                    <rect 
                        id="${t.id}" 
                        style="display:${this.lastSelectedShape && this.lastSelectedShape.id === t.id ? "initial" : "none"};" 
                        x="${t.x}" 
                        y="${t.y - 50}" 
                        height="${t.lines === 0 || t.lines === 1 ? t.fontSize * 4 : t.fontSize * 2 * t.lines}"
                        width="100" 
                        fill="rgba(0,0,0,0)"
                    />
                    <text
                    style="user-select:none; height:100px;"
                    id="${t.id}"
                    x="${t.x}"
                    y="${t.y}"
                    text-anchor="${t.textAlign}"
                    font-size="${t.fontSize}"
                    fill="${t.color}"
                    font-weight="${t.isBold ? "bold" : "normal"}"
                    font-style="${t.isItalic ? "italic" : "normal"}"
                    text-decoration="${t.isUnderline ? "underline" : "none"}"
                    >
                        ${s2.join("")}
                    </text>
                    ${this.showCaret && this.lastSelectedShape && this.lastSelectedShape.id === t.id ? this.computeCaretPosition(t) : ""}
                    ${this.includeDeleteButton(t, o)}
                </g> 
                `;
        case t.textAlign === "middle":
          return `
                    <g id="${t.id}">
                    <rect 
                        id="${t.id}" 
                        style="display:${this.lastSelectedShape && this.lastSelectedShape.id === t.id ? "initial" : "none"};" 
                        x="${t.x - 50}" 
                        y="${t.y - 50}" 
                        height="${t.lines === 0 || t.lines === 1 ? t.fontSize * 4 : t.fontSize * 2 * t.lines}"
                        width="100" 
                        fill="rgba(0,0,0,0)"
                    />
                    <text
                    style="user-select:none; height:100px;"
                    id="${t.id}"
                    x="${t.x}"
                    y="${t.y}"
                    text-anchor="${t.textAlign}"
                    font-size="${t.fontSize}"
                    fill="${t.color}"
                    font-weight="${t.isBold ? "bold" : "normal"}"
                    font-style="${t.isItalic ? "italic" : "normal"}"
                    text-decoration="${t.isUnderline ? "underline" : "none"}"
                    >
                        ${s2.join("")}
                    </text>
                    ${this.showCaret && this.lastSelectedShape && this.lastSelectedShape.id === t.id ? this.computeCaretPosition(t) : ""}
                    ${this.includeDeleteButton(t)}
                    </g>
                `;
        case t.textAlign === "end":
          return `
                <g id="${t.id}">
                    <rect 
                        id="${t.id}" 
                        style="display:${this.lastSelectedShape && this.lastSelectedShape.id === t.id ? "initial" : "none"};" 
                        x="${t.x - 100}" 
                        y="${t.y - 50}" 
                        height="${t.lines === 0 || t.lines === 1 ? t.fontSize * 4 : t.fontSize * 2 * t.lines}"
                        width="100" 
                        fill="rgba(0,0,0,0)"
                    />
                    <text
                    style="user-select:none; height:100px;"
                    id="${t.id}"
                    x="${t.x}"
                    y="${t.y}"
                    text-anchor="${t.textAlign}"
                    font-size="${t.fontSize}"
                    fill="${t.color}"
                    font-weight="${t.isBold ? "bold" : "normal"}"
                    font-style="${t.isItalic ? "italic" : "normal"}"
                    text-decoration="${t.isUnderline ? "underline" : "none"}"
                    >
                        ${s2.join("")}
                    </text>
                    ${this.showCaret && this.lastSelectedShape && this.lastSelectedShape.id === t.id ? this.computeCaretPosition(t) : ""}
                    ${this.includeDeleteButton(t)}
                </g> 
                `;
        default:
          return "";
      }
    },
    copy(t) {
      return JSON.parse(JSON.stringify(t));
    },
    clickShape(t) {
      const s2 = t.target.id;
      switch (true) {
        case this.isDeleteMode:
          this.shapes = [...this.shapes].filter((o) => o.id !== s2), this.lastSelectedShape = void 0;
          break;
        default:
          this.lastSelectedShape = this.shapes.find((o) => o.id === s2);
          break;
      }
    },
    deleteEmptyTextElement() {
      !this.lastSelectedShape || !this.lastSelectedShape.id.includes("text") || this.lastSelectedShape.textContent === "" && (this.shapes = this.shapes.filter(
        (t) => t.id !== this.lastSelectedShape.id
      ), this.lastSelectedShape = this.shapes.at(-1));
    },
    drawUp(t = false) {
      if (!this.activeShape || !this.isDrawing)
        return;
      this.currentPointer.end = {
        x: this.pointerPosition.x,
        y: this.pointerPosition.y
      };
      let s2;
      this.shapes.length > 0 && this.currentTarget && (s2 = [...this.shapes].find(
        (b) => b.id === this.currentTarget.id
      ));
      let o, h, i;
      s2 && (o = s2.x - this.currentPointer.end.x, h = s2.y - this.currentPointer.end.y, i = Math.sqrt(o * o + h * h));
      let e, l;
      t ? (e = Math.max(this.currentPointer.end.x, s2.x), l = Math.min(this.currentPointer.end.x, s2.x), Math.max(this.currentPointer.end.y, s2.y), Math.min(this.currentPointer.end.y, s2.y)) : (e = Math.max(this.currentPointer.end.x, this.currentPointer.start.x), l = Math.min(this.currentPointer.end.x, this.currentPointer.start.x), Math.max(this.currentPointer.end.y, this.currentPointer.start.y), Math.min(this.currentPointer.end.y, this.currentPointer.start.y)), this.$nextTick(() => {
        switch (true) {
          case this.activeShape === "arrow":
            this.shapes.at(-1).endX = this.currentPointer.end.x, this.shapes.at(-1).endY = this.currentPointer.end.y;
            break;
          case this.activeShape === "circle":
            const b = 20;
            this.shapes.at(-1).circleRadius = this.isDrawingNewShape ? this.copy(e - l) + b : i + b;
            break;
          case this.activeShape === "line":
            this.shapes.at(
              -1
            ).path += ` ${this.pointerPosition.x} ${this.pointerPosition.y} `;
            break;
          case ["rect", "group"].includes(this.activeShape):
            const I = 20;
            this.shapes.at(-1).rectWidth = this.copy(this.currentPointer.end.x - this.shapes.at(-1).x) > 0 ? this.copy(this.currentPointer.end.x - this.shapes.at(-1).x) : I, this.shapes.at(-1).rectHeight = this.copy(this.currentPointer.end.y - this.shapes.at(-1).y) > 0 ? this.copy(this.currentPointer.end.y - this.shapes.at(-1).y) : I;
        }
      });
    },
    drawDown() {
      if (this.isDrawing = true, !this.activeShape && !this.isSelectMode || !this.isDrawing)
        return;
      this.isDrawingNewShape = true, this.currentPointer.start = {
        x: this.pointerPosition.x,
        y: this.pointerPosition.y
      };
      let t = `${this.isSelectMode ? "group" : this.activeShape}_${Math.random() * 1e4}_${Date.now()}`;
      switch (true) {
        case this.activeShape === "arrow":
          this.shapes.push({
            id: t,
            x: this.pointerPosition.x,
            y: this.pointerPosition.y,
            endX: this.pointerPosition.x,
            endY: this.pointerPosition.y,
            type: this.activeShape,
            color: this.copy(this.selectedColor),
            strokeWidth: this.copy(Math.abs(this.strokeSize)),
            isDash: this.copy(this.isDash)
          }), this.lastSelectedShape = this.shapes.at(-1);
          break;
        case this.activeShape === "circle":
          this.shapes.push({
            alpha: this.options.circle.filled ? this.colorTransparency : "",
            id: t,
            color: this.copy(this.selectedColor),
            isFilled: this.copy(this.options.circle.filled),
            circleRadius: this.copy(this.options.circle.radius),
            circleStrokeWidth: this.copy(this.options.circle.strokeWidth),
            type: this.activeShape,
            x: this.pointerPosition.x,
            y: this.pointerPosition.y,
            strokeWidth: this.copy(Math.abs(this.strokeSize)),
            isDash: this.copy(this.isDash)
          }), this.lastSelectedShape = this.shapes.at(-1);
          break;
        case this.activeShape === "line":
          this.shapes.push({
            alpha: this.copy(this.colorTransparency),
            id: t,
            x: this.pointerPosition.x,
            y: this.pointerPosition.y,
            type: this.activeShape,
            color: this.copy(this.selectedColor),
            strokeWidth: this.copy(Math.abs(this.strokeSize)),
            isDash: this.copy(this.isDash),
            path: `${this.pointerPosition.x} ${this.pointerPosition.y}`
          }), this.lastSelectedShape = this.shapes.at(-1);
          break;
        case this.activeShape === "rect":
          this.shapes.push({
            alpha: this.options.rect.filled ? this.colorTransparency : "",
            id: t,
            color: this.copy(this.selectedColor),
            isFilled: this.copy(this.options.rect.filled),
            rectStrokeWidth: this.copy(this.options.rect.strokeWidth),
            rectHeight: this.copy(this.options.rect.height),
            rectWidth: this.copy(this.options.rect.width),
            type: this.activeShape,
            x: this.pointerPosition.x,
            y: this.pointerPosition.y,
            strokeWidth: this.copy(Math.abs(this.strokeSize)),
            isDash: this.copy(this.isDash)
          }), this.lastSelectedShape = this.shapes.at(-1);
          break;
        case this.activeShape === "group":
          this.shapes.push({
            alpha: 1,
            id: `group_${Math.random() * 1e4}_${Date.now()}`,
            x: this.pointerPosition.x,
            y: this.pointerPosition.y,
            isFilled: false,
            rectHeight: this.copy(this.options.rect.height),
            rectWidth: this.copy(this.options.rect.width),
            rectStrokeWidth: 1,
            type: "group",
            color: "grey",
            strokeWidth: 1,
            isDash: true,
            content: ""
          });
          break;
      }
      if ((this.pointerDownId !== -1 || !this.isDrawing) && (clearInterval(this.pointerDownId), this.pointerDownId = -1), this.pointerDownId === -1 && this.isDrawing) {
        this.pointerDownId = setInterval(this.drawUp, 1);
        return;
      }
    },
    move(t) {
      if (!(!t || !t.id || t.type === "line"))
        switch (this.lastSelectedShape = t, true) {
          case t.type === "arrow":
            t.x = this.copy(this.pointerPosition.x), t.y = this.copy(this.pointerPosition.y);
            break;
          case t.type === "circle":
            t.x = this.copy(this.pointerPosition.x), t.y = this.copy(this.pointerPosition.y);
            break;
          case t.type === "group":
            this.moveGroup(t);
            break;
          case t.type === "rect":
            t.x = this.copy(this.pointerPosition.x - t.rectWidth / 2), t.y = this.copy(this.pointerPosition.y - t.rectHeight / 2);
            break;
          case t.type === "text":
            const s2 = Array.from(document.getElementsByTagName("text")).find(
              (l) => l.id === t.id
            );
            if (!s2)
              return;
            const { x: o, y: h, width: i, height: e } = s2.getBBox();
            t.textAlign === "start" && (t.x = this.copy(this.pointerPosition.x - i / 2)), t.textAlign === "middle" && (t.x = this.copy(this.pointerPosition.x)), t.textAlign === "end" && (t.x = this.copy(this.pointerPosition.x + i / 2)), t.lines > 1 ? t.y = this.copy(this.pointerPosition.y - e / 3) : t.y = this.copy(this.pointerPosition.y + t.fontSize / 2);
            break;
        }
    },
    moveDown() {
      if (!this.currentTarget || !this.currentTarget.id)
        return;
      const t = this.currentTarget.id, s2 = this.shapes.find((o) => o.id === t);
      this.shapes = this.shapes.filter((o) => o.id !== t), this.shapes.push(s2), this.pointerDownId === -1 && t && this.move(s2);
    },
    print() {
      this.isPrinting = true, this.isDeleteMode = false, this.isMoveMode = false, this.isResizeMode = false, this.isTextMode = false, this.isWriting = false, this.isSelectMode = false, this.activeShape = void 0, this.showCaret = false, this.$nextTick(() => {
        const t = this.$refs.drawSvgContainer, s2 = {
          height: 851.89,
          width: 595.28
        };
        this.walkTheDOM(t, (o) => {
          o && o.nodeType === 1 && (o.setAttribute("font-family", "Helvetica"), o.style.fontFamily = "Helvetica", o.replaceWith(o));
        }), xQ(t).then((o) => {
          const h = o.width, i = o.height, e = h / s2.width * s2.height;
          let l = i, b = 0;
          const I = s2.width, S = 582.28 / h * i, k = o.toDataURL("image/png", 1), x = new Ht("", "pt", "a4");
          if (l < e)
            x.addImage(k, "PNG", 0, 0, I, S, "", "FAST");
          else
            for (; l > 0; )
              x.addImage(
                k,
                "PNG",
                0,
                b,
                I,
                S,
                "",
                "FAST"
              ), l -= e, b -= s2.height - 24, l > 0 && x.addPage();
          x.save(`${(/* @__PURE__ */ new Date()).toLocaleDateString()}_annotations.pdf`);
        }).finally(() => {
          this.isPrinting = false, this.walkTheDOM(t, (o) => {
            o && o.nodeType === 1 && (o.setAttribute("font-family", this.FINAL_CONFIG.style.fontFamily), o.style.fontFamily = this.FINAL_CONFIG.style.fontFamily, o.replaceWith(o));
          });
        });
      });
    },
    resetDraw() {
      this.isDrawing = false, this.isMouseDown = false, this.pointerDownId = -1, this.isSelectMode && this.groupShapes(), clearInterval(this.pointerDownId);
    },
    resize() {
      this.isDrawingNewShape = false;
      const t = this.currentTarget.id;
      if (!t)
        return;
      this.isDrawing = true;
      const s2 = this.shapes.find((o) => o.id === t);
      this.activeShape = s2.type, this.shapes = this.shapes.filter((o) => o.id !== t), this.shapes.push(s2), this.drawUp(true);
    },
    setFillOfSelectedRect() {
      !this.lastSelectedShape || !this.lastSelectedShape.id.includes("rect") || (this.lastSelectedShape.isFilled = !this.lastSelectedShape.isFilled);
    },
    setFillOfSelectedCircle() {
      !this.lastSelectedShape || !this.lastSelectedShape.id.includes("circle") || (this.lastSelectedShape.isFilled = !this.lastSelectedShape.isFilled);
    },
    setColorOfSelectedShape() {
      this.lastSelectedShape && (this.lastSelectedShape.color = this.copy(this.selectedColor), !["arrow", "text"].includes(this.lastSelectedShape.id) && (this.lastSelectedShape.alpha = this.copy(this.colorTransparency)));
    },
    setSelectedShapeToDash() {
      !this.lastSelectedShape || this.lastSelectedShape.type === "text" || (this.lastSelectedShape.isDash = this.copy(this.isDash));
    },
    setTransparencyOfSelectedShape() {
      !this.lastSelectedShape || ["arrow", "text"].includes(this.lastSelectedShape.id) || (this.lastSelectedShape.alpha = this.copy(this.colorTransparency));
    },
    setStrokeWidthOfSelectedShape() {
      !this.lastSelectedShape || !["arrow", "circle", "rect", "line"].includes(this.lastSelectedShape.type) || (this.lastSelectedShape.strokeWidth = this.copy(Math.abs(this.strokeSize)));
    },
    setCurrentStyleOfSelectedText() {
      !this.lastSelectedShape || this.lastSelectedShape.type !== "text" || (this.lastSelectedShape.isBold = this.copy(this.isBold), this.lastSelectedShape.isItalic = this.copy(this.isItalic), this.lastSelectedShape.isUnderline = this.copy(this.isUnderline), this.lastSelectedShape.fontSize = this.copy(this.textFont), this.lastSelectedShape.isBulletTextMode = this.copy(this.isBulletTextMode));
    },
    setPointer(t) {
      t.preventDefault();
      const o = this.$refs.mainSvg.getBoundingClientRect();
      let h, i;
      t.touches && t.touches.length > 0 ? (h = t.touches[0].clientX, i = t.touches[0].clientY) : (h = t.clientX, i = t.clientY), this.pointerPosition.x = (h - o.left) / o.width * this.svgWidth, this.pointerPosition.y = (i - o.top) / o.height * this.svgHeight;
    },
    setShapeTo(t) {
      if (this.showCaret = false, this.deleteEmptyTextElement(), t === this.activeShape) {
        this.activeShape = void 0, this.isDrawMode = false;
        return;
      }
      this.isDrawMode = true, this.isDeleteMode = false, this.isMoveMode = false, this.isResizeMode = false, this.isTextMode = false, this.activeShape = t;
    },
    toggleSummary() {
      this.isSummaryOpen = !this.isSummaryOpen, this.isSummaryOpen || (this.isMoveMode = false, this.isResizeMode = false, this.isTextMode = false, this.isWriting = false, this.activeShape = void 0, this.showCaret = false, this.isDeleteMode = false, this.isWriting = false), this.$emit("toggleOpenState", { isOpen: this.isSummaryOpen });
    },
    walkTheDOM(t, s2) {
      for (s2(t), t = t.firstChild; t; )
        this.walkTheDOM(t, s2), t = t.nextSibling;
    },
    save() {
      this.$emit("saveAnnotations", {
        shapes: this.shapes,
        lastSelectedShape: this.lastSelectedShape
      });
    }
  }
};
var F = (t) => (pushScopeId("data-v-14ebd65f"), t = t(), popScopeId(), t);
var z = { class: "vue-ui-annotator" };
var H = { "data-html2canvas-ignore": "" };
var W = {
  class: "tool-selection",
  style: { "margin-top": "24px" }
};
var P = ["disabled"];
var B = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M18 9l3 3l-3 3" data-v-14ebd65f></path><path d="M15 12h6" data-v-14ebd65f></path><path d="M6 9l-3 3l3 3" data-v-14ebd65f></path><path d="M3 12h6" data-v-14ebd65f></path><path d="M9 18l3 3l3 -3" data-v-14ebd65f></path><path d="M12 15v6" data-v-14ebd65f></path><path d="M15 6l-3 -3l-3 3" data-v-14ebd65f></path><path d="M12 3v6" data-v-14ebd65f></path></svg>', 1);
var V = ["disabled"];
var E = F(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "80%",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" }),
  createBaseVNode("path", { d: "M4 12h7a1 1 0 0 1 1 1v7" })
], -1));
var X = ["disabled"];
var U = createStaticVNode('<svg width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M4 7l16 0" data-v-14ebd65f></path><path d="M10 11l0 6" data-v-14ebd65f></path><path d="M14 11l0 6" data-v-14ebd65f></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" data-v-14ebd65f></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" data-v-14ebd65f></path></svg>', 1);
var Y = ["disabled"];
var j = {
  style: { width: "80%" },
  viewBox: "0 0 24 24"
};
var Z = F(() => createBaseVNode("path", {
  fill: "currentColor",
  d: "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14"
}, null, -1));
var J = [
  Z
];
var q = ["disabled"];
var K2 = {
  style: { width: "80%" },
  viewBox: "0 0 24 24"
};
var Q = F(() => createBaseVNode("path", {
  fill: "currentColor",
  d: "M2,2H11V6H9V4H4V9H6V11H2V2M22,13V22H13V18H15V20H20V15H18V13H22M8,8H16V16H8V8Z"
}, null, -1));
var $ = [
  Q
];
var tt = ["disabled"];
var et = {
  style: { width: "80%" },
  viewBox: "0 0 24 24"
};
var it = F(() => createBaseVNode("path", {
  fill: "currentColor",
  d: "M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z"
}, null, -1));
var st = [
  it
];
var ot = ["disabled"];
var lt = F(() => createBaseVNode("svg", {
  width: "80%",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" }),
  createBaseVNode("path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" })
], -1));
var rt = ["disabled"];
var dt = F(() => createBaseVNode("svg", {
  width: "80%",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M9 14l-4 -4l4 -4" }),
  createBaseVNode("path", { d: "M5 10h11a4 4 0 1 1 0 8h-1" })
], -1));
var nt = createStaticVNode('<svg width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" data-v-14ebd65f></path><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" data-v-14ebd65f></path><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" data-v-14ebd65f></path></svg>', 1);
var ct = createStaticVNode('<svg width="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" data-v-14ebd65f></path><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-v-14ebd65f></path><path d="M14 4l0 4l-6 0l0 -4" data-v-14ebd65f></path></svg>', 1);
var ht = {
  class: "tool-selection",
  style: { "margin-top": "6px" }
};
var at2 = {
  viewBox: "0 0 12 12",
  style: { width: "100%" }
};
var ut = ["fill"];
var yt = {
  key: 0,
  class: "tool-input"
};
var bt = { for: "circleFill" };
var It = ["checked"];
var Ft = {
  viewBox: "0 0 12 12",
  style: { width: "100%" }
};
var Nt = ["fill"];
var ft = {
  key: 1,
  class: "tool-input"
};
var xt = { for: "rectFill" };
var Ct = ["checked"];
var gt = {
  viewBox: "0 0 24 24",
  style: { width: "100%" }
};
var St = ["stroke"];
var kt = F(() => createBaseVNode("svg", {
  width: "80%",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5" })
], -1));
var pt = { key: 2 };
var _t = { style: { display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" } };
var vt = {
  for: "textFont",
  style: { "font-size": "0.7em" }
};
var wt = { key: 3 };
var At = { style: { display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" } };
var Mt = {
  for: "dashStyle",
  style: { "font-size": "0.7em" }
};
var Ot = {
  viewBox: "0 0 24 24",
  height: "24",
  width: "24",
  style: { "margin-bottom": "-5px", "margin-top": "-10px" }
};
var Lt = F(() => createBaseVNode("line", {
  x1: "0",
  x2: "24",
  y1: "12",
  y2: "12",
  "stroke-width": "2",
  stroke: "black",
  "stroke-dasharray": "3"
}, null, -1));
var Gt = [
  Lt
];
var mt = ["checked"];
var Tt = {
  style: { width: "80%" },
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
var Rt = F(() => createBaseVNode("path", { d: "M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" }, null, -1));
var Dt = [
  Rt
];
var zt = { key: 4 };
var Ht2 = { style: { display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" } };
var Wt = {
  for: "textFont",
  style: { "font-size": "0.7em" }
};
var Pt = { key: 5 };
var Bt = createStaticVNode('<svg width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M4 6l16 0" data-v-14ebd65f></path><path d="M4 12l10 0" data-v-14ebd65f></path><path d="M4 18l14 0" data-v-14ebd65f></path></svg>', 1);
var Vt = { key: 6 };
var Et = ["disabled"];
var Xt = createStaticVNode('<svg width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M4 6l16 0" data-v-14ebd65f></path><path d="M8 12l8 0" data-v-14ebd65f></path><path d="M6 18l12 0" data-v-14ebd65f></path></svg>', 1);
var Ut = { key: 7 };
var Yt = ["disabled"];
var jt = createStaticVNode('<svg width="80%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M4 6l16 0" data-v-14ebd65f></path><path d="M10 12l10 0" data-v-14ebd65f></path><path d="M6 18l14 0" data-v-14ebd65f></path></svg>', 1);
var Zt = { key: 8 };
var Jt = createStaticVNode('<svg width="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M9 6l11 0" data-v-14ebd65f></path><path d="M9 12l11 0" data-v-14ebd65f></path><path d="M9 18l11 0" data-v-14ebd65f></path><path d="M5 6l0 .01" data-v-14ebd65f></path><path d="M5 12l0 .01" data-v-14ebd65f></path><path d="M5 18l0 .01" data-v-14ebd65f></path></svg>', 1);
var qt = { key: 9 };
var Kt = F(() => createBaseVNode("svg", {
  width: "100%",
  viewBox: "0 0 24 24",
  "stroke-width": "3",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M7 5h6a3.5 3.5 0 0 1 0 7h-6z" }),
  createBaseVNode("path", { d: "M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" })
], -1));
var Qt = { key: 10 };
var $t = createStaticVNode('<svg width="100%" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-14ebd65f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-14ebd65f></path><path d="M11 5l6 0" data-v-14ebd65f></path><path d="M7 19l6 0" data-v-14ebd65f></path><path d="M14 5l-4 14" data-v-14ebd65f></path></svg>', 1);
var te = { key: 11 };
var ee = F(() => createBaseVNode("svg", {
  width: "100%",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  createBaseVNode("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  createBaseVNode("path", { d: "M7 5v5a5 5 0 0 0 10 0v-5" }),
  createBaseVNode("path", { d: "M5 19h14" })
], -1));
var ie = {
  style: { display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" },
  class: "tooltip"
};
var se = { style: { display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "center" } };
var oe2 = {
  for: "colorTransparency",
  style: { "font-size": "0.7em" }
};
var le = {
  class: "annotator annotator__wrapper",
  ref: "drawSvgContainer",
  style: { position: "relative" }
};
var re = ["viewBox", "width", "height"];
var de = ["id", "innerHTML"];
var ne = ["height", "viewBox", "width"];
var ce = ["cx", "cy"];
function he(t, s2, o, h, i, e) {
  return openBlock(), createElementBlock("div", z, [
    createBaseVNode("div", H, [
      createBaseVNode("details", {
        class: "vue-ui-annotator-summary",
        onToggle: s2[36] || (s2[36] = (...l) => e.toggleSummary && e.toggleSummary(...l)),
        style: normalizeStyle(`${i.isSummaryOpen ? "padding-bottom: 12px" : ""}; background: ${e.FINAL_CONFIG.style.backgroundColor}; color:${e.FINAL_CONFIG.style.color}; ${e.FINAL_CONFIG.style.fixedTools && i.isSummaryOpen ? "position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 1;" : ""}`)
      }, [
        createBaseVNode("summary", null, toDisplayString(e.FINAL_CONFIG.translations.title), 1),
        createBaseVNode("div", W, [
          createBaseVNode("button", {
            disabled: i.shapes.length === 0,
            style: normalizeStyle({
              background: i.isMoveMode ? e.FINAL_CONFIG.style.buttons.controls.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: i.isMoveMode ? e.FINAL_CONFIG.style.buttons.controls.selected.border : e.FINAL_CONFIG.style.buttons.controls.border,
              color: i.isMoveMode ? e.FINAL_CONFIG.style.buttons.controls.selected.color : e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.isMoveMode,
              tooltip: true
            }),
            onClick: s2[0] || (s2[0] = (l) => {
              e.deleteEmptyTextElement(), i.isMoveMode = !i.isMoveMode, i.activeShape = void 0, i.isDeleteMode = false, i.isDrawMode = false, i.isResizeMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.showCaret = false;
            })
          }, [
            B,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipMove), 5)) : createCommentVNode("", true)
          ], 14, P),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0 || i.activeShape === "line",
            style: normalizeStyle({
              background: i.isResizeMode ? e.FINAL_CONFIG.style.buttons.controls.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: i.isResizeMode ? e.FINAL_CONFIG.style.buttons.controls.selected.border : e.FINAL_CONFIG.style.buttons.controls.border,
              color: i.isResizeMode ? e.FINAL_CONFIG.style.buttons.controls.selected.color : e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.isResizeMode,
              tooltip: true
            }),
            onClick: s2[1] || (s2[1] = (l) => {
              e.deleteEmptyTextElement(), i.isResizeMode = !i.isResizeMode, i.isMoveMode = false, i.isDeleteMode = false, i.isDrawMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.activeShape = void 0, i.showCaret = false;
            })
          }, [
            E,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipResize), 5)) : createCommentVNode("", true)
          ], 14, V),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0,
            style: normalizeStyle({
              background: i.isDeleteMode ? e.FINAL_CONFIG.style.buttons.controls.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: i.isDeleteMode ? e.FINAL_CONFIG.style.buttons.controls.selected.border : e.FINAL_CONFIG.style.buttons.controls.border,
              color: i.isDeleteMode ? e.FINAL_CONFIG.style.buttons.controls.selected.color : e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.isDeleteMode,
              tooltip: true
            }),
            onClick: s2[2] || (s2[2] = (l) => {
              e.deleteEmptyTextElement(), i.isDeleteMode = !i.isDeleteMode, i.isMoveMode = false, i.isResizeMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.activeShape = void 0, i.showCaret = false;
            })
          }, [
            U,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipDelete), 5)) : createCommentVNode("", true)
          ], 14, X),
          createBaseVNode("button", {
            disabled: !e.canSelect,
            style: normalizeStyle({
              background: i.isSelectMode ? e.FINAL_CONFIG.style.buttons.controls.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: i.isSelectMode ? e.FINAL_CONFIG.style.buttons.controls.selected.border : e.FINAL_CONFIG.style.buttons.controls.border,
              color: i.isSelectMode ? e.FINAL_CONFIG.style.buttons.controls.selected.color : e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.isSelectMode,
              tooltip: true
            }),
            onClick: s2[3] || (s2[3] = (l) => {
              e.deleteEmptyTextElement(), e.setShapeTo("group"), i.isSelectMode = !i.isSelectMode, i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isTextMode = false, i.isWriting = false, i.activeShape = "group", i.showCaret = false;
            })
          }, [
            (openBlock(), createElementBlock("svg", j, J)),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipGroup), 5)) : createCommentVNode("", true)
          ], 14, Y),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0,
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, tooltip: true }),
            onClick: s2[4] || (s2[4] = (l) => {
              i.isResizeMode = false, i.isMoveMode = true, i.isDeleteMode = false, i.isDrawMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.showCaret = false, e.bringShapeTo("front");
            })
          }, [
            (openBlock(), createElementBlock("svg", K2, $)),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipBringToFront), 5)) : createCommentVNode("", true)
          ], 12, q),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0,
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, tooltip: true }),
            onClick: s2[5] || (s2[5] = (l) => {
              i.isResizeMode = false, i.isMoveMode = true, i.isDeleteMode = false, i.isDrawMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.showCaret = false, e.bringShapeTo("back");
            })
          }, [
            (openBlock(), createElementBlock("svg", et, st)),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipBringToBack), 5)) : createCommentVNode("", true)
          ], 12, tt),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0 || i.activeShape === "line",
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, tooltip: true }),
            onClick: s2[6] || (s2[6] = (l) => {
              e.deleteEmptyTextElement(), i.isResizeMode = false, i.isMoveMode = true, i.isDeleteMode = false, i.isDrawMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.showCaret = false, e.copyPaste();
            })
          }, [
            lt,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipDuplicate), 5)) : createCommentVNode("", true)
          ], 12, ot),
          createBaseVNode("button", {
            disabled: i.shapes.length === 0,
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, "button-tool--one-shot": true, tooltip: true }),
            onClick: s2[7] || (s2[7] = (l) => {
              i.isResizeMode = false, i.isMoveMode = false, i.isDeleteMode = false, i.isDrawMode = false, i.isSelectMode = false, i.isTextMode = false, i.isWriting = false, i.activeShape = void 0, i.showCaret = false, e.undoLastShape();
            })
          }, [
            dt,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipUndo), 5)) : createCommentVNode("", true)
          ], 12, rt),
          e.FINAL_CONFIG.style.showPrint ? (openBlock(), createElementBlock("button", {
            key: 0,
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, tooltip: true }),
            onClick: s2[8] || (s2[8] = (...l) => e.print && e.print(...l))
          }, [
            nt,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipPdf), 5)) : createCommentVNode("", true)
          ], 4)) : createCommentVNode("", true),
          e.FINAL_CONFIG.style.showSave ? (openBlock(), createElementBlock("button", {
            key: 1,
            style: normalizeStyle({
              background: e.FINAL_CONFIG.style.buttons.controls.backgroundColor,
              border: e.FINAL_CONFIG.style.buttons.controls.border,
              color: e.FINAL_CONFIG.style.buttons.controls.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            class: normalizeClass({ "button-tool": true, tooltip: true }),
            onClick: s2[9] || (s2[9] = (...l) => e.save && e.save(...l))
          }, [
            ct,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipSave), 5)) : createCommentVNode("", true)
          ], 4)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", ht, [
          createBaseVNode("button", {
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.activeShape === "circle",
              tooltip: true
            }),
            style: normalizeStyle({
              background: i.activeShape === "circle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
              border: i.activeShape === "circle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
              color: i.activeShape === "circle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            onClick: s2[10] || (s2[10] = (l) => {
              e.setShapeTo("circle"), i.isSelectMode = false;
            })
          }, [
            (openBlock(), createElementBlock("svg", at2, [
              createBaseVNode("circle", {
                cx: 6,
                cy: 6,
                r: "4",
                fill: i.options.circle.filled ? (i.activeShape === "circle", i.selectedColor + e.colorTransparency) : "none",
                stroke: "currentColor"
              }, null, 8, ut)
            ])),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeCircle), 5)) : createCommentVNode("", true)
          ], 6),
          i.activeShape === "circle" ? (openBlock(), createElementBlock("div", yt, [
            createBaseVNode("label", bt, toDisplayString(e.FINAL_CONFIG.translations.filled), 1),
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              "onUpdate:modelValue": s2[11] || (s2[11] = (l) => i.options.circle.filled = l),
              onChange: s2[12] || (s2[12] = (...l) => e.setFillOfSelectedCircle && e.setFillOfSelectedCircle(...l)),
              checked: i.options.circle.filled
            }, null, 40, It), [
              [vModelCheckbox, i.options.circle.filled]
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("button", {
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.activeShape === "rect",
              tooltip: true
            }),
            style: normalizeStyle({
              background: i.activeShape === "rect" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
              border: i.activeShape === "rect" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
              color: i.activeShape === "rect" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            onClick: s2[13] || (s2[13] = (l) => {
              e.setShapeTo("rect"), i.isSelectMode = false;
            })
          }, [
            (openBlock(), createElementBlock("svg", Ft, [
              createBaseVNode("rect", {
                x: "3",
                y: "3",
                style: { rx: "0 !important", ry: "0 !important" },
                height: "6",
                width: "6",
                fill: i.options.rect.filled ? (i.activeShape === "rect", i.selectedColor + e.colorTransparency) : "none",
                stroke: "currentColor"
              }, null, 8, Nt)
            ])),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeRect), 5)) : createCommentVNode("", true)
          ], 6),
          i.activeShape === "rect" ? (openBlock(), createElementBlock("div", ft, [
            createBaseVNode("label", xt, toDisplayString(e.FINAL_CONFIG.translations.filled), 1),
            withDirectives(createBaseVNode("input", {
              id: "rectFill",
              type: "checkbox",
              "onUpdate:modelValue": s2[14] || (s2[14] = (l) => i.options.rect.filled = l),
              onChange: s2[15] || (s2[15] = (...l) => e.setFillOfSelectedRect && e.setFillOfSelectedRect(...l)),
              checked: i.options.rect.filled
            }, null, 40, Ct), [
              [vModelCheckbox, i.options.rect.filled]
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("button", {
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.activeShape === "arrow",
              tooltip: true
            }),
            style: normalizeStyle({
              background: i.activeShape === "arrow" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
              border: i.activeShape === "arrow" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
              color: i.activeShape === "arrow" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            onClick: s2[16] || (s2[16] = (l) => {
              e.setShapeTo("arrow"), i.isSelectMode = false;
            })
          }, [
            (openBlock(), createElementBlock("svg", gt, [
              createBaseVNode("path", {
                stroke: i.options.arrow.filled ? i.activeShape === "arrow" ? "white" : "grey" : "none",
                "stroke-width": "2",
                d: "M5,19 19,5 14,5 19,10.5 19,5",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, null, 8, St)
            ])),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeArrow), 5)) : createCommentVNode("", true)
          ], 6),
          createBaseVNode("button", {
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.activeShape === "line",
              tooltip: true
            }),
            style: normalizeStyle({
              background: i.activeShape === "line" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
              border: i.activeShape === "line" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
              color: i.activeShape === "line" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            onClick: s2[17] || (s2[17] = (l) => {
              e.setShapeTo("line"), i.isSelectMode = false;
            })
          }, [
            kt,
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeFreehand), 5)) : createCommentVNode("", true)
          ], 6),
          ["arrow", "circle", "rect", "line"].includes(i.activeShape) ? (openBlock(), createElementBlock("div", pt, [
            createBaseVNode("div", _t, [
              createBaseVNode("label", vt, toDisplayString(e.FINAL_CONFIG.translations.thickness), 1),
              withDirectives(createBaseVNode("input", {
                id: "textFont",
                type: "number",
                "onUpdate:modelValue": s2[18] || (s2[18] = (l) => i.strokeSize = l),
                onInput: s2[19] || (s2[19] = (...l) => e.setStrokeWidthOfSelectedShape && e.setStrokeWidthOfSelectedShape(...l)),
                style: { padding: "0 4px", width: "40px", border: "1px solid #dadada", "border-radius": "3px" }
              }, null, 544), [
                [vModelText, i.strokeSize]
              ])
            ])
          ])) : createCommentVNode("", true),
          ["arrow", "circle", "rect"].includes(i.activeShape) ? (openBlock(), createElementBlock("div", wt, [
            createBaseVNode("div", At, [
              createBaseVNode("label", Mt, toDisplayString(e.FINAL_CONFIG.translations.dashedLines), 1),
              (openBlock(), createElementBlock("svg", Ot, Gt)),
              withDirectives(createBaseVNode("input", {
                id: "dashStyle",
                name: "dashStyle",
                type: "checkbox",
                "onUpdate:modelValue": s2[20] || (s2[20] = (l) => i.isDash = l),
                onChange: s2[21] || (s2[21] = (...l) => e.setSelectedShapeToDash && e.setSelectedShapeToDash(...l)),
                checked: i.isDash
              }, null, 40, mt), [
                [vModelCheckbox, i.isDash]
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("button", {
            class: normalizeClass({
              "button-tool": true,
              "button-tool--selected": i.isTextMode,
              tooltip: true
            }),
            style: normalizeStyle({
              background: i.isTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
              border: i.isTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
              color: i.isTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
              borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
            }),
            onClick: s2[22] || (s2[22] = (l) => {
              e.deleteEmptyTextElement(), i.isTextMode = !i.isTextMode, i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isSelectMode = false, i.isDrawMode = false, i.activeShape = void 0;
            })
          }, [
            (openBlock(), createElementBlock("svg", Tt, Dt)),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeText), 5)) : createCommentVNode("", true)
          ], 6),
          i.isTextMode ? (openBlock(), createElementBlock("div", zt, [
            createBaseVNode("div", Ht2, [
              createBaseVNode("label", Wt, toDisplayString(e.FINAL_CONFIG.translations.fontSize), 1),
              withDirectives(createBaseVNode("input", {
                id: "textFont",
                type: "number",
                "onUpdate:modelValue": s2[23] || (s2[23] = (l) => i.textFont = l),
                onInput: s2[24] || (s2[24] = (...l) => e.setCurrentStyleOfSelectedText && e.setCurrentStyleOfSelectedText(...l)),
                style: { padding: "0 4px", width: "40px", border: "1px solid #dadada", "border-radius": "3px" }
              }, null, 544), [
                [vModelText, i.textFont]
              ])
            ])
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", Pt, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.textAlign === "start",
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.textAlign === "start" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.textAlign === "start" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.textAlign === "start" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              onClick: s2[25] || (s2[25] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.textAlign = "start", e.setSelectedTextAlignTo("start");
              })
            }, [
              Bt,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextLeft), 5)) : createCommentVNode("", true)
            ], 6)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", Vt, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.textAlign === "middle",
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.textAlign === "middle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.textAlign === "middle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.textAlign === "middle" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              disabled: i.isBulletTextMode,
              onClick: s2[26] || (s2[26] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.textAlign = "middle", e.setSelectedTextAlignTo("middle");
              })
            }, [
              Xt,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextCenter), 5)) : createCommentVNode("", true)
            ], 14, Et)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", Ut, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.textAlign === "end",
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.textAlign === "end" ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.textAlign === "end" ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.textAlign === "end" ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              disabled: i.isBulletTextMode,
              onClick: s2[27] || (s2[27] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.textAlign = "end", e.setSelectedTextAlignTo("end");
              })
            }, [
              jt,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextRight), 5)) : createCommentVNode("", true)
            ], 14, Yt)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", Zt, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.isBulletTextMode,
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.isBulletTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.isBulletTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.isBulletTextMode ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              onClick: s2[28] || (s2[28] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.isBulletTextMode = !i.isBulletTextMode, i.textAlign = "start", e.setSelectedTextAlignTo("start"), e.setCurrentStyleOfSelectedText();
              })
            }, [
              Jt,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextBullet), 5)) : createCommentVNode("", true)
            ], 6)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", qt, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.isBold,
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.isBold ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.isBold ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.isBold ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              onClick: s2[29] || (s2[29] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.isBold = !i.isBold, e.setCurrentStyleOfSelectedText();
              })
            }, [
              Kt,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextBold), 5)) : createCommentVNode("", true)
            ], 6)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", Qt, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.isItalic,
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.isItalic ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.isItalic ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.isItalic ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              onClick: s2[30] || (s2[30] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.isItalic = !i.isItalic, e.setCurrentStyleOfSelectedText();
              })
            }, [
              $t,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextItalic), 5)) : createCommentVNode("", true)
            ], 6)
          ])) : createCommentVNode("", true),
          i.isTextMode ? (openBlock(), createElementBlock("div", te, [
            createBaseVNode("button", {
              class: normalizeClass({
                "button-tool": true,
                "button-tool--selected": i.isUnderline,
                tooltip: true
              }),
              style: normalizeStyle({
                background: i.isUnderline ? e.FINAL_CONFIG.style.buttons.shapes.selected.backgroundColor : e.FINAL_CONFIG.style.buttons.shapes.backgroundColor,
                border: i.isUnderline ? e.FINAL_CONFIG.style.buttons.shapes.selected.border : e.FINAL_CONFIG.style.buttons.shapes.border,
                color: i.isUnderline ? e.FINAL_CONFIG.style.buttons.shapes.selected.color : e.FINAL_CONFIG.style.buttons.shapes.color,
                borderRadius: `${e.FINAL_CONFIG.style.buttons.borderRadius}px`
              }),
              onClick: s2[31] || (s2[31] = (l) => {
                i.isDeleteMode = false, i.isMoveMode = false, i.isResizeMode = false, i.isDrawMode = false, i.isSelectMode = false, i.activeShape = void 0, i.isUnderline = !i.isUnderline, e.setCurrentStyleOfSelectedText();
              })
            }, [
              ee,
              e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "tooltiptext",
                style: normalizeStyle({
                  backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                  color: e.FINAL_CONFIG.style.tooltips.color,
                  border: e.FINAL_CONFIG.style.tooltips.border,
                  borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                  boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
                })
              }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeTextUnderline), 5)) : createCommentVNode("", true)
            ], 6)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", ie, [
            withDirectives(createBaseVNode("input", {
              type: "color",
              id: "colorPicker",
              name: "colorPicker",
              "onUpdate:modelValue": s2[32] || (s2[32] = (l) => i.selectedColor = l),
              onInput: s2[33] || (s2[33] = (...l) => e.setColorOfSelectedShape && e.setColorOfSelectedShape(...l)),
              style: normalizeStyle(`height: 30px; width: 30px; border-radius: ${e.FINAL_CONFIG.style.buttons.borderRadius}px; cursor: pointer`)
            }, null, 36), [
              [vModelText, i.selectedColor]
            ]),
            e.FINAL_CONFIG.style.showTooltips ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "tooltiptext",
              style: normalizeStyle({
                backgroundColor: e.FINAL_CONFIG.style.tooltips.backgroundColor,
                color: e.FINAL_CONFIG.style.tooltips.color,
                border: e.FINAL_CONFIG.style.tooltips.border,
                borderRadius: `${e.FINAL_CONFIG.style.tooltips.borderRadius}px`,
                boxShadow: e.FINAL_CONFIG.style.tooltips.boxShadow
              })
            }, toDisplayString(e.FINAL_CONFIG.translations.tooltipShapeColor), 5)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", se, [
            createBaseVNode("label", oe2, toDisplayString(e.FINAL_CONFIG.translations.colorAlpha) + ": " + toDisplayString(i.transparency > 98 ? 100 : i.transparency) + " % ", 1),
            withDirectives(createBaseVNode("input", {
              id: "colorTransparency",
              name: "colorTransparency",
              type: "range",
              "onUpdate:modelValue": s2[34] || (s2[34] = (l) => i.transparency = l),
              onInput: s2[35] || (s2[35] = (...l) => e.setTransparencyOfSelectedShape && e.setTransparencyOfSelectedShape(...l)),
              min: 0,
              max: 100,
              style: { width: "100px" }
            }, null, 544), [
              [vModelText, i.transparency]
            ])
          ])
        ])
      ], 36)
    ]),
    createBaseVNode("div", le, [
      renderSlot(t.$slots, "default", {}, void 0, true),
      i.isSummaryOpen ? (openBlock(), createElementBlock("svg", {
        id: "annotatorSvg",
        key: i.step,
        ref: "mainSvg",
        class: normalizeClass({ draw: true, "draw--free": i.activeShape === "line" }),
        style: normalizeStyle([`cursor:${e.cursorClass}; font-family: Helvetica; z-index: 100000000;`, { position: "absolute", top: "0", left: "0" }]),
        viewBox: `0 0 ${i.svgWidth} ${i.svgHeight}`,
        width: i.sourceWidth,
        height: i.sourceHeight,
        onPointerdown: s2[38] || (s2[38] = (l) => e.chooseAction(l)),
        onPointerup: s2[39] || (s2[39] = (...l) => e.resetDraw && e.resetDraw(...l)),
        onTouchend: s2[40] || (s2[40] = (...l) => e.resetDraw && e.resetDraw(...l)),
        onTouchstart: s2[41] || (s2[41] = (l) => {
          e.setPointer(l), e.clickSvg(l);
        }),
        onPointermove: s2[42] || (s2[42] = (l) => {
          e.setPointer(l), e.chooseMove(l);
        }),
        onPointerout: s2[43] || (s2[43] = (l) => {
          i.preventEdit = true, i.hoveredShapeId = void 0;
        }),
        onPointerover: s2[44] || (s2[44] = (l) => e.allowEditAndHoverShapes(l)),
        onClick: s2[45] || (s2[45] = (l) => e.clickSvg(l))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.userShapes, (l, b) => (openBlock(), createElementBlock("g", {
          key: `shape_${b}`,
          id: l.id,
          innerHTML: l,
          onClick: s2[37] || (s2[37] = (I) => {
            e.clickShape(I), i.isMoveMode = false;
          })
        }, null, 8, de))), 128))
      ], 46, re)) : createCommentVNode("", true),
      i.isPrinting ? (openBlock(), createElementBlock("svg", {
        key: 1,
        style: { position: "absolute", top: "0", left: "0" },
        height: i.sourceHeight,
        viewBox: `0 0 ${i.svgWidth} ${i.svgHeight}`,
        width: i.sourceWidth
      }, [
        createBaseVNode("circle", {
          class: "animated-circle-print",
          cx: i.svgWidth / 2,
          cy: i.svgHeight / 2,
          r: "50",
          stroke: "#6376DD",
          "stroke-width": "10",
          fill: "none"
        }, null, 8, ce)
      ], 8, ne)) : createCommentVNode("", true)
    ], 512)
  ]);
}
var Fe = s(D, [["render", he], ["__scopeId", "data-v-14ebd65f"]]);
export {
  Fe as default
};
//# sourceMappingURL=vue-ui-annotator-Dix6_Gm6-FLY5ZLZD.js.map
