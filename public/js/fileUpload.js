/*!
 * froala_editor v4.1.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2023 Froala Labs
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("froala-editor"))
    : "function" == typeof define && define.amd
    ? define(["froala-editor"], t)
    : t(e.FroalaEditor)
})(this, function (m) {
  "use strict"
  ;(m = m && m.hasOwnProperty("default") ? m["default"] : m),
    Object.assign(m.POPUP_TEMPLATES, {
      "file.insert": "[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]",
    }),
    Object.assign(m.DEFAULTS, {
      fileUpload: !0,
      fileUploadURL: null,
      fileUploadParam: "file",
      fileUploadParams: {},
      fileUploadToS3: !1,
      fileUploadToAzure: !1,
      fileUploadMethod: "POST",
      fileMaxSize: 10485760,
      fileAllowedTypes: ["*"],
      fileInsertButtons: ["fileBack", "|"],
      fileUseSelectedText: !1,
    }),
    (m.PLUGINS.file = function (T) {
      var i,
        u = T.$,
        A = "https://i.froala.com/upload",
        c = 2,
        v = 3,
        g = 4,
        S = 5,
        P = 6,
        o = {}
      function w() {
        var e = T.popups.get("file.insert")
        e || (e = l()),
          e
            .find(".fr-layer.fr-active")
            .removeClass("fr-active")
            .addClass("fr-pactive"),
          e.find(".fr-file-progress-bar-layer").addClass("fr-active"),
          e.find(".fr-buttons").hide(),
          r(T.language.translate("Uploading"), 0)
      }
      function a(e) {
        var t = T.popups.get("file.insert")
        t &&
          (t
            .find(".fr-layer.fr-pactive")
            .addClass("fr-active")
            .removeClass("fr-pactive"),
          t.find(".fr-file-progress-bar-layer").removeClass("fr-active"),
          t.find(".fr-buttons").show(),
          e && (T.events.focus(), T.popups.hide("file.insert")))
      }
      function r(e, t) {
        var o = T.popups.get("file.insert")
        if (o) {
          var i = o.find(".fr-file-progress-bar-layer")
          i.find("h3").text(e + (t ? " ".concat(t, "%") : "")),
            i.removeClass("fr-error"),
            t
              ? (i.find("div").removeClass("fr-indeterminate"),
                i.find("div > span").css("width", "".concat(t, "%")))
              : i.find("div").addClass("fr-indeterminate")
        }
      }
      function h(e, t, o, i) {
        var r
        T.edit.on(),
          T.events.focus(!0),
          T.selection.restore(),
          T.opts.fileUseSelectedText &&
            T.selection.text().length &&
            (t = T.selection.text())
        var a = '<a href="'.concat(e, '" id="fr-inserted-file" ')
        if (void 0 !== i)
          for (r in i)
            i.hasOwnProperty(r) &&
              "link" != r &&
              (a += "".concat(r, '="').concat(i[r], '" '))
        ;-1 == a.indexOf(' class="') && (a += 'class="fr-file" '),
          (a += ">".concat(t, "</a>")),
          T.html.insert(a)
        var n = T.$el.find("#fr-inserted-file")
        n.removeAttr("id"),
          T.popups.hide("file.insert"),
          T.undo.saveStep(),
          f(),
          T.events.trigger("file.inserted", [n, o])
      }
      function k(e, t, o) {
        var i = this.status,
          r = this.response,
          a = this.responseXML,
          n = this.responseText
        try {
          if (T.opts.fileUploadToS3 || T.opts.fileUploadToAzure)
            if (201 === i) {
              var s
              if (T.opts.fileUploadToAzure) {
                if (
                  !1 ===
                  T.events.trigger(
                    "file.uploadedToAzure",
                    [this.responseURL, o, r],
                    !0
                  )
                )
                  return T.edit.on(), !1
                s = t
              } else
                s = (function p(e) {
                  try {
                    var t = u(e).find("Location").text(),
                      o = u(e).find("Key").text()
                    return !1 ===
                      T.events.trigger("file.uploadedToS3", [t, o, e], !0)
                      ? (T.edit.on(), !1)
                      : t
                  } catch (i) {
                    return x(g, e), !1
                  }
                })(a)
              s && h(s, e, r || a)
            } else x(g, r || a)
          else if (200 <= i && i < 300) {
            var l = (function f(e) {
              try {
                if (!1 === T.events.trigger("file.uploaded", [e], !0))
                  return T.edit.on(), !1
                var t = JSON.parse(e)
                return t.link ? t : (x(c, e), !1)
              } catch (o) {
                return x(g, e), !1
              }
            })(n)
            l && h(l.link, e, r || n, l)
          } else x(v, r || n)
        } catch (d) {
          x(g, r || n)
        }
      }
      function R() {
        x(g, this.response || this.responseText || this.responseXML)
      }
      function C(e) {
        if (e.lengthComputable) {
          var t = ((e.loaded / e.total) * 100) | 0
          r(T.language.translate("Uploading"), t)
        }
      }
      function x(e, t) {
        T.edit.on(),
          (function i(e) {
            w()
            var t = T.popups
              .get("file.insert")
              .find(".fr-file-progress-bar-layer")
            t.addClass("fr-error")
            var o = t.find("h3")
            o.text(e), T.events.disableBlur(), o.focus()
          })(T.language.translate("Something went wrong. Please try again.")),
          T.events.trigger("file.error", [{ code: e, message: o[e] }, t])
      }
      function z() {
        T.edit.on(), a(!0)
      }
      function n(e) {
        if (void 0 !== e && 0 < e.length) {
          var t = e[0].type
          if (
            (e[0].name &&
              e[0].name.endsWith(".msg") &&
              (t = "application/vnd.ms-outlook"),
            !1 === T.events.trigger("file.beforeUpload", [e]))
          )
            return !1
          var o,
            i = e[0]
          if (
            !(
              (null !== T.opts.fileUploadURL && T.opts.fileUploadURL !== A) ||
              T.opts.fileUploadToS3 ||
              T.opts.fileUploadToAzure
            )
          )
            return (
              (function y(a) {
                var n = new FileReader()
                ;(n.onload = function () {
                  for (
                    var e = n.result,
                      t = atob(n.result.split(",")[1]),
                      o = [],
                      i = 0;
                    i < t.length;
                    i++
                  )
                    o.push(t.charCodeAt(i))
                  var r = a.type
                  a.name &&
                    a.name.endsWith(".msg") &&
                    (r = "application/vnd.ms-outlook"),
                    (e = window.URL.createObjectURL(
                      new Blob([new Uint8Array(o)], { type: r })
                    )),
                    T.file.insert(e, a.name, null)
                }),
                  w(),
                  n.readAsDataURL(a)
              })(i),
              !1
            )
          if (i.size > T.opts.fileMaxSize) return x(S), !1
          if (
            T.opts.fileAllowedTypes.indexOf("*") < 0 &&
            T.opts.fileAllowedTypes.indexOf(t.replace(/file\//g, "")) < 0
          )
            return x(P), !1
          if (
            (T.drag_support.formdata &&
              (o = T.drag_support.formdata ? new FormData() : null),
            o)
          ) {
            var r
            if (!1 !== T.opts.fileUploadToS3)
              for (r in (o.append(
                "key",
                T.opts.fileUploadToS3.keyStart +
                  new Date().getTime() +
                  "-" +
                  (i.name || "untitled")
              ),
              o.append("success_action_status", "201"),
              o.append("X-Requested-With", "xhr"),
              o.append("Content-Type", t),
              T.opts.fileUploadToS3.params))
                T.opts.fileUploadToS3.params.hasOwnProperty(r) &&
                  o.append(r, T.opts.fileUploadToS3.params[r])
            for (r in T.opts.fileUploadParams)
              T.opts.fileUploadParams.hasOwnProperty(r) &&
                o.append(r, T.opts.fileUploadParams[r])
            o.append(T.opts.fileUploadParam, i)
            var a,
              n,
              s = T.opts.fileUploadURL
            T.opts.fileUploadToS3 &&
              (s = T.opts.fileUploadToS3.uploadURL
                ? T.opts.fileUploadToS3.uploadURL
                : "https://"
                    .concat(T.opts.fileUploadToS3.region, ".amazonaws.com/")
                    .concat(T.opts.fileUploadToS3.bucket))
            var l = T.opts.fileUploadMethod
            T.opts.fileUploadToAzure &&
              ((s = T.opts.fileUploadToAzure.uploadURL
                ? ""
                    .concat(T.opts.fileUploadToAzure.uploadURL, "/")
                    .concat(i.name)
                : encodeURI(
                    "https://"
                      .concat(
                        T.opts.fileUploadToAzure.account,
                        ".blob.core.windows.net/"
                      )
                      .concat(T.opts.fileUploadToAzure.container, "/")
                      .concat(i.name)
                  )),
              (a = s),
              T.opts.fileUploadToAzure.SASToken &&
                (s += T.opts.fileUploadToAzure.SASToken),
              (l = "PUT"))
            var p = T.core.getXHR(s, l)
            if (T.opts.fileUploadToAzure) {
              var f = new Date().toUTCString()
              if (
                !T.opts.fileUploadToAzure.SASToken &&
                T.opts.fileUploadToAzure.accessKey
              ) {
                var d = T.opts.fileUploadToAzure.account,
                  u = T.opts.fileUploadToAzure.container
                if (T.opts.fileUploadToAzure.uploadURL) {
                  var c = T.opts.fileUploadToAzure.uploadURL.split("/")
                  ;(u = c.pop()), (d = c.pop().split(".")[0])
                }
                var v = "x-ms-blob-type:BlockBlob\nx-ms-date:".concat(
                    f,
                    "\nx-ms-version:2019-07-07"
                  ),
                  g = encodeURI("/" + d + "/" + u + "/" + i.name),
                  h =
                    l +
                    "\n\n\n" +
                    i.size +
                    "\n\n" +
                    t +
                    "\n\n\n\n\n\n\n" +
                    v +
                    "\n" +
                    g,
                  U = T.cryptoJSPlugin.cryptoJS
                    .HmacSHA256(
                      h,
                      T.cryptoJSPlugin.cryptoJS.enc.Base64.parse(
                        T.opts.fileUploadToAzure.accessKey
                      )
                    )
                    .toString(T.cryptoJSPlugin.cryptoJS.enc.Base64),
                  m = "SharedKey " + d + ":" + U
                ;(n = U), p.setRequestHeader("Authorization", m)
              }
              for (r in (p.setRequestHeader("x-ms-version", "2019-07-07"),
              p.setRequestHeader("x-ms-date", f),
              p.setRequestHeader("Content-Type", t),
              p.setRequestHeader("x-ms-blob-type", "BlockBlob"),
              T.opts.fileUploadParams))
                T.opts.fileUploadParams.hasOwnProperty(r) &&
                  p.setRequestHeader(r, T.opts.fileUploadParams[r])
              for (r in T.opts.fileUploadToAzure.params)
                T.opts.fileUploadToAzure.params.hasOwnProperty(r) &&
                  p.setRequestHeader(r, T.opts.fileUploadToAzure.params[r])
            }
            ;(p.onload = function () {
              k.call(p, i.name, a, n)
            }),
              (p.onerror = R),
              (p.upload.onprogress = C),
              (p.onabort = z),
              w()
            var b = T.popups.get("file.insert")
            b &&
              (b.off("abortUpload"),
              b.on("abortUpload", function () {
                4 !== p.readyState && p.abort()
              })),
              p.send(T.opts.fileUploadToAzure ? i : o)
          }
        }
      }
      function s() {
        a()
      }
      function l(e) {
        if (e) return T.popups.onHide("file.insert", s), !0
        var t
        T.opts.fileUpload ||
          T.opts.fileInsertButtons.splice(
            T.opts.fileInsertButtons.indexOf("fileUpload"),
            1
          ),
          (t = '<div class="fr-buttons fr-tabs">'.concat(
            T.button.buildList(T.opts.fileInsertButtons),
            "</div>"
          ))
        var o = ""
        T.opts.fileUpload &&
          (o =
            '<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'
              .concat(T.id, '"><strong>')
              .concat(T.language.translate("Drop file"), "</strong><br>(")
              .concat(
                T.language.translate("or click"),
                ')<div class="fr-form"><input type="file" name="'
              )
              .concat(T.opts.fileUploadParam, '" accept="')
              .concat(0 <= T.opts.fileAllowedTypes.indexOf("*") ? "/" : "")
              .concat(
                T.opts.fileAllowedTypes.join(", ").toLowerCase(),
                '" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'
              )
              .concat(T.id, '" role="button"></div></div>'))
        var i = {
            buttons: t,
            upload_layer: o,
            progress_bar:
              '<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>',
          },
          r = T.popups.create("file.insert", i)
        return (
          (function a(o) {
            T.events.$on(
              o,
              "dragover dragenter",
              ".fr-file-upload-layer",
              function () {
                return u(this).addClass("fr-drop"), !1
              },
              !0
            ),
              T.events.$on(
                o,
                "dragleave dragend",
                ".fr-file-upload-layer",
                function () {
                  return u(this).removeClass("fr-drop"), !1
                },
                !0
              ),
              T.events.$on(
                o,
                "drop",
                ".fr-file-upload-layer",
                function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    u(this).removeClass("fr-drop")
                  var t = e.originalEvent.dataTransfer
                  t && t.files && (o.data("instance") || T).file.upload(t.files)
                },
                !0
              ),
              T.helpers.isIOS() &&
                T.events.$on(
                  o,
                  "touchstart",
                  '.fr-file-upload-layer input[type="file"]',
                  function () {
                    u(this).trigger("click")
                  }
                ),
              T.events.$on(
                o,
                "change",
                '.fr-file-upload-layer input[type="file"]',
                function () {
                  if (this.files) {
                    var e = o.data("instance") || T
                    e.events.disableBlur(),
                      o.find("input:focus").blur(),
                      e.events.enableBlur(),
                      e.file.upload(this.files)
                  }
                  u(this).val("")
                },
                !0
              )
          })(r),
          r
        )
      }
      function t(e) {
        T.node.hasClass(e, "fr-file")
      }
      function p(e) {
        var t = e.originalEvent.dataTransfer
        if (t && t.files && t.files.length) {
          var o = t.files[0]
          if (o && "undefined" != typeof o.type) {
            if (o.type.indexOf("image") < 0) {
              if (!T.opts.fileUpload)
                return e.preventDefault(), e.stopPropagation(), !1
              T.markers.remove(),
                T.markers.insertAtPoint(e.originalEvent),
                T.$el.find(".fr-marker").replaceWith(m.MARKERS),
                T.popups.hideAll()
              var i = T.popups.get("file.insert")
              return (
                i || (i = l()),
                T.popups.setContainer("file.insert", T.$sc),
                T.popups.show(
                  "file.insert",
                  e.originalEvent.pageX,
                  e.originalEvent.pageY
                ),
                w(),
                n(t.files),
                e.preventDefault(),
                e.stopPropagation(),
                !1
              )
            }
          } else
            o.type.indexOf("image") < 0 &&
              (e.preventDefault(), e.stopPropagation())
        }
      }
      function f() {
        var e,
          t = Array.prototype.slice.call(T.el.querySelectorAll("a.fr-file")),
          o = []
        for (e = 0; e < t.length; e++) o.push(t[e].getAttribute("href"))
        if (i)
          for (e = 0; e < i.length; e++)
            o.indexOf(i[e].getAttribute("href")) < 0 &&
              T.events.trigger("file.unlink", [i[e]])
        i = t
      }
      return (
        (o[1] = "File cannot be loaded from the passed link."),
        (o[c] = "No link in upload response."),
        (o[v] = "Error during file upload."),
        (o[g] = "Parsing response failed."),
        (o[S] = "File is too large."),
        (o[P] = "File file type is invalid."),
        (o[7] = "Files can be uploaded only to same domain in IE 8 and IE 9."),
        {
          _init: function d() {
            !(function e() {
              T.events.on("drop", p),
                T.events.$on(T.$win, "keydown", function (e) {
                  var t = e.which,
                    o = T.popups.get("file.insert")
                  o && t === m.KEYCODE.ESC && o.trigger("abortUpload")
                }),
                T.events.on("destroy", function () {
                  var e = T.popups.get("file.insert")
                  e && e.trigger("abortUpload")
                })
            })(),
              T.events.on("link.beforeRemove", t),
              T.$wp && (f(), T.events.on("contentChanged", f)),
              l(!0)
          },
          showInsertPopup: function U() {
            var e = T.$tb.find('.fr-command[data-cmd="insertFile"]'),
              t = T.popups.get("file.insert")
            if ((t || (t = l()), a(), !t.hasClass("fr-active")))
              if (
                (T.popups.refresh("file.insert"),
                T.popups.setContainer("file.insert", T.$tb),
                e.isVisible)
              ) {
                var o = T.button.getPosition(e),
                  i = o.left,
                  r = o.top
                T.popups.show("file.insert", i, r, e.outerHeight())
              } else T.position.forSelection(t), T.popups.show("file.insert")
          },
          upload: n,
          insert: h,
          back: function e() {
            T.events.disableBlur(),
              T.selection.restore(),
              T.events.enableBlur(),
              T.popups.hide("file.insert"),
              T.toolbar.showInline()
          },
          hideProgressBar: a,
        }
      )
    }),
    m.DefineIcon("insertFile", {
      NAME: "file-o",
      FA5NAME: "file",
      SVG_KEY: "insertFile",
    }),
    m.RegisterCommand("insertFile", {
      title: "Upload File",
      undo: !1,
      focus: !0,
      refreshAfterCallback: !1,
      popup: !0,
      callback: function () {
        this.popups.isVisible("file.insert")
          ? (this.$el.find(".fr-marker").length &&
              (this.events.disableBlur(), this.selection.restore()),
            this.popups.hide("file.insert"))
          : this.file.showInsertPopup()
      },
      plugin: "file",
    }),
    m.DefineIcon("fileBack", { NAME: "arrow-left", SVG_KEY: "back" }),
    m.RegisterCommand("fileBack", {
      title: "Back",
      undo: !1,
      focus: !1,
      back: !0,
      refreshAfterCallback: !1,
      callback: function () {
        this.file.back()
      },
      refresh: function (e) {
        this.opts.toolbarInline
          ? (e.removeClass("fr-hidden"),
            e.next(".fr-separator").removeClass("fr-hidden"))
          : (e.addClass("fr-hidden"),
            e.next(".fr-separator").addClass("fr-hidden"))
      },
    }),
    m.RegisterCommand("fileDismissError", {
      title: "OK",
      callback: function () {
        this.file.hideProgressBar(!0)
      },
    })
})
