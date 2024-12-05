import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Et,
  Nt,
  Ot,
  Qe,
  at,
  et,
  gt,
  j,
  oe
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  normalizeClass,
  normalizeStyle,
  openBlock,
  popScopeId,
  pushScopeId,
  renderList,
  toDisplayString,
  vModelSelect,
  vModelText,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-table-CmVi0nv2.js
var X = {
  name: "vue-ui-table",
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
        return {};
      }
    }
  },
  data() {
    return {
      uid: `vue-ui-table-${Math.random()}`,
      bodyCopy: JSON.parse(JSON.stringify(this.dataset.body)).map((r, l) => ({
        ...r,
        absoluteIndex: l
      })),
      buttonTimeout: null,
      canMoveChart: false,
      chart: {
        height: 316,
        type: "bar",
        width: 512
      },
      constants: {
        ASC: 1,
        BAR: "bar",
        DATE: "date",
        DESC: -1,
        DONUT: "donut",
        LINE: "line",
        NUMERIC: "numeric",
        PERCENTAGE: "percentage",
        TEXT: "text"
      },
      clientX: 100,
      clientY: 100,
      cssClass: {
        CELL: "smart-td-selected",
        FIRST_TD: "smart-td-selected-first",
        LAST_TD: "smart-td-selected-last",
        ROW: "smart-td-selected-neighbor"
      },
      currentDonut: void 0,
      currentFilter: void 0,
      currentSearch: void 0,
      currentSelectionSpan: {
        col: void 0,
        rows: []
      },
      currentPage: 0,
      dates: {},
      filteredDatesIndexes: {},
      hasNaN: {},
      iconColor: "#2D353C",
      iconSize: 20,
      immutableRangeFilters: {},
      isExportRequest: false,
      isLoading: false,
      itemsPerPage: this.config.rowsPerPage ? this.config.rowsPerPage : 25,
      multiselects: {},
      paginatorOptions: [.../* @__PURE__ */ new Set([10, 25, 50, 100, 250, 500, this.config.rowsPerPage ? this.config.rowsPerPage : 25, this.dataset.body.length])].sort((r, l) => r - l),
      palette: et,
      percentages: {},
      rafId: null,
      rangeFilters: {},
      searches: {},
      selectedColumn: void 0,
      selectedDonutCategory: void 0,
      selectedPlot: void 0,
      showChart: false,
      showDonutOptions: false,
      sorts: {},
      tableBody: JSON.parse(JSON.stringify(this.dataset.body)).map((r, l) => ({
        ...r,
        absoluteIndex: l
      })),
      tableHead: JSON.parse(JSON.stringify(this.dataset.header)).map((r) => ({
        average: Object.hasOwn(r, "average") ? r.average : false,
        decimals: Object.hasOwn(r, "decimals") ? r.decimals : 0,
        isMultiselect: Object.hasOwn(r, "isMultiselect") ? r.isMultiselect : false,
        isPercentage: Object.hasOwn(r, "isPercentage") ? r.isPercentage : false,
        isSearch: Object.hasOwn(r, "isSearch") ? r.isSearch : false,
        isSort: Object.hasOwn(r, "isSort") ? r.isSort : false,
        name: r.name,
        // this attribute is mandatory
        percentageTo: Object.hasOwn(r, "percentageTo") ? r.percentageTo : void 0,
        prefix: Object.hasOwn(r, "prefix") ? r.prefix : "",
        rangeFilter: Object.hasOwn(r, "rangeFilter") ? r.rangeFilter : false,
        suffix: Object.hasOwn(r, "suffix") ? r.suffix : "",
        sum: Object.hasOwn(r, "sum") ? r.sum : false,
        type: r.type
        // this attribute is mandatory
      }))
    };
  },
  mounted() {
    if (this.dataset.header.length === 0)
      throw new Error(`vue-ui-table error: missing header data.
Provide an array of objects of type:
{
 name: string;
 type: string; ('text' | 'numeric' | 'date')
 average: boolean;
 decimals: number | undefined;
 sum: boolean;
 isSort:boolean;
 isSearch: boolean;
 isMultiselect: boolean;
 isPercentage: boolean;
 percentageTo: string; (or '')
}`);
    if (this.dataset.body.length === 0)
      throw new Error("vue-ui-table error: missing body data");
    this.isLoading = true, this.promiseWithAsyncFunction(this.prepareBodyCopy, () => {
      this.$forceUpdate(), this.isLoading = false;
    }), document.addEventListener("keydown", (s2) => {
      const r = document.activeElement;
      (r && Array.from(r.classList).includes("td-focusable") && s2.key.includes("Arrow") || s2.code === "Space") && s2.preventDefault();
    });
  },
  watch: {
    showChart: function(s2) {
      s2 && this.$nextTick(() => {
        this.closeDragElement();
        const r = this.$refs.chartModal;
        r.onmousedown = this.dragMouseDown;
      });
    }
  },
  computed: {
    availableDonutCategories() {
      return Object.keys(this.multiselects).map((s2) => ({
        index: s2,
        name: this.dataset.header[s2].name,
        options: this.multiselects[s2]
      }));
    },
    canChart() {
      return this.FINAL_CONFIG.useChart && this.currentSelectionSpan.rows.length > 1;
    },
    chartData() {
      if (!this.canChart) return [];
      const s2 = 316, r = 512, l = this.currentSelectionSpan.rows.length, h = r / l, t = Math.max(...this.currentSelectionSpan.rows.map((C) => C.value)), e = Math.min(...this.currentSelectionSpan.rows.map((C) => C.value)), n = e >= 0 ? 0 : Math.abs(e), o = t + n, d = t < 0 && e < 0, y = this.dataset.header[this.currentSelectionSpan.col].isPercentage, m = this.currentSelectionSpan.rows.map((C, L) => ({
        x: h * L + h / 2,
        y: (1 - (C.value + n) / o) * s2,
        value: y ? C.value * 100 : C.value,
        suffix: y ? "%" : this.dataset.header[this.currentSelectionSpan.col].suffix ? this.dataset.header[this.currentSelectionSpan.col].suffix : "",
        prefix: this.dataset.header[this.currentSelectionSpan.col].prefix ? this.dataset.header[this.currentSelectionSpan.col].prefix : "",
        index: C.index,
        absoluteValue: y ? Math.abs(C.value) * 100 : Math.abs(C.value)
      })), p = s2 - s2 * (n / o);
      return { isAllNegative: d, zero: p, plots: m, slot: h, progression: m.length >= 2 ? this.calcLinearProgression(m) : false };
    },
    donutHollowLabels() {
      return {
        total: Number((this.currentDonut.map((s2) => s2.absoluteValue).reduce((s2, r) => s2 + r, 0) * (this.dataset.header[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        average: Number((this.currentDonut.map((s2) => s2.absoluteValue).reduce((s2, r) => s2 + r, 0) / this.currentSelectionSpan.rows.length * (this.dataset.header[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString()
      };
    },
    hasNumericTypes() {
      return this.dataset.header.map((s2) => s2.type).includes(this.constants.NUMERIC);
    },
    icons() {
      return {
        arrowSort: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9l4 -4l4 4m-4 -4v14" /><path d="M21 15l-4 4l-4 -4m4 4v-14" /></svg>`,
        bar: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20l14 0" /></svg>`,
        chart: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19l16 0" /><path d="M4 15l4 -6l4 2l4 -5l4 4" /></svg>`,
        chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`,
        chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 1.6}" height="${this.iconSize * 1.6}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>`,
        chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 1.6}" height="${this.iconSize * 1.6}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`,
        donut: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 0.8}" height="${this.iconSize * 0.8}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3v5m4 4h5" /><path d="M8.929 14.582l-3.429 2.918" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`,
        export: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 10h18" /><path d="M10 3v18" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /></svg>`,
        fileDownload: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>`,
        filter: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" /></svg>`,
        move: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3" /><path d="M15 12h6" /><path d="M6 9l-3 3l3 3" /><path d="M3 12h6" /><path d="M9 18l3 3l3 -3" /><path d="M12 15v6" /><path d="M15 6l-3 -3l-3 3" /><path d="M12 3v6" /></svg>`,
        sort09: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /><path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" /><path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" /></svg>`,
        sort90: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /><path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" /><path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" /></svg>`,
        sortAZ: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" /><path d="M19 21h-4l4 -7h-4" /><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /></svg>`,
        sortZA: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" /><path d="M19 10h-4l4 -7h-4" /><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /></svg>`,
        sum: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>`,
        table: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" fill="white" d="M 10 2, 21 2, 21 21, 10 21Z"/><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 0.8}" height="${this.iconSize * 0.8}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`
      };
    },
    pages() {
      const s2 = [];
      if (this.bodyCopy.length)
        for (let r = 0; r < this.bodyCopy.length; r += this.itemsPerPage)
          s2.push(this.bodyCopy.slice(r, r + this.itemsPerPage));
      return s2;
    },
    rows() {
      return this.bodyCopy.map((s2) => s2.td);
    },
    selectedCellsCalculations() {
      return {
        sumPercentage: Number((this.currentSelectionSpan.rows.map((s2) => s2.value).reduce((s2, r) => s2 + r, 0) * 100).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        sumRegular: Number(this.currentSelectionSpan.rows.map((s2) => s2.value).reduce((s2, r) => s2 + r, 0).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        averagePercentage: Number((this.currentSelectionSpan.rows.map((s2) => s2.value).reduce((s2, r) => s2 + r, 0) / this.currentSelectionSpan.rows.length * 100).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        averageRegular: Number((this.currentSelectionSpan.rows.map((s2) => s2.value).reduce((s2, r) => s2 + r, 0) / this.currentSelectionSpan.rows.length).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString()
      };
    },
    FINAL_CONFIG() {
      const { vue_ui_table: s2 } = oe();
      if (!Object.keys(this.config || {}).length)
        return s2;
      const r = this.treeShake({
        defaultConfig: s2,
        userConfig: this.config
      });
      return this.convertConfigColors(r);
    },
    visibleRows() {
      return this.pages[this.currentPage];
    }
  },
  methods: {
    // lib
    treeShake: Qe,
    makeDonut: gt,
    convertColorToHex: j,
    convertConfigColors: at,
    createCsvContent: Nt,
    downloadCsv: Ot,
    // specific
    applyDonutOption() {
      const s2 = this.selectedDonutCategory.options.map((r, l) => ({
        name: r,
        color: this.palette[l] || this.palette[l % this.palette.length],
        value: this.visibleRows.filter((h, t) => h.td[this.selectedDonutCategory.index] === r && this.currentSelectionSpan.rows.map((e) => e.index).includes(t)).map((h) => h.td[this.currentSelectionSpan.col]).reduce((h, t) => Math.abs(h) + Math.abs(t), 0),
        absoluteValue: this.visibleRows.filter((h, t) => h.td[this.selectedDonutCategory.index] === r && this.currentSelectionSpan.rows.map((e) => e.index).includes(t)).map((h) => h.td[this.currentSelectionSpan.col]).reduce((h, t) => h + t, 0)
      })).sort((r, l) => l.value - r.value);
      this.currentDonut = this.makeDonut({ series: s2 }, 50, 50, 30, 30), this.$nextTick(() => {
        this.chart.type = this.constants.DONUT, this.showDonutOptions = false;
      });
    },
    calcRectY(s2, r) {
      return s2 >= 0 ? r : this.chartData.zero;
    },
    canResetColumn(s2, r) {
      return !this.hasNaN[s2] && (r.isSort || r.isSearch || r.isMultiselect || r.rangeFilter) && ![this.constants.DATE].includes(r.type);
    },
    createXls(s2 = "all") {
      const r = this.dataset.header.map((e) => e.name), l = s2 === "all" ? this.bodyCopy.map((e) => e.td) : this.visibleRows.map((e) => e.td), h = [r].concat(l), t = this.createCsvContent(h);
      this.downloadCsv({ csvContent: t, title: "vue-ui-table" });
    },
    calcLinearProgression: Et,
    closeAllDropdowns() {
      const s2 = document.getElementsByClassName("th-dropdown");
      s2.length && Array.from(s2).forEach((r) => {
        r.dataset.isOpen = false;
      });
    },
    debounce(s2, r) {
      let l;
      clearTimeout(l), l = setTimeout(s2, r);
    },
    filterBody() {
      this.bodyCopy = this.tableBody.filter((s2) => {
        for (const r in this.searches)
          if (!s2.td[r].toUpperCase().includes(this.searches[r].toUpperCase()))
            return false;
        for (const r in this.multiselects)
          if (!this.multiselects[r].some((h) => h === s2.td[r]))
            return false;
        for (const r in this.dates) {
          const l = new Date(s2.td[r]), h = new Date(this.dates[r].from), t = new Date(this.dates[r].to);
          if (l < h || l > t)
            return false;
        }
        return true;
      }), this.sortBody();
    },
    getAverage(s2) {
      return this.rows.map((r) => r[s2]).map((r) => isNaN(Number(r)) ? 0 : r).reduce((r, l) => r + l, 0) / this.bodyCopy.length;
    },
    getDatesRange(s2) {
      const r = this.dataset.body.map((C) => new Date(C.td[s2])), l = new Date(Math.min(...r)), h = new Date(Math.max(...r)), t = l.getFullYear(), e = h.getFullYear(), n = String(l.getMonth() + 1).padStart(2, "0"), o = String(h.getMonth() + 1).padStart(2, "0"), d = String(l.getDate()).padStart(2, "0"), y = String(h.getDate()).padStart(2, "0"), m = `${t}-${n}-${d}`, p = `${e}-${o}-${y}`;
      return {
        from: m,
        to: p
      };
    },
    getDonutLegendValue(s2) {
      return Number((s2 * (this.dataset.header[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.dataset.header[this.currentSelectionSpan.col].decimals)).toLocaleString();
    },
    getDropdownOptions(s2) {
      return [...new Set(this.dataset.body.map((r) => r.td[s2]))];
    },
    getSum(s2) {
      return this.rows.map((r) => r[s2]).map((r) => isNaN(Number(r)) ? 0 : r).reduce((r, l) => r + l, 0);
    },
    includesNaN(s2) {
      return s2.includes(NaN);
    },
    isDropdownOptionSelected(s2, r) {
      return this.multiselects[r] ? this.multiselects[r].includes(s2) : true;
    },
    isNumeric(s2) {
      return !isNaN(Number(String(s2).replaceAll("%", "")));
    },
    isResetDisabled(s2, r) {
      const l = r.isSort, h = r.isSearch, t = r.isMultiselect && this.multiselects[s2], e = r.rangeFilter, n = (o) => {
        if (e && this.rangeFilters[o])
          return Math.round(this.rangeFilters[o].min) === this.immutableRangeFilters[o].min && Math.round(this.rangeFilters[o].max) === this.immutableRangeFilters[o].max;
      };
      if (l && h && t && e)
        return ["", void 0].includes(this.searches[s2]) && [void 0].includes(this.sorts[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length && n(s2);
      if (l && h && t)
        return ["", void 0].includes(this.searches[s2]) && [void 0].includes(this.sorts[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length;
      if (l && h && e)
        return ["", void 0].includes(this.searches[s2]) && [void 0].includes(this.sorts[s2]) && n(s2);
      if (l && h)
        return ["", void 0].includes(this.searches[s2]) && [void 0].includes(this.sorts[s2]);
      if (l && t && e)
        return [void 0].includes(this.sorts[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length && n(s2);
      if (l && t)
        return [void 0].includes(this.sorts[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length;
      if (h && t && e)
        return ["", void 0].includes(this.searches[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length && n(s2);
      if (h && t)
        return ["", void 0].includes(this.searches[s2]) && this.multiselects[s2].length === this.getDropdownOptions(s2).length;
      if (h && e)
        return ["", void 0].includes(this.searches[s2]) && n(s2);
      if (h)
        return ["", void 0].includes(this.searches[s2]);
      if (l && e)
        return [void 0].includes(this.sorts[s2]) && n(s2);
      if (l)
        return [void 0].includes(this.sorts[s2]);
      if (t && e)
        return this.multiselects[s2].length === this.getDropdownOptions(s2).length && n(s2);
      if (t)
        return this.multiselects[s2].length === this.getDropdownOptions(s2).length;
    },
    navigate(s2) {
      this.resetSelection(), s2 === "next" && this.currentPage < this.pages.length ? this.currentPage += 1 : s2 === "previous" && this.currentPage >= 1 ? this.currentPage -= 1 : this.currentPage = s2 - 1, this.$refs.tableWrapper.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    navigateCell(s2) {
      s2.preventDefault();
      const r = s2.keyCode, l = 38, h = 40, t = 37, e = 39;
      if (![l, h, t, e].includes(r)) return;
      const n = s2.target.id, o = /cell_(\d+)_(\d+)_vue-ui-table-(\d+)/, d = n.match(o), y = parseInt(d[1]), m = parseInt(d[2]), p = document.getElementById(`cell_${y}_${m + 1}_${this.uid}`), C = document.getElementById(`cell_${y}_${m - 1}_${this.uid}`), L = document.getElementById(`cell_${y + 1}_${m}_${this.uid}`), A = document.getElementById(`cell_${y - 1}_${m}_${this.uid}`);
      let v;
      switch (true) {
        case r === e:
          v = p;
          break;
        case r === t:
          v = C;
          break;
        case r === l:
          v = A;
          break;
        case r === h:
          v = L;
          break;
        default:
          return;
      }
      v && (v.focus(), v.scrollIntoView({ behavior: "smooth", block: "center" }));
    },
    openDonutOptions() {
      this.selectedDonutCategory = this.availableDonutCategories[0], this.showDonutOptions = true;
    },
    placeLabelOnTopOrBottom({ previousPlot: s2, currentPlot: r, nextPlot: l }) {
      const h = r.y - 38, t = r.y + 16;
      return s2 && l ? s2.value < r.value && l.value < r.value ? h : s2.value > r.value && l.value > r.value ? t : (s2.value > r.value && l.value < r.value || s2.value < r.value && l.value > r.value, h) : s2 && !l ? s2.value > r.value ? t : h : !s2 && l && l.value > r.value ? t : h;
    },
    async prepareBodyCopy() {
      return new Promise((s2) => {
        const r = [];
        this.tableHead.forEach((l, h) => {
          if (l.isSearch && Object.assign(this.searches, { [h]: "" }), l.isMultiselect && Object.assign(this.multiselects, { [h]: this.getDropdownOptions(h) }), l.type === this.constants.DATE && (Object.assign(this.dates, { [h]: this.getDatesRange(h) }), Object.assign(this.filteredDatesIndexes, { [h]: false })), (l.isPercentage || l.percentageTo) && Object.assign(this.percentages, { [h]: {
            reference: l.percentageTo,
            referenceIndex: this.dataset.header.map((t) => t.name).indexOf(l.percentageTo)
          } }), l.rangeFilter && (Object.assign(this.rangeFilters, { [h]: {
            min: Math.round(Math.min(...this.dataset.body.map((t) => t.td).map((t) => t[h]))),
            max: Math.round(Math.max(...this.dataset.body.map((t) => t.td).map((t) => t[h])))
          } }), Object.assign(this.immutableRangeFilters, { [h]: {
            min: Math.round(Math.min(...this.dataset.body.map((t) => t.td).map((t) => t[h]))),
            max: Math.round(Math.max(...this.dataset.body.map((t) => t.td).map((t) => t[h])))
          } })), l.isPercentage) {
            const t = this.dataset.header.map((n) => n.name).indexOf(l.percentageTo), e = this.dataset.body.map((n) => n.td[t]).reduce((n, o) => n + o, 0);
            r.push([h, t, e]);
          }
          l.type === this.constants.NUMERIC && !l.isPercentage && Object.assign(this.hasNaN, { [h]: this.includesNaN(this.dataset.body.map((t) => Number(t.td[h]))) });
        }), this.bodyCopy.forEach((l, h) => {
          r.map((t) => {
            const [e, n, o] = t;
            l.td[e] = l.td[n] / o;
          }), l.td.forEach((t, e) => {
            this.dataset.header[e].type === this.constants.TEXT && this.dataset.header[e].isSearch && (l[e] = this.stringToNumber(t)), this.dataset.header[e].type === this.constants.DATE && (l[e] = new Date(t).getTime()), this.dataset.header[e].type === this.constants.NUMERIC && (l[e] = isNaN(Number(t)) ? e : t), this.tableBody[h][e] = l[e];
          });
        }), s2(true);
      });
    },
    promiseWithAsyncFunction(s2, r) {
      return new Promise((l, h) => {
        s2().then((t) => {
          try {
            const e = r(t);
            l(e);
          } catch (e) {
            h(e);
          }
        }).catch((t) => {
          h(t);
        });
      });
    },
    resetDates(s2) {
      this.dates[s2] = {
        from: this.getDatesRange(s2).from,
        to: this.getDatesRange(s2).to
      }, this.filteredDatesIndexes[s2] = false, this.$forceUpdate(), this.filterBody();
    },
    resetFilter(s2, r, l) {
      const h = l.currentTarget;
      clearTimeout(this.buttonTimeout), h.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        h.classList.remove("clicked");
      }, 200), this.currentFilter = void 0, r.rangeFilter && (this.rangeFilters[s2].min = this.immutableRangeFilters[s2].min, this.rangeFilters[s2].max = this.immutableRangeFilters[s2].max), r.isMultiselect ? (this.multiselects[s2] = this.getDropdownOptions(s2), r.type === this.constants.TEXT && (this.sorts[s2] = void 0), r.isSearch && (this.searches[s2] = "")) : r.type === this.constants.NUMERIC ? this.sorts[s2] = void 0 : r.type === this.constants.TEXT ? (this.sorts[s2] = void 0, this.searches[s2] = "") : r.type === this.constants.DATE && (this.sorts[s2] = void 0), this.filterBody();
    },
    resetSelection() {
      const s2 = document.getElementsByClassName(`tr_${this.uid}`);
      Array.from(s2).forEach((r) => {
        Array.from(r.getElementsByTagName("td")).forEach((l) => {
          l.dataset.row === "even" ? (l.style.background = this.FINAL_CONFIG.style.rows.even.backgroundColor, l.style.color = this.FINAL_CONFIG.style.rows.even.color) : (l.style.background = this.FINAL_CONFIG.style.rows.odd.backgroundColor, l.style.color = this.FINAL_CONFIG.style.rows.odd.color);
        });
      }), Array.from(s2).forEach((r) => r.dataset.selected = "false"), this.currentPage > this.pages.length - 1 && (this.currentPage = this.pages.length - 1), this.showChart = false, this.currentDonut = void 0, this.selectedColumn = void 0, this.chart.type = this.constants.BAR, this.currentSelectionSpan = {
        col: void 0,
        rows: []
      }, this.clientX = 100, this.clientY = 100;
    },
    selectColumn(s2) {
      this.currentSelectionSpan.col !== s2 ? (this.visibleRows.forEach((r, l) => {
        this.selectTd({
          td: r.td[s2],
          rowIndex: l,
          colIndex: s2,
          headerType: this.constants.NUMERIC,
          event: {
            currentTarget: document.getElementById(`cell_${l}_${s2}_${this.uid}`)
          }
        });
      }), this.selectedColumn = s2) : (this.selectedColumn = void 0, this.resetSelection());
    },
    selectDropdownOption(s2, r) {
      this.multiselects[r].includes(s2) ? this.multiselects[r] = this.multiselects[r].filter((l) => l !== s2) : this.multiselects[r].push(s2), this.$forceUpdate(), this.filterBody();
    },
    selectTd({ td: s2, rowIndex: r, colIndex: l, headerType: h, event: t }) {
      if (h !== this.constants.NUMERIC || isNaN(Number(s2))) {
        this.resetSelection();
        return;
      }
      this.currentSelectionSpan.col !== l && this.resetSelection();
      const e = t.currentTarget.parentNode;
      this.currentSelectionSpan.col = l, this.currentSelectionSpan.rows.map((n) => n.index).includes(r) ? (e.dataset.selected = "false", this.currentSelectionSpan.rows = this.currentSelectionSpan.rows.filter((n) => n.index !== r), t.currentTarget.classList.remove(this.cssClass.CELL), Array.from(e.children).forEach((n, o) => {
        n.dataset.row === "even" ? (n.style.background = this.FINAL_CONFIG.style.rows.even.backgroundColor, n.style.color = this.FINAL_CONFIG.style.rows.even.olor) : (n.style.background = this.FINAL_CONFIG.style.rows.odd.backgroundColor, n.style.color = this.FINAL_CONFIG.style.rows.odd.color);
      }), t.currentTarget.dataset.row === "even" ? (t.currentTarget.style.background = this.FINAL_CONFIG.style.rows.even.backgroundColor, t.currentTarget.style.color = this.FINAL_CONFIG.style.rows.even.color) : (t.currentTarget.style.background = this.FINAL_CONFIG.style.rows.odd.backgroundColor, t.currentTarget.style.color = this.FINAL_CONFIG.style.rows.odd.color)) : (e.dataset.selected = "true", this.currentSelectionSpan.rows.push({
        index: r,
        value: s2
      }), Array.from(e.children).forEach((n, o) => {
        n.dataset.row === "even" ? (n.style.background = this.FINAL_CONFIG.style.rows.even.selectedNeighbors.backgroundColor, n.style.color = this.FINAL_CONFIG.style.rows.even.selectedNeighbors.color) : (n.style.background = this.FINAL_CONFIG.style.rows.odd.selectedNeighbors.backgroundColor, n.style.color = this.FINAL_CONFIG.style.rows.odd.selectedNeighbors.color);
      }), t.currentTarget.dataset.row === "odd" ? (t.currentTarget.style.background = this.FINAL_CONFIG.style.rows.odd.selectedCell.backgroundColor, t.currentTarget.style.color = this.FINAL_CONFIG.style.rows.odd.selectedCell.color) : (t.currentTarget.style.background = this.FINAL_CONFIG.style.rows.even.selectedCell.backgroundColor, t.currentTarget.style.color = this.FINAL_CONFIG.style.rows.even.selectedCell.color)), this.currentSelectionSpan.rows = this.currentSelectionSpan.rows.sort((n, o) => n.index - o.index), this.chart.type === this.constants.DONUT && this.currentSelectionSpan.rows.length > 0 && this.applyDonutOption();
    },
    setFilterDatesIndexes(s2) {
      this.filteredDatesIndexes[s2] = !(this.getDatesRange(s2).from === this.dates[s2].from && this.getDatesRange(s2).to === this.dates[s2].to);
    },
    sortBody() {
      this.resetSelection(), Object.keys(this.rangeFilters).forEach((s2) => {
        this.filterByRange(this.bodyCopy, s2);
      }), Object.keys(this.sorts).forEach((s2) => {
        this.sortByNumber(this.bodyCopy, s2);
      }), this.currentFilter !== void 0 && this.sortByNumber(this.bodyCopy, this.currentFilter), this.dataset.header.forEach((s2, r) => {
        if (s2.isPercentage) {
          const l = this.percentages[r].referenceIndex, h = this.bodyCopy.map((t) => t.td[l]).reduce((t, e) => t + e, 0);
          this.bodyCopy.forEach((t) => {
            t.td[r] = t.td[l] / h;
          });
        }
      }), this.currentPage > this.pages.length - 1 && (this.currentPage = this.pages.length - 1), [-1].includes(this.currentPage) && (this.currentPage = 0), this.$forceUpdate();
    },
    filterByRange(s2, r) {
      this.bodyCopy = s2.filter((l) => l.td[r] >= this.rangeFilters[r].min && l[r] <= this.rangeFilters[r].max);
    },
    sortByNumber(s2, r) {
      if (this.sorts[r] === this.constants.ASC && (s2 = s2.sort((l, h) => l[r] - h[r])), this.sorts[r] === this.constants.DESC)
        s2 = s2.sort((l, h) => h[r] - l[r]);
      else
        return 0;
    },
    sortTh(s2, r) {
      this.currentFilter = s2;
      const l = r.currentTarget;
      clearTimeout(this.buttonTimeout), l.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        l.classList.remove("clicked");
      }, 200), this.sorts[s2] === 1 ? this.sorts[s2] = this.constants.DESC : this.sorts[s2] = this.constants.ASC, this.sortBody();
    },
    stringToNumber(s2) {
      let r = 0;
      for (let l = 0; l < s2.length; l += 1)
        r += s2.charCodeAt(l);
      return r;
    },
    toggleMultiselect(s2, r, l) {
      const h = l.currentTarget;
      clearTimeout(this.buttonTimeout), h.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        h.classList.remove("clicked");
      }, 200);
      const t = document.getElementById(`th_dropdown_${s2}`);
      t.dataset.isOpen === "false" ? t.dataset.isOpen = "true" : t.dataset.isOpen = "false";
    },
    updateCurrentPage(s2) {
      this.resetSelection(), this.currentPage = Number(s2.target.value);
    },
    // DONUTS
    calcDonutMarkerConnectorColor(s2) {
      return s2.proportion * 100 > 3 ? s2.color : "transparent";
    },
    calcDonutMarkerLabelPositionX(s2) {
      return s2.center.endX + this.calcMarkerOffset(s2, 50);
    },
    calcMarkerOffset(s2, r) {
      return s2.center.endX - r >= 0 ? 3 : -2;
    },
    displayArcPercentage(s2, r) {
      return isNaN(s2.value / this.sumValues(r)) ? 0 : (s2.value / this.sumValues(r) * 100).toFixed(0) + "%";
    },
    isArcBigEnough(s2) {
      return s2.proportion * 100 > 3;
    },
    sumValues(s2) {
      return [...s2].map((r) => r.value).reduce((r, l) => r + l, 0);
    },
    // CHART DRAGGING METHODS
    closeDragElement() {
      document.onmouseup = null, document.onmousemove = null;
    },
    dragMouseDown(s2) {
      s2 = s2 || window.event, s2.preventDefault(), document.onmouseup = this.closeDragElement, document.onmousemove = this.elementDrag;
    },
    elementDrag(s2) {
      this.rafId || (this.rafId = window.requestAnimationFrame(() => this.onElementDrag(s2)));
    },
    onElementDrag(s2) {
      s2 = s2 || window.event, s2.preventDefault();
      const l = this.$refs.chartModal.getBoundingClientRect();
      this.clientX = s2.clientX - l.width / 2, this.clientY = s2.clientY - l.height / 2, this.rafId = null;
    }
  }
};
var F = (s2) => (pushScopeId("data-v-5a108fbd"), s2 = s2(), popScopeId(), s2);
var W = { class: "vue-ui-table-export-hub" };
var Y = ["innerHTML"];
var Z = ["data-is-open"];
var K = F(() => createBaseVNode("b", { class: "vue-ui-table-export-hub-title" }, " Export ", -1));
var q = { class: "vue-ui-table-export-hub-options" };
var J = { class: "vue-ui-table-export-hub-option-wrapper" };
var Q = { class: "label" };
var $ = ["innerHTML"];
var ee = { class: "vue-ui-table-export-hub-option-wrapper" };
var te = { class: "label" };
var se = ["innerHTML"];
var re = { class: "vue-ui-table" };
var ne = { id: "tableHead" };
var le = F(() => createBaseVNode("th", { class: "invisible-cell" }, null, -1));
var oe2 = { key: 0 };
var ae = { key: 0 };
var ie = { key: 1 };
var ce = F(() => createBaseVNode("th", { class: "invisible-cell" }, null, -1));
var ue = {
  key: 0,
  style: { display: "flex", "align-items": "center", "justify-content": "flex-end" }
};
var he = ["innerHTML"];
var de = {
  key: 0,
  style: { "margin-left": "3px" }
};
var ge = F(() => createBaseVNode("th", { class: "invisible-cell" }, null, -1));
var ye = { key: 0 };
var Ne = F(() => createBaseVNode("th", { class: "invisible-cell" }, null, -1));
var be = { class: "th-filter" };
var me = {
  key: 0,
  class: "th-date"
};
var fe = { class: "date-wrapper--inputs" };
var _e = { class: "date-fieldset" };
var Ce = ["for"];
var Ie = ["id", "onUpdate:modelValue", "onInput"];
var Fe = { class: "date-fieldset" };
var ve = ["for"];
var ke = ["id", "onUpdate:modelValue", "onInput"];
var pe = { class: "date-wrapper--button" };
var we = ["onClick"];
var Se = ["innerHTML"];
var Oe = ["innerHTML"];
var Le = ["innerHTML"];
var Ae = ["onClick", "disabled"];
var De = ["placeholder", "onUpdate:modelValue", "name"];
var xe = ["onClick"];
var Ge = ["innerHTML"];
var Me = ["innerHTML"];
var Te = ["innerHTML"];
var Ee = ["onClick", "innerHTML"];
var ze = ["innerHTML"];
var Be = {
  key: 5,
  class: "th-range-filter"
};
var He = ["for"];
var Pe = F(() => createBaseVNode("span", { style: { color: "grey" } }, "ᒥ", -1));
var Re = F(() => createBaseVNode("span", { style: { color: "grey" } }, "ᒣ", -1));
var Ue = ["id", "max", "min", "onUpdate:modelValue"];
var Ve = ["id", "max", "min", "onUpdate:modelValue"];
var je = ["for"];
var Xe = F(() => createBaseVNode("span", { style: { color: "grey" } }, "ᒪ", -1));
var We = F(() => createBaseVNode("span", { style: { color: "grey" } }, "ᒧ", -1));
var Ye = ["onClick", "disabled"];
var Ze = ["id"];
var Ke = ["onClick"];
var qe = ["onClick", "onKeyup"];
var Je = F(() => createBaseVNode("th", { class: "invisible-cell" }, null, -1));
var Qe2 = ["innerHTML", "onClick", "onKeyup"];
var $e = ["data-row"];
var et2 = ["data-row"];
var tt = ["data-row", "onClick", "onKeyup", "id"];
var st = ["innerHTML"];
var rt = { key: 1 };
var nt = { key: 2 };
var lt = { key: 5 };
var ot = ["innerHTML"];
var at2 = { key: 0 };
var it = { style: { "margin-left": "12px" } };
var ct = { class: "format-num" };
var ut = { style: { "margin-left": "12px" } };
var ht = {
  key: 0,
  class: "format-num"
};
var dt = {
  key: 1,
  class: "format-num"
};
var gt2 = { key: 2 };
var yt = { style: { "margin-left": "12px" } };
var Nt2 = {
  key: 0,
  class: "format-num"
};
var bt = {
  key: 1,
  class: "format-num"
};
var mt = { key: 2 };
var ft = {
  key: 0,
  class: "vue-ui-table-paginator format-num"
};
var _t = {
  key: 1,
  class: "vue-ui-table-size-warning"
};
var Ct = ["innerHTML"];
var It = {
  key: 3,
  class: "vue-ui-table-pagination format-num"
};
var Ft = ["innerHTML", "disabled"];
var vt = ["disabled"];
var kt = {
  key: 0,
  class: "vue-ui-table-page-scroller-wrapper"
};
var pt = {
  for: "pageScroller",
  style: { "font-size": "14px" }
};
var wt = ["max", "value"];
var St = { key: 1 };
var Ot2 = ["disabled"];
var Lt = ["innerHTML", "disabled"];
var At = { class: "chart-modal-options" };
var Dt = ["innerHTML"];
var xt = ["innerHTML"];
var Gt = ["innerHTML"];
var Mt = { style: { "margin-bottom": "12px" } };
var Tt = { key: 0 };
var Et2 = { key: 1 };
var zt = {
  style: { width: "100%", height: "fit-content", cursor: "move" },
  ref: "chartModal"
};
var Bt = { class: "vue-ui-table-fieldset" };
var Ht = { class: "vue-ui-table-fieldset-wrapper" };
var Pt = ["name", "id", "checked", "onInput"];
var Rt = ["for"];
var Ut = ["disabled"];
var Vt = ["innerHTML"];
var jt = ["viewBox"];
var Xt = ["markerWidth", "markerHeight", "refY"];
var Wt = ["points", "fill"];
var Yt = ["x2", "y1", "y2", "stroke", "stroke-width"];
var Zt = ["y2", "stroke", "stroke-width"];
var Kt = ["x", "width", "height", "fill"];
var qt = createStaticVNode('<linearGradient id="barGradientSelected" x2="0%" y2="100%" data-v-5a108fbd><stop offset="0.2" stop-color="#6376DD" data-v-5a108fbd></stop><stop offset="1" stop-color="#6376DD80" data-v-5a108fbd></stop></linearGradient><linearGradient id="barGradientSelectedNeg" x2="0%" y2="100%" data-v-5a108fbd><stop offset="0.2" stop-color="#6376DD80" data-v-5a108fbd></stop><stop offset="1" stop-color="#6376DD" data-v-5a108fbd></stop></linearGradient><linearGradient id="barGradient" x2="0%" y2="100%" data-v-5a108fbd><stop offset="0.2" stop-color="#6376DDB3" data-v-5a108fbd></stop><stop offset="1" stop-color="#6376DD66" data-v-5a108fbd></stop></linearGradient><linearGradient id="barGradientNeg" x2="0%" y2="100%" data-v-5a108fbd><stop offset="0.2" stop-color="#6376DD66" data-v-5a108fbd></stop><stop offset="1" stop-color="#6376DDB3" data-v-5a108fbd></stop></linearGradient>', 4);
var Jt = ["x", "y", "height", "width", "fill", "stroke"];
var Qt = ["x", "y", "width"];
var $t = ["x1", "y1", "x2", "y2", "stroke-width", "stroke"];
var es = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var ts = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var ss = ["x", "y", "width"];
var rs = ["x", "width", "height", "onMouseenter"];
var ns = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var ls = F(() => createBaseVNode("span", null, "---", -1));
var os = ["d", "stroke"];
var as = ["x", "y"];
var is = { class: "vue-ui-table-donut-label-name" };
var cs = ["fill"];
var us = ["fill"];
var hs = ["fill"];
var ds = ["fill"];
var gs = { class: "vue-ui-table-donut-legend" };
function ys(s2, r, l, h, t, e) {
  return openBlock(), createElementBlock("div", {
    class: "vue-ui-table-main",
    style: normalizeStyle(`font-family: ${e.FINAL_CONFIG.fontFamily}`)
  }, [
    createBaseVNode("div", W, [
      createBaseVNode("button", {
        onClick: r[0] || (r[0] = (n) => t.isExportRequest = !t.isExportRequest),
        innerHTML: e.icons.export,
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.exportMenu.backgroundColor};color:${e.FINAL_CONFIG.style.exportMenu.color}`)
      }, null, 12, Y),
      createBaseVNode("div", {
        class: "vue-ui-table-export-hub-dropdown",
        "data-is-open": t.isExportRequest || "false",
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.exportMenu.backgroundColor};color:${e.FINAL_CONFIG.style.exportMenu.color}`)
      }, [
        K,
        createBaseVNode("button", {
          class: "close-dropdown",
          onClick: r[1] || (r[1] = (n) => t.isExportRequest = false),
          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.closeButtons.backgroundColor};color:${e.FINAL_CONFIG.style.closeButtons.color};border-radius:${e.FINAL_CONFIG.style.closeButtons.borderRadius}`)
        }, " ✖ ", 4),
        createBaseVNode("div", q, [
          createBaseVNode("div", J, [
            createBaseVNode("div", Q, toDisplayString(e.FINAL_CONFIG.translations.exportAllLabel) + " (" + toDisplayString(t.bodyCopy.length) + ") ", 1),
            createBaseVNode("button", {
              id: "exportAll",
              onClick: r[2] || (r[2] = (n) => e.createXls("all")),
              style: normalizeStyle(`background:${e.FINAL_CONFIG.style.exportMenu.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.exportMenu.buttons.color}`)
            }, [
              createBaseVNode("div", {
                innerHTML: e.icons.fileDownload
              }, null, 8, $),
              createBaseVNode("span", null, toDisplayString(e.FINAL_CONFIG.translations.exportAllButton), 1)
            ], 4)
          ]),
          createBaseVNode("div", ee, [
            createBaseVNode("div", te, toDisplayString(e.FINAL_CONFIG.translations.exportPageLabel), 1),
            createBaseVNode("button", {
              id: "exportPage",
              onClick: r[3] || (r[3] = (n) => e.createXls("page")),
              style: normalizeStyle(`background:${e.FINAL_CONFIG.style.exportMenu.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.exportMenu.buttons.color}`)
            }, [
              createBaseVNode("div", {
                innerHTML: e.icons.fileDownload
              }, null, 8, se),
              createBaseVNode("span", null, toDisplayString(e.FINAL_CONFIG.translations.exportPageButton), 1)
            ], 4)
          ])
        ])
      ], 12, Z)
    ]),
    createBaseVNode("div", {
      class: "vue-ui-table__wrapper",
      style: normalizeStyle(`max-height:${e.FINAL_CONFIG.maxHeight}px`),
      ref: "tableWrapper"
    }, [
      createBaseVNode("table", re, [
        createBaseVNode("thead", ne, [
          createBaseVNode("tr", null, [
            le,
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.tableHead, (n, o) => (openBlock(), createElementBlock("th", {
              key: `thead_${o}`,
              style: normalizeStyle(`overflow: visible;background:${e.FINAL_CONFIG.style.th.backgroundColor};color:${e.FINAL_CONFIG.style.th.color};outline:${e.FINAL_CONFIG.style.th.outline}`),
              class: normalizeClass({ "th-has-nan": t.hasNaN[o] })
            }, [
              e.hasNumericTypes && ([t.constants.TEXT, t.constants.DATE].includes(n.type) || n.isPercentage) ? (openBlock(), createElementBlock("span", oe2, [
                createTextVNode(toDisplayString(n.name) + " ", 1),
                n.isPercentage ? (openBlock(), createElementBlock("span", ae, " / " + toDisplayString(n.percentageTo), 1)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("span", ie, toDisplayString(n.name), 1))
            ], 6))), 128))
          ]),
          e.hasNumericTypes ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("tr", null, [
              ce,
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.tableHead, (n, o) => (openBlock(), createElementBlock("th", {
                key: `thead_${o}`,
                class: normalizeClass({ "th-numeric": true, "th-has-nan": t.hasNaN[o] }),
                style: normalizeStyle(`background:${e.FINAL_CONFIG.style.th.backgroundColor};color:${e.FINAL_CONFIG.style.th.color};outline:${e.FINAL_CONFIG.style.th.outline}`)
              }, [
                n.sum && !t.hasNaN[o] ? (openBlock(), createElementBlock("span", ue, [
                  createBaseVNode("span", {
                    innerHTML: e.icons.sum,
                    style: { "margin-bottom": "-4px", "margin-right": "3px" }
                  }, null, 8, he),
                  createTextVNode(" " + toDisplayString(n.prefix) + " " + toDisplayString(Number(e.getSum(o).toFixed(n.decimals)).toLocaleString()) + " " + toDisplayString(n.suffix) + " ", 1),
                  t.percentages[o] && n.percentageTo && !n.isPercentage ? (openBlock(), createElementBlock("span", de, " (" + toDisplayString(isNaN(e.getSum(o) / e.getSum(t.percentages[o].referenceIndex)) ? "-" : (e.getSum(o) / e.getSum(t.percentages[o].referenceIndex) * 100).toFixed(n.decimals)) + "%) ", 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ], 6))), 128))
            ]),
            createBaseVNode("tr", null, [
              ge,
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.tableHead, (n, o) => (openBlock(), createElementBlock("th", {
                key: `thead_${o}`,
                class: normalizeClass({ "th-numeric": true, "th-has-nan": t.hasNaN[o] }),
                style: normalizeStyle(`background:${e.FINAL_CONFIG.style.th.backgroundColor};color:${e.FINAL_CONFIG.style.th.color};outline:${e.FINAL_CONFIG.style.th.outline}`)
              }, [
                n.average && !t.hasNaN[o] ? (openBlock(), createElementBlock("span", ye, " ~ " + toDisplayString(n.prefix) + " " + toDisplayString(isNaN(e.getAverage(o)) ? "" : Number(e.getAverage(o).toFixed(n.decimals)).toLocaleString()) + " " + toDisplayString(n.suffix), 1)) : createCommentVNode("", true)
              ], 6))), 128))
            ]),
            createBaseVNode("tr", null, [
              Ne,
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.tableHead, (n, o) => (openBlock(), createElementBlock("th", {
                key: `thead_${o}`,
                class: normalizeClass({ "th-has-nan": t.hasNaN[o] }),
                style: normalizeStyle(`background:${e.FINAL_CONFIG.style.th.backgroundColor};color:${e.FINAL_CONFIG.style.th.color};outline:${e.FINAL_CONFIG.style.th.outline}`)
              }, [
                createBaseVNode("div", be, [
                  n.type === t.constants.DATE && t.dates[o] ? (openBlock(), createElementBlock("div", me, [
                    createBaseVNode("div", fe, [
                      createBaseVNode("div", _e, [
                        createBaseVNode("label", {
                          for: `from_${o}`
                        }, toDisplayString(e.FINAL_CONFIG.translations.from), 9, Ce),
                        withDirectives(createBaseVNode("input", {
                          id: `from_${o}`,
                          type: "date",
                          "onUpdate:modelValue": (d) => t.dates[o].from = d,
                          onInput: (d) => {
                            e.filterBody(), e.setFilterDatesIndexes(o);
                          },
                          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
                        }, null, 44, Ie), [
                          [vModelText, t.dates[o].from]
                        ])
                      ]),
                      createBaseVNode("div", Fe, [
                        createBaseVNode("label", {
                          for: `to_${o}`
                        }, toDisplayString(e.FINAL_CONFIG.translations.to), 9, ve),
                        withDirectives(createBaseVNode("input", {
                          id: `to_${o}`,
                          type: "date",
                          "onUpdate:modelValue": (d) => t.dates[o].to = d,
                          onInput: (d) => {
                            e.filterBody(), e.setFilterDatesIndexes(o);
                          },
                          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
                        }, null, 44, ke), [
                          [vModelText, t.dates[o].to]
                        ])
                      ])
                    ]),
                    createBaseVNode("div", pe, [
                      n.isSort ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: (d) => e.sortTh(o, d),
                        class: normalizeClass({ "th-button-active": [t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) }),
                        style: normalizeStyle(`background:${[t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) ? "" : e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${[t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) ? "" : e.FINAL_CONFIG.style.pagination.buttons.color}`)
                      }, [
                        t.sorts[o] === t.constants.ASC ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          innerHTML: [t.constants.DATE].includes(n.type) ? e.icons.sort09 : e.icons.sortAZ
                        }, null, 8, Se)) : t.sorts[o] === t.constants.DESC ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          innerHTML: [t.constants.DATE].includes(n.type) ? e.icons.sort90 : e.icons.sortZA
                        }, null, 8, Oe)) : (openBlock(), createElementBlock("span", {
                          key: 2,
                          innerHTML: e.icons.arrowSort
                        }, null, 8, Le))
                      ], 14, we)) : createCommentVNode("", true),
                      createBaseVNode("button", {
                        onClick: (d) => {
                          e.resetDates(o), e.resetFilter(o, n, d);
                        },
                        disabled: !t.filteredDatesIndexes[o] && e.isResetDisabled(o, n),
                        class: "th-reset"
                      }, " ✖ ", 8, Ae)
                    ])
                  ])) : createCommentVNode("", true),
                  n.isSearch ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    placeholder: e.FINAL_CONFIG.translations.inputPlaceholder,
                    "onUpdate:modelValue": (d) => t.searches[o] = d,
                    onInput: r[4] || (r[4] = (d) => e.debounce(e.filterBody, 400)),
                    name: `search_${o}`,
                    style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
                  }, null, 44, De)), [
                    [vModelText, t.searches[o]]
                  ]) : createCommentVNode("", true),
                  !t.hasNaN[o] && n.isSort && n.type !== t.constants.DATE ? (openBlock(), createElementBlock("button", {
                    key: 2,
                    onClick: (d) => e.sortTh(o, d),
                    class: normalizeClass({ "th-button-active": [t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) }),
                    style: normalizeStyle(`background:${[t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) ? "" : e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${[t.constants.DESC, t.constants.ASC].includes(t.sorts[o]) ? "" : e.FINAL_CONFIG.style.pagination.buttons.color}`)
                  }, [
                    t.sorts[o] === t.constants.ASC ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      innerHTML: [t.constants.NUMERIC].includes(n.type) ? e.icons.sort09 : e.icons.sortZA
                    }, null, 8, Ge)) : t.sorts[o] === t.constants.DESC ? (openBlock(), createElementBlock("span", {
                      key: 1,
                      innerHTML: [t.constants.NUMERIC].includes(n.type) ? e.icons.sort90 : e.icons.sortAZ
                    }, null, 8, Me)) : (openBlock(), createElementBlock("span", {
                      key: 2,
                      innerHTML: e.icons.arrowSort
                    }, null, 8, Te))
                  ], 14, xe)) : createCommentVNode("", true),
                  n.isMultiselect ? (openBlock(), createElementBlock("button", {
                    key: 3,
                    onClick: (d) => e.toggleMultiselect(o, n, d),
                    innerHTML: e.icons.filter,
                    class: normalizeClass({ "th-button-active": t.multiselects[o] && t.multiselects[o].length !== e.getDropdownOptions(o).length }),
                    style: normalizeStyle(`background:${t.multiselects[o] && t.multiselects[o].length !== e.getDropdownOptions(o).length ? "" : e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${t.multiselects[o] && t.multiselects[o].length !== e.getDropdownOptions(o).length ? "" : e.FINAL_CONFIG.style.pagination.buttons.color}`)
                  }, null, 14, Ee)) : createCommentVNode("", true),
                  t.currentSelectionSpan.col === o && e.canChart ? (openBlock(), createElementBlock("button", {
                    key: 4,
                    onClick: r[5] || (r[5] = (d) => t.showChart = !t.showChart),
                    innerHTML: e.icons.chart,
                    class: normalizeClass({ "th-button-active": t.showChart }),
                    style: normalizeStyle(`background:${t.showChart ? "" : e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${t.showChart ? "" : e.FINAL_CONFIG.style.pagination.buttons.color}`)
                  }, null, 14, ze)) : createCommentVNode("", true),
                  n.rangeFilter && t.rangeFilters[o] && !t.hasNaN[o] ? (openBlock(), createElementBlock("div", Be, [
                    createBaseVNode("label", {
                      for: `rangeMin${o}`
                    }, [
                      Pe,
                      createTextVNode(" min "),
                      Re
                    ], 8, He),
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      id: `rangeMin${o}`,
                      max: t.immutableRangeFilters[o].max,
                      min: t.immutableRangeFilters[o].min,
                      "onUpdate:modelValue": (d) => t.rangeFilters[o].min = d,
                      onInput: r[6] || (r[6] = (d) => e.debounce(e.filterBody, 400)),
                      style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
                    }, null, 44, Ue), [
                      [
                        vModelText,
                        t.rangeFilters[o].min,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      id: `rangeMax${o}`,
                      max: t.immutableRangeFilters[o].max,
                      min: t.immutableRangeFilters[o].min,
                      "onUpdate:modelValue": (d) => t.rangeFilters[o].max = d,
                      onInput: r[7] || (r[7] = (d) => e.debounce(e.filterBody, 400)),
                      style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
                    }, null, 44, Ve), [
                      [
                        vModelText,
                        t.rangeFilters[o].max,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    createBaseVNode("label", {
                      for: `rangeMax${o}`
                    }, [
                      Xe,
                      createTextVNode(" max "),
                      We
                    ], 8, je)
                  ])) : createCommentVNode("", true),
                  e.canResetColumn(o, n) ? (openBlock(), createElementBlock("button", {
                    key: 6,
                    onClick: (d) => e.resetFilter(o, n, d),
                    disabled: e.isResetDisabled(o, n),
                    class: "th-reset"
                  }, " ✖ ", 8, Ye)) : createCommentVNode("", true),
                  n.isMultiselect ? (openBlock(), createElementBlock("div", {
                    key: 7,
                    class: "th-dropdown",
                    "data-is-open": "false",
                    id: `th_dropdown_${o}`,
                    style: normalizeStyle(`background:${e.FINAL_CONFIG.style.dropdowns.backgroundColor};color:${e.FINAL_CONFIG.style.dropdowns.color}`)
                  }, [
                    createBaseVNode("button", {
                      class: "close-dropdown",
                      onClick: (d) => e.toggleMultiselect(o, n, d),
                      style: normalizeStyle(`background:${e.FINAL_CONFIG.style.closeButtons.backgroundColor};color:${e.FINAL_CONFIG.style.closeButtons.color}`)
                    }, " ✖ ", 12, Ke),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(e.getDropdownOptions(o), (d, y) => (openBlock(), createElementBlock("span", {
                      class: "th-option",
                      key: `th_option_${o}_${y}`,
                      onClick: (m) => e.selectDropdownOption(d, o),
                      onKeyup: [
                        withKeys((m) => e.selectDropdownOption(d, o), ["enter"]),
                        withKeys((m) => e.selectDropdownOption(d, o), ["space"])
                      ],
                      style: normalizeStyle(`opacity:${e.isDropdownOptionSelected(d, o) ? 1 : 0.5}`),
                      tabindex: "0"
                    }, [
                      e.isDropdownOptionSelected(d, o) ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        style: normalizeStyle(`color:${e.FINAL_CONFIG.style.dropdowns.icons.selected.color};margin-right:5px`),
                        class: "th-icon-green"
                      }, toDisplayString(e.FINAL_CONFIG.style.dropdowns.icons.selected.unicode), 5)) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        style: normalizeStyle(`color:${e.FINAL_CONFIG.style.dropdowns.icons.unselected.color};margin-right:5px`),
                        class: "th-icon-red"
                      }, toDisplayString(e.FINAL_CONFIG.style.dropdowns.icons.unselected.unicode), 5)),
                      createBaseVNode("span", null, toDisplayString(d), 1)
                    ], 44, qe))), 128))
                  ], 12, Ze)) : createCommentVNode("", true)
                ])
              ], 6))), 128))
            ])
          ], 64)) : createCommentVNode("", true),
          createBaseVNode("tr", null, [
            Je,
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.tableHead, (n, o) => (openBlock(), createElementBlock("th", {
              key: `col_selector_${o}`,
              class: normalizeClass({ "vue-ui-table-col-selector": !t.hasNaN[o], "th-has-nan": t.hasNaN[o] }),
              style: normalizeStyle(`background:${o === t.selectedColumn && !t.hasNaN[o] ? e.FINAL_CONFIG.style.th.selected.backgroundColor : e.FINAL_CONFIG.style.th.backgroundColor};color:${o === t.selectedColumn && !t.hasNaN[o] ? e.FINAL_CONFIG.style.th.selected.color : e.FINAL_CONFIG.style.th.color};outline:${e.FINAL_CONFIG.style.th.outline}`)
            }, [
              t.hasNaN[o] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                key: 0,
                innerHTML: t.tableHead[o].type === t.constants.NUMERIC ? e.icons.chevronDown : "",
                class: normalizeClass({ "col-selector": t.tableHead[o].type === t.constants.NUMERIC }),
                tabindex: "0",
                onClick: withModifiers((d) => e.selectColumn(o), ["stop"]),
                onKeyup: withKeys((d) => e.selectColumn(o), ["enter"])
              }, null, 42, Qe2))
            ], 6))), 128))
          ])
        ]),
        createBaseVNode("tbody", {
          onClick: r[8] || (r[8] = (...n) => e.closeAllDropdowns && e.closeAllDropdowns(...n)),
          onKeydown: r[9] || (r[9] = (n) => e.navigateCell(n))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.visibleRows, (n, o) => (openBlock(), createElementBlock("tr", {
            key: `tbody_${o}`,
            "data-row": o % 2 === 0 ? "odd" : "even",
            class: normalizeClass(`tr_${t.uid}`),
            style: normalizeStyle(`${o % 2 === 0 ? `background:${e.FINAL_CONFIG.style.rows.odd.backgroundColor};color:${e.FINAL_CONFIG.style.rows.odd.color}` : `background:${e.FINAL_CONFIG.style.rows.even.backgroundColor};color:${e.FINAL_CONFIG.style.rows.even.color}`}`)
          }, [
            createBaseVNode("td", {
              class: "vue-ui-table-td-iteration",
              "data-row": o % 2 === 0 ? "odd" : "even"
            }, toDisplayString(n.absoluteIndex + 1), 9, et2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(n.td, (d, y) => (openBlock(), createElementBlock("td", {
              "data-row": o % 2 === 0 ? "odd" : "even",
              key: `td_${o}_${y}`,
              style: normalizeStyle(e.isNumeric(d) || l.dataset.header[y].type === t.constants.DATE ? "text-align:right;font-variant-numeric: tabular-nums;" : ""),
              onClick: (m) => e.selectTd({
                td: d,
                rowIndex: o,
                colIndex: y,
                headerType: l.dataset.header[y].type,
                event: m
              }),
              onKeyup: [
                withKeys((m) => e.selectTd({
                  td: d,
                  rowIndex: o,
                  colIndex: y,
                  headerType: l.dataset.header[y].type,
                  event: m
                }), ["enter"]),
                withKeys((m) => e.selectTd({
                  td: d,
                  rowIndex: o,
                  colIndex: y,
                  headerType: l.dataset.header[y].type,
                  event: m
                }), ["space"])
              ],
              class: normalizeClass({ "td-numeric": l.dataset.header[y].type === t.constants.NUMERIC, "td-focusable": true, "td-has-nan": t.hasNaN[y] }),
              id: `cell_${o}_${y}_${t.uid}`,
              tabindex: "0"
            }, [
              n.meta && n.meta.markerIndices.includes(y) && n.meta.unicodeIcon ? (openBlock(), createElementBlock("span", {
                key: 0,
                style: normalizeStyle(`color:${n.meta.color};margin-right:3px`),
                innerHTML: n.meta.unicodeIcon
              }, null, 12, st)) : createCommentVNode("", true),
              l.dataset.header[y].type === t.constants.DATE ? (openBlock(), createElementBlock("span", rt, toDisplayString(l.dataset.header[y].prefix) + " " + toDisplayString(new Date(d).toLocaleString().slice(0, 10)) + " " + toDisplayString(l.dataset.header[y].suffix), 1)) : l.dataset.header[y].isPercentage ? (openBlock(), createElementBlock("span", nt, toDisplayString(Number((d * 100).toFixed(l.dataset.header[y].decimals)).toLocaleString()) + "% ", 1)) : t.percentages[y] && l.dataset.header[y].percentageTo && !l.dataset.header[y].isPercentage ? (openBlock(), createElementBlock("span", {
                key: 3,
                class: normalizeClass({ "td-nan": isNaN(Number(d)) })
              }, toDisplayString(l.dataset.header[y].prefix) + " " + toDisplayString(isNaN(Number(d)) ? `${d} is not ${t.constants.NUMERIC}` : Number(d.toFixed(l.dataset.header[y].decimals)).toLocaleString()) + " " + toDisplayString(l.dataset.header[y].suffix) + " (" + toDisplayString(isNaN(Number(d)) ? "" : Number((d / e.getSum(t.percentages[y].referenceIndex) * 100).toFixed(l.dataset.header[y].decimals)).toLocaleString()) + "%) ", 3)) : l.dataset.header[y].type === t.constants.NUMERIC ? (openBlock(), createElementBlock("span", {
                key: 4,
                class: normalizeClass({ "td-nan": isNaN(Number(d)) })
              }, toDisplayString(l.dataset.header[y].prefix) + " " + toDisplayString(isNaN(Number(d)) ? `${d} is not ${t.constants.NUMERIC}` : Number(d.toFixed(l.dataset.header[y].decimals)).toLocaleString()) + " " + toDisplayString(l.dataset.header[y].suffix), 3)) : (openBlock(), createElementBlock("span", lt, toDisplayString(l.dataset.header[y].prefix) + " " + toDisplayString(d) + " " + toDisplayString(l.dataset.header[y].suffix), 1))
            ], 46, tt))), 128))
          ], 14, $e))), 128))
        ], 32)
      ])
    ], 4),
    createBaseVNode("div", {
      class: normalizeClass({ "td-selector-info": true, "td-selector-info--active": t.currentSelectionSpan.col !== void 0 && t.currentSelectionSpan.rows.length }),
      style: normalizeStyle(`background:${e.FINAL_CONFIG.style.infoBar.backgroundColor};color:${e.FINAL_CONFIG.style.infoBar.color}`)
    }, [
      t.currentSelectionSpan.col !== void 0 && t.currentSelectionSpan.rows.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", {
          innerHTML: e.icons.table,
          class: "td-selector-icon"
        }, null, 8, ot),
        createBaseVNode("span", null, [
          createBaseVNode("b", null, [
            createTextVNode(toDisplayString(l.dataset.header[t.currentSelectionSpan.col].name) + " ", 1),
            l.dataset.header[t.currentSelectionSpan.col].isPercentage ? (openBlock(), createElementBlock("span", at2, " / " + toDisplayString(l.dataset.header[t.percentages[t.currentSelectionSpan.col].referenceIndex].name), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("span", it, [
            createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.nb) + " : ", 1),
            createBaseVNode("b", ct, toDisplayString(t.currentSelectionSpan.rows.length), 1)
          ]),
          createBaseVNode("span", ut, [
            createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.sum) + " : ", 1),
            l.dataset.header[t.currentSelectionSpan.col].isPercentage ? (openBlock(), createElementBlock("b", ht, toDisplayString(e.selectedCellsCalculations.sumPercentage), 1)) : (openBlock(), createElementBlock("b", dt, toDisplayString(l.dataset.header[t.currentSelectionSpan.col].prefix) + " " + toDisplayString(e.selectedCellsCalculations.sumRegular) + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].suffix), 1)),
            l.dataset.header[t.currentSelectionSpan.col].isPercentage ? (openBlock(), createElementBlock("b", gt2, "%")) : createCommentVNode("", true)
          ]),
          createBaseVNode("span", yt, [
            createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.average) + " : ", 1),
            l.dataset.header[t.currentSelectionSpan.col].isPercentage ? (openBlock(), createElementBlock("b", Nt2, toDisplayString(e.selectedCellsCalculations.averagePercentage), 1)) : (openBlock(), createElementBlock("b", bt, toDisplayString(l.dataset.header[t.currentSelectionSpan.col].prefix) + " " + toDisplayString(e.selectedCellsCalculations.averageRegular) + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].suffix), 1)),
            l.dataset.header[t.currentSelectionSpan.col].isPercentage ? (openBlock(), createElementBlock("b", mt, "%")) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("button", {
          onClick: r[10] || (r[10] = (...n) => e.resetSelection && e.resetSelection(...n)),
          class: "td-selector-info-reset",
          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.closeButtons.backgroundColor};color:${e.FINAL_CONFIG.style.closeButtons.color};border-radius:${e.FINAL_CONFIG.style.closeButtons.borderRadius}`)
        }, " ✖ ", 4)
      ], 64)) : createCommentVNode("", true)
    ], 6),
    t.bodyCopy.length > 10 ? (openBlock(), createElementBlock("div", ft, [
      createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.totalRows) + " : " + toDisplayString(l.dataset.body.length) + " | " + toDisplayString(e.FINAL_CONFIG.translations.paginatorLabel) + " : ", 1),
      t.bodyCopy.length > 10 ? withDirectives((openBlock(), createElementBlock("select", {
        key: 0,
        id: "paginatorSelector",
        "onUpdate:modelValue": r[11] || (r[11] = (n) => t.itemsPerPage = n),
        onChange: r[12] || (r[12] = (...n) => e.resetSelection && e.resetSelection(...n)),
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border}`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.paginatorOptions, (n, o) => (openBlock(), createElementBlock(Fragment, null, [
          t.bodyCopy.length > n || l.dataset.body.length === n ? (openBlock(), createElementBlock("option", {
            key: `paginator_option_${o}`
          }, toDisplayString(n), 1)) : createCommentVNode("", true)
        ], 64))), 256))
      ], 36)), [
        [
          vModelSelect,
          t.itemsPerPage,
          void 0,
          { number: true }
        ]
      ]) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    t.itemsPerPage >= 250 ? (openBlock(), createElementBlock("div", _t, [
      createBaseVNode("span", {
        innerHTML: e.icons.warning
      }, null, 8, Ct),
      createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.sizeWarning), 1)
    ])) : createCommentVNode("", true),
    e.pages.length > 1 && e.pages.length <= 10 ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: "vue-ui-table-navigation-indicator",
      style: normalizeStyle(`background:${e.FINAL_CONFIG.style.pagination.navigationIndicator.backgroundColor};width:calc(${t.currentPage / (e.pages.length - 1) * 100}%)`)
    }, null, 4)) : createCommentVNode("", true),
    e.pages.length > 1 ? (openBlock(), createElementBlock("div", It, [
      createBaseVNode("button", {
        class: "vue-ui-table-navigation",
        onClick: r[13] || (r[13] = withModifiers((n) => e.navigate("previous"), ["stop"])),
        innerHTML: e.icons.chevronLeft,
        disabled: t.currentPage === 0,
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.pagination.buttons.color};opacity:${t.currentPage === 0 ? e.FINAL_CONFIG.style.pagination.buttons.opacityDisabled : 1}`)
      }, null, 12, Ft),
      e.pages.length > 3 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("button", {
          class: "vue-ui-table-navigation",
          onClick: r[14] || (r[14] = withModifiers((n) => e.navigate(1), ["stop"])),
          disabled: t.currentPage === 0,
          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.pagination.buttons.color};opacity:${t.currentPage === 0 ? e.FINAL_CONFIG.style.pagination.buttons.opacityDisabled : 1}`)
        }, " 1 ", 12, vt),
        e.pages.length > 10 ? (openBlock(), createElementBlock("div", kt, [
          createBaseVNode("label", pt, toDisplayString(e.FINAL_CONFIG.translations.page) + " " + toDisplayString(t.currentPage + 1) + " / " + toDisplayString(e.pages.length), 1),
          createBaseVNode("input", {
            class: "vue-ui-table-page-scroller",
            id: "pageScroller",
            type: "range",
            step: "1",
            min: 0,
            max: e.pages.length - 1,
            onInput: r[15] || (r[15] = (n) => e.updateCurrentPage(n)),
            value: t.currentPage,
            style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border};accent-color:${e.FINAL_CONFIG.style.inputs.accentColor}`)
          }, null, 44, wt)
        ])) : (openBlock(), createElementBlock("span", St, toDisplayString(e.FINAL_CONFIG.translations.page) + " " + toDisplayString(t.currentPage + 1) + " / " + toDisplayString(e.pages.length), 1)),
        createBaseVNode("button", {
          class: "vue-ui-table-navigation",
          onClick: r[16] || (r[16] = withModifiers((n) => e.navigate(e.pages.length), ["stop"])),
          disabled: t.currentPage === e.pages.length - 1,
          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.pagination.buttons.color};opacity:${t.currentPage === e.pages.length - 1 ? e.FINAL_CONFIG.style.pagination.buttons.opacityDisabled : 1}`)
        }, toDisplayString(e.pages.length), 13, Ot2)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(toDisplayString(e.FINAL_CONFIG.translations.page) + " " + toDisplayString(t.currentPage + 1) + " / " + toDisplayString(e.pages.length), 1)
      ], 64)),
      createBaseVNode("button", {
        class: "vue-ui-table-navigation",
        onClick: r[17] || (r[17] = withModifiers((n) => e.navigate("next"), ["stop"])),
        innerHTML: e.icons.chevronRight,
        disabled: t.currentPage === e.pages.length - 1,
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.pagination.buttons.backgroundColor};color:${e.FINAL_CONFIG.style.pagination.buttons.color};opacity:${t.currentPage === e.pages.length - 1 ? e.FINAL_CONFIG.style.pagination.buttons.opacityDisabled : 1}`)
      }, null, 12, Lt)
    ])) : createCommentVNode("", true),
    t.showChart && e.canChart ? (openBlock(), createElementBlock("div", {
      key: 4,
      class: "vue-ui-table-chart-modal",
      style: normalizeStyle(`top:${t.clientY}px; left:${t.clientX}px;background:${e.FINAL_CONFIG.style.chart.modal.backgroundColor};color:${e.FINAL_CONFIG.style.chart.modal.color}`)
    }, [
      createBaseVNode("button", {
        class: "close-chart-modal",
        onClick: r[18] || (r[18] = (n) => t.showChart = false),
        style: normalizeStyle(`background:${e.FINAL_CONFIG.style.closeButtons.backgroundColor};color:${e.FINAL_CONFIG.style.closeButtons.color};border-radius:${e.FINAL_CONFIG.style.closeButtons.borderRadius}`)
      }, " ✖ ", 4),
      createBaseVNode("div", At, [
        e.availableDonutCategories.length ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: r[19] || (r[19] = (n) => t.showDonutOptions = true),
          innerHTML: e.icons.donut,
          class: normalizeClass({ "is-active-chart": t.chart.type === t.constants.DONUT || t.showDonutOptions }),
          style: normalizeStyle(`background:${t.chart.type === t.constants.DONUT || t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.backgroundColor : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.backgroundColor};color:${t.chart.type === t.constants.DONUT || t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.color : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.color}`)
        }, null, 14, Dt)) : createCommentVNode("", true),
        createBaseVNode("button", {
          onClick: r[20] || (r[20] = (n) => {
            t.chart.type = t.constants.LINE, t.showDonutOptions = false;
          }),
          innerHTML: e.icons.chart,
          class: normalizeClass({ "is-active-chart": t.chart.type === t.constants.LINE && !t.showDonutOptions }),
          style: normalizeStyle(`background:${t.chart.type === t.constants.LINE && !t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.backgroundColor : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.backgroundColor};color:${t.chart.type === t.constants.LINE && !t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.color : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.color}`)
        }, null, 14, xt),
        createBaseVNode("button", {
          onClick: r[21] || (r[21] = (n) => {
            t.chart.type = t.constants.BAR, t.showDonutOptions = false;
          }),
          innerHTML: e.icons.bar,
          class: normalizeClass({ "is-active-chart": t.chart.type === t.constants.BAR && !t.showDonutOptions }),
          style: normalizeStyle(`background:${t.chart.type === t.constants.BAR && !t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.backgroundColor : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.backgroundColor};color:${t.chart.type === t.constants.BAR && !t.showDonutOptions ? e.FINAL_CONFIG.style.chart.modal.buttons.selected.color : e.FINAL_CONFIG.style.chart.modal.buttons.unselected.color}`)
        }, null, 14, Gt)
      ]),
      createBaseVNode("div", Mt, [
        createBaseVNode("b", null, [
          createTextVNode(toDisplayString(l.dataset.header[t.currentSelectionSpan.col].name) + " ", 1),
          l.dataset.header[t.currentSelectionSpan.col].isPercentage && l.dataset.header[t.currentSelectionSpan.col].percentageTo ? (openBlock(), createElementBlock("span", Tt, " / " + toDisplayString(l.dataset.header[t.percentages[t.currentSelectionSpan.col].referenceIndex].name), 1)) : createCommentVNode("", true),
          t.chart.type === t.constants.DONUT && t.selectedDonutCategory && t.selectedDonutCategory.name ? (openBlock(), createElementBlock("span", Et2, toDisplayString(e.FINAL_CONFIG.translations.by) + " " + toDisplayString(t.selectedDonutCategory.name), 1)) : createCommentVNode("", true)
        ])
      ]),
      createBaseVNode("div", zt, [
        t.showDonutOptions && e.availableDonutCategories.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`background:${e.FINAL_CONFIG.style.chart.modal.backgroundColor};color:${e.FINAL_CONFIG.style.chart.modal.color}`)
        }, [
          createBaseVNode("fieldset", Bt, [
            createBaseVNode("legend", null, toDisplayString(e.FINAL_CONFIG.translations.chooseCategoryColumn), 1),
            createBaseVNode("div", Ht, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.availableDonutCategories, (n, o) => (openBlock(), createElementBlock("div", {
                key: `donut_radio_${o}`,
                class: "vue-ui-table-fieldset-option"
              }, [
                createBaseVNode("input", {
                  type: "radio",
                  name: n.name,
                  id: n.name,
                  checked: t.selectedDonutCategory && n.name === t.selectedDonutCategory.name,
                  onInput: (d) => t.selectedDonutCategory = e.availableDonutCategories[o],
                  style: normalizeStyle(`background:${e.FINAL_CONFIG.style.inputs.backgroundColor};color:${e.FINAL_CONFIG.style.inputs.color};border:${e.FINAL_CONFIG.style.inputs.border};accent-color:${e.FINAL_CONFIG.style.inputs.accentColor}`)
                }, null, 44, Pt),
                createBaseVNode("label", {
                  for: n.name
                }, toDisplayString(n.name), 9, Rt)
              ]))), 128))
            ]),
            createBaseVNode("button", {
              class: "vue-ui-table-generate-donut",
              disabled: !t.selectedDonutCategory,
              onClick: r[22] || (r[22] = (...n) => e.applyDonutOption && e.applyDonutOption(...n)),
              style: normalizeStyle(`background:${e.FINAL_CONFIG.style.chart.modal.buttons.selected.backgroundColor};color:${e.FINAL_CONFIG.style.chart.modal.buttons.selected.color}`)
            }, [
              createBaseVNode("div", {
                style: { "margin-bottom": "-3px" },
                innerHTML: e.icons.donut
              }, null, 8, Vt),
              createTextVNode(" " + toDisplayString(e.FINAL_CONFIG.translations.makeDonut), 1)
            ], 12, Ut)
          ])
        ], 4)) : createCommentVNode("", true),
        [t.constants.BAR, t.constants.LINE].includes(t.chart.type) && !t.showDonutOptions ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          (openBlock(), createElementBlock("svg", {
            viewBox: `0 0 ${t.chart.width} ${t.chart.height}`,
            class: "vue-ui-table-chart-svg",
            style: normalizeStyle(`background:${e.FINAL_CONFIG.style.chart.layout.backgroundColor}`)
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("marker", {
                id: "arrowhead",
                markerWidth: e.FINAL_CONFIG.style.chart.layout.progression.arrowSize,
                markerHeight: e.FINAL_CONFIG.style.chart.layout.progression.arrowSize,
                refX: "0",
                refY: e.FINAL_CONFIG.style.chart.layout.progression.arrowSize / 2,
                orient: "auto"
              }, [
                createBaseVNode("polygon", {
                  points: `0 0, ${e.FINAL_CONFIG.style.chart.layout.progression.arrowSize} ${e.FINAL_CONFIG.style.chart.layout.progression.arrowSize / 2}, 0 ${e.FINAL_CONFIG.style.chart.layout.progression.arrowSize}`,
                  fill: e.FINAL_CONFIG.style.chart.layout.progression.stroke
                }, null, 8, Wt)
              ], 8, Xt)
            ]),
            createBaseVNode("g", null, [
              createBaseVNode("line", {
                x1: 0,
                x2: t.chart.width,
                y1: e.chartData.zero,
                y2: e.chartData.zero,
                stroke: e.FINAL_CONFIG.style.chart.layout.axis.stroke,
                "stroke-width": e.FINAL_CONFIG.style.chart.layout.axis.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, Yt),
              createBaseVNode("line", {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: t.chart.height,
                stroke: e.FINAL_CONFIG.style.chart.layout.axis.stroke,
                "stroke-width": e.FINAL_CONFIG.style.chart.layout.axis.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, Zt)
            ]),
            t.chart.type === t.constants.LINE ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.chartData.plots, (n, o) => (openBlock(), createElementBlock("g", {
              key: `trap_fill_${o}`
            }, [
              createBaseVNode("rect", {
                x: o * e.chartData.slot,
                y: 0,
                width: e.chartData.slot,
                height: t.chart.height,
                fill: t.selectedPlot === o ? "rgba(0,0,0,0.03)" : "transparent"
              }, null, 8, Kt)
            ]))), 128)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.chartData.plots, (n, o) => (openBlock(), createElementBlock("g", {
              key: `plot_${o}`
            }, [
              t.chart.type === t.constants.BAR ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                qt,
                createBaseVNode("rect", {
                  x: n.x - e.chartData.slot / 2,
                  y: e.chartData.isAllNegative ? 0 : e.calcRectY(n.value, n.y),
                  height: n.value >= 0 ? e.chartData.zero - n.y : e.chartData.isAllNegative ? n.y : n.y - e.chartData.zero,
                  width: e.chartData.slot,
                  fill: e.FINAL_CONFIG.style.chart.layout.bar.fill ? e.FINAL_CONFIG.style.chart.layout.bar.fill : t.selectedPlot === o ? n.value >= 0 ? "url(#barGradientSelected)" : "url(#barGradientSelectedNeg)" : (n.value >= 0, "url(#barGradient)"),
                  stroke: e.FINAL_CONFIG.style.chart.layout.bar.stroke,
                  "stroke-width": "1"
                }, null, 8, Jt),
                t.selectedPlot === o ? (openBlock(), createElementBlock("foreignObject", {
                  key: 0,
                  x: n.x - (e.chartData.slot < 100 ? 50 : e.chartData.slot / 2),
                  y: n.value >= 0 ? n.y - 32 : n.y + 4,
                  height: "20",
                  width: e.chartData.slot < 100 ? 100 : e.chartData.slot,
                  style: { overflow: "visible" }
                }, [
                  createBaseVNode("div", {
                    style: normalizeStyle(`width:100%;text-align:center;font-size:20px;color:${e.FINAL_CONFIG.style.chart.layout.labels.color}`)
                  }, toDisplayString(n.prefix) + " " + toDisplayString(Number(n.value.toFixed(l.dataset.header[t.currentSelectionSpan.col].decimals)).toLocaleString()) + " " + toDisplayString(n.suffix), 5)
                ], 8, Qt)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true),
              t.chart.type === t.constants.LINE ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                o + 1 < e.chartData.plots.length ? (openBlock(), createElementBlock("line", {
                  key: 0,
                  x1: n.x,
                  y1: n.y,
                  x2: e.chartData.plots[o + 1].x,
                  y2: e.chartData.plots[o + 1].y,
                  "stroke-width": e.FINAL_CONFIG.style.chart.layout.line.strokeWidth,
                  stroke: e.FINAL_CONFIG.style.chart.layout.line.stroke
                }, null, 8, $t)) : createCommentVNode("", true),
                t.selectedPlot === o ? (openBlock(), createElementBlock("line", {
                  key: 1,
                  x1: n.x,
                  y1: n.y,
                  x2: n.x,
                  y2: t.chart.height,
                  stroke: e.FINAL_CONFIG.style.chart.layout.line.selector.stroke,
                  "stroke-width": e.FINAL_CONFIG.style.chart.layout.line.selector.strokeWidth,
                  "stroke-dasharray": e.FINAL_CONFIG.style.chart.layout.line.selector.strokeDasharray
                }, null, 8, es)) : createCommentVNode("", true),
                createBaseVNode("circle", {
                  cx: n.x,
                  cy: n.y,
                  r: t.selectedPlot === o ? e.FINAL_CONFIG.style.chart.layout.line.plot.radius.selected : e.FINAL_CONFIG.style.chart.layout.line.plot.radius.unselected,
                  fill: e.FINAL_CONFIG.style.chart.layout.line.plot.fill,
                  stroke: e.FINAL_CONFIG.style.chart.layout.line.plot.stroke,
                  "stroke-width": e.FINAL_CONFIG.style.chart.layout.line.plot.strokeWidth
                }, null, 8, ts),
                t.selectedPlot === o ? (openBlock(), createElementBlock("foreignObject", {
                  key: 2,
                  x: n.x - (e.chartData.slot < 100 ? 50 : e.chartData.slot / 2),
                  y: e.placeLabelOnTopOrBottom({
                    previousPlot: e.chartData.plots[o - 1],
                    currentPlot: n,
                    nextPlot: e.chartData.plots[o + 1]
                  }),
                  height: "20",
                  width: e.chartData.slot < 100 ? 100 : e.chartData.slot,
                  style: { overflow: "visible" }
                }, [
                  createBaseVNode("div", {
                    style: normalizeStyle(`width:100%;text-align:center;font-size:20px;color:${e.FINAL_CONFIG.style.chart.layout.labels.color}`)
                  }, toDisplayString(n.prefix) + " " + toDisplayString(Number(n.value.toFixed(l.dataset.header[t.currentSelectionSpan.col].decimals)).toLocaleString()) + " " + toDisplayString(n.suffix), 5)
                ], 8, ss)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
            ]))), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.chartData.plots, (n, o) => (openBlock(), createElementBlock("g", {
              key: `trap_${o}`
            }, [
              createBaseVNode("rect", {
                x: o * e.chartData.slot,
                y: 0,
                width: e.chartData.slot,
                height: t.chart.height,
                fill: "transparent",
                onMouseenter: (d) => t.selectedPlot = o,
                onMouseleave: r[23] || (r[23] = (d) => t.selectedPlot = void 0)
              }, null, 40, rs)
            ]))), 128)),
            e.chartData.progression && e.chartData.plots.length > 2 ? (openBlock(), createElementBlock("line", {
              key: 1,
              x1: e.chartData.progression.x1,
              y1: e.chartData.progression.y1,
              x2: e.chartData.progression.x2,
              y2: e.chartData.progression.y2,
              stroke: e.FINAL_CONFIG.style.chart.layout.progression.stroke,
              "stroke-width": e.FINAL_CONFIG.style.chart.layout.progression.strokeWidth,
              "stroke-dasharray": e.FINAL_CONFIG.style.chart.layout.progression.strokeDasharray,
              "marker-end": "url(#arrowhead)"
            }, null, 8, ns)) : createCommentVNode("", true)
          ], 12, jt)),
          e.chartData.plots.length >= 2 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "chart-trend",
            style: normalizeStyle(`color:${e.FINAL_CONFIG.style.chart.modal.color}`)
          }, [
            ls,
            createTextVNode(" Trend: " + toDisplayString((e.chartData.progression.trend * 100).toFixed(1)) + " % ", 1)
          ], 4)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        [t.constants.DONUT].includes(t.chart.type) && !t.showDonutOptions ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          (openBlock(), createElementBlock("svg", {
            viewBox: "0 0 100 100",
            style: normalizeStyle(`max-width:100%; overflow: visible; padding: 0 24px;background:${e.FINAL_CONFIG.style.chart.layout.backgroundColor}`),
            class: "vue-ui-table-donut-chart"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.currentDonut, (n, o) => (openBlock(), createElementBlock("path", {
              key: `arc_${o}`,
              d: n.path,
              stroke: `${n.color}CC`,
              "stroke-width": 20,
              fill: "none"
            }, null, 8, os))), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.currentDonut, (n, o) => (openBlock(), createElementBlock("foreignObject", {
              key: `text_marker_${o}`,
              x: e.calcDonutMarkerLabelPositionX(n) - 15,
              y: n.center.endY - 15,
              height: "30",
              width: "30",
              style: { overflow: "visible", display: "flex", "align-items": "center", "justify-content": "center" }
            }, [
              e.isArcBigEnough(n) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "vue-ui-table-donut-label",
                style: normalizeStyle(`color:${e.FINAL_CONFIG.style.chart.layout.labels.color}`)
              }, [
                createBaseVNode("b", null, toDisplayString(e.displayArcPercentage(n, t.currentDonut)), 1),
                createBaseVNode("span", is, toDisplayString(n.name), 1)
              ], 4)) : createCommentVNode("", true)
            ], 8, as))), 128)),
            createBaseVNode("text", {
              x: 50,
              y: 42,
              "text-anchor": "middle",
              "font-size": "6",
              fill: e.FINAL_CONFIG.style.chart.layout.labels.color
            }, toDisplayString(e.FINAL_CONFIG.translations.total), 9, cs),
            createBaseVNode("text", {
              x: 50,
              y: 48,
              "text-anchor": "middle",
              "font-size": "4",
              fill: e.FINAL_CONFIG.style.chart.layout.labels.color
            }, toDisplayString(l.dataset.header[t.currentSelectionSpan.col].prefix) + " " + toDisplayString(e.donutHollowLabels.total) + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].suffix), 9, us),
            createBaseVNode("text", {
              x: 50,
              y: 56,
              "text-anchor": "middle",
              "font-size": "6",
              fill: e.FINAL_CONFIG.style.chart.layout.labels.color
            }, toDisplayString(e.FINAL_CONFIG.translations.average), 9, hs),
            createBaseVNode("text", {
              x: 50,
              y: 62,
              "text-anchor": "middle",
              "font-size": "4",
              fill: e.FINAL_CONFIG.style.chart.layout.labels.color
            }, toDisplayString(l.dataset.header[t.currentSelectionSpan.col].prefix) + " " + toDisplayString(e.donutHollowLabels.average) + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].suffix), 9, ds)
          ], 4)),
          createBaseVNode("div", gs, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.currentDonut.filter((n) => n.value > 0), (n, o) => (openBlock(), createElementBlock("div", {
              class: "vue-ui-table-donut-legend-item",
              key: `donut_legend_${o}`,
              style: normalizeStyle(`color:${e.FINAL_CONFIG.style.chart.layout.labels.color}`)
            }, [
              createBaseVNode("span", {
                style: normalizeStyle(`color:${n.color}`)
              }, "●", 4),
              createBaseVNode("span", null, toDisplayString(n.name) + " : ", 1),
              createBaseVNode("b", null, toDisplayString(l.dataset.header[t.currentSelectionSpan.col].prefix) + " " + toDisplayString(e.getDonutLegendValue(n.absoluteValue)) + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + toDisplayString(l.dataset.header[t.currentSelectionSpan.col].suffix), 1),
              createBaseVNode("span", null, "(" + toDisplayString((n.proportion * 100).toFixed(1)) + "%)", 1)
            ], 4))), 128))
          ])
        ], 64)) : createCommentVNode("", true)
      ], 512)
    ], 4)) : createCommentVNode("", true)
  ], 4);
}
var fs = s(X, [["render", ys], ["__scopeId", "data-v-5a108fbd"]]);
export {
  fs as default
};
//# sourceMappingURL=vue-ui-table-CmVi0nv2-DF55H5RC.js.map
