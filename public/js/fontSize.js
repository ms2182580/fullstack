/*!
 * froala_editor v4.1.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2023 Froala Labs
 */
console.log("FONT RELOAD")
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("froala-editor"))
    : "function" == typeof define && define.amd
    ? define(["froala-editor"], e)
    : e(t.FroalaEditor)
})(this, function (t) {
  "use strict"
  ;(t = t && t.hasOwnProperty("default") ? t["default"] : t),
    Object.assign(t.DEFAULTS, {
      fontSize: [
        "8",
        "9",
        "10",
        "11",
        "12",
        "14",
        "18",
        "24",
        "30",
        "36",
        "48",
        "60",
        "72",
        "96",
      ],
      fontSizeSelection: !1,
      fontSizeDefaultSelection: "12",
      fontSizeUnit: "px",
    }),
    (t.PLUGINS.fontSize = function (o) {
      var i = o.$
      return {
        apply: function e(t) {
          o.format.applyStyle("font-size", t)
        },
        refreshOnShow: function a(t, e) {
          var n = i(o.selection.element()).css("font-size")
          "pt" === o.opts.fontSizeUnit &&
            (n = "".concat(Math.round((72 * parseFloat(n, 10)) / 96), "pt")),
            e
              .find(".fr-command.fr-active")
              .removeClass("fr-active")
              .attr("aria-selected", !1),
            e
              .find('.fr-command[data-param1="'.concat(n, '"]'))
              .addClass("fr-active")
              .attr("aria-selected", !0)
        },
        refresh: function n(t) {
          if (o.opts.fontSizeSelection) {
            var e = o.helpers.getPX(i(o.selection.element()).css("font-size"))
            "pt" === o.opts.fontSizeUnit &&
              (e = "".concat(Math.round((72 * parseFloat(e, 10)) / 96), "pt")),
              t.find("> span").text(e)
          }
        },
      }
    }),
    t.RegisterCommand("fontSize", {
      type: "dropdown",
      title: "Font Size",
      displaySelection: function (t) {
        return t.opts.fontSizeSelection
      },
      displaySelectionWidth: 30,
      defaultSelection: function (t) {
        return t.opts.fontSizeDefaultSelection
      },
      html: function () {
        for (
          var t = '<ul class="fr-dropdown-list" role="presentation">',
            e = this.opts.fontSize,
            n = 0;
          n < e.length;
          n++
        ) {
          var o = e[n]
          t +=
            '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'
              .concat(o)
              .concat(this.opts.fontSizeUnit, '" title="')
              .concat(o, '">')
              .concat(o, "</a></li>")
        }
        return (t += "</ul>")
      },
      callback: function (t, e) {
        this.fontSize.apply(e)
      },
      refresh: function (t) {
        this.fontSize.refresh(t)
      },
      refreshOnShow: function (t, e) {
        this.fontSize.refreshOnShow(t, e)
      },
      plugin: "fontSize",
    }),
    t.DefineIcon("fontSize", { NAME: "text-height", SVG_KEY: "fontSize" })
})
