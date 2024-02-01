import { INDEX_D_EditorWrapper } from "./styles/Index_D_EditorWrapper"
import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "font-awesome/css/font-awesome.css"
import { useEffect, useState } from "react"
import { Dashboard_BubbleChatSvg } from "@/assets/icons"

export const Index_D_Editor = () => {
  const [isWindow, setIsWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true)
    }
  }, [])
  const initEditor = async () => {
    await import("froala-editor/js/plugins.pkgd.min.js")
    await import("froala-editor/js/plugins/font_family.min.js")
    await import("froala-editor/js/plugins/align.min.js")
    await import("froala-editor/js/third_party/font_awesome.min.js")
    await import("@/public/js/fontSize")
    await import("@/public/js/fileUpload")
    const FroalaEditor = (await import("froala-editor")).default
    const editor = new FroalaEditor("#editor", {
      language: "en",
      placeholderText:
        "Your care plan will generate here after answering a few questions!",
      toolbarContainer: "#toolbar",
      width: "930px",
      height: "750px",
      editorClass: "editor",
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      fontSizeSelection: true,
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
      fontSizeDefaultSelection: "12",
      fontSizeUnit: "px",
      odeBeautifierOptions: {
        end_with_newline: true,
        indent_inner_html: true,
        extra_liners:
          "['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'table', 'dl']",
        brace_style: "expand",
        indent_char: " ",
        indent_size: 4,
        wrap_line_length: 0,
      },
      pluginsEnabled: [
        "fullscreen",
        "codeBeautifier",
        "image",
        "link",
        "lists",
        "paragraphFormat",
        "paragraphStyle",
        "table",
        "url",
        "fontSize",
        "fontFamily",
        "align",
        "file",
        "fontAwesome",
      ],
      toolbarButtons: [
        "undo",
        "redo",
        "|",
        "bold",
        "italic",
        "underline",
        "-",
        "fontSize",
        "|",
        "alignLeft",
        "alignCenter",
        "alignRight",
        "|",
        "formatOL",
        "|",
        "insertLink",
        "insertFile",
        "insertImage",
        "|",
      ],
    })
  }
  useEffect(() => {
    async function init() {
      await initEditor()
    }
    if (isWindow) init()
  }, [isWindow])

  if (isWindow === false) return <></>

  return (
    <INDEX_D_EditorWrapper>
      <div>
        <span>file</span>
        <div id="toolbar" />
        <span>
          <span>Optimize</span>
          <span>
            <Dashboard_BubbleChatSvg /> AIChat
          </span>
        </span>
      </div>
      <div>
        <div>Card</div>
        <div id="editor" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </INDEX_D_EditorWrapper>
  )
}
