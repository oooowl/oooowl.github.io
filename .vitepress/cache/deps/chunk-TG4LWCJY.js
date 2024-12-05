import {
  defineAsyncComponent
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/index-DDXisDKy.js
function oe() {
  const o = "#2D353C", l = "#A1A1A1", e = "#e1e5e8", a = "#CCCCCC", s = "#4A4A4A", t = "#FFFFFF", c = "#fafafa", n = "#5f8bee", u = "#dc3912", i = "#2ca02c", f = "#42d392", d = "#FFD055", r = {
    _10: 10,
    _12: 12,
    _14: 14,
    _16: 16,
    _18: 18,
    _20: 20,
    _24: 24,
    _32: 32,
    _48: 48
  }, A = {
    LINE: "line",
    SQUARE: "square",
    ROUND: "round",
    CIRCLE: "circle",
    CURVED: "curved",
    BAR: "bar",
    STAR: "star"
  }, C = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
    BOTTOM: "bottom",
    TOP: "top"
  }, x = {
    ASC: "asc",
    DESC: "desc"
  }, b = {
    text: "",
    color: o,
    fontSize: r._20,
    bold: true,
    textAlign: C.CENTER,
    paddingLeft: 0,
    paddingRight: 0,
    subtitle: {
      color: l,
      text: "",
      fontSize: r._16,
      bold: false
    }
  }, m = {
    show: true,
    bold: false,
    backgroundColor: t,
    color: o,
    fontSize: r._14
  }, p = {
    show: true,
    color: o,
    backgroundColor: t,
    fontSize: r._14,
    customFormat: null,
    borderRadius: 4,
    borderColor: e,
    borderWidth: 1,
    backgroundOpacity: 100,
    position: C.CENTER,
    offsetY: 24
  }, h = ({
    tooltip: L = false,
    pdf: N = false,
    csv: M = false,
    img: V = false,
    table: I = false,
    labels: W = false,
    fullscreen: U = false,
    sort: G = false,
    stack: Y = false,
    animation: H = false
  }) => {
    const w = {
      open: "Open options",
      close: "Close options",
      tooltip: "Toggle tooltip",
      pdf: "Download PDF",
      csv: "Download CSV",
      img: "Download PNG",
      table: "Toggle table",
      labels: "Toggle labels",
      fullscreen: "Toggle fullscreen",
      sort: "Toggle sort",
      stack: "Toggle stack mode",
      animation: "Toggle animation"
    };
    return L || delete w.tooltip, N || delete w.pdf, M || delete w.csv, V || delete w.img, I || delete w.table, W || delete w.labels, U || delete w.fullscreen, G || delete w.sort, Y || delete w.stack, H || delete w.animation, {
      show: true,
      position: "right",
      buttons: {
        tooltip: L,
        pdf: N,
        csv: M,
        img: V,
        table: I,
        labels: W,
        fullscreen: U,
        sort: G,
        stack: Y,
        animation: H
      },
      buttonTitles: w
    };
  }, E = (L) => ({
    top: L[0],
    right: L[1],
    bottom: L[2],
    left: L[3]
  }), F = {
    backgroundColor: c,
    color: o,
    outline: "none"
  }, y = {
    backgroundColor: t,
    color: o,
    outline: "none"
  }, _ = {
    show: false,
    responsiveBreakpoint: 400
  }, S = {
    show: true,
    color: a,
    highlightColor: s,
    fontSize: r._14,
    useResetSlot: false
  }, D = {
    show: false,
    smooth: false,
    selectedColor: "#1f77b4",
    selectedColorOpacity: 0.2,
    lineColor: "#2D353C",
    selectionRadius: 2,
    indicatorColor: "#2D353C"
  }, q = {
    theme: "",
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    orientation: "vertical",
    // or 'horizontal'
    table: {
      ..._,
      columnNames: {
        period: "Period",
        total: "Total"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
      // IDEA : add a distributed toggle ?
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 500,
        width: 800,
        padding: E([24, 24, 36, 48]),
        title: b,
        legend: m,
        zoom: S,
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        },
        highlighter: {
          color: o,
          opacity: 5
        },
        bars: {
          gapRatio: 0.5,
          distributed: false,
          showDistributedPercentage: true,
          borderRadius: 0,
          strokeWidth: 1,
          gradient: {
            show: true,
            intensity: 20
          },
          totalValues: {
            show: true,
            offsetY: 0,
            fontSize: r._16,
            bold: false,
            color: o
          },
          dataLabels: {
            show: true,
            adaptColorToBackground: true,
            color: o,
            fontSize: r._14,
            bold: false,
            rounding: 0,
            prefix: "",
            suffix: "",
            formatter: null
          }
        },
        grid: {
          scale: {
            ticks: 10,
            scaleMin: null,
            // Force min scale (defaults to dataset's min)
            scaleMax: null
            // Force max scale (defaults to dataset's max)
          },
          x: {
            showAxis: true,
            showHorizontalLines: false,
            axisColor: e,
            axisThickness: 2,
            axisName: {
              show: true,
              text: "",
              fontSize: r._14,
              color: o,
              bold: false,
              offsetY: 0
            },
            timeLabels: {
              show: true,
              values: [],
              offsetY: 0,
              rotation: 0,
              fontSize: r._14,
              color: o,
              bold: false
            }
          },
          y: {
            showAxis: true,
            showVerticalLines: false,
            axisColor: e,
            axisThickness: 2,
            axisName: {
              show: true,
              text: "",
              fontSize: r._14,
              color: o,
              bold: false,
              offsetX: 0
            },
            axisLabels: {
              show: true,
              color: o,
              fontSize: r._14,
              bold: false
            }
          }
        }
      }
    }
  }, Q = {
    theme: "",
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      height: 600,
      width: 1e3,
      zoom: {
        ...S,
        minimap: D
      },
      padding: E([36, 24, 64, 48]),
      highlighter: {
        color: o,
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1
      },
      // Highlight area was initially a single object of type VueUiXyHighlightArea.
      // It now also works with a type VueUiXyHighlightArea[]
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: o,
        opacity: 20,
        caption: {
          text: "",
          fontSize: r._10,
          color: o,
          bold: false,
          offsetY: 0,
          width: "auto",
          padding: 3,
          textAlign: C.CENTER
        }
      },
      timeTag: {
        show: false,
        backgroundColor: e,
        color: o,
        fontSize: r._12,
        circleMarker: {
          radius: 3,
          color: o
        }
      },
      grid: {
        stroke: e,
        showVerticalLines: false,
        showHorizontalLines: false,
        position: "middle",
        // or 'start'
        frame: {
          show: false,
          stroke: e,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: 0
        },
        labels: {
          show: true,
          color: o,
          fontSize: r._16,
          axis: {
            yLabel: "",
            yLabelOffsetX: 0,
            xLabel: "",
            xLabelOffsetY: 14,
            fontSize: r._14
          },
          zeroLine: {
            show: true
          },
          xAxis: {
            showBaseline: false
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            // Overrides auto scaling
            scaleMax: null
            // idem
          },
          xAxisLabels: {
            color: o,
            show: true,
            values: [],
            fontSize: r._14,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 24,
            rotation: 0
          }
        }
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        fontSize: r._10,
        prefix: "",
        suffix: ""
      },
      legend: {
        color: o,
        show: true,
        fontSize: r._14
      },
      title: {
        ...b,
        show: true
      },
      tooltip: {
        ...p,
        showValue: true,
        showPercentage: true,
        roundingValue: 0,
        roundingPercentage: 0
      },
      userOptions: h({
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        stack: true
      })
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 0,
        stroke: t
      },
      labels: {
        show: false,
        offsetY: -6,
        rounding: 0,
        color: o,
        formatter: null
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: o,
        bold: false
      }
    },
    line: {
      radius: 3,
      useGradient: true,
      strokeWidth: 3,
      dot: {
        useSerieColor: true,
        fill: "#FFFFFF",
        strokeWidth: 0.5
      },
      labels: {
        show: false,
        offsetY: -6,
        rounding: 0,
        color: o,
        formatter: null
      },
      area: {
        useGradient: true,
        opacity: 30
      }
    },
    plot: {
      radius: 3,
      useGradient: true,
      dot: {
        useSerieColor: true,
        fill: "#FFFFFF",
        strokeWidth: 0.5
      },
      labels: {
        show: false,
        offsetY: -6,
        rounding: 0,
        color: o,
        formatter: null
      }
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      showSum: true,
      columnNames: {
        period: "Period",
        total: "Total"
      },
      th: F,
      td: y
    },
    showTable: false
  }, Z = {
    type: "classic",
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    translations: {
      total: "Total",
      average: "Average"
    },
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      },
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      }
    },
    style: {
      fontFamily: "inherit",
      chart: {
        useGradient: true,
        gradientIntensity: 40,
        backgroundColor: t,
        color: o,
        layout: {
          labels: {
            dataLabels: {
              show: true,
              useLabelSlots: false,
              hideUnderValue: 3,
              prefix: "",
              suffix: ""
            },
            value: {
              rounding: 0,
              show: true,
              formatter: null
            },
            percentage: {
              color: o,
              bold: true,
              fontSize: r._18,
              rounding: 0,
              formatter: null
            },
            name: {
              color: o,
              bold: false,
              fontSize: r._14
            },
            hollow: {
              show: true,
              total: {
                show: true,
                bold: false,
                fontSize: r._18,
                color: l,
                text: "Total",
                offsetY: 0,
                value: {
                  color: o,
                  fontSize: r._18,
                  bold: true,
                  suffix: "",
                  prefix: "",
                  offsetY: 0,
                  rounding: 0,
                  formatter: null
                }
              },
              average: {
                show: true,
                bold: false,
                fontSize: r._18,
                color: l,
                text: "Average",
                offsetY: 0,
                value: {
                  color: o,
                  fontSize: r._18,
                  bold: true,
                  suffix: "",
                  prefix: "",
                  offsetY: 0,
                  rounding: 0,
                  formatter: null
                }
              }
            }
          },
          donut: {
            strokeWidth: 55,
            borderWidth: 1,
            useShadow: false,
            shadowColor: o
          }
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        },
        title: b
      }
    }
  }, J = {
    responsive: false,
    theme: "",
    customPalette: [],
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 500,
        width: 800,
        padding: E([0, 6, 12, 6]),
        layout: {
          sorted: true,
          rects: {
            stroke: e,
            strokeWidth: 1,
            borderRadius: 0,
            colorRatio: 0.3,
            gradient: {
              show: true,
              intensity: 30
            },
            selected: {
              stroke: e,
              strokeWidth: 1,
              unselectedOpacity: 0.6
            }
          },
          labels: {
            showDefaultLabels: true,
            fontSize: r._24,
            minFontSize: r._10,
            hideUnderProportion: 0.03,
            prefix: "Value: ",
            suffix: "",
            rounding: 0,
            formatter: null
          }
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        title: b,
        tooltip: {
          ...p,
          roundingValue: 1
        }
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, oo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useBlurOnHover: true,
    useCustomCells: false,
    useAnimation: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          labels: {
            dataLabels: {
              prefix: "",
              suffix: "",
              formatter: null
            },
            captions: {
              show: false,
              showSerieName: false,
              serieNameAbbreviation: true,
              serieNameMaxAbbreviationSize: 3,
              fontSize: r._12,
              showValue: true,
              showPercentage: true,
              roundingValue: 0,
              roundingPercentage: 0,
              offsetX: 0,
              offsetY: 0
            }
          },
          grid: {
            size: 10,
            spaceBetween: 2,
            vertical: false
          },
          rect: {
            rounded: true,
            rounding: 2,
            stroke: o,
            strokeWidth: 1,
            useGradient: true,
            gradientIntensity: 40
          }
        },
        title: b,
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, eo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          plots: {
            show: true,
            radius: 2
          },
          outerPolygon: {
            stroke: a,
            strokeWidth: 1
          },
          dataPolygon: {
            strokeWidth: 1,
            transparent: false,
            opacity: 20,
            useGradient: true
          },
          grid: {
            show: true,
            stroke: e,
            strokeWidth: 0.5,
            graduations: 5
          },
          labels: {
            dataLabels: {
              show: true,
              fontSize: r._12,
              color: o
            }
          }
        },
        title: b,
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
          animation: {
            show: true,
            animationFrames: 60
          }
        },
        legend: {
          ...m,
          roundingPercentage: 0
        }
      }
    },
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    translations: {
      target: "Target",
      value: "Value",
      datapoint: "Datapoint"
    }
  }, to = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    zoomAnimationFrames: 20,
    style: {
      fontFamily: "inherit",
      chart: {
        height: 512,
        width: 512,
        backgroundColor: t,
        color: o,
        layout: {
          labels: {
            quadrantLabels: {
              show: true,
              tl: {
                text: "",
                color: o,
                fontSize: r._16,
                bold: true
              },
              tr: {
                text: "",
                color: o,
                fontSize: r._16,
                bold: true
              },
              br: {
                text: "",
                color: o,
                fontSize: r._16,
                bold: true
              },
              bl: {
                text: "",
                color: o,
                fontSize: r._16,
                bold: true
              }
            },
            plotLabels: {
              showAsTag: false,
              show: true,
              fontSize: r._10,
              color: o,
              offsetY: 8,
              rounding: 0,
              x: {
                formatter: null
              },
              y: {
                formatter: null
              }
            },
            axisLabels: {
              show: true,
              fontSize: r._14,
              color: {
                positive: o,
                negative: o
              }
            }
          },
          grid: {
            stroke: e,
            strokeWidth: 1.5,
            showArrows: true,
            graduations: {
              stroke: e,
              strokeWidth: 0.5,
              show: true,
              steps: 5,
              fill: true,
              color: e,
              roundingForce: 10
            },
            xAxis: {
              min: -100,
              max: 100,
              auto: true,
              name: ""
            },
            yAxis: {
              min: -100,
              max: 100,
              auto: true,
              name: ""
            }
          },
          plots: {
            radius: 6,
            outline: true,
            outlineColor: t,
            outlineWidth: 1
          },
          areas: {
            show: true,
            opacity: 40,
            useGradient: true
          }
        },
        title: b,
        tooltip: {
          ...p,
          roundingValue: 0,
          showShape: true
        },
        legend: m
      }
    },
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 0
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    translations: {
      category: "Category",
      item: "Item",
      side: "Side"
    }
  }, ro = {
    responsive: false,
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        animation: {
          use: true,
          speed: 1,
          acceleration: 1
        },
        layout: {
          track: {
            size: 1,
            useGradient: true,
            gradientIntensity: 20
          },
          markers: {
            color: o,
            bold: true,
            fontSizeRatio: 1,
            offsetY: 0,
            roundingValue: 0
          },
          pointer: {
            type: "pointy",
            size: 1,
            stroke: t,
            strokeWidth: 12,
            useRatingColor: true,
            color: a,
            circle: {
              radius: 10,
              stroke: o,
              strokeWidth: 2,
              color: t
            }
          }
        },
        legend: {
          fontSize: r._48,
          prefix: "",
          suffix: "",
          roundingValue: 1,
          showPlusSymbol: true,
          useRatingColor: true,
          color: o,
          formatter: null
        },
        title: b
      }
    },
    userOptions: h({
      pdf: true,
      img: true,
      fullscreen: true
    }),
    translations: {
      base: "Base"
    }
  }, lo = {
    responsive: false,
    theme: "",
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        animation: {
          use: true,
          speed: 0.5,
          acceleration: 1
        },
        layout: {
          wheel: {
            ticks: {
              rounded: true,
              inactiveColor: e,
              activeColor: n,
              sizeRatio: 0.9,
              gradient: {
                show: true,
                shiftHueIntensity: 100
              }
            }
          },
          innerCircle: {
            show: true,
            stroke: e,
            strokeWidth: 1
          },
          percentage: {
            show: true,
            fontSize: r._48,
            rounding: 1,
            bold: true,
            formatter: null
          }
        },
        title: b
      }
    },
    userOptions: h({
      pdf: true,
      img: true,
      fullscreen: true
    })
  }, ao = {
    theme: "",
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        animation: {
          use: true,
          speed: 0.5,
          acceleration: 1
        },
        layout: {
          display: "horizontal",
          crescendo: false,
          curved: false,
          curveAngleX: 10,
          curveAngleY: 10,
          activeColor: n,
          inactiveColor: e,
          ticks: {
            gradient: {
              show: true,
              shiftHueIntensity: 100
            }
          }
        },
        percentage: {
          show: true,
          useGradientColor: true,
          color: n,
          fontSize: r._16,
          bold: true,
          rounding: 1,
          verticalPosition: C.BOTTOM,
          horizontalPosition: C.LEFT,
          formatter: null
        },
        title: b
      }
    },
    userOptions: h({
      pdf: true,
      img: true,
      fullscreen: true
    })
  }, no = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          grandTotal: {
            show: true,
            fontSize: r._20,
            bold: true,
            prefix: "",
            suffix: "",
            roundingValue: 0,
            color: o,
            text: "Grand total",
            offsetY: 0,
            formatter: null
          },
          roots: {
            stroke: t,
            strokeWidth: 5,
            useGradient: true,
            gradientIntensity: 20,
            underlayerColor: t,
            labels: {
              show: true,
              fontSize: r._16,
              adaptColorToBackground: true,
              color: t,
              bold: true,
              roundingValue: 0,
              prefix: "",
              suffix: "",
              formatter: null,
              name: {
                color: o,
                fontSize: r._16,
                bold: true
              }
            }
          },
          verticalSeparator: {
            stroke: t,
            strokeWidth: 5
          },
          links: {
            opacity: 10
          },
          branches: {
            stroke: t,
            strokeWidth: 0,
            borderRadius: 6,
            useGradient: true,
            gradientIntensity: 20,
            underlayerColor: t,
            widthRatio: 1.5,
            labels: {
              show: true,
              fontSize: r._14,
              color: o,
              bold: true,
              dataLabels: {
                show: true,
                hideUnderValue: 5,
                fontSize: r._14,
                roundingValue: 0,
                roundingPercentage: 0,
                prefix: "",
                suffix: "",
                formatter: null
              }
            }
          },
          nuts: {
            offsetX: 20,
            useGradient: true,
            gradientIntensity: 30,
            selected: {
              useMotion: true,
              useGradient: true,
              gradientIntensity: 40,
              roundingValue: 0,
              roundingPercentage: 0,
              labels: {
                dataLabels: {
                  hideUnderValue: 5,
                  color: o,
                  fontSize: r._12,
                  bold: true,
                  prefix: "",
                  suffix: "",
                  formatter: null
                },
                core: {
                  total: {
                    color: o,
                    fontSize: r._24,
                    bold: false
                  },
                  value: {
                    color: o,
                    fontSize: r._24,
                    bold: true,
                    prefix: "",
                    suffix: ""
                  }
                }
              }
            }
          },
          legend: {
            fontSize: r._16,
            color: o,
            roundingValue: 0,
            roundingPercentage: 0,
            prefix: "",
            suffix: ""
          },
          title: {
            ...b,
            offsetY: 0,
            subtitle: {
              ...b.subtitle,
              offsetY: 0
            }
          }
        }
      }
    },
    table: {
      ..._,
      th: {
        ...F,
        translations: {
          rootName: "root name",
          rootValue: "root value",
          rootToTotal: "%/total",
          branchName: "branch name",
          branchValue: "branch value",
          branchToRoot: "%/root",
          branchToTotal: "%/total",
          nutName: "nut name",
          nutValue: "nut value",
          nutToBranch: "%/branch",
          nutToRoot: "%/root",
          nutToTotal: "%/total"
        }
      },
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    translations: {
      total: "Total",
      proportionToTree: "of grand total",
      of: "of"
    }
  }, so = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    useStartAnimation: true,
    useBlurOnHover: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        useGradient: true,
        gradientIntensity: 20,
        layout: {
          maxThickness: 64,
          gutter: {
            color: e,
            width: 0.62
          },
          track: {
            width: 0.62
          },
          labels: {
            show: true,
            fontSize: r._14,
            color: o,
            roundingValue: 0,
            roundingPercentage: 0,
            bold: true,
            offsetX: 0,
            offsetY: 0,
            value: {
              show: true,
              formatter: null
            },
            percentage: {
              show: true
            }
          }
        },
        title: b,
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      },
      translations: {
        value: "Value",
        percentage: "Percentage",
        serie: "Serie"
      }
    }
  }, io = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          bars: {
            sort: x.DESC,
            useStroke: false,
            strokeWidth: 2,
            height: 32,
            gap: 6,
            borderRadius: 4,
            offsetX: 64,
            paddingRight: 0,
            useGradient: true,
            gradientIntensity: 20,
            fillOpacity: 90,
            underlayerColor: t,
            dataLabels: {
              color: o,
              bold: true,
              fontSize: r._12,
              value: {
                show: true,
                roundingValue: 0,
                prefix: "",
                suffix: "",
                formatter: null
              },
              percentage: {
                show: true,
                roundingPercentage: 0
              },
              offsetX: 0
            },
            nameLabels: {
              show: true,
              color: o,
              bold: false,
              fontSize: r._10,
              offsetX: 0
            },
            parentLabels: {
              show: true,
              color: o,
              bold: false,
              fontSize: r._10,
              offsetX: 0
            }
          },
          highlighter: {
            color: o,
            opacity: 5
          },
          separators: {
            show: true,
            color: e,
            strokeWidth: 1
          }
        },
        title: b,
        legend: {
          ...m,
          position: C.TOP,
          roundingValue: 0,
          roundingPercentage: 0,
          prefix: "",
          suffix: ""
        },
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
          prefix: "",
          suffix: ""
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      sort: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0,
        prefix: "",
        suffix: ""
      }
    },
    translations: {
      parentName: "Serie",
      childName: "Child",
      value: "value",
      percentageToTotal: "%/total",
      percentageToSerie: "%/serie"
    }
  }, co = {
    theme: "",
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      layout: {
        padding: E([36, 12, 12, 48]),
        cells: {
          height: 36,
          value: {
            show: false,
            fontSize: r._18,
            bold: false,
            roundingValue: 0,
            color: o,
            formatter: null
          },
          colors: {
            hot: u,
            cold: n,
            underlayer: t
          },
          spacing: 2,
          selected: {
            border: 4,
            color: o
          }
        },
        dataLabels: {
          prefix: "",
          suffix: "",
          xAxis: {
            show: true,
            values: [],
            showOnlyAtModulo: null,
            rotation: 0,
            fontSize: r._10,
            color: o,
            bold: false,
            offsetX: 0,
            offsetY: 0
          },
          yAxis: {
            show: true,
            values: [],
            fontSize: r._10,
            color: o,
            bold: false,
            offsetX: 0,
            offsetY: 0
          }
        }
      },
      title: b,
      legend: {
        ...m,
        fontSize: r._12,
        roundingValue: 0,
        position: C.RIGHT,
        scaleBorderRadius: 18
      },
      tooltip: {
        ...p,
        roundingValue: 0
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      colNames: {
        xAxis: "X"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0
      }
    }
  }, uo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      layout: {
        height: 316,
        width: 512,
        padding: E([36, 48, 36, 48]),
        axis: {
          show: true,
          stroke: e,
          strokeWidth: 1
        },
        marginalBars: {
          show: false,
          size: 40,
          tranches: 20,
          opacity: 0.6,
          fill: o,
          strokeWidth: 1,
          offset: 20,
          borderRadius: 2,
          useGradient: true,
          showLines: false,
          linesStrokeWidth: 1
        },
        plots: {
          radius: 2,
          stroke: t,
          strokeWidth: 0.3,
          opacity: 0.6,
          significance: {
            show: true,
            useDistanceOpacity: false,
            deviationThreshold: 10,
            opacity: 0.3
          },
          deviation: {
            translation: "deviation",
            roundingValue: 1
          },
          giftWrap: {
            show: false,
            strokeWidth: 1,
            strokeDasharray: 0,
            fillOpacity: 0.2
          },
          selectors: {
            show: true,
            stroke: o,
            strokeWidth: 0.7,
            strokeDasharray: 0,
            labels: {
              fontSize: r._12,
              color: o,
              rounding: 2,
              bold: false,
              showName: true,
              prefix: "",
              suffix: "",
              x: {
                formatter: null
              },
              y: {
                formatter: null
              }
            },
            markers: {
              radius: 1.5,
              stroke: t,
              strokeWidth: 0.5,
              fill: o
            }
          }
        },
        correlation: {
          show: true,
          strokeDasharray: 2,
          strokeWidth: 1,
          label: {
            show: true,
            fontSize: r._12,
            color: o,
            bold: true,
            roundingValue: 2,
            useSerieColor: true
          }
        },
        dataLabels: {
          xAxis: {
            name: "xAxis",
            show: true,
            fontSize: r._10,
            color: o,
            bold: false,
            offsetX: 0,
            offsetY: 0,
            roundingValue: 0
          },
          yAxis: {
            name: "yAxis",
            show: true,
            fontSize: r._10,
            color: o,
            bold: false,
            offsetX: 0,
            offsetY: 0,
            roundingValue: 0
          }
        }
      },
      title: b,
      legend: {
        ...m,
        roundingValue: 0
      },
      tooltip: {
        ...p,
        roundingValue: 2,
        showShape: true,
        prefix: "",
        suffix: ""
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 2,
        roundingAverage: 1
      },
      translations: {
        correlationCoefficient: "Correlation Coef.",
        nbrPlots: "Nbr plots",
        average: "Average",
        series: "Series"
      }
    }
  }, fo = {
    responsive: false,
    theme: "",
    useCssAnimation: true,
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      height: 316,
      width: 512,
      layout: {
        padding: E([36, 48, 36, 48]),
        selector: {
          color: e,
          opacity: 10
        },
        grid: {
          show: true,
          stroke: e,
          strokeWidth: 0.5,
          xAxis: {
            dataLabels: {
              show: true,
              fontSize: r._10,
              color: o,
              offsetY: 0,
              bold: false,
              rotation: 0
            }
          },
          yAxis: {
            dataLabels: {
              show: true,
              fontSize: r._12,
              color: o,
              roundingValue: 0,
              offsetX: 0,
              bold: false,
              steps: 10,
              prefix: "",
              suffix: ""
            }
          }
        },
        wick: {
          stroke: o,
          strokeWidth: 0.5,
          extremity: {
            shape: A.LINE,
            size: "auto",
            color: o
          }
        },
        candle: {
          borderRadius: 1,
          stroke: o,
          strokeWidth: 0.5,
          colors: {
            bearish: u,
            bullish: i
          },
          gradient: {
            show: true,
            underlayer: t
          },
          widthRatio: 0.5
        }
      },
      zoom: S,
      title: b,
      tooltip: {
        ...p,
        roundingValue: 0,
        prefix: "",
        suffix: ""
      }
    },
    translations: {
      period: "Period",
      open: "Open",
      high: "High",
      low: "Low",
      last: "Last",
      volume: "Volume"
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: {
        ...y,
        roundingValue: 2,
        prefix: "",
        suffix: ""
      }
    }
  }, Ao = {
    theme: "",
    responsive: false,
    type: A.LINE,
    style: {
      chartWidth: 290,
      animation: {
        show: true,
        animationFrames: 360
      },
      fontFamily: "inherit",
      backgroundColor: t,
      line: {
        color: n,
        strokeWidth: 3,
        smooth: false
      },
      bar: {
        borderRadius: 3,
        color: n
      },
      zeroLine: {
        color: o,
        strokeWidth: 1
      },
      plot: {
        show: true,
        radius: 4,
        stroke: t,
        strokeWidth: 1
      },
      verticalIndicator: {
        show: true,
        strokeWidth: 1.5,
        color: n,
        strokeDasharray: 3
      },
      dataLabel: {
        show: true,
        position: C.LEFT,
        offsetX: 0,
        offsetY: 0,
        fontSize: r._20,
        bold: true,
        color: o,
        roundingValue: 0,
        valueType: "latest",
        prefix: "",
        suffix: "",
        formatter: null
      },
      title: {
        show: true,
        textAlign: C.LEFT,
        color: o,
        fontSize: r._16,
        bold: true,
        text: ""
      },
      area: {
        show: true,
        useGradient: true,
        opacity: 30,
        color: n
      }
    }
  }, bo = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      animation: {
        show: true,
        animationFrames: 60
      },
      layout: {
        independant: true,
        percentage: true,
        target: 0,
        showTargetValue: false,
        targetValueText: ""
      },
      gutter: {
        backgroundColor: e,
        opacity: 100
      },
      bar: {
        gradient: {
          show: true,
          intensity: 40,
          underlayerColor: t
        }
      },
      labels: {
        fontSize: r._16,
        name: {
          position: "top-left",
          width: "100%",
          color: o,
          bold: false
        },
        value: {
          show: true,
          bold: true
        }
      },
      title: {
        text: "",
        color: o,
        fontSize: r._16,
        bold: true,
        textAlign: C.LEFT,
        margin: "0 0 6px 0",
        subtitle: {
          color: l,
          text: "",
          fontSize: r._12,
          bold: false
        }
      },
      gap: 4
    }
  }, Co = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      animation: {
        show: true,
        animationFrames: 60
      },
      bar: {
        gradient: {
          show: true,
          intensity: 40,
          underlayerColor: t
        }
      },
      legend: {
        show: true,
        textAlign: C.LEFT,
        fontSize: r._12,
        margin: "6px 0 0 0",
        name: {
          color: o,
          bold: false
        },
        value: {
          show: true,
          bold: false,
          color: o,
          prefix: "",
          suffix: "",
          rounding: 0,
          formatter: null
        },
        percentage: {
          show: true,
          bold: true,
          color: o,
          rounding: 1
        }
      },
      title: {
        ...b,
        textAlign: C.LEFT,
        margin: "0 0 6px 0"
      }
    }
  }, go = {
    theme: "",
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      animation: {
        show: true,
        speedMs: 500
      },
      layout: {
        height: 96,
        width: 640,
        padding: E([24, 0, 36, 0])
      },
      bars: {
        shape: A.SQUARE,
        strokeWidth: 0,
        colors: {
          positive: n,
          negative: u,
          gradient: {
            show: true
          }
        },
        borderRadius: 24,
        gap: 12
      },
      labels: {
        value: {
          fontSize: r._14,
          color: o,
          bold: true,
          rounding: 1,
          prefix: "",
          suffix: "",
          offsetY: 0,
          formatter: null
        },
        valueLabel: {
          fontSize: r._14,
          color: o,
          bold: false,
          rounding: 0
        },
        timeLabel: {
          fontSize: r._12,
          color: o,
          bold: false
        }
      },
      selector: {
        stroke: n,
        strokeWidth: 2,
        strokeDasharray: 0,
        borderRadius: 2
      },
      title: {
        text: "",
        color: o,
        fontSize: r._16,
        bold: true,
        textAlign: C.LEFT,
        subtitle: {
          color: l,
          text: "",
          fontSize: r._12,
          bold: false
        },
        margin: "0 0 6px 0"
      }
    }
  }, ho = {
    theme: "",
    style: {
      fontFamily: "inherit",
      background: t,
      height: 84,
      basePosition: 72,
      animation: {
        show: true,
        speedMs: 150
      },
      title: {
        show: true,
        fontSize: r._12,
        position: C.TOP,
        textAlign: C.CENTER,
        bold: false,
        color: o
      },
      dataLabel: {
        fontSize: r._20,
        autoColor: true,
        color: o,
        offsetY: 0,
        bold: true,
        rounding: 0,
        prefix: "",
        suffix: "",
        formatter: null
      },
      colors: {
        min: u,
        max: i,
        showGradient: true
      },
      track: {
        autoColor: true,
        color: n,
        strokeLinecap: A.ROUND
      },
      gutter: {
        color: e,
        strokeLinecap: A.ROUND
      }
    }
  }, ko = {
    theme: "",
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      animation: {
        show: true,
        animationFrames: 20
      },
      line: {
        stroke: o,
        strokeWidth: 2,
        strokeLinecap: A.ROUND,
        strokeLinejoin: A.ROUND,
        smooth: true,
        useColorTrend: true
      },
      area: {
        show: true,
        useGradient: true,
        opacity: 20
      },
      dataLabel: {
        show: true,
        useColorTrend: true,
        color: o,
        fontSize: r._14,
        bold: false,
        prefix: "",
        suffix: "",
        rounding: 0,
        formatter: null
      },
      trendLabel: {
        trendType: "global",
        useColorTrend: true,
        color: o,
        fontSize: r._14,
        bold: true,
        rounding: 0
      },
      arrow: {
        colors: {
          positive: i,
          neutral: l,
          negative: u
        }
      },
      padding: E([12, 12, 12, 82])
    }
  }, po = {
    responsive: false,
    theme: "",
    axisLabelsFontSize: r._12,
    backgroundColor: t,
    barGap: 12,
    barAnimated: true,
    barStrokeWidth: 1,
    blurOnHover: true,
    chartIsBarUnderDatasetLength: 6,
    color: o,
    customPalette: [],
    dataLabelFontSize: r._14,
    dataLabelRoundingPercentage: 1,
    dataLabelRoundingValue: 0,
    donutHideLabelUnderPercentage: 3,
    donutLabelMarkerStrokeWidth: 1,
    donutRadiusRatio: 0.4,
    donutShowTotal: true,
    donutStrokeWidth: 2,
    donutThicknessRatio: 0.18,
    donutTotalLabelFontSize: 24,
    donutTotalLabelOffsetY: 0,
    donutTotalLabelText: "Total",
    donutUseShadow: false,
    donutShadowColor: o,
    fontFamily: "inherit",
    formatter: null,
    height: 338,
    legendFontSize: r._12,
    legendIcon: "circleFill",
    legendIconSize: r._12,
    lineAnimated: true,
    lineSmooth: true,
    lineStrokeWidth: 2,
    paletteStartIndex: 0,
    showDataLabels: true,
    showLegend: true,
    showTooltip: true,
    showUserOptions: true,
    userOptionsPosition: "right",
    userOptionsButtons: {
      tooltip: true,
      pdf: true,
      img: true,
      fullscreen: true
    },
    userOptionsButtonTitles: {
      open: "Open options",
      close: "Close options",
      tooltip: "Toggle tooltip",
      pdf: "Download PDF",
      img: "Download PNG",
      fullscreen: "Toggle fullscreen"
    },
    title: "",
    titleBold: true,
    titleFontSize: 16,
    titleTextAlign: "center",
    tooltipCustomFormat: null,
    tooltipBackgroundOpacity: 100,
    tooltipBorderRadius: 4,
    tooltipBorderColor: e,
    tooltipBorderWidth: 1,
    tooltipFontSize: 14,
    tooltipPosition: C.CENTER,
    tooltipOffsetY: 24,
    useCustomLegend: false,
    valuePrefix: "",
    valueSuffix: "",
    width: 512,
    xAxisLabel: "",
    xyAxisStroke: a,
    xyAxisStrokeWidth: 1,
    xyGridStroke: e,
    xyGridStrokeWidth: 0.5,
    xyHighlighterColor: o,
    xyHighlighterOpacity: 0.05,
    xyLabelsXFontSize: r._10,
    xyLabelsYFontSize: r._12,
    xyPaddingBottom: 48,
    xyPaddingLeft: 48,
    xyPaddingRight: 12,
    xyPaddingTop: 24,
    xyPeriodLabelsRotation: 0,
    xyPeriods: [],
    xyScaleSegments: 15,
    xyShowAxis: true,
    xyShowGrid: true,
    xyShowScale: true,
    yAxisLabel: "",
    zoomXy: true,
    zoomColor: a,
    zoomHighlightColor: s,
    zoomFontSize: r._14,
    zoomUseResetSlot: false,
    zoomMinimap: D
  }, mo = {
    responsive: false,
    theme: "",
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      height: 500,
      width: 500,
      layout: {
        padding: E([36, 12, 48, 12]),
        grid: {
          show: true,
          stroke: e,
          strokeWidth: 1
        },
        dataLabels: {
          sideTitles: {
            show: true,
            fontSize: r._18,
            color: o,
            useSideColor: true,
            bold: false,
            offsetY: 0
          },
          xAxis: {
            show: true,
            fontSize: r._12,
            color: o,
            bold: false,
            scale: 1e3,
            translation: "in thousands",
            formatter: null
          },
          yAxis: {
            show: true,
            display: "age",
            fontSize: r._12,
            color: o,
            bold: false,
            showEvery: 5,
            formatter: null
          }
        },
        centerSlit: {
          width: 20
        },
        bars: {
          gap: 2,
          borderRadius: 2,
          left: {
            color: u
          },
          right: {
            color: n
          },
          gradient: {
            show: true,
            underlayer: t,
            intensity: 60,
            shiftHue: 0.05
          }
        }
      },
      highlighter: {
        color: o,
        opacity: 5
      },
      title: b,
      tooltip: {
        ...p,
        roundingValue: 0
      }
    },
    translations: {
      age: "age",
      male: "male",
      female: "female",
      total: "total",
      year: "year"
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: y
    }
  }, yo = {
    responsive: false,
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      size: 400,
      limit: 50,
      animation: {
        show: true,
        speedMs: 300
      },
      labels: {
        color: o,
        fontSize: r._10
      },
      links: {
        curved: true,
        maxWidth: 3
      },
      circle: {
        radiusProportion: 0.2,
        stroke: a,
        strokeWidth: 1,
        offsetY: 0
      },
      plot: {
        radius: 2,
        color: o
      },
      title: b
    },
    userOptions: h({
      pdf: true,
      img: true,
      fullscreen: true
    })
  }, Fo = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 360,
        thermometer: {
          width: 48
        },
        padding: E([12, 64, 12, 64]),
        graduations: {
          show: true,
          sides: "both",
          height: 2,
          stroke: e,
          strokeWidth: 1,
          showIntermediate: true,
          gradient: {
            show: true,
            intensity: 20
          }
        },
        animation: {
          use: true,
          speedMs: 1e3
        },
        label: {
          fontSize: r._20,
          rounding: 1,
          bold: true,
          color: o,
          prefix: "",
          suffix: "",
          formatter: null
        }
      },
      title: b
    },
    userOptions: h({
      pdf: true,
      img: true,
      fullscreen: true
    })
  }, xo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          labels: {
            dataLabels: {
              prefix: "",
              suffix: "",
              formatter: null
            }
          },
          rings: {
            strokeWidth: 2,
            stroke: e,
            gradient: {
              show: true,
              intensity: 40,
              underlayerColor: t
            },
            useShadow: true
          }
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        title: b,
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, Eo = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        zoom: S,
        layout: {
          height: 316,
          width: 512,
          padding: E([24, 48, 24, 48]),
          grid: {
            show: true,
            stroke: e,
            strokeWidth: 0.7,
            showVerticalLines: true,
            yAxis: {
              dataLabels: {
                show: true,
                fontSize: r._10,
                color: o,
                roundingValue: 0,
                offsetX: 0,
                bold: false,
                steps: 10
              }
            },
            xAxis: {
              dataLabels: {
                show: true,
                values: [],
                fontSize: r._10,
                showOnlyFirstAndLast: false,
                color: o,
                rotation: 0,
                offsetY: 0
              }
            }
          },
          line: {
            show: true,
            stroke: a,
            strokeWidth: 4
          },
          highlighter: {
            color: o,
            opacity: 5
          },
          dataLabels: {
            show: true,
            fontSize: r._10,
            color: o,
            bold: false,
            rounding: 0,
            prefix: "",
            suffix: "",
            offsetY: 0,
            formatter: null
          }
        },
        title: b,
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        period: "Period",
        total: "Total"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, _o = {
    theme: "",
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          grid: {
            show: true,
            stroke: e,
            strokeWidth: 0.5
          },
          outerPolygon: {
            stroke: e,
            strokeWidth: 1
          },
          dataPolygon: {
            color: n,
            opacity: 60,
            gradient: {
              show: true,
              intensity: 1
            },
            stroke: n,
            strokeWidth: 0
          },
          smileys: {
            strokeWidth: 1,
            colors: {
              1: "#e20001",
              2: "#ff9f03",
              3: "#ffd004",
              4: "#9ac900",
              5: "#059f00"
            }
          },
          dataLabel: {
            color: o,
            roundingValue: 0,
            roundingPercentage: 0,
            bold: true,
            prefix: "",
            suffix: "",
            formatter: null
          }
        },
        title: b,
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, wo = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        nodes: {
          stroke: t,
          strokeHovered: o
        },
        links: {
          stroke: a
        },
        title: b,
        tooltip: p,
        zoom: {
          speed: 1
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    table: {
      ..._,
      th: F,
      td: y,
      translations: {
        nodeName: "Node name",
        details: "Details",
        ancestor: "Parent node"
      }
    }
  }, vo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        useGradient: true,
        gradientIntensity: 40,
        layout: {
          labels: {
            dataLabels: {
              show: true,
              prefix: "",
              suffix: "",
              hideUnderValue: 3,
              fontSize: r._14,
              offsetX: 4,
              offsetY: 12,
              useSerieColor: false,
              color: o,
              showValue: true,
              showPercentage: true,
              boldValue: false,
              boldPercentage: true,
              roundingValue: 0,
              roundingPercentage: 0,
              showDonutName: true,
              boldDonutName: true,
              donutNameAbbreviation: true,
              donutNameMaxAbbreviationSize: 3,
              donutNameOffsetY: 0,
              formatter: null
            }
          },
          donut: {
            strokeWidth: 200,
            borderWidth: 2,
            spacingRatio: 0.5,
            useShadow: false,
            shadowColor: o
          }
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        title: b,
        tooltip: {
          ...p,
          showAllItemsAtIndex: true,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, So = {
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        layout: {
          arcs: {
            strokeWidth: 24,
            borderWidth: 12,
            offsetX: 0,
            offsetY: 0,
            hoverEffect: {
              show: true,
              multiplicator: 1.1
            },
            gradient: {
              show: true,
              intensity: 30,
              color: t
            }
          },
          labels: {
            dataLabels: {
              prefix: "",
              suffix: "",
              formatter: null
            }
          }
        },
        legend: {
          ...m,
          roundingValue: 0,
          roundingPercentage: 0
        },
        title: b,
        tooltip: {
          ...p,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0
        }
      }
    },
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, Lo = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 600,
        stripWidth: 120,
        padding: E([24, 24, 64, 64]),
        grid: {
          show: true,
          stroke: a,
          strokeWidth: 1,
          scaleSteps: 10,
          horizontalGrid: {
            show: true,
            stroke: a,
            strokeWidth: 0.5,
            strokeDasharray: 4
          },
          verticalGrid: {
            show: true,
            stroke: a,
            strokeWidth: 0.5,
            strokeDasharray: 4
          }
        },
        plots: {
          opacity: 0.5,
          radius: 20,
          stroke: t,
          strokeWidth: 1,
          shape: A.CIRCLE,
          gradient: {
            show: true,
            intensity: 40
          }
        },
        labels: {
          prefix: "",
          suffix: "",
          formatter: null,
          bestPlotLabel: {
            show: true,
            showValue: true,
            fontSize: r._14,
            color: o,
            rounding: 0,
            offsetY: 0
          },
          axis: {
            xLabel: "",
            xLabelOffsetY: 0,
            yLabel: "",
            yLabelOffsetX: 0,
            fontSize: r._14,
            color: o
          },
          xAxisLabels: {
            show: true,
            color: o,
            fontSize: r._14,
            offsetY: 0
          },
          yAxisLabels: {
            show: true,
            color: o,
            fontSize: r._14,
            rounding: 0,
            offsetX: 0
          }
        },
        title: b,
        tooltip: {
          ...p,
          roundingValue: 0
        }
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0
      }
    }
  }, Do = {
    responsive: false,
    theme: "",
    useAnimation: true,
    animationSpeed: 2,
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        width: 600,
        rowHeight: 40,
        padding: E([12, 24, 12, 100]),
        plots: {
          startColor: u,
          endColor: n,
          radius: 6,
          stroke: t,
          strokeWidth: 1,
          link: {
            strokeWidth: 2,
            type: A.CURVED
          },
          gradient: {
            show: true,
            intensity: 40
          }
        },
        grid: {
          strokeWidth: 1,
          scaleSteps: 10,
          horizontalGrid: {
            show: true,
            stroke: a,
            strokeWidth: 0.5,
            strokeDasharray: 0
          },
          verticalGrid: {
            show: true,
            stroke: a,
            strokeWidth: 0.5,
            strokeDasharray: 0
          }
        },
        labels: {
          prefix: "",
          suffix: "",
          formatter: null,
          yAxisLabels: {
            show: true,
            fontSize: r._14,
            color: o,
            offsetX: 0,
            bold: true,
            showProgression: true,
            rounding: 1
          },
          xAxisLabels: {
            show: true,
            fontSize: r._14,
            color: o,
            offsetY: 0,
            bold: false,
            rounding: 0
          },
          startLabels: {
            show: true,
            fontSize: r._10,
            color: o,
            offsetY: 0,
            rounding: 0,
            useStartColor: true
          },
          endLabels: {
            show: true,
            fontSize: r._10,
            color: o,
            offsetY: 0,
            rounding: 0,
            useEndColor: true
          }
        },
        legend: {
          ...m,
          labelStart: "start",
          labelEnd: "end"
        },
        title: b
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Series",
        start: "Start value",
        end: "End value",
        progression: "Progression"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, Bo = {
    theme: "",
    customPalette: [],
    style: {
      fontFamily: "inherit",
      shape: A.BAR,
      chart: {
        animation: {
          use: true,
          speed: 1,
          acceleration: 1
        },
        backgroundColor: t,
        color: o,
        bar: {
          color: n,
          stroke: n,
          strokeWidth: 0.7,
          shadeColor: o
        },
        box: {
          stroke: a,
          strokeWidth: 0.7,
          strokeDasharray: 2,
          dimensions: {
            width: 128,
            height: 256,
            top: 27,
            bottom: 9,
            left: 24,
            right: 24,
            perspective: 18
          }
        },
        title: b,
        legend: {
          showDefault: true,
          fontSize: r._10,
          color: o,
          bold: false,
          roundingValue: 0,
          roundingPercentage: 0,
          prefix: "",
          suffix: "",
          hideUnderPercentage: 3
        },
        dataLabel: {
          show: true,
          bold: true,
          color: n,
          fontSize: r._12,
          rounding: 1,
          formatter: null
        }
      }
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    table: {
      ..._,
      columnNames: {
        series: "Series",
        value: "Value",
        percentage: "Percentage"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        roundingPercentage: 0
      }
    }
  }, Ro = {
    theme: "",
    customPalette: [],
    responsiveBreakpoint: 500,
    showAverage: true,
    showMedian: true,
    showTotal: true,
    roundingAverage: 0,
    roundingMedian: 0,
    roundingValues: 0,
    roundingTotal: 0,
    prefix: "",
    suffix: "",
    formatter: null,
    showSparklines: true,
    fontFamily: "inherit",
    colNames: [],
    sparkline: {
      useGradient: true,
      showArea: true,
      strokeWidth: 3,
      type: A.LINE,
      smooth: true,
      animation: {
        show: true,
        animationFrames: 360
      }
    },
    translations: {
      serie: "Serie",
      total: "Total",
      average: "Average",
      median: "Median",
      chart: "Evolution"
    },
    title: {
      text: "",
      color: o,
      fontSize: r._20,
      bold: true,
      textAlign: "center",
      backgroundColor: t,
      subtitle: {
        color: l,
        text: "",
        fontSize: r._16,
        bold: false
      }
    },
    thead: {
      backgroundColor: t,
      color: o,
      fontSize: r._14,
      outline: "none",
      textAlign: C.LEFT,
      bold: false
    },
    tbody: {
      backgroundColor: t,
      color: o,
      fontSize: r._14,
      outline: "none",
      textAlign: C.LEFT,
      bold: false
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      fullscreen: true
    })
  }, zo = {
    theme: "",
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      color: o,
      shapeSize: r._14,
      heatmapColors: {
        useIndividualScale: false,
        min: t,
        max: n
      }
    },
    table: {
      responsiveBreakpoint: 400,
      borderWidth: 1,
      showSum: false,
      showAverage: false,
      showMedian: false,
      head: {
        backgroundColor: t,
        color: o,
        values: []
      }
    },
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      fullscreen: true
    })
  }, Po = {
    responsive: false,
    theme: "",
    customPalette: [],
    useCssAnimation: true,
    animationDelayMs: 20,
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 512,
        width: 512,
        zoom: {
          show: false,
          color: a,
          highlightColor: s,
          useResetSlot: false
        },
        words: {
          maxFontSize: 100,
          minFontSize: r._10,
          bold: false,
          proximity: 10,
          packingWeight: 1,
          color: o,
          usePalette: true
        },
        title: b,
        tooltip: {
          ...p,
          roundingValue: 0
        }
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Word",
        value: "Value"
      },
      th: F,
      td: {
        ...y,
        roundingValue: 0,
        prefix: "",
        suffix: ""
      }
    }
  }, To = {
    responsive: false,
    theme: "",
    customPalette: [],
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true,
      stack: true
    }),
    style: {
      fontFamily: "Arial",
      // A defined font must be provided as 'inherit' fails with canvas
      chart: {
        backgroundColor: t,
        color: o,
        aspectRatio: "12 / 9",
        stacked: false,
        stackGap: 20,
        scale: {
          ticks: 10
        },
        zoom: S,
        selector: {
          show: true,
          color: o,
          dashed: true
        },
        tooltip: p,
        legend: m,
        title: b,
        grid: {
          y: {
            showAxis: true,
            axisColor: o,
            axisThickness: 2,
            axisName: "",
            axisLabels: {
              show: true,
              fontSizeRatio: 1,
              color: o,
              offsetX: 0,
              rounding: 1,
              prefix: "",
              suffix: ""
            },
            verticalLines: {
              show: true,
              color: a,
              hideUnderXLength: 20
            },
            timeLabels: {
              show: true,
              fontSizeRatio: 0.8,
              values: [],
              rotation: 0,
              offsetY: 30,
              color: o,
              modulo: 12
            }
          },
          x: {
            showAxis: true,
            axisColor: o,
            axisThickness: 2,
            axisName: "",
            horizontalLines: {
              show: true,
              color: a,
              alternate: true,
              opacity: 20
            }
          },
          zeroLine: {
            show: true,
            color: o,
            dashed: true
          }
        },
        line: {
          plots: {
            show: true,
            radiusRatio: 1
          }
        },
        area: {
          opacity: 60
        },
        dataLabels: {
          show: true,
          fontSizeRatio: 1,
          useSerieColor: true,
          color: o,
          offsetY: -12,
          formatter: null
        },
        paddingProportions: {
          top: 0.1,
          right: 0.05,
          bottom: 0.1,
          left: 0.1
        }
      }
    },
    table: {
      ..._,
      rounding: 1,
      columnNames: {
        period: "Period",
        total: "Total"
      },
      th: F,
      td: y
    }
  }, Oo = {
    theme: "",
    customPalette: [],
    userOptions: h({
      pdf: true,
      csv: true,
      img: true,
      table: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        padding: E([0, 24, 0, 24]),
        title: b,
        nodes: {
          gap: 10,
          minHeight: 20,
          width: 40,
          labels: {
            fontSize: r._14,
            abbreviation: {
              use: true,
              length: 3
            },
            prefix: "",
            suffix: "",
            rounding: 0,
            formatter: null
          },
          stroke: t,
          strokeWidth: 1
        },
        links: {
          width: 200,
          opacity: 0.8,
          stroke: t,
          strokeWidth: 1
        }
      }
    },
    table: {
      ..._,
      columnNames: {
        source: "Source",
        target: "Target",
        value: "Value"
      },
      th: F,
      td: y
    }
  }, No = {
    responsive: false,
    theme: "",
    useCssAnimation: true,
    customPalette: [],
    userOptions: h({
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 600,
        width: 1e3,
        padding: E([24, 24, 36, 36]),
        comments: {
          show: true,
          showInTooltip: true,
          width: 200,
          offsetX: 0,
          offsetY: 0
        },
        lines: {
          smooth: true,
          strokeWidth: 2,
          opacity: 0.8
        },
        plots: {
          show: true,
          radius: 6,
          opacity: 0.8
        },
        yAxis: {
          scaleTicks: 10,
          stroke: o,
          strokeWidth: 1,
          labels: {
            showAxisNames: true,
            axisNames: [],
            axisNamesColor: o,
            axisNamesFontSize: r._16,
            axisNamesBold: true,
            roundings: [],
            prefixes: [],
            suffixes: [],
            formatters: [],
            ticks: {
              show: true,
              fontSize: r._14,
              color: o,
              bold: false,
              offsetX: 0,
              offsetY: 0
            },
            datapoints: {
              show: true,
              fontSize: r._14,
              useSerieColor: true,
              color: o,
              offsetX: 0,
              offsetY: 0,
              bold: true
            }
          }
        },
        title: b,
        legend: m,
        tooltip: p
      }
    },
    table: {
      ..._,
      columnNames: {
        series: "Series",
        item: "Item"
      },
      th: F,
      td: y
    }
  }, Mo = {
    type: "stopwatch",
    responsive: false,
    style: {
      fontFamily: "inherit",
      backgroundColor: t,
      height: 300,
      width: 300,
      title: b
    },
    stopwatch: {
      showHours: false,
      showHundredth: true,
      cycleSeconds: 5,
      track: {
        radiusRatio: 1,
        stroke: e,
        fill: t,
        strokeWidth: 2
      },
      tracker: {
        radiusRatio: 1,
        stroke: t,
        strokeWidth: 1,
        fill: o,
        gradient: {
          show: true,
          color: t
        },
        aura: {
          show: true,
          radiusRatio: 1,
          fill: o,
          stroke: t,
          strokeWidth: 0
        }
      },
      cycleTrack: {
        show: true,
        stroke: o,
        strokeWidth: 3
      },
      label: {
        fontSize: r._24,
        color: o,
        bold: false
      },
      legend: {
        backgroundColor: t,
        buttons: {
          start: true,
          pause: true,
          reset: true,
          restart: true,
          lap: true,
          iconColor: o
        },
        buttonTitles: {
          start: "Start",
          pause: "Pause",
          resume: "Resume",
          reset: "Reset",
          restart: "Restart",
          lap: "Lap"
        }
      }
    }
  }, Vo = {
    bubbleEffect: true,
    bubbleEffectColor: t,
    bubbleEffectOpacity: 0.1,
    centerCircleColor: t,
    centerCircleDasharray: 0,
    centerCircleOpacity: 0,
    centerCircleRadius: 50,
    centerCircleStroke: a,
    centerCircleStrokeWidth: 0.5,
    coordinatesColor: a,
    coordinatesFontSize: r._10,
    coordinatesOffset: 0,
    crosshairDasharray: 0,
    crosshairStroke: a,
    crosshairStrokeWidth: 0.5,
    intersectCirclesFill: a,
    intersectCirclesRadius: 2,
    isLoading: false,
    parentId: "",
    showCenterCircle: true,
    showCoordinates: true,
    showCrosshair: true,
    showIntersectCircles: true,
    useWaveOnClick: true
  }, Io = {
    open: false,
    maxHeight: 2e3,
    head: {
      useArrowSlot: false,
      backgroundColor: t,
      color: o,
      iconColor: n,
      padding: "12px 6px"
    },
    body: {
      backgroundColor: t,
      color: o
    }
  }, Wo = {
    animationFrames: 60,
    animationValueStart: 0,
    backgroundColor: t,
    fontFamily: "inherit",
    layoutClass: "",
    layoutCss: "",
    prefix: "",
    suffix: "",
    title: "",
    titleBold: true,
    titleColor: o,
    titleClass: "",
    titleCss: "",
    titleFontSize: r._16,
    useAnimation: true,
    valueBold: true,
    valueColor: n,
    valueClass: "",
    valueCss: "",
    valueFontSize: r._32,
    valueRounding: 0,
    formatter: null,
    analogDigits: {
      show: false,
      height: 40,
      color: o,
      skeletonColor: e
    }
  }, Uo = {
    type: "onion",
    onion: {
      gutterColor: a,
      gutterOpacity: 0.3,
      gutterBlur: 0,
      trackHueRotate: 20,
      trackBlur: 1,
      trackColor: f
    },
    line: {
      gutterColor: a,
      gutterOpacity: 0.3,
      gutterBlur: 0,
      trackHueRotate: 20,
      trackBlur: 1,
      trackColor: f
    },
    bar: {
      gutterColor: a,
      gutterOpacity: 0.3,
      gutterBlur: 0,
      trackHueRotate: 20,
      trackBlur: 1,
      trackColor: f
    }
  }, Go = {
    readonly: false,
    style: {
      fontFamily: "inherit",
      itemSize: 32,
      backgroundColor: t,
      colors: {
        activeReadonly: [
          "#e20001",
          "#ff9f03",
          "#ffd004",
          "#61c900",
          "#059f00"
        ],
        active: [
          "#e20001",
          "#ff9f03",
          "#ffd004",
          "#61c900",
          "#059f00"
        ],
        inactive: [
          e,
          e,
          e,
          e,
          e
        ]
      },
      icons: {
        filled: false,
        useGradient: true
      },
      title: {
        ...b,
        textAlign: C.CENTER,
        offsetY: 6,
        subtitle: {
          ...b.subtitle,
          offsetY: 12
        }
      },
      rating: {
        show: true,
        fontSize: r._24,
        bold: true,
        roundingValue: 1,
        position: C.BOTTOM,
        offsetX: 0,
        offsetY: 0,
        formatter: null
      },
      tooltip: {
        show: true,
        fontSize: r._14,
        offsetY: 0,
        color: o,
        bold: true,
        backgroundColor: t,
        borderColor: e,
        borderRadius: 4,
        boxShadow: "0 6px 12px -6px rgba(0,0,0,0.2)",
        roundingValue: 0,
        formatter: null
      }
    }
  }, Yo = {
    type: A.STAR,
    readonly: false,
    from: 1,
    to: 5,
    style: {
      fontFamily: "inherit",
      animated: true,
      itemSize: 32,
      backgroundColor: t,
      star: {
        activeColor: d,
        borderColor: d,
        borderWidth: 3,
        apexes: 5,
        inactiveColor: e,
        useGradient: true
      },
      image: {
        src: "",
        inactiveOpacity: 0.3,
        alt: "rating image"
      },
      title: {
        textAlign: C.CENTER,
        fontSize: r._20,
        color: o,
        bold: true,
        text: "",
        offsetY: 6,
        subtitle: {
          fontSize: r._14,
          color: a,
          bold: false,
          text: "",
          offsetY: 12
        }
      },
      rating: {
        show: true,
        fontSize: r._24,
        bold: true,
        roundingValue: 1,
        position: C.BOTTOM,
        offsetY: 0,
        offsetX: 0,
        formatter: null
      },
      tooltip: {
        show: true,
        fontSize: r._14,
        offsetY: 0,
        color: o,
        bold: true,
        backgroundColor: t,
        borderColor: e,
        borderRadius: 4,
        boxShadow: "0 6px 12px -6px rgba(0,0,0,0.2)",
        roundingValue: 0,
        formatter: null
      }
    }
  }, Ho = {
    style: {
      backgroundColor: t,
      color: o,
      fixedTools: false,
      fontFamily: "inherit",
      hideWhenFolded: false,
      showPrint: true,
      showSave: true,
      showTooltips: true,
      buttons: {
        borderRadius: 6,
        controls: {
          backgroundColor: t,
          color: o,
          border: "1px solid #262626",
          selected: {
            backgroundColor: o,
            color: c,
            border: `1px solid ${a}`
          }
        },
        shapes: {
          backgroundColor: t,
          color: o,
          border: "1px solid #262626",
          selected: {
            backgroundColor: o,
            color: c,
            border: `1px solid ${a}`
          }
        }
      },
      tooltips: {
        backgroundColor: c,
        color: o,
        border: `1px solid ${a}`,
        borderRadius: 6,
        boxShadow: "0 6px 12px -6px rgba(0,0,0,0.2)"
      }
    },
    translations: {
      colorAlpha: "Color alpha",
      dashedLines: "Dashed lines",
      filled: "Filled",
      fontSize: "Font size",
      thickness: "Thickness",
      title: "Annotations",
      tooltipGroup: "Select & group",
      tooltipDelete: "Delete",
      tooltipMove: "Move",
      tooltipResize: "Resize",
      tooltipBringToFront: "Bring to front",
      tooltipBringToBack: "Bring to back",
      tooltipDuplicate: "Duplicate",
      tooltipUndo: "Undo last shape",
      tooltipPdf: "Save pdf",
      tooltipSave: "Save annotations",
      tooltipShapeCircle: "Draw circle",
      tooltipShapeRect: "Draw rect",
      tooltipShapeArrow: "Draw arrow",
      tooltipShapeFreehand: "Freehand line",
      tooltipShapeText: "Text mode",
      tooltipShapeTextLeft: "Align left",
      tooltipShapeTextCenter: "Align center",
      tooltipShapeTextRight: "Align right",
      tooltipShapeTextBullet: "Bullet points",
      tooltipShapeTextBold: "Bold",
      tooltipShapeTextItalic: "Italic",
      tooltipShapeTextUnderline: "Underlined",
      tooltipShapeColor: "Color"
    }
  }, $o = {
    locked: false,
    style: {
      board: {
        backgroundColor: t,
        color: o,
        aspectRatio: "1/1.4141",
        border: `1px solid ${e}`
      },
      item: {
        backgroundColor: t,
        borderColor: e
      },
      resizeHandles: {
        backgroundColor: o,
        border: "none"
      }
    },
    allowPrint: true
  }, Xo = {
    type: A.LINE,
    style: {
      backgroundColor: t,
      color: o,
      maxHeight: 500,
      animated: true,
      flow: {
        color: e
      },
      parallelCoordinatePlot: {
        color: e
      },
      treemap: {
        color: e
      },
      dumbbell: {
        color: e
      },
      stripPlot: {
        color: e
      },
      galaxy: {
        color: e
      },
      bar3d: {
        color: e
      },
      sparkHistogram: {
        color: e
      },
      sparkStackbar: {
        color: e
      },
      sparkbar: {
        color: e
      },
      thermometer: {
        color: e
      },
      relationCircle: {
        color: e
      },
      molecule: {
        color: e
      },
      tiremarks: {
        color: e
      },
      chestnut: {
        color: e
      },
      sparkline: {
        color: e,
        strokeWidth: 0.7
      },
      donutEvolution: {
        axis: {
          show: true,
          color: e,
          strokeWidth: 0.5
        },
        donuts: {
          strokeWidth: 0.5,
          color: e
        }
      },
      line: {
        axis: {
          show: true,
          color: e,
          strokeWidth: 0.5
        },
        path: {
          color: e,
          strokeWidth: 1,
          showPlots: true
        }
      },
      bar: {
        axis: {
          show: true,
          color: e,
          strokeWidth: 0.5
        },
        borderRadius: 0.5,
        color: e,
        barWidth: 9
      },
      donut: {
        color: e,
        strokeWidth: 64
      },
      onion: {
        color: e
      },
      gauge: {
        color: e
      },
      quadrant: {
        grid: {
          color: e,
          strokeWidth: 0.5
        },
        plots: {
          radius: 1.5,
          color: e
        }
      },
      radar: {
        grid: {
          color: e,
          strokeWidth: 0.5
        },
        shapes: {
          color: e
        }
      },
      waffle: {
        color: e
      },
      table: {
        th: {
          color: e
        },
        td: {
          color: e,
          strokeWidth: 0.5
        }
      },
      rating: {
        useSmiley: false,
        color: e,
        filled: true,
        strokeWidth: 1,
        maxWidth: 200
      },
      verticalBar: {
        axis: {
          show: true,
          color: e,
          strokeWidth: 0.5
        },
        borderRadius: 0.5,
        color: e
      },
      heatmap: {
        cellsX: 26,
        cellsY: 7,
        color: e
      },
      candlesticks: {
        axis: {
          show: true,
          color: e,
          strokeWidth: 0.5
        },
        candle: {
          color: e,
          strokeWidth: 1
        }
      },
      pyramid: {
        color: e
      },
      wheel: {
        color: e
      },
      rings: {
        color: e
      }
    }
  }, Ko = {
    mode: "download",
    quality: 1,
    style: {
      info: {
        background: t,
        bold: true,
        border: "none",
        borderRadius: 4,
        boxShadow: "0 6px 12px -6px rgba(0,0,0,0.2)",
        color: o,
        fontFamily: "inherit",
        fontSize: r._14,
        minWidth: 300,
        padding: 12,
        top: -100
      },
      captureButton: {
        background: e,
        bold: true,
        border: "none",
        borderRadius: 4,
        boxShadow: "0 6px 12px -6px rgba(0,0,0,0.2)",
        color: o,
        fontFamily: "inherit",
        fontSize: r._14,
        minHeight: 40,
        padding: "8px 12px"
      },
      cancelButton: {
        background: "#F17171",
        border: "none",
        borderRadius: 10,
        color: t,
        right: -14,
        size: 28,
        top: -14
      },
      captureArea: {
        background: "radial-gradient(transparent, rgba(0,0,0,0.15))",
        border: `dashed 4px ${o}`,
        initialHeight: 200,
        initialWidth: 200
      },
      handles: {
        background: t,
        border: `4px solid ${o}`,
        borderRadius: 4,
        size: 40
      }
    },
    translations: {
      captureButton: "capture",
      info: "Resize or move and click to capture"
    }
  }, jo = {
    fontFamily: "inherit",
    maxHeight: 500,
    rowsPerPage: 25,
    style: {
      th: {
        backgroundColor: e,
        color: o,
        outline: `1px solid ${t}`,
        selected: {
          backgroundColor: n,
          color: t
        }
      },
      rows: {
        even: {
          backgroundColor: "#f3f5f7",
          color: o,
          selectedCell: {
            backgroundColor: "#6375dd5b",
            color: o
          },
          selectedNeighbors: {
            backgroundColor: "#63dd821e",
            color: o
          }
        },
        odd: {
          backgroundColor: t,
          color: o,
          selectedCell: {
            backgroundColor: "#6375dd5b",
            color: o
          },
          selectedNeighbors: {
            backgroundColor: "#63dd821e",
            color: o
          }
        }
      },
      inputs: {
        backgroundColor: t,
        color: o,
        border: "1px solid #CCCCCC",
        accentColor: n
      },
      dropdowns: {
        backgroundColor: e,
        color: o,
        icons: {
          selected: {
            color: "#008000",
            unicode: "✔"
          },
          unselected: {
            color: "#ff0000",
            unicode: "✖"
          }
        }
      },
      infoBar: {
        backgroundColor: e,
        color: o
      },
      pagination: {
        buttons: {
          backgroundColor: e,
          color: o,
          opacityDisabled: 0.5
        },
        navigationIndicator: {
          backgroundColor: n
        }
      },
      exportMenu: {
        backgroundColor: e,
        color: o,
        buttons: {
          backgroundColor: "#FAFAFA",
          color: o
        }
      },
      closeButtons: {
        backgroundColor: "transparent",
        color: o,
        borderRadius: "50%"
      },
      chart: {
        modal: {
          backgroundColor: e,
          color: o,
          buttons: {
            selected: {
              backgroundColor: n,
              color: t
            },
            unselected: {
              backgroundColor: t,
              color: o
            }
          }
        },
        layout: {
          backgroundColor: t,
          axis: {
            stroke: "#ccd1d4",
            strokeWidth: 2
          },
          bar: {
            fill: "",
            stroke: t
          },
          line: {
            stroke: "#6376DD75",
            strokeWidth: 4,
            plot: {
              fill: "#22348f",
              stroke: t,
              strokeWidth: 1,
              radius: {
                selected: 6,
                unselected: 4
              }
            },
            selector: {
              stroke: "#ccc",
              strokeWidth: 1,
              strokeDasharray: 5
            }
          },
          labels: {
            color: o
          },
          progression: {
            stroke: o,
            strokeWidth: 2,
            strokeDasharray: 4,
            arrowSize: 7
          }
        }
      }
    },
    translations: {
      average: "Average",
      by: "by",
      chooseCategoryColumn: "Choose category column",
      exportAllButton: "CSV all",
      exportAllLabel: "Export all rows of your current filtered dataset",
      exportPageButton: "CSV page",
      exportPageLabel: "Export rows of the current page",
      from: "From",
      inputPlaceholder: "Search...",
      makeDonut: "Generate",
      nb: "Nb",
      page: "Page",
      paginatorLabel: "Rows per page",
      sizeWarning: "Displaying too many rows at a time can lead to slower performance",
      sum: "Somme",
      to: "To",
      total: "Total",
      totalRows: "Total rows"
    },
    useChart: true
  }, qo = {
    height: "100%",
    width: null,
    backgroundColor: t,
    digits: {
      color: o,
      skeletonColor: e
    }
  }, Qo = {
    responsiveBreakpoint: 400,
    userOptions: h({
      tooltip: false,
      pdf: true,
      csv: true,
      img: true,
      table: false,
      labels: false,
      fullscreen: true,
      stack: false,
      animation: true
    }),
    animation: {
      use: true,
      speedMs: 1e3,
      pauseOnHover: true
    },
    style: {
      backgroundColor: t,
      color: o,
      fontFamily: "inherit"
    },
    border: {
      size: 0,
      color: o
    },
    caption: {
      text: "",
      padding: E([12, 12, 12, 12]),
      style: {
        backgroundColor: t,
        color: o,
        fontSize: `${r._16}px`,
        fontWeight: "bold",
        textAlign: "left"
      }
    },
    thead: {
      style: {
        verticalAlign: "middle"
      },
      tr: {
        height: 32,
        border: {
          size: 0,
          color: o
        },
        style: {
          backgroundColor: t,
          color: o,
          boxShadow: `0px 6px 12px -6px ${o}50`
        },
        th: {
          border: {
            size: 0,
            color: o
          },
          padding: E([0, 12, 0, 0]),
          style: {
            borderSpacing: 0,
            border: "none",
            textAlign: "right",
            fontVariantNumeric: "tabular-nums"
          }
        }
      }
    },
    tbody: {
      tr: {
        visible: 5,
        height: 32,
        border: {
          size: 0,
          color: o
        },
        style: {
          backgroundColor: t,
          color: o
        },
        td: {
          alternateColor: true,
          alternateOpacity: 0.5,
          border: {
            size: 0,
            color: o
          },
          padding: E([0, 12, 0, 0]),
          style: {
            fontVariantNumeric: "tabular-nums",
            textAlign: "right",
            backgroundColor: e
          }
        }
      }
    }
  }, Zo = {
    type: "battery",
    // battery | gauge
    size: 64,
    stroke: a,
    color: n,
    useGradient: true,
    gradientColor: "#9db5ed",
    showPercentage: true,
    textColor: o,
    fontFamily: "inherit",
    formatter: null
  }, Jo = {
    theme: "",
    userOptions: h({
      tooltip: false,
      pdf: true,
      csv: false,
      img: true,
      table: false,
      labels: false,
      fullscreen: true,
      stack: false
    }),
    style: {
      fontFamily: "inherit",
      chart: {
        backgroundColor: t,
        color: o,
        height: 96,
        width: 600,
        padding: E([24, 24, 24, 12]),
        animation: {
          show: true,
          animationFrames: 60
        },
        segments: {
          baseColor: "#9A9A9A",
          // default if dataset.segments colors are not provided
          dataLabels: {
            show: true,
            color: o,
            fontSize: r._10,
            formatter: null,
            bold: false,
            prefix: "",
            suffix: "",
            rounding: 0,
            offsetY: 0
          },
          ticks: {
            show: true,
            divisions: 10,
            stroke: "#8A8A8A"
          }
        },
        target: {
          onTop: true,
          color: "#1A1A1A",
          rounded: true,
          heightRatio: 0.8,
          stroke: "#FFFFFF",
          strokeWidth: 1,
          width: 6
        },
        valueBar: {
          color: "#3A3A3A",
          heightRatio: 0.33,
          stroke: "#FFFFFF",
          strokeWidth: 1,
          label: {
            show: true,
            color: o,
            fontSize: r._14,
            bold: true,
            offsetY: 0
          }
        },
        title: {
          ...b,
          textAlign: C.LEFT,
          paddingLeft: 12
        },
        legend: {
          ...m,
          roundingValue: 0
        }
      }
    }
  };
  return {
    vue_ui_xy: Q,
    vue_ui_donut: Z,
    vue_ui_treemap: J,
    vue_ui_waffle: oo,
    vue_ui_radar: eo,
    vue_ui_quadrant: to,
    vue_ui_gauge: ro,
    vue_ui_wheel: lo,
    vue_ui_tiremarks: ao,
    vue_ui_chestnut: no,
    vue_ui_onion: so,
    vue_ui_vertical_bar: io,
    vue_ui_heatmap: co,
    vue_ui_scatter: uo,
    vue_ui_candlestick: fo,
    vue_ui_sparkline: Ao,
    vue_ui_sparkbar: bo,
    vue_ui_sparkstackbar: Co,
    vue_ui_sparkhistogram: go,
    vue_ui_sparkgauge: ho,
    vue_ui_spark_trend: ko,
    vue_ui_quick_chart: po,
    vue_ui_age_pyramid: mo,
    vue_ui_relation_circle: yo,
    vue_ui_thermometer: Fo,
    vue_ui_rings: xo,
    vue_ui_donut_evolution: Eo,
    vue_ui_mood_radar: _o,
    vue_ui_molecule: wo,
    vue_ui_nested_donuts: vo,
    vue_ui_galaxy: So,
    vue_ui_strip_plot: Lo,
    vue_ui_dumbbell: Do,
    vue_ui_3d_bar: Bo,
    vue_ui_table_sparkline: Ro,
    vue_ui_table_heatmap: zo,
    vue_ui_word_cloud: Po,
    vue_ui_xy_canvas: To,
    vue_ui_flow: Oo,
    vue_ui_parallel_coordinate_plot: No,
    vue_ui_timer: Mo,
    vue_ui_carousel_table: Qo,
    vue_ui_gizmo: Zo,
    vue_ui_stackbar: q,
    vue_ui_bullet: Jo,
    // non chart components
    vue_ui_cursor: Vo,
    vue_ui_accordion: Io,
    vue_ui_kpi: Wo,
    vue_ui_mini_loader: Uo,
    vue_ui_smiley: Go,
    vue_ui_rating: Yo,
    vue_ui_annotator: Ho,
    vue_ui_dashboard: $o,
    vue_ui_skeleton: Xo,
    vue_ui_screenshot: Ko,
    vue_ui_table: jo,
    vue_ui_digits: qo
  };
}
function bt(o) {
  return oe()[o];
}
var ee = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        segments: {
          baseColor: "#00AA00",
          dataLabels: {
            color: "#66CC66"
          },
          ticks: {
            stroke: "#00AA00"
          }
        },
        target: {
          color: "#023602"
        },
        valueBar: {
          color: "#1b291b",
          stroke: "#1A1A1A",
          label: {
            color: "#66CC66"
          }
        }
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        segments: {
          baseColor: "#8F837A",
          dataLabels: {
            color: "#8A9892"
          },
          ticks: {
            stroke: "#8F837A"
          }
        },
        target: {
          color: "#40403a"
        },
        valueBar: {
          color: "#8F837A",
          stroke: "#fbfafa",
          label: {
            color: "#8A9892"
          }
        }
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        legend: {
          backgroundColor: "#fbfafa",
          color: "#50606C"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        segments: {
          baseColor: "#718890",
          dataLabels: {
            color: "#50606C"
          },
          ticks: {
            stroke: "#50606C"
          }
        },
        target: {
          color: "#50606C"
        },
        valueBar: {
          color: "#50606C",
          stroke: "#fbfafa",
          label: {
            color: "#50606C"
          }
        }
      }
    }
  }
};
var te = {
  default: {},
  hack: {
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    },
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        zoom: {
          color: "#5F6A5F",
          highlightColor: "#66CC66"
        },
        highlighter: {
          color: "#66CC66"
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        },
        bars: {
          totalValues: {
            color: "#99AA99"
          }
        },
        grid: {
          x: {
            axisColor: "#5F6A5F",
            axisName: {
              color: "#66CC66"
            },
            timeLabels: {
              color: "#99AA99"
            }
          },
          y: {
            axisColor: "#5F6A5F",
            axisName: {
              color: "#66CC66"
            },
            axisLabels: {
              color: "#99AA99"
            }
          }
        }
      }
    }
  },
  zen: {
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    },
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        zoom: {
          color: "#E0CFC3",
          highlightColor: "#8F837A"
        },
        highlighter: {
          color: "#8F837A"
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        },
        bars: {
          borderRadius: 4,
          totalValues: {
            show: false
          },
          dataLabels: {
            show: false
          }
        },
        grid: {
          x: {
            showAxis: false,
            axisName: {
              color: "#8F837A"
            },
            timeLabels: {
              show: false
            }
          },
          y: {
            showAxis: false,
            axisName: {
              color: "#8F837A"
            },
            axisLabels: {
              show: false
            }
          }
        }
      }
    }
  },
  concrete: {
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    },
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        zoom: {
          color: "#92B0AB",
          highlightColor: "#50606C"
        },
        highlighter: {
          color: "#7DA9B5"
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        },
        bars: {
          totalValues: {
            color: "#50606C"
          }
        },
        grid: {
          x: {
            showHorizontalLines: true,
            axisColor: "#829C98",
            axisName: {
              color: "#50606C"
            },
            timeLabels: {
              color: "#61747E"
            }
          },
          y: {
            showVerticalLines: true,
            axisColor: "#829C98",
            axisName: {
              color: "#50606C"
            },
            axisLabels: {
              color: "#61747E"
            }
          }
        }
      }
    }
  }
};
var re = {
  default: {},
  hack: {
    chart: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      zoom: {
        color: "#5F6A5F",
        highlightColor: "#66CC66"
      },
      highlighter: {
        color: "#66CC66"
      },
      timeTag: {
        backgroundColor: "#1A1A1A",
        color: "#66CC66",
        circleMarker: {
          color: "#66CC66"
        }
      },
      grid: {
        stroke: "#5F6A5F",
        showVerticalLines: false,
        labels: {
          color: "#99AA99",
          xAxisLabels: {
            color: "#99AA99"
          },
          xAxis: {
            showBaseline: false
          }
        }
      },
      legend: {
        color: "#99AA99"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA",
        borderColor: "#66CC66"
      }
    },
    bar: {
      borderRadius: 0,
      border: {
        stroke: "#66CC66"
      },
      labels: {
        color: "#AACCAA"
      },
      serieName: {
        color: "#99CC99"
      }
    },
    line: {
      labels: {
        color: "#AACCAA"
      }
    },
    plot: {
      labels: {
        color: "#AACCAA"
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    chart: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      zoom: {
        color: "#E0CFC3",
        highlightColor: "#8F837A"
      },
      highlighter: {
        color: "#8F837A"
      },
      timeTag: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        circleMarker: {
          color: "#8A9892"
        }
      },
      grid: {
        stroke: "transparent",
        labels: {
          show: false,
          color: "#99AA99",
          xAxisLabels: {
            show: false,
            color: "#99AA99"
          },
          zeroLine: {
            show: false
          },
          yAxis: {
            showBaseline: false
          }
        }
      },
      legend: {
        backgroundColor: "#fbfafa",
        color: "#99AA99"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    },
    bar: {
      borderRadius: 4,
      border: {
        stroke: "#D7E0D2"
      },
      labels: {
        color: "#8F837A"
      },
      serieName: {
        color: "#858480"
      }
    },
    line: {
      labels: {
        color: "#8F837A"
      }
    },
    plot: {
      labels: {
        color: "#8F837A"
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    chart: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      zoom: {
        color: "#92B0AB",
        highlightColor: "#50606C"
      },
      highlighter: {
        color: "#7DA9B5"
      },
      timeTag: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        circleMarker: {
          color: "#50606C"
        }
      },
      grid: {
        stroke: "#829C98",
        showVerticalLines: true,
        showHorizontalLines: true,
        labels: {
          color: "#50606C",
          xAxisLabels: {
            color: "#50606C"
          }
        }
      },
      legend: {
        backgroundColor: "#f6f6fb",
        color: "#61747E"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      },
      tooltip: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    },
    bar: {
      borderRadius: 2,
      border: {
        stroke: "#404C4D"
      },
      labels: {
        color: "#50606C"
      },
      serieName: {
        color: "#61747E"
      }
    },
    line: {
      labels: {
        color: "#50606C"
      }
    },
    plot: {
      labels: {
        color: "#50606C"
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var le = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66",
          borderRadius: 0
        },
        yAxis: {
          stroke: "#3A3A3A",
          labels: {
            axisNamesColor: "#99AA99",
            ticks: {
              color: "#5A5A5A"
            }
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        },
        yAxis: {
          stroke: "#8F837A",
          labels: {
            axisNamesColor: "#8F837A",
            ticks: {
              color: "#8F837A"
            }
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        },
        yAxis: {
          stroke: "#50606C",
          labels: {
            axisNamesColor: "#50606C",
            ticks: {
              color: "#50606C"
            }
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ae = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        zoom: {
          color: "#5F6A5F",
          highlightColor: "#66CC66"
        },
        selector: {
          color: "#66CC66"
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66",
          borderRadius: 0
        },
        grid: {
          y: {
            axisColor: "#5F6A5F",
            axisLabels: {
              color: "#99AA99"
            },
            verticalLines: {
              show: false
            },
            timeLabels: {
              color: "#99AA99"
            }
          },
          x: {
            axisColor: "#5F6A5F",
            horizontalLines: {
              color: "#3A3A3A"
            }
          },
          zeroLine: {
            color: "#444444"
          }
        },
        dataLabels: {
          color: "#99AA99"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        zoom: {
          color: "#E0CFC3",
          highlightColor: "#8F837A"
        },
        selector: {
          color: "#8F837A"
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        },
        grid: {
          y: {
            axisColor: "#8F837A",
            axisLabels: {
              color: "#8F837A"
            },
            verticalLines: {
              show: false
            },
            timeLabels: {
              color: "#8F837A"
            }
          },
          x: {
            axisColor: "#8F837A",
            horizontalLines: {
              show: false,
              alternate: false
            }
          },
          zeroLine: {
            color: "#444444"
          }
        },
        dataLabels: {
          color: "#8F837A"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        zoom: {
          color: "#92B0AB",
          highlightColor: "#50606C"
        },
        selector: {
          color: "#7DA9B5"
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        },
        grid: {
          y: {
            axisColor: "#829C98",
            axisLabels: {
              color: "#50606C"
            },
            verticalLines: {
              show: false
            },
            timeLabels: {
              color: "#50606C"
            }
          },
          x: {
            axisColor: "#829C98"
          },
          zeroLine: {
            color: "#444444"
          }
        },
        dataLabels: {
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ne = {
  default: {},
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          labels: {
            percentage: {
              color: "#61747E"
            },
            name: {
              color: "#8A9892"
            },
            hollow: {
              total: {
                color: "#8A9892",
                value: {
                  color: "#61747E"
                }
              },
              average: {
                color: "#8A9892",
                value: {
                  color: "#61747E"
                }
              }
            }
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  },
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          labels: {
            percentage: {
              color: "#AACCAA"
            },
            name: {
              color: "#99CC99"
            },
            hollow: {
              total: {
                color: "#99CC99",
                value: {
                  color: "#AACCAA"
                }
              },
              average: {
                color: "#99CC99",
                value: {
                  color: "#AACCAA"
                }
              }
            }
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          labels: {
            percentage: {
              color: "#A0AC94"
            },
            name: {
              color: "#8A9892"
            },
            hollow: {
              total: {
                color: "#8A9892",
                value: {
                  color: "#A0AC94"
                }
              },
              average: {
                color: "#8A9892",
                value: {
                  color: "#A0AC94"
                }
              }
            }
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  }
};
var se = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          rects: {
            stroke: "#1A1A1A",
            selected: {
              stroke: "#1A1A1A"
            }
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          rects: {
            stroke: "#fbfafa",
            strokeWidth: 2,
            borderRadius: 12,
            selected: {
              stroke: "#fbfafa"
            }
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          rects: {
            stroke: "#1A1A1A",
            selected: {
              stroke: "#1A1A1A"
            }
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ie = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          rect: {
            rounded: false,
            stroke: "#66CC66",
            useGradient: false
          }
        },
        legend: {
          color: "#99AA99",
          backgroundColor: "#1A1A1A"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          rect: {
            rounding: 4,
            stroke: "#fbfafa"
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          rect: {
            rounded: false,
            stroke: "#404C5A",
            useGradient: false
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ce = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          outerPolygon: {
            stroke: "#336633",
            strokeWidth: 0
          },
          grid: {
            stroke: "#334C33",
            graduations: 1
          },
          labels: {
            dataLabels: {
              color: "#99AA99"
            }
          }
        },
        legend: {
          color: "#99AA99",
          backgroundColor: "#1A1A1A"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#1A1A1A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          outerPolygon: {
            strokeWidth: 0
          },
          grid: {
            show: false
          },
          labels: {
            dataLabels: {
              color: "#99AA99"
            }
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          outerPolygon: {
            stroke: "#ABB1BC",
            strokeWidth: 0.5
          },
          grid: {
            stroke: "#C3DAC8"
          },
          labels: {
            dataLabels: {
              color: "#99AA99"
            }
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ue = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          labels: {
            quadrantLabels: {
              tl: {
                color: "#99AA99"
              },
              tr: {
                color: "#99AA99"
              },
              br: {
                color: "#99AA99"
              },
              bl: {
                color: "#99AA99"
              }
            },
            plotLabels: {
              color: "#99CC99"
            },
            axisLabels: {
              color: {
                positive: "#66CC66",
                negative: "#66CC66"
              }
            }
          },
          grid: {
            stroke: "#334C33",
            graduations: {
              stroke: "#333333",
              roundingForce: 0,
              fill: false
            }
          },
          plots: {
            outlineColor: "#1A1A1A"
          },
          areas: {
            opacity: 20
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          labels: {
            quadrantLabels: {
              tl: {
                color: "#8A9892"
              },
              tr: {
                color: "#8A9892"
              },
              br: {
                color: "#8A9892"
              },
              bl: {
                color: "#8A9892"
              }
            },
            plotLabels: {
              color: "#8A9892"
            },
            axisLabels: {
              color: {
                positive: "#99AA99",
                negative: "#C09E85"
              }
            }
          },
          grid: {
            stroke: "#D2E0DB",
            graduations: {
              steps: 2,
              color: "#D2E0DB",
              stroke: "#D2E0DB",
              roundingForce: 256
            }
          },
          plots: {
            outlineColor: "#fbfafa"
          },
          areas: {
            opacity: 40
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          labels: {
            quadrantLabels: {
              tl: {
                color: "#61747E"
              },
              tr: {
                color: "#61747E"
              },
              br: {
                color: "#61747E"
              },
              bl: {
                color: "#61747E"
              }
            },
            plotLabels: {
              color: "#50606C"
            },
            axisLabels: {
              color: {
                positive: "#4A6A75",
                negative: "#7E8F7E"
              }
            }
          },
          grid: {
            stroke: "#9AA7B0",
            graduations: {
              color: "#DEE1DE",
              stroke: "#DEE1DE",
              roundingForce: 0
            }
          },
          plots: {
            outlineColor: "#fbfafa"
          },
          areas: {
            opacity: 40
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var de = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          track: {
            useGradient: false
          },
          markers: {
            color: "#99CC99",
            backgroundColor: "#1A1A1A",
            stroke: "#66CC66"
          },
          pointer: {
            type: "pointy",
            stroke: "#1A1A1A",
            circle: {
              stroke: "#66CC66",
              strokeWidth: 1,
              color: "#1A1A1A"
            }
          }
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          track: {
            useGradient: false
          },
          markers: {
            color: "#A0AC94",
            backgroundColor: "#fbfafa",
            stroke: "#EBD6CC"
          },
          pointer: {
            type: "rounded",
            stroke: "#fbfafa",
            circle: {
              stroke: "#EBD6CC",
              strokeWidth: 1,
              color: "#fbfafa"
            }
          }
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          track: {
            useGradient: false
          },
          markers: {
            color: "#4F5B75",
            backgroundColor: "#4F5B75",
            stroke: "#9FA9BE"
          },
          pointer: {
            type: "pointy",
            stroke: "#f6f6fb",
            circle: {
              stroke: "#f6f6fb",
              strokeWidth: 1,
              color: "#4F5B75"
            }
          }
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  }
};
var fe = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          wheel: {
            ticks: {
              rounded: false,
              inactiveColor: "#333333",
              activeColor: "#66CC66",
              gradient: {
                shiftHueIntensity: 15
              }
            }
          },
          innerCircle: {
            show: false
          }
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          wheel: {
            ticks: {
              inactiveColor: "#F7EDE2",
              activeColor: "#B1A7AD",
              gradient: {
                shiftHueIntensity: 100
              }
            }
          },
          innerCircle: {
            show: false
          }
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          wheel: {
            ticks: {
              rounded: false,
              inactiveColor: "#BBCBC7",
              activeColor: "#6C94A0",
              gradient: {
                shiftHueIntensity: 10
              }
            }
          },
          innerCircle: {
            stroke: "#BBCBC7"
          }
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    }
  }
};
var Ae = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          crescendo: false,
          inactiveColor: "#333333",
          activeColor: "#66CC66",
          ticks: {
            gradient: {
              shiftHueIntensity: 15
            }
          }
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          crescendo: true,
          curved: true,
          curveAngleX: 5,
          curveAngleY: 5,
          inactiveColor: "#F7EDE2",
          activeColor: "#B1A7AD",
          ticks: {
            gradient: {
              shiftHueIntensity: 15
            }
          }
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          crescendo: false,
          inactiveColor: "#BBCBC7",
          activeColor: "#6C94A0",
          ticks: {
            gradient: {
              shiftHueIntensity: 10
            }
          }
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    }
  }
};
var be = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          grandTotal: {
            color: "#99CC99"
          },
          roots: {
            stroke: "#1A1A1A",
            labels: {
              name: {
                color: "#AACCAA"
              }
            }
          },
          verticalSeparator: {
            stroke: "#1A1A1A"
          },
          branches: {
            borderRadius: 0,
            labels: {
              color: "#AACCAA"
            }
          },
          nuts: {
            selected: {
              labels: {
                dataLabels: {
                  color: "#AACCAA"
                },
                core: {
                  total: {
                    color: "#99CC99"
                  },
                  value: {
                    color: "#AACCAA"
                  }
                }
              }
            }
          },
          legend: {
            color: "#99AA99"
          },
          title: {
            color: "#66CC66",
            subtitle: {
              color: "#99AA99"
            }
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          grandTotal: {
            color: "#A0AC94"
          },
          roots: {
            stroke: "#fbfafa",
            labels: {
              name: {
                color: "#A0AC94"
              }
            }
          },
          verticalSeparator: {
            stroke: "#fbfafa"
          },
          branches: {
            borderRadius: 12,
            labels: {
              color: "#A0AC94"
            }
          },
          nuts: {
            selected: {
              labels: {
                dataLabels: {
                  color: "#A0AC94"
                },
                core: {
                  total: {
                    color: "#8A9892"
                  },
                  value: {
                    color: "#A0AC94"
                  }
                }
              }
            }
          },
          legend: {
            color: "#99AA99"
          },
          title: {
            color: "#8A9892",
            subtitle: {
              color: "#99AA99"
            }
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          grandTotal: {
            color: "#61747E"
          },
          roots: {
            stroke: "#f6f6fb",
            labels: {
              name: {
                color: "#8A9892"
              }
            }
          },
          verticalSeparator: {
            stroke: "#f6f6fb"
          },
          branches: {
            borderRadius: 0,
            labels: {
              color: "#8A9892"
            }
          },
          nuts: {
            selected: {
              labels: {
                dataLabels: {
                  color: "#8A9892"
                },
                core: {
                  total: {
                    color: "#8A9892"
                  },
                  value: {
                    color: "#61747E"
                  }
                }
              }
            }
          },
          legend: {
            color: "#61747E"
          },
          title: {
            color: "#50606C",
            subtitle: {
              color: "#61747E"
            }
          }
        }
      }
    }
  }
};
var Ce = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        useGradient: false,
        color: "#99AA99",
        layout: {
          gutter: {
            color: "#2A2A2A"
          },
          labels: {
            color: "#99CC99"
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        useGradient: false,
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          gutter: {
            color: "#F7EDE2"
          },
          labels: {
            color: "#A0AC94"
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        useGradient: false,
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          gutter: {
            color: "#DDDDDB"
          },
          labels: {
            color: "#61747E"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ge = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          bars: {
            borderRadius: 0,
            useGradient: false,
            dataLabels: {
              color: "#AACCAA"
            },
            nameLabels: {
              color: "#99CC99"
            },
            parentLabels: {
              color: "#99CC99"
            }
          },
          highlighter: {
            color: "#66CC66"
          },
          separators: {
            show: false
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          bars: {
            borderRadius: 8,
            useGradient: true,
            dataLabels: {
              color: "#A0AC94"
            },
            nameLabels: {
              color: "#8A9892"
            },
            parentLabels: {
              color: "#8A9892"
            }
          },
          highlighter: {
            color: "#8F837A"
          },
          separators: {
            show: false
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          bars: {
            borderRadius: 0,
            useGradient: true,
            dataLabels: {
              color: "#61747E"
            },
            nameLabels: {
              color: "#8A9892"
            },
            parentLabels: {
              color: "#8A9892"
            }
          },
          highlighter: {
            color: "#50606C"
          },
          separators: {
            show: true,
            color: "#DEE1DE"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var he = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      layout: {
        cells: {
          colors: {
            hot: "#008000",
            cold: "#333333"
          },
          spacing: 0.5,
          selected: {
            color: "#33FF33"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#AACCAA"
          },
          yAxis: {
            color: "#AACCAA"
          }
        }
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA",
        borderColor: "#66CC66"
      },
      legend: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA"
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      layout: {
        cells: {
          colors: {
            hot: "#DFCA99",
            cold: "#BBC4D3"
          },
          spacing: 0.5,
          selected: {
            color: "#4F5B75"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#A0AC94"
          },
          yAxis: {
            color: "#A0AC94"
          }
        }
      },
      legend: {
        backgroundColor: "#fbfafa",
        color: "#99AA99"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      layout: {
        cells: {
          colors: {
            hot: "#6D7D65",
            cold: "#6C94A5"
          },
          spacing: 0.5,
          selected: {
            color: "#404C4D"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#61747E"
          },
          yAxis: {
            color: "#61747E"
          }
        }
      },
      legend: {
        backgroundColor: "#f6f6fb",
        color: "#61747E"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      },
      tooltip: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ke = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      layout: {
        axis: {
          stroke: "#334C33"
        },
        marginalBars: {
          fill: "#66CC66"
        },
        plots: {
          stroke: "#1A1A1A",
          selectors: {
            stroke: "#66CC66",
            labels: {
              color: "#AACCAA"
            },
            markers: {
              stroke: "#66CC66",
              fill: "#1A1A1A"
            }
          }
        },
        correlation: {
          label: {
            color: "#AACCAA"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#AACCAA"
          },
          yAxis: {
            color: "#AACCAA"
          }
        }
      },
      legend: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA",
        borderColor: "#66CC66"
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      layout: {
        axis: {
          stroke: "transparent"
        },
        marginalBars: {
          fill: "#B0B9A8"
        },
        plots: {
          stroke: "#fbfafa",
          selectors: {
            stroke: "#4F5B75",
            labels: {
              color: "#928A98"
            },
            markers: {
              stroke: "#4F5B75",
              fill: "#fbfafa"
            }
          }
        },
        correlation: {
          label: {
            color: "#928A98"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#928A98"
          },
          yAxis: {
            color: "#928A98"
          }
        }
      },
      legend: {
        backgroundColor: "#fbfafa",
        color: "#99AA99"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      layout: {
        axis: {
          stroke: "#92B0B5"
        },
        marginalBars: {
          fill: "#ABB1BC"
        },
        plots: {
          stroke: "#fbfafa",
          selectors: {
            stroke: "#4F5B75",
            labels: {
              color: "#404C4D"
            },
            markers: {
              stroke: "#4F5B75",
              fill: "#f6f6fb"
            }
          }
        },
        correlation: {
          label: {
            color: "#61747E"
          }
        },
        dataLabels: {
          xAxis: {
            color: "#61747E"
          },
          yAxis: {
            color: "#61747E"
          }
        }
      },
      legend: {
        backgroundColor: "#f6f6fb",
        color: "#61747E"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      },
      tooltip: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var pe = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      layout: {
        selector: {
          color: "#7DA9B5"
        },
        grid: {
          stroke: "#334C33",
          xAxis: {
            dataLabels: {
              color: "#99CC99"
            }
          },
          yAxis: {
            dataLabels: {
              color: "#99CC99"
            }
          }
        },
        wick: {
          stroke: "#334C33",
          extremity: {
            color: "#334C33"
          }
        },
        candle: {
          stroke: "#1A1A1A",
          colors: {
            bullish: "#00FF00",
            bearish: "#334C33"
          },
          gradient: {
            show: false
          }
        }
      },
      zoom: {
        color: "#5F6A5F",
        highlightColor: "#66CC66"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA",
        borderColor: "#66CC66"
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      layout: {
        selector: {
          color: "#8F837A"
        },
        grid: {
          stroke: "transparent",
          xAxis: {
            dataLabels: {
              color: "#8A9892"
            }
          },
          yAxis: {
            dataLabels: {
              color: "#8A9892"
            }
          }
        },
        wick: {
          stroke: "#D7E0D2",
          extremity: {
            shape: "circle",
            size: 2,
            color: "#C5B8A7"
          }
        },
        candle: {
          stroke: "#fbfafa",
          colors: {
            bullish: "#A0AC94",
            bearish: "#C09E85"
          },
          gradient: {
            show: true
          }
        }
      },
      zoom: {
        color: "#E0CFC3",
        highlightColor: "#8F837A"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      layout: {
        selector: {
          color: "#7DA9B5"
        },
        grid: {
          stroke: "#334C33",
          xAxis: {
            dataLabels: {
              color: "#61747E"
            }
          },
          yAxis: {
            dataLabels: {
              color: "#61747E"
            }
          }
        },
        wick: {
          stroke: "#61747E",
          extremity: {
            color: "#61747E"
          }
        },
        candle: {
          stroke: "#1A1A1A",
          colors: {
            bullish: "#92B0AB",
            bearish: "#EFECEC"
          },
          gradient: {
            show: false
          }
        }
      },
      zoom: {
        color: "#92B0AB",
        highlightColor: "#50606C"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      },
      tooltip: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var me = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      layout: {
        grid: {
          stroke: "#5F6A5F"
        },
        dataLabels: {
          sideTitles: {
            color: "#AACCAA"
          },
          xAxis: {
            color: "#5F6A5F"
          },
          yAxis: {
            color: "#5F6A5F"
          }
        },
        bars: {
          borderRadius: 0,
          gap: 1,
          left: {
            color: "#668066"
          },
          right: {
            color: "#66CC66"
          },
          gradient: {
            show: false
          }
        }
      },
      highlighter: {
        color: "#66CC66"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#2A2F2A",
        color: "#AACCAA",
        borderColor: "#66CC66"
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      layout: {
        grid: {
          stroke: "#5F6A5F"
        },
        dataLabels: {
          sideTitles: {
            color: "#8A9892"
          },
          xAxis: {
            show: false
          },
          yAxis: {
            show: false
          }
        },
        bars: {
          borderRadius: 6,
          gap: 1,
          left: {
            color: "#DCB482"
          },
          right: {
            color: "#B9B99D"
          },
          gradient: {
            show: true
          }
        }
      },
      highlighter: {
        color: "#8F837A"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      },
      tooltip: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      layout: {
        grid: {
          stroke: "#5F6A5F"
        },
        dataLabels: {
          sideTitles: {
            color: "#61747E"
          },
          xAxis: {
            color: "#61747E"
          },
          yAxis: {
            color: "#61747E"
          }
        },
        bars: {
          borderRadius: 0,
          gap: 1,
          left: {
            color: "#A1B5A3"
          },
          right: {
            color: "#7DA9B5"
          },
          gradient: {
            show: true,
            intensity: 10
          }
        }
      },
      highlighter: {
        color: "#7DA9B5"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      },
      tooltip: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ye = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      labels: {
        color: "#AACCAA"
      },
      circle: {
        stroke: "#333333"
      },
      plot: {
        color: "#66CC66"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      labels: {
        color: "#A0AC94"
      },
      circle: {
        stroke: "transparent"
      },
      plot: {
        color: "#C09E85"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      labels: {
        color: "#61747E"
      },
      circle: {
        stroke: "#D2D7E0"
      },
      plot: {
        color: "#97ACB7"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      }
    }
  }
};
var Fe = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        graduations: {
          stroke: "#1A1A1A",
          strokeWidth: 6,
          gradient: {
            show: true
          }
        },
        label: {
          color: "#66CC66"
        }
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        graduations: {
          show: false,
          gradient: {
            show: true
          }
        },
        label: {
          color: "#B9B99D"
        }
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        graduations: {
          stroke: "#1A1A1A",
          gradient: {
            show: true
          }
        },
        label: {
          color: "#61747E"
        }
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      }
    }
  }
};
var xe = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          rings: {
            stroke: "#1A1A1A",
            strokeWidth: 10
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          rings: {
            stroke: "#fbfafa",
            strokeWidth: 10
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          rings: {
            stroke: "#fbfafa",
            strokeWidth: 10
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Ee = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        zoom: {
          color: "#5F6A5F",
          highlightColor: "#66CC66"
        },
        layout: {
          grid: {
            show: false,
            stroke: "#5F6A5F",
            yAxis: {
              dataLabels: {
                color: "#AACCAA"
              }
            },
            xAxis: {
              dataLabels: {
                color: "#AACCAA"
              }
            }
          },
          line: {
            stroke: "#5F6A5F"
          },
          highlighter: {
            color: "#66CC66"
          },
          dataLabels: {
            color: "#AACCAA"
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        zoom: {
          color: "#E0CFC3",
          highlightColor: "#8F837A"
        },
        layout: {
          grid: {
            show: false,
            yAxis: {
              dataLabels: {
                show: false
              }
            },
            xAxis: {
              dataLabels: {
                show: false
              }
            }
          },
          line: {
            stroke: "#DCDFE7"
          },
          highlighter: {
            color: "#8F837A"
          },
          dataLabels: {
            color: "#A0AC94"
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        zoom: {
          color: "#92B0AB",
          highlightColor: "#50606C"
        },
        layout: {
          grid: {
            stroke: "#BBC4D3",
            yAxis: {
              dataLabels: {
                color: "#61747E"
              }
            },
            xAxis: {
              dataLabels: {
                color: "#61747E"
              }
            }
          },
          line: {
            stroke: "#92B0AB"
          },
          highlighter: {
            color: "#50606C"
          },
          dataLabels: {
            color: "#61747E"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var _e = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          grid: {
            stroke: "#333333"
          },
          outerPolygon: {
            stroke: "#334C33"
          },
          dataPolygon: {
            color: "#33B333",
            stroke: "#00FF00"
          },
          smileys: {
            colors: {
              1: "#336633",
              2: "#338033",
              3: "#339933",
              4: "#33E633",
              5: "#00FF00"
            }
          },
          dataLabel: {
            color: "#00FF00"
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          grid: {
            stroke: "#C5B8A7"
          },
          outerPolygon: {
            strokeWidth: 0
          },
          dataPolygon: {
            color: "#858480",
            stroke: "#C09E85"
          },
          smileys: {
            colors: {
              1: "#C09E85",
              2: "#DCB482",
              3: "#DFCA99",
              4: "#E0CFC3",
              5: "#B9B99D"
            }
          },
          dataLabel: {
            color: "#606C5A"
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          grid: {
            stroke: "#61747E"
          },
          outerPolygon: {
            stroke: "#50606C"
          },
          dataPolygon: {
            color: "#A3C4BE",
            stroke: "#92B0B5"
          },
          smileys: {
            colors: {
              1: "#5C6B5B",
              2: "#4A6A75",
              3: "#6C94A0",
              4: "#7DA9B5",
              5: "#8EBFCA"
            }
          },
          dataLabel: {
            color: "#50606C"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var we = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        nodes: {
          stroke: "#1A1A1A",
          strokeHovered: "#00FF00"
        },
        links: {
          stroke: "#333333"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        nodes: {
          stroke: "#fbfafa",
          strokeHovered: "#5E5E5E"
        },
        links: {
          stroke: "#e8ede1"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        nodes: {
          stroke: "#61747E",
          strokeHovered: "#404C4D"
        },
        links: {
          stroke: "#BBCBC7"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var ve = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          labels: {
            dataLabels: {
              color: "#AACCAA"
            }
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          labels: {
            dataLabels: {
              color: "#A0AC94"
            }
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          labels: {
            dataLabels: {
              color: "#61747E"
            }
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Se = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        layout: {
          arcs: {
            gradient: {
              color: "#1A1A1A"
            }
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        layout: {
          arcs: {
            gradient: {
              color: "#fbfafa"
            }
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        layout: {
          arcs: {
            gradient: {
              show: false
            }
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Le = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        grid: {
          stroke: "#5F6A5F",
          horizontalGrid: {
            show: false
          },
          verticalGrid: {
            show: false
          }
        },
        plots: {
          stroke: "#00FF00"
        },
        labels: {
          bestPlotLabel: {
            color: "#AACCAA"
          },
          axis: {
            color: "#99CC99"
          },
          xAxisLabels: {
            color: "#99CC99"
          },
          yAxisLabels: {
            color: "#99CC99"
          }
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#2A2F2A",
          color: "#AACCAA",
          borderColor: "#66CC66"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        grid: {
          show: false,
          horizontalGrid: {
            show: false
          },
          verticalGrid: {
            show: false
          }
        },
        plots: {
          stroke: "#fbfafa"
        },
        labels: {
          bestPlotLabel: {
            color: "#A0AC94"
          },
          axis: {
            color: "#A0AC94"
          },
          xAxisLabels: {
            color: "#A0AC94"
          },
          yAxisLabels: {
            show: false,
            color: "#A0AC94"
          }
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        tooltip: {
          backgroundColor: "#fbfafa",
          color: "#8A9892"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        grid: {
          stroke: "#829C98",
          horizontalGrid: {
            stroke: "#829C98"
          },
          verticalGrid: {
            stroke: "#829C98"
          }
        },
        plots: {
          stroke: "#404C5A"
        },
        labels: {
          bestPlotLabel: {
            color: "#61747E"
          },
          axis: {
            color: "#61747E"
          },
          xAxisLabels: {
            color: "#61747E"
          },
          yAxisLabels: {
            color: "#61747E"
          }
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        tooltip: {
          backgroundColor: "#f6f6fb",
          color: "#50606C"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var De = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        plots: {
          startColor: "#008000",
          endColor: "#00FF00",
          stroke: "#1A1A1A"
        },
        grid: {
          horizontalGrid: {
            stroke: "#5F6A5F"
          },
          verticalGrid: {
            stroke: "#5F6A5F"
          }
        },
        labels: {
          yAxisLabels: {
            color: "#99CC99"
          },
          xAxisLabels: {
            color: "#99CC99"
          }
        },
        legend: {
          backgroundColor: "#1A1A1A",
          color: "#99AA99"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        plots: {
          startColor: "#DCB482",
          endColor: "#B9B99D",
          stroke: "#fbfafa"
        },
        grid: {
          horizontalGrid: {
            show: false
          },
          verticalGrid: {
            show: false
          }
        },
        labels: {
          yAxisLabels: {
            color: "#8A9892"
          },
          xAxisLabels: {
            show: false
          }
        },
        legend: {
          backgroundColor: "#fbfafa",
          color: "#99AA99"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        plots: {
          startColor: "#718885",
          endColor: "#7DA9B5",
          stroke: "#404C5A"
        },
        grid: {
          horizontalGrid: {
            stroke: "#829C98"
          },
          verticalGrid: {
            stroke: "#829C98"
          }
        },
        labels: {
          yAxisLabels: {
            color: "#61747E"
          },
          xAxisLabels: {
            color: "#61747E"
          }
        },
        legend: {
          backgroundColor: "#f6f6fb",
          color: "#61747E"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Be = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      line: {
        color: "#66CC66"
      },
      bar: {
        color: "#66CC66",
        borderRadius: 0
      },
      zeroLine: {
        color: "#5F6A5F"
      },
      plot: {
        stroke: "#1A1A1A"
      },
      verticalIndicator: {
        color: "#66CC66"
      },
      dataLabel: {
        color: "#AACCAA"
      },
      title: {
        color: "#66CC66"
      },
      area: {
        color: "#66CC66"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      line: {
        color: "#B9B99D",
        smooth: true
      },
      bar: {
        color: "#B9B99D",
        borderRadius: 3
      },
      zeroLine: {
        strokeWidth: 0
      },
      plot: {
        stroke: "#fbfafa"
      },
      verticalIndicator: {
        color: "#B9B99D"
      },
      dataLabel: {
        color: "#A0AC94"
      },
      title: {
        color: "#8A9892"
      },
      area: {
        color: "#B9B99D"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      line: {
        color: "#4A6A75"
      },
      bar: {
        color: "#4A6A75",
        borderRadius: 0
      },
      zeroLine: {
        color: "#9FA9BE"
      },
      plot: {
        stroke: "#f6f6fb"
      },
      verticalIndicator: {
        color: "#4A6A75"
      },
      dataLabel: {
        color: "#61747E"
      },
      title: {
        color: "#50606C"
      },
      area: {
        color: "#4A6A75"
      }
    }
  }
};
var Re = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      gutter: {
        backgroundColor: "#333333"
      },
      bar: {
        gradient: {
          underlayerColor: "#1A1A1A"
        }
      },
      labels: {
        name: {
          color: "#99CC99"
        }
      },
      title: {
        color: "#66CC66"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      gutter: {
        backgroundColor: "#f5f0eb"
      },
      bar: {
        gradient: {
          underlayerColor: "#fbfafa"
        }
      },
      labels: {
        name: {
          color: "#8A9892"
        }
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      bar: {
        gradient: {
          underlayerColor: "#f6f6fb"
        }
      },
      labels: {
        name: {
          color: "#50606C"
        }
      }
    }
  }
};
var ze = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      bar: {
        gradient: {
          underlayerColor: "#1A1A1A"
        }
      },
      legend: {
        name: {
          color: "#99AA99"
        },
        value: {
          color: "#AACCAA"
        },
        percentage: {
          color: "#99CC99"
        }
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      bar: {
        gradient: {
          underlayerColor: "#fbfafa"
        }
      },
      legend: {
        name: {
          color: "#8A9892"
        },
        value: {
          color: "#A0AC94"
        },
        percentage: {
          color: "#8A9892"
        }
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      bar: {
        gradient: {
          underlayerColor: "#f6f6fb"
        }
      },
      legend: {
        name: {
          color: "#50606C"
        },
        value: {
          color: "#8A9892"
        },
        percentage: {
          color: "#61747E"
        }
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      }
    }
  }
};
var Pe = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      bars: {
        colors: {
          positive: "#66CC66"
        }
      },
      labels: {
        value: {
          color: "#AACCAA"
        },
        valueLabel: {
          color: "#99CC99"
        },
        timeLabel: {
          color: "#99AA99"
        }
      },
      selector: {
        stroke: "#00FF00"
      },
      title: {
        color: "#66CC66",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      bars: {
        colors: {
          positive: "#B9B99D",
          negative: "#C09E85"
        }
      },
      labels: {
        value: {
          color: "#A0AC94"
        },
        valueLabel: {
          color: "#A0AC94"
        },
        timeLabel: {
          color: "#8A9892"
        }
      },
      selector: {
        stroke: "#BBC4D3"
      },
      title: {
        color: "#8A9892",
        subtitle: {
          color: "#99AA99"
        }
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      bars: {
        colors: {
          positive: "#4A6A75"
        }
      },
      labels: {
        value: {
          color: "#61747E"
        },
        valueLabel: {
          color: "#8A9892"
        },
        timeLabel: {
          color: "#50606C"
        }
      },
      selector: {
        stroke: "#404C4D"
      },
      title: {
        color: "#50606C",
        subtitle: {
          color: "#718890"
        }
      }
    }
  }
};
var Te = {
  default: {},
  hack: {
    style: {
      background: "#1A1A1A",
      title: {
        color: "#66CC66"
      },
      dataLabel: {
        color: "#AACCAA"
      },
      colors: {
        min: "#334C33",
        max: "#33CC33"
      },
      track: {
        color: "#33CC33"
      },
      gutter: {
        color: "#333333"
      }
    }
  },
  zen: {
    style: {
      background: "#fbfafa",
      title: {
        color: "#8A9892"
      },
      dataLabel: {
        color: "#A0AC94"
      },
      colors: {
        min: "#C09E85",
        max: "#B9B99D"
      },
      track: {
        color: "#B9B99D"
      },
      gutter: {
        color: "#f5f0eb"
      }
    }
  },
  concrete: {
    style: {
      background: "#f6f6fb",
      title: {
        color: "#50606C"
      },
      dataLabel: {
        color: "#61747E"
      },
      colors: {
        min: "#92B0AB",
        max: "#4A6A75"
      },
      track: {
        color: "#4A6A75"
      },
      gutter: {
        color: "#e1e5e8"
      }
    }
  }
};
var Oe = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      line: {
        stroke: "#00FF00",
        smooth: false
      },
      dataLabel: {
        color: "#AACCAA"
      },
      trendLabel: {
        color: "#99CC99"
      },
      arrow: {
        colors: {
          positive: "#66CC66",
          negative: "#196619"
        }
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      line: {
        stroke: "#B9B99D"
      },
      dataLabel: {
        color: "#8A9892"
      },
      trendLabel: {
        color: "#99CC99"
      },
      arrow: {
        colors: {
          positive: "#B9B99D",
          negative: "#C09E85",
          neutral: "#A5AFC1"
        }
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      line: {
        stroke: "#4A6A75"
      },
      dataLabel: {
        color: "#61747E"
      },
      trendLabel: {
        color: "#8A9892"
      },
      arrow: {
        colors: {
          positive: "#4A6A75",
          negative: "#C09E85",
          neutral: "#ABB1BC"
        }
      }
    }
  }
};
var Ne = {
  default: {},
  hack: {
    backgroundColor: "#1A1A1A",
    color: "#99AA99",
    xyAxisStroke: "#5F6A5F",
    xyGridStroke: "#333333",
    xyHighlighterColor: "#66CC66",
    zoomColor: "#5F6A5F",
    zoomHighlightColor: "#66CC66",
    tooltipBorderColor: "#66CC66"
  },
  zen: {
    backgroundColor: "#fbfafa",
    color: "#8A9892",
    xyAxisStroke: "transparent",
    xyGridStroke: "transparent",
    xyHighlighterColor: "#8F837A",
    zoomColor: "#E0CFC3",
    zoomHighlightColor: "#8F837A"
  },
  concrete: {
    backgroundColor: "#f6f6fb",
    color: "#50606C",
    xyAxisStroke: "#829C98",
    xyGridStroke: "#CCD6D3",
    xyHighlighterColor: "#7DA9B5",
    zoomColor: "#92B0AB",
    zoomHighlightColor: "#50606C"
  }
};
var Me = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        bar: {
          color: "#66CC66"
        },
        box: {
          stroke: "#333333"
        },
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        legend: {
          color: "#99AA99"
        },
        dataLabel: {
          color: "#AACCAA"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        bar: {
          color: "#B9B99D"
        },
        box: {
          stroke: "#DCDFE7"
        },
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        legend: {
          color: "#99AA99"
        },
        dataLabel: {
          color: "#A0AC94"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        bar: {
          color: "#4A6A75"
        },
        box: {
          stroke: "#DEE1DE"
        },
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        legend: {
          color: "#61747E"
        },
        dataLabel: {
          color: "#61747E"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Ve = {
  default: {},
  hack: {
    title: {
      backgroundColor: "#1A1A1A",
      color: "#66CC66",
      subtitle: {
        color: "#99AA99"
      }
    },
    thead: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99"
    },
    tbody: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99"
    }
  },
  zen: {
    title: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      subtitle: {
        color: "#99AA99"
      }
    },
    thead: {
      backgroundColor: "#fbfafa",
      color: "#8A9892"
    },
    tbody: {
      backgroundColor: "#fbfafa",
      color: "#A0AC94"
    }
  },
  concrete: {
    title: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      subtitle: {
        color: "#718890"
      }
    },
    thead: {
      backgroundColor: "#f6f6fb",
      color: "#50606C"
    },
    tbody: {
      backgroundColor: "#f6f6fb",
      color: "#50606C"
    }
  }
};
var Ie = {
  default: {},
  hack: {
    style: {
      backgroundColor: "#1A1A1A",
      color: "#99AA99",
      heatmapColors: {
        min: "#333333",
        max: "#66CC66"
      }
    },
    table: {
      head: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      }
    }
  },
  zen: {
    style: {
      backgroundColor: "#fbfafa",
      color: "#8A9892",
      heatmapColors: {
        max: "#C09E85",
        min: "#DCDFE7"
      }
    },
    table: {
      head: {
        backgroundColor: "#fbfafa",
        color: "#8A9892"
      }
    }
  },
  concrete: {
    style: {
      backgroundColor: "#f6f6fb",
      color: "#50606C",
      heatmapColors: {
        max: "#4A6A75",
        min: "#EFECEC"
      }
    },
    table: {
      head: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var We = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Ue = {
  default: {},
  hack: {
    style: {
      chart: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99",
        title: {
          color: "#66CC66",
          subtitle: {
            color: "#99AA99"
          }
        },
        nodes: {
          stroke: "#1A1A1A"
        },
        links: {
          stroke: "#1A1A1A"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#1A1A1A",
        color: "#99AA99"
      },
      td: {
        backgroundColor: "#1A1A1A",
        color: "#AACCAA"
      }
    }
  },
  zen: {
    style: {
      chart: {
        backgroundColor: "#fbfafa",
        color: "#8A9892",
        title: {
          color: "#8A9892",
          subtitle: {
            color: "#99AA99"
          }
        },
        nodes: {
          stroke: "#fbfafa"
        },
        links: {
          stroke: "#fbfafa"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      },
      td: {
        backgroundColor: "#fbfafa",
        color: "#8F837A"
      }
    }
  },
  concrete: {
    style: {
      chart: {
        backgroundColor: "#f6f6fb",
        color: "#50606C",
        title: {
          color: "#50606C",
          subtitle: {
            color: "#718890"
          }
        },
        nodes: {
          stroke: "#f6f6fb"
        },
        links: {
          stroke: "#f6f6fb"
        }
      }
    },
    table: {
      th: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      },
      td: {
        backgroundColor: "#f6f6fb",
        color: "#50606C"
      }
    }
  }
};
var Ge = {
  vue_ui_bullet: ee,
  vue_ui_stackbar: te,
  vue_ui_xy: re,
  vue_ui_parallel_coordinate_plot: le,
  vue_ui_xy_canvas: ae,
  vue_ui_donut: ne,
  vue_ui_treemap: se,
  vue_ui_waffle: ie,
  vue_ui_radar: ce,
  vue_ui_quadrant: ue,
  vue_ui_gauge: de,
  vue_ui_wheel: fe,
  vue_ui_tiremarks: Ae,
  vue_ui_chestnut: be,
  vue_ui_onion: Ce,
  vue_ui_vertical_bar: ge,
  vue_ui_heatmap: he,
  vue_ui_scatter: ke,
  vue_ui_candlestick: pe,
  vue_ui_age_pyramid: me,
  vue_ui_relation_circle: ye,
  vue_ui_thermometer: Fe,
  vue_ui_rings: xe,
  vue_ui_donut_evolution: Ee,
  vue_ui_mood_radar: _e,
  vue_ui_molecule: we,
  vue_ui_nested_donuts: ve,
  vue_ui_galaxy: Se,
  vue_ui_strip_plot: Le,
  vue_ui_dumbbell: De,
  vue_ui_sparkline: Be,
  vue_ui_sparkbar: Re,
  vue_ui_sparkstackbar: ze,
  vue_ui_sparkhistogram: Pe,
  vue_ui_sparkgauge: Te,
  vue_ui_spark_trend: Oe,
  vue_ui_quick_chart: Ne,
  vue_ui_3d_bar: Me,
  vue_ui_table_sparkline: Ve,
  vue_ui_table_heatmap: Ie,
  vue_ui_word_cloud: We,
  vue_ui_flow: Ue
};
function Ct(o) {
  return Ge[o];
}
var Ye = "#COMP# dataset prop is either missing, undefined or empty.";
var He = "#COMP# dataset is missing the '#ATTR#' attribute.";
var $e = "#COMP# dataset '#ATTR#' attribute cannot be empty.";
var Xe = "#COMP# dataset #KEY# item at index #INDX# is missing the '#ATTR#' attribute.";
var Ke = "#COMP# : Chart could not be built. Dataset is not formatted correctly";
var je = {
  dataset: Ye,
  datasetAttribute: He,
  datasetAttributeEmpty: $e,
  datasetSerieAttribute: Xe,
  notBuildable: Ke
};
function gt(o, l, e, a, s, t = 1.99999, c = 2, n = 1.45, u = 360, i = 105.25, f = 0) {
  let { series: d } = o;
  if (!d || o.base === 0)
    return {
      ...d,
      proportion: 0,
      ratio: 0,
      path: "",
      startX: 0,
      startY: 0,
      endX: 0,
      center: {}
    };
  const r = [...d].map((x) => x.value).reduce((x, b) => x + b, 0), A = [];
  let C = 0;
  for (let x = 0; x < d.length; x += 1) {
    let b = d[x].value / r;
    const m = b * (Math.PI * t), h = d[x].value / 2 / r * (Math.PI * c), { startX: E, startY: F, endX: y, endY: _, path: S } = O(
      [l, e],
      [a, s],
      [C, m],
      i,
      u,
      c
    ), D = O(
      [l, e],
      [a - f, s - f],
      [C, m],
      i,
      u,
      c,
      true
    );
    A.push({
      arcSlice: `${S} L ${D.startX} ${D.startY} ${D.path} L ${E} ${F}`,
      cx: k(l),
      cy: k(e),
      ...d[x],
      proportion: k(b),
      ratio: k(m),
      path: S.replaceAll("NaN", "0"),
      startX: k(E),
      startY: k(F),
      endX: k(y),
      endY: k(_),
      center: O(
        [l, e],
        [a * n, s * n],
        [C, h],
        i,
        u,
        c
      )
      // center of the arc, to display the marker. rx & ry are larger to be displayed with a slight offset
    }), C += m;
  }
  return A;
}
function $([o, l], [e, a]) {
  return [o + e, l + a];
}
function X([[o, l], [e, a]], [s, t]) {
  return [o * s + l * t, e * s + a * t];
}
function qe(o) {
  return [
    [Math.cos(o), -Math.sin(o)],
    [Math.sin(o), Math.cos(o)]
  ];
}
function O([o, l], [e, a], [s, t], c, n = 360, u = 2, i = false) {
  t = t % (u * Math.PI);
  const f = qe(c), [d, r] = $(
    X(f, [
      e * Math.cos(s),
      a * Math.sin(s)
    ]),
    [o, l]
  ), [A, C] = $(
    X(f, [
      e * Math.cos(s + t),
      a * Math.sin(s + t)
    ]),
    [o, l]
  ), x = t > Math.PI ? 1 : 0, b = t > 0 ? i ? 0 : 1 : i ? 1 : 0;
  return {
    startX: k(i ? A : d),
    startY: k(i ? C : r),
    endX: k(i ? d : A),
    endY: k(i ? r : C),
    path: `M${k(i ? A : d)} ${k(i ? C : r)} A ${[
      k(e),
      k(a),
      k(c / (u * Math.PI) * n),
      k(x),
      k(b),
      k(i ? d : A),
      k(i ? r : C)
    ].join(" ")}`
  };
}
function Qe({ defaultConfig: o, userConfig: l }) {
  const e = { ...o };
  return Object.keys(e).forEach((a) => {
    if (Object.hasOwn(l, a)) {
      const s = l[a];
      ["boolean", "function"].includes(typeof s) ? e[a] = s : ["string", "number"].includes(typeof s) ? ot(s) && (e[a] = s) : Array.isArray(e[a]) ? Ze({ userConfig: l, key: a }) && (e[a] = s) : Je({ userConfig: l, key: a }) && (e[a] = Qe({
        defaultConfig: e[a],
        userConfig: s
      }));
    }
  }), e;
}
function Ze({ userConfig: o, key: l }) {
  return Object.hasOwn(o, l) && Array.isArray(o[l]) && o[l].length >= 0;
}
function Je({ userConfig: o, key: l }) {
  return Object.hasOwn(o, l) && !Array.isArray(o[l]) && typeof o[l] == "object";
}
function ot(o) {
  return ![null, void 0, NaN, 1 / 0, -1 / 0].includes(o);
}
function ht(o) {
  return ![void 0, NaN, 1 / 0, -1 / 0].includes(o);
}
function k(o, l = 0) {
  return isNaN(o) ? l : o;
}
var et = [
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#98df8a",
  "#d62728",
  "#ff9896",
  "#9467bd",
  "#c5b0d5",
  "#8c564b",
  "#c49c94",
  "#e377c2",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#bcbd22",
  "#dbdb8d",
  "#17becf",
  "#9edae5",
  "#393b79",
  "#5254a3",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
  "#8ca252",
  "#b5cf6b",
  "#cedb9c",
  "#8c6d31",
  "#bd9e39",
  "#e7ba52",
  "#e7cb94",
  "#843c39",
  "#ad494a",
  "#d6616b",
  "#e7969c",
  "#7b4173",
  "#a55194",
  "#ce6dbd",
  "#de9ed6"
];
function kt(o = "default") {
  switch (o) {
    case "hack":
      return R.hack;
    case "zen":
      return R.zen;
    case "concrete":
      return R.concrete;
    default:
      return R.default;
  }
}
var R = {
  default: et,
  concrete: [
    "#4A6A75",
    "#6C94A0",
    "#7DA9B5",
    "#8EBFCA",
    "#9FD4E0",
    "#B0E9F5",
    "#C1FFFF",
    "#5C6B5B",
    "#6D7D6D",
    "#7E8F7E",
    "#8FA290",
    "#A1B5A3",
    "#B2C7B5",
    "#C3DAC8",
    "#D4ECDA",
    "#E6FFF0",
    "#8A9CA5",
    "#9AA7B0",
    "#ABB1BC",
    "#BBCBC7",
    "#CCD6D3",
    "#DEE1DE",
    "#EFECEC",
    "#404C4D",
    "#50605F",
    "#617472",
    "#718885",
    "#829C98",
    "#92B0AB",
    "#A3C4BE",
    "#B3D8D2",
    "#C4EDE5",
    "#D4F1E8",
    "#404C5A",
    "#50606C",
    "#61747E",
    "#718890",
    "#829CA2",
    "#92B0B5"
  ],
  hack: [
    "#004C00",
    "#006600",
    "#008000",
    "#009900",
    "#00B300",
    "#00CC00",
    "#00E600",
    "#00FF00",
    "#33FF33",
    "#33E633",
    "#33CC33",
    "#33B333",
    "#339933",
    "#338033",
    "#336633",
    "#334C33",
    "#333333",
    "#00AF19",
    "#19E619",
    "#19CC19",
    "#19B319",
    "#199919",
    "#198019",
    "#196619",
    "#194C19",
    "#193319",
    "#191919",
    "#66FF66",
    "#66E666",
    "#66CC66",
    "#66B366",
    "#669966",
    "#668066",
    "#666666",
    "#4CFF4C",
    "#4CE64C",
    "#4CCC4C",
    "#4CB34C"
  ],
  zen: [
    "#B9B99D",
    "#E0CFC3",
    "#DFCA99",
    "#DCB482",
    "#C09E85",
    "#8F837A",
    "#858480",
    "#B0B9A8",
    "#606C5A",
    "#5E5E5E",
    "#4F5B75",
    "#647393",
    "#818EA9",
    "#9FA9BE",
    "#BBC4D3",
    "#DCDFE7",
    "#928A98",
    "#8A9892",
    "#B1A7AD",
    "#C5B8A7",
    "#EBD6CC",
    "#D7E0D2",
    "#E0D2D7",
    "#E0DBD2",
    "#D2E0DB",
    "#DBD2E0",
    "#C1B7A5",
    "#A5AFC1",
    "#E0DBD2",
    "#D2D7E0",
    "#F7EDE2",
    "#97ACB7",
    "#C4CBBC",
    "#C3C5C5",
    "#A0AC94"
  ]
};
var K = ["00", "03", "05", "08", "0A", "0D", "0F", "12", "14", "17", "1A", "1C", "1F", "21", "24", "26", "29", "2B", "2E", "30", "33", "36", "38", "3B", "3D", "40", "42", "45", "47", "4A", "4D", "4F", "52", "54", "57", "59", "5C", "5E", "61", "63", "66", "69", "6B", "6E", "70", "73", "75", "78", "7A", "7D", "80", "82", "85", "87", "8A", "8C", "8F", "91", "94", "96", "99", "9C", "9E", "A1", "A3", "A6", "A8", "AB", "AD", "B0", "B3", "B5", "B8", "BA", "BD", "BF", "C2", "C4", "C7", "C9", "CC", "CF", "D1", "D4", "D6", "D9", "DB", "DE", "E0", "E3", "E6", "E8", "EB", "ED", "F0", "F2", "F5", "F7", "FA", "FC", "FF"];
function j(o) {
  const l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, e = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i, a = /^hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*([\d.]+))?\)$/i;
  if ([void 0, null, NaN].includes(o))
    return null;
  if (o = dt(o), o === "transparent")
    return "#FFFFFF00";
  let s, t = 1;
  if (s = o.match(l)) {
    const [, c, n, u, i] = s;
    return t = i ? parseInt(i, 16) / 255 : 1, `#${c}${n}${u}${v(Math.round(t * 255))}`;
  } else if (s = o.match(e)) {
    const [, c, n, u, i] = s;
    return t = i ? parseFloat(i) : 1, `#${v(c)}${v(n)}${v(u)}${v(Math.round(t * 255))}`;
  } else if (s = o.match(a)) {
    const [, c, n, u, i] = s;
    t = i ? parseFloat(i) : 1;
    const f = tt(Number(c), Number(n), Number(u));
    return `#${v(f[0])}${v(f[1])}${v(f[2])}${v(Math.round(t * 255))}`;
  }
  return null;
}
function v(o) {
  const l = Number(o).toString(16);
  return l.length === 1 ? "0" + l : l;
}
function tt(o, l, e, a = 1) {
  o /= 360, l /= 100, e /= 100;
  let s, t, c;
  if (l === 0)
    s = t = c = e;
  else {
    const n = (f, d, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 0.16666666666666666 ? f + (d - f) * 6 * r : r < 0.5 ? d : r < 0.6666666666666666 ? f + (d - f) * (0.6666666666666666 - r) * 6 : f), u = e < 0.5 ? e * (1 + l) : e + l - e * l, i = 2 * e - u;
    s = n(i, u, o + 1 / 3), t = n(i, u, o), c = n(i, u, o - 1 / 3);
  }
  return [
    Math.round(s * 255),
    Math.round(t * 255),
    Math.round(c * 255),
    a
  ];
}
function pt(o, l) {
  const e = o.length === 9 ? o.substring(0, 7) : o, a = o.length === 9 ? o.substring(7, 9) : null, s = (d) => ({
    r: parseInt(d.substring(1, 3), 16),
    g: parseInt(d.substring(3, 5), 16),
    b: parseInt(d.substring(5, 7), 16)
  }), t = ({ r: d, g: r, b: A }) => {
    d /= 255, r /= 255, A /= 255;
    const C = Math.max(d, r, A), x = Math.min(d, r, A);
    let b, m, p = (C + x) / 2;
    if (C === x)
      b = m = 0;
    else {
      const h = C - x;
      switch (m = p > 0.5 ? h / (2 - C - x) : h / (C + x), C) {
        case d:
          b = (r - A) / h + (r < A ? 6 : 0);
          break;
        case r:
          b = (A - d) / h + 2;
          break;
        case A:
          b = (d - r) / h + 4;
          break;
      }
      b /= 6;
    }
    return { h: b, s: m, l: p };
  }, c = ({ h: d, s: r, l: A }) => {
    let C, x, b;
    if (r === 0)
      C = x = b = A;
    else {
      const m = (E, F, y) => (y < 0 && (y += 1), y > 1 && (y -= 1), y < 0.16666666666666666 ? E + (F - E) * 6 * y : y < 0.5 ? F : y < 0.6666666666666666 ? E + (F - E) * (0.6666666666666666 - y) * 6 : E), p = A < 0.5 ? A * (1 + r) : A + r - A * r, h = 2 * A - p;
      C = m(h, p, d + 1 / 3), x = m(h, p, d), b = m(h, p, d - 1 / 3);
    }
    return {
      r: Math.round(C * 255),
      g: Math.round(x * 255),
      b: Math.round(b * 255)
    };
  }, n = s(e || "#000000"), u = t(n);
  u.h += l, u.h = (u.h + 1) % 1;
  const i = c(u);
  return `#${(i.r << 16 | i.g << 8 | i.b).toString(16).padStart(6, "0")}` + (a || "");
}
function rt({
  centerX: o,
  centerY: l,
  outerPoints: e,
  radius: a,
  rotation: s
}) {
  const t = Math.PI / e, c = s;
  let n = "";
  const u = [];
  for (let i = 0; i < e * 2; i += 1) {
    let f = o + Math.cos(i * t + c) * a, d = l + Math.sin(i * t + c) * a;
    n += `${f},${d} `, u.push({ x: f, y: d });
  }
  return {
    path: `M${n}Z`,
    coordinates: u
  };
}
function mt({
  plot: o,
  radius: l,
  sides: e,
  rotation: a = 0
}) {
  const s = o.x, t = o.y, c = e / 2;
  return rt({
    centerX: s,
    centerY: t,
    outerPoints: c,
    radius: l + 1,
    rotation: a
  });
}
function lt({
  centerX: o,
  centerY: l,
  innerCirclePoints: e,
  innerRadius: a,
  outerRadius: s
}) {
  const t = Math.PI / e, c = 60, n = e * 2;
  let u = "";
  for (let i = 0; i < n; i += 1) {
    let d = i % 2 == 0 ? s : a, r = o + Math.cos(i * t + c) * d, A = l + Math.sin(i * t + c) * d;
    u += `${r},${A} `;
  }
  return u;
}
function yt({
  plot: o,
  radius: l,
  apexes: e = 5
}) {
  const a = o.x, s = o.y, t = e, c = l * 3.5 / t, u = c * 2;
  return lt({
    centerX: a,
    centerY: s,
    innerCirclePoints: t,
    innerRadius: c,
    outerRadius: u
  });
}
function Ft({ series: o }) {
  o = o.sort((i, f) => i.x - f.x);
  function l(i, f, d) {
    const r = (i.x - f.x) * (d.x - f.x) + (i.y - f.y) * (d.y - f.y), A = (i.x - f.x) * (d.y - f.y) - (d.x - f.x) * (i.y - f.y);
    return Math.atan2(A, r);
  }
  const e = [];
  let a;
  a = o[0];
  for (const i of o)
    i.x < a.x && (a = i);
  e[0] = a;
  let s, t, c, n;
  s = e[0], t = { x: s.x, y: s.y + 1 };
  do {
    c = Math.PI;
    for (const i of o)
      a = l(t, s, i), a <= c && (n = i, c = a);
    n !== e[0] && (e.push(n), t = s, s = n);
  } while (n !== e[0]);
  let u;
  return e.forEach((i) => {
    i && i.x && i.y && (u += `${Math.round(i.x)},${Math.round(i.y)} `);
  }), u = u.replaceAll("undefined", ""), u;
}
function B(o) {
  return o * Math.PI / 180;
}
function xt(o) {
  if (o) {
    let l = o, e = 1;
    if (l.startsWith("rgba")) {
      const i = l.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
      if (i) {
        const [, f, d, r, A] = i;
        e = parseFloat(A), l = `#${parseInt(f).toString(16).padStart(2, "0")}${parseInt(d).toString(16).padStart(2, "0")}${parseInt(r).toString(16).padStart(2, "0")}`;
      }
    }
    l.charAt(0) !== "#" && (l = this.rgbToHex(o)), l = l.substring(1, 7);
    let a = parseInt(l.substring(0, 2), 16), s = parseInt(l.substring(2, 4), 16), t = parseInt(l.substring(4, 6), 16), n = [a / 255, s / 255, t / 255].map((i) => i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)), u = 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
    return e < 1 ? e * u + (1 - e) * 1 > 0.3 ? "#000000" : "#FFFFFF" : u > 0.3 ? "#000000" : "#FFFFFF";
  }
  return "#000000";
}
function at(o) {
  for (const l in o)
    typeof o[l] == "object" && !Array.isArray(o[l]) && o[l] !== null ? at(o[l]) : ["color", "backgroundColor", "stroke"].includes(l) && (o[l] === "" ? o[l] = "#000000" : o[l] === "transparent" ? o[l] = "#FFFFFF00" : o[l] = j(o[l]));
  return o;
}
function Et(o) {
  let l, e, a, s;
  const t = o.length;
  if (!o || o.length === 0)
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      slope: 0,
      trend: 0
    };
  let c = 0, n = 0, u = 0, i = 0;
  for (const { x: A, y: C } of o)
    c += A, n += C, u += A * C, i += A * A;
  const f = (t * u - c * n) / (t * i - c * c), d = (n - f * c) / t;
  l = o[0].x, a = o[t - 1].x, e = f * l + d, s = f * a + d;
  const r = nt(o.map((A) => A.value));
  return { x1: l, y1: e, x2: a, y2: s, slope: f, trend: r };
}
function nt(o) {
  const l = o[0], a = o[o.length - 1] - l;
  let s = 0;
  for (let c = 1; c < o.length; c++) {
    const n = Math.abs(o[c] - o[c - 1]);
    s += n;
  }
  const t = a / s;
  return isNaN(t) ? 0 : t;
}
function _t(o) {
  const l = Math.floor(o.length / 2), e = [...o].sort((a, s) => a - s);
  return o.length % 2 !== 0 ? e[l] : (e[l - 1] + e[l]) / 2;
}
function wt(o) {
  let l = [];
  for (let e = 0; e < o.length; e += 1)
    l.push(`${k(o[e].x)},${k(o[e].y)} `);
  return l.join(" ").trim();
}
function vt(o) {
  if (o.length < 2) return "0,0";
  const l = o.length - 1, e = [`${k(o[0].x)},${k(o[0].y)}`], a = [], s = [], t = [], c = [];
  for (let n = 0; n < l; n += 1)
    a[n] = o[n + 1].x - o[n].x, s[n] = o[n + 1].y - o[n].y, t[n] = s[n] / a[n];
  c[0] = t[0], c[l] = t[l - 1];
  for (let n = 1; n < l; n += 1)
    if (t[n - 1] * t[n] <= 0)
      c[n] = 0;
    else {
      const u = 2 * t[n - 1] * t[n] / (t[n - 1] + t[n]);
      c[n] = u;
    }
  for (let n = 0; n < l; n += 1) {
    const u = o[n].x, i = o[n].y, f = o[n + 1].x, d = o[n + 1].y, r = c[n], A = c[n + 1], C = u + (f - u) / 3, x = i + r * (f - u) / 3, b = f - (f - u) / 3, m = d - A * (f - u) / 3;
    e.push(`C ${k(C)},${k(x)} ${k(b)},${k(m)} ${k(f)},${k(d)}`);
  }
  return e.join(" ");
}
function St(o, l = 0.2) {
  function e(c, n) {
    const u = n.x - c.x, i = n.y - c.y;
    return {
      length: Math.sqrt(Math.pow(u, 2) + Math.pow(i, 2)),
      angle: Math.atan2(i, u)
    };
  }
  function a(c, n, u, i) {
    const r = e(n || c, u || c), A = r.angle + (i ? Math.PI : 0), C = r.length * l, x = c.x + Math.cos(A) * C, b = c.y + Math.sin(A) * C;
    return { x, y: b };
  }
  function s(c, n, u) {
    const i = a(u[n - 1], u[n - 2], c), f = a(c, u[n - 1], u[n + 1], true);
    return `C ${k(i.x)},${k(i.y)} ${k(f.x)},${k(f.y)} ${k(c.x)},${k(c.y)}`;
  }
  return o.filter((c) => !!c).reduce(
    (c, n, u, i) => u === 0 ? `${k(n.x)},${k(n.y)} ` : `${c} ${s(n, u, i)} `,
    ""
  );
}
function Lt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const l = Math.random() * 16 | 0;
    return (o == "x" ? l : l & 3 | 8).toString(16);
  });
}
function z(o, l = false, e = 16, a = false) {
  let s = 0, t = l ? e : 0, c = a ? "center" : "middle";
  return o.center.endX > o.cx ? (s = o.center.endX + e + t, c = a ? "left" : "start") : o.center.endX < o.cx ? (s = o.center.endX - e - t, c = a ? "right" : "end") : (s = o.centerX + t, c = a ? "center" : "middle"), { x: s, anchor: c };
}
function P(o, l = 16, e = 16) {
  return o.center.endY > o.cy ? o.center.endY + e : o.center.endY < o.cy ? o.center.endY - l : o.center.endY;
}
function Dt({
  initX: o,
  initY: l,
  offset: e,
  centerX: a,
  centerY: s
}) {
  const t = Math.atan2(l - s, o - a);
  return {
    x: o + e * Math.cos(t),
    y: l + e * Math.sin(t)
  };
}
function st(o) {
  const l = document.createElementNS("http://www.w3.org/2000/svg", "path");
  l.setAttribute("d", o);
  const e = l.getTotalLength();
  let a = 0, s = e, t = e / 2;
  const c = 0.01;
  for (; s - a > c; ) {
    const i = (a + s) / 2, d = l.getPointAtLength(i).x;
    if (Math.abs(d - t) < c) {
      t = i;
      break;
    } else d < t ? a = i : s = i;
  }
  const { x: n, y: u } = l.getPointAtLength(t);
  return { x: n, y: u };
}
function it(o, l, e, a, s) {
  if (e === o && a === l)
    return { x: o, y: l };
  const t = ct(o, l, e, a, s);
  let c = e - o, n = a - l;
  c *= t, n *= t;
  const u = o + c, i = l + n;
  return { x: u, y: i };
}
function ct(o, l, e, a, s) {
  const t = Math.sqrt((e - o) ** 2 + (a - l) ** 2);
  return s >= t && console.warn("arcSize must be less than the distance from the point to the center"), 1 - s / t;
}
function Bt(o, l = false, e = 16, a = 16, s = false, t = false, c = 0, n = 12) {
  const { x: u } = st(o.path), i = `${z(o).x},${P(o, e, a) - 4} `;
  let f = "", d, r;
  u > o.cx ? (d = z(o).x - n, r = P(o, e, a) - 4, f = `${d},${r}`) : u < o.cx ? (d = z(o).x + n, r = P(o, e, a) - 4, f = `${d},${r}`) : (d = z(o).x + n, r = P(o, e, a) - 4, f = `${d},${r}`);
  const A = it(l.x, l.y, d, r, c), C = ` ${A.x},${A.y}`;
  return `M${t ? "" : i}${f}${C}`;
}
function Rt(o) {
  if (o === 0) return 0;
  const e = 10 ** Math.floor(Math.log10(Math.abs(o)));
  let a;
  return o < 0, a = Math.round(o / e) * e, a;
}
function zt(o) {
  return ![null, void 0, NaN].includes(o);
}
function Pt(o, l) {
  return [...o].map((e) => e[l]).reduce((e, a) => e + a, 0);
}
function Tt(o, l = true, e = false) {
  if (!o.length) return "M0,0";
  let a = "";
  return o.forEach((s) => {
    if (!s) return "";
    a += `${s.x},${s.y} `;
  }), e ? a.trim() : `M${a}${l ? "Z" : ""}`;
}
function Ot({ csvContent: o, title: l = "vue-data-ui" }) {
  const e = encodeURI(o), a = document.createElement("a");
  a.setAttribute("href", e), a.setAttribute("download", `${l}.csv`), document.body.appendChild(a), a.click(), a.remove(), window.URL.revokeObjectURL(e);
}
function Nt(o) {
  return `data:text/csv;charset=utf-8,${o.map((l) => l.join(",")).join(`
`)}`;
}
function Mt(o, l) {
  if (!/^#([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(o))
    return console.warn("lightenHexColor : Invalid hex color format"), "#000000";
  let e = o.replace("#", "");
  e.length === 3 && (e = e.split("").map((f) => f + f).join(""));
  const a = parseInt(e.substring(0, 2), 16), s = parseInt(e.substring(2, 4), 16), t = parseInt(e.substring(4, 6), 16), c = Math.min(255, a + (255 - a) * l), n = Math.min(255, s + (255 - s) * l), u = Math.min(255, t + (255 - t) * l), i = `#${Math.round(c).toString(16).padStart(2, "0")}${Math.round(n).toString(16).padStart(2, "0")}${Math.round(u).toString(16).padStart(2, "0")}`;
  if (e.length === 8) {
    const f = e.substring(6, 8);
    return i + f;
  }
  return i;
}
function Vt(o, l) {
  if (!/^#([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(o))
    return console.warn("darkenHexColor: Invalid hex color format"), "#000000";
  let e = o.replace("#", "");
  e.length === 3 && (e = e.split("").map((f) => f + f).join(""));
  const a = parseInt(e.substring(0, 2), 16), s = parseInt(e.substring(2, 4), 16), t = parseInt(e.substring(4, 6), 16), c = Math.max(0, a - a * l), n = Math.max(0, s - s * l), u = Math.max(0, t - t * l), i = `#${Math.round(c).toString(16).padStart(2, "0")}${Math.round(n).toString(16).padStart(2, "0")}${Math.round(u).toString(16).padStart(2, "0")}`;
  if (e.length === 8) {
    const f = e.substring(6, 8);
    return i + f;
  }
  return i;
}
function T(o, l) {
  const e = Math.floor(Math.log10(o)), a = o / Math.pow(10, e);
  let s;
  return l ? a < 1.5 ? s = 1 : a < 3 ? s = 2 : a < 7 ? s = 5 : s = 10 : a <= 1 ? s = 1 : a <= 2 ? s = 2 : a <= 5 ? s = 5 : s = 10, s * Math.pow(10, e);
}
function It(o, l, e, a = false) {
  const s = a ? l - o : T(l - o, false), t = a ? s / (e - 1) : T(s / (e - 1), true), c = Math.floor(o / t) * t, n = Math.ceil(l / t) * t, u = [];
  for (let i = c; i <= n; i += t)
    u.push(i);
  return {
    min: c,
    max: n,
    tickSize: t,
    ticks: u
  };
}
function Wt(o, l, e, a = false) {
  const s = a ? l - o : T(l - o, false), t = a ? s / (e - 1) : T(s / (e - 1), true), c = Math.floor(o / t) * t, n = Math.ceil(l / t) * t;
  let u = [], i = c;
  for (; i <= n; )
    i >= o && i <= l && u.push(i), i += t;
  return u[0] !== o && (u[0] = o), u[u.length - 1] !== l && (u[u.length - 1] = l), {
    min: o,
    max: l,
    tickSize: t,
    ticks: u
  };
}
function Ut(o, l, e, a, s) {
  const t = (r) => {
    let A = parseInt(r.substring(1, 3), 16), C = parseInt(r.substring(3, 5), 16), x = parseInt(r.substring(5, 7), 16), b = 1;
    return r.length === 9 && (b = parseInt(r.substring(7, 9), 16) / 255), { r: A, g: C, b: x, a: b };
  }, c = ({ r, g: A, b: C, a: x }) => {
    const b = (p) => p.toString(16).padStart(2, "0"), m = `#${b(r)}${b(A)}${b(C)}`;
    if (x !== 1) {
      const p = Math.round(x * 255).toString(16).padStart(2, "0");
      return m + p;
    }
    return m;
  }, n = t(o), u = t(l);
  s = Math.min(Math.max(s, e), a);
  const i = (s - e) / (a - e), f = {
    r: Math.round(n.r + (u.r - n.r) * i),
    g: Math.round(n.g + (u.g - n.g) * i),
    b: Math.round(n.b + (u.b - n.b) * i)
  }, d = n.a + (u.a - n.a) * i;
  return c({ ...f, a: d });
}
function Gt({ p: o = "", v: l, s: e = "", r: a = 0, space: s = false, isAnimating: t = false, regex: c = /[^%]/g, replacement: n = "-", locale: u = null }) {
  const i = u ? Number(Number(l).toFixed(a)).toLocaleString(u) : Number(Number(l).toFixed(a)).toLocaleString(), f = i === 1 / 0 ? "∞" : i === -1 / 0 ? "-∞" : i, d = `${o ?? ""}${s ? " " : ""}${[void 0, null].includes(l) ? "-" : f}${s ? " " : ""}${e ?? ""}`;
  return t ? d.replace(c, n) : d;
}
function Yt({ source: o, length: l = 3 }) {
  if (!o && o !== 0)
    return "";
  o = String(o);
  const e = o.length > 1 ? o.split(" ") : [o];
  if (e.length === 1 && e[0].length === 1)
    return String(o).toUpperCase();
  if (e.length === 1)
    return o.slice(0, l).toUpperCase();
  {
    const a = [];
    return e.forEach((s, t) => {
      t < l && a.push(s.slice(0, 1));
    }), a.join().replaceAll(",", "").toUpperCase();
  }
}
function Ht(o) {
  return !!o && typeof o == "function";
}
function $t(o) {
  return typeof o.apply(null, arguments) == "string";
}
function Xt(o) {
  return Array.isArray(o) ? o.length === 0 : Object.keys(o).length === 0;
}
function Kt({ componentName: o, type: l, property: e = "", index: a = "", key: s = "", warn: t = true }) {
  const c = `
> ${je[l].replace("#COMP#", o).replace("#ATTR#", e).replace("#INDX#", a).replace("#KEY#", s)}
`;
  if (t)
    console.warn(c);
  else
    throw new Error(c);
}
function ut({ points: o, a: l, b: e, angleStep: a, startX: s, startY: t }) {
  const c = [];
  for (let n = 0; n < o; n++) {
    const u = a * n, i = l + e * u, f = i * Math.cos(u) + s, d = i * Math.sin(u) + t;
    c.push({ x: f, y: d });
  }
  return c;
}
function jt({ points: o, a: l, b: e, angleStep: a, startX: s, startY: t }) {
  const c = ut({ points: o, a: l || 6, b: e || 6, angleStep: a || 0.07, startX: s, startY: t });
  let n = `M${c[0].x} ${c[0].y}`;
  for (let u = 1; u < c.length - 2; u += 2) {
    const i = c[u - 1], f = c[u], d = c[u + 1], r = c[u + 2], A = (i.x + f.x) / 2, C = (i.y + f.y) / 2, x = (f.x + d.x) / 2, b = (f.y + d.y) / 2, m = (d.x + r.x) / 2, p = (d.y + r.y) / 2;
    n += ` C${A} ${C}, ${x} ${b}, ${m} ${p}`;
  }
  return n;
}
function qt({ datasetObject: o, requiredAttributes: l }) {
  let e = [];
  return l.forEach((a) => {
    Object.hasOwn(o, a) || e.push(a);
  }), e;
}
function dt(o) {
  return {
    ALICEBLUE: "#F0F8FF",
    ANTIQUEWHITE: "#FAEBD7",
    AQUA: "#00FFFF",
    AQUAMARINE: "#7FFFD4",
    AZURE: "#F0FFFF",
    BEIGE: "#F5F5DC",
    BISQUE: "#FFE4C4",
    BLACK: "#000000",
    BLANCHEDALMOND: "#FFEBCD",
    BLUE: "#0000FF",
    BLUEVIOLET: "#8A2BE2",
    BROWN: "#A52A2A",
    BURLYWOOD: "#DEB887",
    CADETBLUE: "#5F9EA0",
    CHARTREUSE: "#7FFF00",
    CHOCOLATE: "#D2691E",
    CORAL: "#FF7F50",
    CORNFLOWERBLUE: "#6495ED",
    CORNSILK: "#FFF8DC",
    CRIMSON: "#DC143C",
    CYAN: "#00FFFF",
    DARKBLUE: "#00008B",
    DARKCYAN: "#008B8B",
    DARKGOLDENROD: "#B8860B",
    DARKGREY: "#A9A9A9",
    DARKGREEN: "#006400",
    DARKKHAKI: "#BDB76B",
    DARKMAGENTA: "#8B008B",
    DARKOLIVEGREEN: "#556B2F",
    DARKORANGE: "#FF8C00",
    DARKORCHID: "#9932CC",
    DARKRED: "#8B0000",
    DARKSALMON: "#E9967A",
    DARKSEAGREEN: "#8FBC8F",
    DARKSLATEBLUE: "#483D8B",
    DARKSLATEGREY: "#2F4F4F",
    DARKTURQUOISE: "#00CED1",
    DARKVIOLET: "#9400D3",
    DEEPPINK: "#FF1493",
    DEEPSKYBLUE: "#00BFFF",
    DIMGRAY: "#696969",
    DODGERBLUE: "#1E90FF",
    FIREBRICK: "#B22222",
    FLORALWHITE: "#FFFAF0",
    FORESTGREEN: "#228B22",
    FUCHSIA: "#FF00FF",
    GAINSBORO: "#DCDCDC",
    GHOSTWHITE: "#F8F8FF",
    GOLD: "#FFD700",
    GOLDENROD: "#DAA520",
    GREY: "#808080",
    GREEN: "#008000",
    GREENYELLOW: "#ADFF2F",
    HONEYDEW: "#F0FFF0",
    HOTPINK: "#FF69B4",
    INDIANRED: "#CD5C5C",
    INDIGO: "#4B0082",
    IVORY: "#FFFFF0",
    KHAKI: "#F0E68C",
    LAVENDER: "#E6E6FA",
    LAVENDERBLUSH: "#FFF0F5",
    LAWNGREEN: "#7CFC00",
    LEMONCHIFFON: "#FFFACD",
    LIGHTBLUE: "#ADD8E6",
    LIGHTCORAL: "#F08080",
    LIGHTCYAN: "#E0FFFF",
    LIGHTGOLDENRODYELLOW: "#FAFAD2",
    LIGHTGREY: "#D3D3D3",
    LIGHTGREEN: "#90EE90",
    LIGHTPINK: "#FFB6C1",
    LIGHTSALMON: "#FFA07A",
    LIGHTSEAGREEN: "#20B2AA",
    LIGHTSKYBLUE: "#87CEFA",
    LIGHTSLATEGREY: "#778899",
    LIGHTSTEELBLUE: "#B0C4DE",
    LIGHTYELLOW: "#FFFFE0",
    LIME: "#00FF00",
    LIMEGREEN: "#32CD32",
    LINEN: "#FAF0E6",
    MAGENTA: "#FF00FF",
    MAROON: "#800000",
    MEDIUMAQUAMARINE: "#66CDAA",
    MEDIUMBLUE: "#0000CD",
    MEDIUMORCHID: "#BA55D3",
    MEDIUMPURPLE: "#9370D8",
    MEDIUMSEAGREEN: "#3CB371",
    MEDIUMSLATEBLUE: "#7B68EE",
    MEDIUMSPRINGGREEN: "#00FA9A",
    MEDIUMTURQUOISE: "#48D1CC",
    MEDIUMVIOLETRED: "#C71585",
    MIDNIGHTBLUE: "#191970",
    MINTCREAM: "#F5FFFA",
    MISTYROSE: "#FFE4E1",
    MOCCASIN: "#FFE4B5",
    NAVAJOWHITE: "#FFDEAD",
    NAVY: "#000080",
    OLDLACE: "#FDF5E6",
    OLIVE: "#808000",
    OLIVEDRAB: "#6B8E23",
    ORANGE: "#FFA500",
    ORANGERED: "#FF4500",
    ORCHID: "#DA70D6",
    PALEGOLDENROD: "#EEE8AA",
    PALEGREEN: "#98FB98",
    PALETURQUOISE: "#AFEEEE",
    PALEVIOLETRED: "#D87093",
    PAPAYAWHIP: "#FFEFD5",
    PEACHPUFF: "#FFDAB9",
    PERU: "#CD853F",
    PINK: "#FFC0CB",
    PLUM: "#DDA0DD",
    POWDERBLUE: "#B0E0E6",
    PURPLE: "#800080",
    RED: "#FF0000",
    ROSYBROWN: "#BC8F8F",
    ROYALBLUE: "#4169E1",
    SADDLEBROWN: "#8B4513",
    SALMON: "#FA8072",
    SANDYBROWN: "#F4A460",
    SEAGREEN: "#2E8B57",
    SEASHELL: "#FFF5EE",
    SIENNA: "#A0522D",
    SILVER: "#C0C0C0",
    SKYBLUE: "#87CEEB",
    SLATEBLUE: "#6A5ACD",
    SLATEGREY: "#708090",
    SNOW: "#FFFAFA",
    SPRINGGREEN: "#00FF7F",
    STEELBLUE: "#4682B4",
    TAN: "#D2B48C",
    TEAL: "#008080",
    THISTLE: "#D8BFD8",
    TOMATO: "#FF6347",
    TURQUOISE: "#40E0D0",
    VIOLET: "#EE82EE",
    WHEAT: "#F5DEB3",
    WHITE: "#FFFFFF",
    WHITESMOKE: "#F5F5F5",
    YELLOW: "#FFFF00",
    YELLOWGREEN: "#9ACD32",
    REBECCAPURPLE: "#663399"
  }[o.toUpperCase()] || o;
}
var Qt = "http://www.w3.org/2000/svg";
function Zt(o) {
  if (o.length < 2)
    return 0;
  let l = 0, e = 0;
  for (let s = 1; s < o.length; s++) {
    const t = o[s - 1], c = o[s];
    if ([null, void 0, 0, 1 / 0, -1 / 0].includes(t))
      continue;
    const n = (c - t) / Math.abs(t) * 100;
    l += n, e++;
  }
  return e === 0 ? 0 : l / e;
}
function Jt({
  content: o,
  fontSize: l,
  fill: e,
  maxWords: a,
  x: s,
  y: t
}) {
  function c(i, f) {
    const d = i.split(" "), r = [];
    for (let A = 0; A < d.length; A += f)
      r.push(d.slice(A, A + f).join(" "));
    return r;
  }
  let n = "";
  return c(o, a).forEach((i, f) => {
    const d = `<tspan x="${s}" y="${t + f * l}" fill="${e}">${i}</tspan>`;
    n += d;
  }), n;
}
function or(o) {
  return o.length ? o.map((l) => j(l)) : [];
}
function er(o, l = null) {
  const e = o.replace(/[\p{P}\p{S}]+/gu, " ").trim(), c = (/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Tibetan}\p{Script=Myanmar}\p{Script=Devanagari}]/u.test(o) ? [...e] : e.split(/\s+/)).filter((n) => n.trim().length > 0).reduce((n, u) => (n[u] ? n[u] += 1 : n[u] = 1, n), {});
  return Object.keys(c).map((n) => {
    let u = n;
    return typeof l == "function" && typeof l(n) == "string" && (u = l(n)), {
      name: u,
      value: c[n]
    };
  });
}
function tr(o) {
  let l = o.reduce((n, u) => n + (u.stackRatio || 0), 0), e = o.filter((n) => n.stackRatio === void 0).length, a = 1 - l, s = e > 0 ? a / e : 0, t = o.map((n) => ({
    ...n,
    stackRatio: n.stackRatio !== void 0 ? n.stackRatio : s
  })), c = 0;
  return t = t.map((n) => (c += n.stackRatio, {
    ...n,
    cumulatedStackRatio: c
  })), t;
}
function rr(o) {
  function l(i, f, d, r) {
    const A = d - i, C = r - f;
    return Math.sqrt(A * A + C * C);
  }
  function e(i, f, d, r) {
    let C = 0, x = i.x, b = i.y;
    for (let m = 1; m <= 100; m += 1) {
      const p = m / 100, h = 1 - p, E = h * h, F = p * p, y = E * h * i.x + 3 * E * p * f.x + 3 * h * F * d.x + F * p * r.x, _ = E * h * i.y + 3 * E * p * f.y + 3 * h * F * d.y + F * p * r.y;
      C += l(x, b, y, _), x = y, b = _;
    }
    return C;
  }
  const a = o.match(/[a-zA-Z][^a-zA-Z]*/g);
  let s = 0, t = 0, c = 0, n = 0, u = 0;
  return a.forEach((i) => {
    const f = i[0], d = i.slice(1).trim().split(/[\s,]+/).map(Number);
    let r = 0;
    switch (f) {
      case "M":
        for (s = d[r++], t = d[r++], c = s, n = t; r < d.length; )
          u += l(s, t, d[r], d[r + 1]), s = d[r++], t = d[r++];
        break;
      case "L":
        for (; r < d.length; )
          u += l(s, t, d[r], d[r + 1]), s = d[r++], t = d[r++];
        break;
      case "H":
        for (; r < d.length; )
          u += l(s, t, d[r], t), s = d[r++];
        break;
      case "V":
        for (; r < d.length; )
          u += l(s, t, s, d[r]), t = d[r++];
        break;
      case "C":
        for (; r < d.length; )
          u += e(
            { x: s, y: t },
            { x: d[r], y: d[r + 1] },
            { x: d[r + 2], y: d[r + 3] },
            { x: d[r + 4], y: d[r + 5] }
          ), s = d[r + 4], t = d[r + 5], r += 6;
        break;
      case "Z":
        u += l(s, t, c, n), s = c, t = n;
        break;
    }
  }), u;
}
function lr({
  relator: o,
  adjuster: l,
  source: e,
  threshold: a = 0,
  fallback: s,
  max: t = 24
}) {
  const c = o / (l / e);
  return c > t ? t : c < a ? s : c;
}
function ar(o) {
  return o.reduce((l, e) => (e.series.forEach((a, s) => {
    ![void 0, null, 1 / 0, -1 / 0].includes(a) && !isNaN(a) && (l[s] = (l[s] || 0) + a);
  }), l), []);
}
function ft(o, { value: l, config: e }) {
  let a = false, s = l;
  if (typeof o == "function")
    try {
      s = o({ value: l, config: e }), ["number", "string"].includes(typeof s) ? a = true : s = l;
    } catch (t) {
      console.warn("Formatter could not be applied:", t), a = false;
    }
  return {
    isValid: a,
    value: s
  };
}
function nr(o, l, e, a) {
  const { isValid: s, value: t } = ft(o, { value: l, config: a });
  return s ? t : e;
}
function sr(o, l) {
  return l.split(".").every((e) => o !== null && typeof o == "object" && e in o ? (o = o[e], true) : false);
}
function ir(o, l = []) {
  function e(s) {
    return [NaN, void 0, 1 / 0, -1 / 0, null].includes(s) && console.warn(`A non processable value was detected : ${s}`), typeof s == "string" && isNaN(Number(s)) || typeof s == "number" && isFinite(s) ? s : 0;
  }
  function a(s) {
    if (Array.isArray(s))
      return s.map((t) => a(t));
    if (typeof s == "object" && s !== null) {
      let t = { ...s };
      return l.forEach((c) => {
        t.hasOwnProperty(c) && ![
          "NAME",
          "name",
          "TITLE",
          "title",
          "DESCRIPTION",
          "description",
          "LABEL",
          "label",
          "TIME",
          "time",
          "PERIOD",
          "period",
          "MONTH",
          "month",
          "YEAR",
          "year",
          "MONTHS",
          "months",
          "YEARS",
          "years",
          "DAY",
          "day",
          "DAYS",
          "days",
          "HOUR",
          "hour",
          "HOURS",
          "hours"
        ].includes(c) && Array.isArray(t[c]) && (t[c] = a(t[c]));
      }), Object.fromEntries(
        Object.entries(t).map(([c, n]) => [c, a(n)])
      );
    } else
      return e(s);
  }
  return a(o);
}
function cr(o, l = 100) {
  return o.length === 9 ? o.substring(0, 7) + K[l] : o + K[l];
}
function ur({ series: o, center: l, maxRadius: e }) {
  const s = 360 / o.length;
  return o.map((c, n) => {
    const i = c * e, f = n * s, d = f + s, r = f + s / 2, A = B(f) - B(90), C = B(d) - B(90), x = B(r) - B(90), b = l.x + i * Math.cos(A), m = l.y + i * Math.sin(A), p = l.x + i * Math.cos(C), h = l.y + i * Math.sin(C), E = l.x + i * Math.cos(x), F = l.y + i * Math.sin(x);
    return {
      path: `
            M ${l.x} ${l.y} 
            L ${b} ${m} 
            A ${i} ${i} 0 0 1 ${p} ${h} 
            Z
        `.trim(),
      middlePoint: { x: E, y: F }
    };
  });
}
var dr = defineAsyncComponent(() => import("./Arrow-BIs_9yK8-W5U3UH6R.js"));
var fr = defineAsyncComponent(() => import("./vue-data-ui-Cp7bO_tj-3VJHNGPK.js"));
var Ar = defineAsyncComponent(() => import("./vue-ui-3d-bar-DcF1nyGW-ZB6N5NMD.js"));
var br = defineAsyncComponent(() => import("./vue-ui-accordion-D_1fE5EF-TQKNAN34.js"));
var Cr = defineAsyncComponent(() => import("./vue-ui-age-pyramid-Oe_yHDL0-47DHEMMZ.js"));
var gr = defineAsyncComponent(() => import("./vue-ui-annotator-Dix6_Gm6-FLY5ZLZD.js"));
var hr = defineAsyncComponent(() => import("./vue-ui-candlestick-CRwzWF6j-EZWK5CL6.js"));
var kr = defineAsyncComponent(() => import("./vue-ui-chestnut-CRk0RCB9-YBNVCJ6C.js"));
var pr = defineAsyncComponent(() => import("./vue-ui-cursor-y0kdr0uA-SFX6FF3J.js"));
var mr = defineAsyncComponent(() => import("./vue-ui-dashboard-OyihaKdu-T6RZOW2B.js"));
var yr = defineAsyncComponent(() => import("./vue-ui-digits-IKt4qT2--GZH66Z4Q.js"));
var Fr = defineAsyncComponent(() => import("./vue-ui-donut-DFaGk4fI-NAGGUA4K.js"));
var xr = defineAsyncComponent(() => import("./vue-ui-donut-evolution-Dd4o37RP-UMEBBBHD.js"));
var Er = defineAsyncComponent(() => import("./vue-ui-dumbbell-B7j1_JoQ-TTED6IGR.js"));
var _r = defineAsyncComponent(() => import("./vue-ui-flow-DkPTzNv9-HF24HI6R.js"));
var wr = defineAsyncComponent(() => import("./vue-ui-galaxy-CH1BDtWl-NBROXDE7.js"));
var vr = defineAsyncComponent(() => import("./vue-ui-gauge-BXiy515T-GLJ6QPVI.js"));
var Sr = defineAsyncComponent(() => import("./vue-ui-heatmap-B-zWMk0Y-CG2BMOFP.js"));
var Lr = defineAsyncComponent(() => import("./BaseIcon-CXDdkPfN-3AXJPUBL.js"));
var Dr = defineAsyncComponent(() => import("./vue-ui-kpi-CghbfSdM-6DLKK5O5.js"));
var Br = defineAsyncComponent(() => import("./vue-ui-mini-loader-C7roqZ4p-POXX47ME.js"));
var Rr = defineAsyncComponent(() => import("./vue-ui-molecule-BwmkMEVN-IDQFIK5B.js"));
var zr = defineAsyncComponent(() => import("./vue-ui-mood-radar-DSznHxLS-WKSJGV57.js"));
var Pr = defineAsyncComponent(() => import("./vue-ui-nested-donuts-CiE4DdEQ-3BLNWZLU.js"));
var Tr = defineAsyncComponent(() => import("./vue-ui-onion-D9o6Rcgu-KIL7C34T.js"));
var Or = defineAsyncComponent(() => import("./vue-ui-parallel-coordinate-plot-BcYrYXhG-OSKPVC4C.js"));
var Nr = defineAsyncComponent(() => import("./vue-ui-quadrant-Cs3A77us-SC2N3VA4.js"));
var Mr = defineAsyncComponent(() => import("./vue-ui-quick-chart-CiiSUexi-ACQ3ITCJ.js"));
var Vr = defineAsyncComponent(() => import("./vue-ui-radar-CNSpiNrM-FHWGVWUK.js"));
var Ir = defineAsyncComponent(() => import("./vue-ui-rating-b_iYZWF8-KTLLHHZ6.js"));
var Wr = defineAsyncComponent(() => import("./vue-ui-relation-circle-nRf1pvD0-IB4ZLVZI.js"));
var Ur = defineAsyncComponent(() => import("./vue-ui-rings-BgRc1o4_-6DAT4X3T.js"));
var Gr = defineAsyncComponent(() => import("./vue-ui-scatter-CVuoW-cD-NWFEGZQO.js"));
var Yr = defineAsyncComponent(() => import("./vue-ui-screenshot-Csc0dQL9-FZBKT3ZO.js"));
var Hr = defineAsyncComponent(() => import("./vue-ui-skeleton-B2sRnIXX-RASZRXKY.js"));
var $r = defineAsyncComponent(() => import("./vue-ui-smiley-D4s-AdIE-XRQR24QD.js"));
var Xr = defineAsyncComponent(() => import("./vue-ui-sparkhistogram-CjeJ3ch1-EPZROHNP.js"));
var Kr = defineAsyncComponent(() => import("./vue-ui-sparkstackbar-B3ul3qUZ-NIJBA4VR.js"));
var jr = defineAsyncComponent(() => import("./vue-ui-spark-trend-CHKQGMLs-TKKZ7SY2.js"));
var qr = defineAsyncComponent(() => import("./vue-ui-sparkbar-Bb1fq2GR-HPDTJW6S.js"));
var Qr = defineAsyncComponent(() => import("./vue-ui-sparkgauge-DWuaAQbo-MZWI2DQ5.js"));
var Zr = defineAsyncComponent(() => import("./vue-ui-sparkline-DGJDBArr-TNFEXONB.js"));
var Jr = defineAsyncComponent(() => import("./vue-ui-strip-plot-CIb2LSV8-GELCPKOZ.js"));
var ol = defineAsyncComponent(() => import("./vue-ui-table-CmVi0nv2-DF55H5RC.js"));
var el = defineAsyncComponent(() => import("./vue-ui-table-heatmap-CgFr38QT-QQEDQTTB.js"));
var tl = defineAsyncComponent(() => import("./vue-ui-table-sparkline-eg2Qd8ws-3I7CFF7D.js"));
var rl = defineAsyncComponent(() => import("./vue-ui-thermometer-BePmFiwy-CU6ZQUTE.js"));
var ll = defineAsyncComponent(() => import("./vue-ui-timer-COSI3Q5T-FC2FWCPH.js"));
var al = defineAsyncComponent(() => import("./vue-ui-tiremarks-d6TmSHY7-J7ZSHAE2.js"));
var nl = defineAsyncComponent(() => import("./vue-ui-treemap-Qg0858o6-CKV55XQS.js"));
var sl = defineAsyncComponent(() => import("./vue-ui-vertical-bar-CieqHVD5-WWUWL57S.js"));
var il = defineAsyncComponent(() => import("./vue-ui-waffle-CjNhM-mV-NTSESCIB.js"));
var cl = defineAsyncComponent(() => import("./vue-ui-wheel-B8mbO6ht-YODLGBWE.js"));
var ul = defineAsyncComponent(() => import("./vue-ui-word-cloud-DMXrUmX5-WAVWTKPF.js"));
var dl = defineAsyncComponent(() => import("./vue-ui-xy-x8KEsGV--DY45TB2E.js"));
var fl = defineAsyncComponent(() => import("./vue-ui-xy-canvas-BYdTxzi6-N6KEVVYG.js"));
var Al = defineAsyncComponent(() => import("./vue-ui-carousel-table-BHeEbRKY-KI2KJ2NY.js"));
var bl = defineAsyncComponent(() => import("./vue-ui-gizmo-CKQcbe_7-IPSRSDIY.js"));
var Cl = defineAsyncComponent(() => import("./vue-ui-stackbar-DNROvZII-LRAJNUVZ.js"));
var gl = defineAsyncComponent(() => import("./vue-ui-bullet-CQKaC4wG-YZOUBMQU.js"));

export {
  oe,
  bt,
  Ge,
  Ct,
  gt,
  Qe,
  ht,
  k,
  et,
  kt,
  R,
  K,
  j,
  pt,
  mt,
  yt,
  Ft,
  xt,
  at,
  Et,
  _t,
  wt,
  vt,
  St,
  Lt,
  z,
  P,
  Dt,
  Bt,
  Rt,
  zt,
  Pt,
  Tt,
  Ot,
  Nt,
  Mt,
  Vt,
  It,
  Wt,
  Ut,
  Gt,
  Yt,
  Ht,
  $t,
  Xt,
  Kt,
  jt,
  qt,
  Qt,
  Zt,
  Jt,
  or,
  er,
  tr,
  rr,
  lr,
  ar,
  nr,
  sr,
  ir,
  cr,
  ur,
  dr,
  fr,
  Ar,
  br,
  Cr,
  gr,
  hr,
  kr,
  pr,
  mr,
  yr,
  Fr,
  xr,
  Er,
  _r,
  wr,
  vr,
  Sr,
  Lr,
  Dr,
  Br,
  Rr,
  zr,
  Pr,
  Tr,
  Or,
  Nr,
  Mr,
  Vr,
  Ir,
  Wr,
  Ur,
  Gr,
  Yr,
  Hr,
  $r,
  Xr,
  Kr,
  jr,
  qr,
  Qr,
  Zr,
  Jr,
  ol,
  el,
  tl,
  rl,
  ll,
  al,
  nl,
  sl,
  il,
  cl,
  ul,
  dl,
  fl,
  Al,
  bl,
  Cl,
  gl
};
//# sourceMappingURL=chunk-TG4LWCJY.js.map
