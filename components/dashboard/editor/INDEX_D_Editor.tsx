import { Dashboard_BubbleChatSvg } from "@/assets/icons"
import { FirstStep } from "@/components/carePlan/components/stepper-part/first-step.component"
import { Stepper } from "@/components/common/stepper/steper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useDashboardAIChatUploadFile_Ctx } from "@/context/Ctx_Dashboard_CarePlanUploadFile"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import "font-awesome/css/font-awesome.css"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Editor_D_PlanInfo } from "./Editor_D_PlanInfo"
import { INDEX_D_EditorWrapper } from "./styles/Index_D_EditorWrapper"

interface Step {
  title: string
  content: React.ReactNode
}

const steps: Step[] = [
  { title: "Step 1", content: <FirstStep /> },
  { title: "Step 2", content: <FirstStep /> },
  { title: "Step 3", content: <FirstStep /> },
]

export const Index_D_Editor = () => {
  const [isWindow, setIsWindow] = useState(false)
  const { planState } = useDashboardAIChatUploadFile_Ctx()
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
      faButtons: ["fontAwesomeBack", "|"],
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
      fontSizeDefaultSelection: "10",
      fontSizeUnit: "px",
      listAdvancedTypes: true,
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
        "formatUL",
        "|",
        "insertLink",
        "insertFile",
        "insertImage",
        "|",
        "translate",
        "signature",
        "|",
        "dropdown",
      ],
    })
    FroalaEditor.DefineIcon("translate", { NAME: "info", SVG_KEY: "help" })
    FroalaEditor.RegisterCommand("translate", {
      title: "translate",
      focus: false,
      undo: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M23.2953 19.9144L18.0453 9.41437C17.983 9.28982 17.8873 9.18506 17.7688 9.11185C17.6503 9.03864 17.5138 8.99986 17.3745 8.99986C17.2353 8.99986 17.0987 9.03864 16.9803 9.11185C16.8618 9.18506 16.766 9.28982 16.7037 9.41437L14.6684 13.4859C13.0731 13.3962 11.5381 12.8452 10.25 11.8997C11.7613 10.2857 12.677 8.20463 12.8459 6H15.125C15.3239 6 15.5147 5.92098 15.6553 5.78033C15.796 5.63968 15.875 5.44891 15.875 5.25C15.875 5.05109 15.796 4.86032 15.6553 4.71967C15.5147 4.57902 15.3239 4.5 15.125 4.5H9.875V3C9.875 2.80109 9.79598 2.61032 9.65533 2.46967C9.51468 2.32902 9.32391 2.25 9.125 2.25C8.92609 2.25 8.73532 2.32902 8.59467 2.46967C8.45402 2.61032 8.375 2.80109 8.375 3V4.5H3.125C2.92609 4.5 2.73532 4.57902 2.59467 4.71967C2.45402 4.86032 2.375 5.05109 2.375 5.25C2.375 5.44891 2.45402 5.63968 2.59467 5.78033C2.73532 5.92098 2.92609 6 3.125 6H11.3403C11.1733 7.83811 10.393 9.56667 9.125 10.9078C8.33484 10.0741 7.72806 9.08406 7.34375 8.00156C7.31215 7.90712 7.26205 7.81991 7.19639 7.74503C7.13072 7.67015 7.0508 7.6091 6.96129 7.56544C6.87178 7.52178 6.77446 7.49639 6.67503 7.49074C6.5756 7.48509 6.47604 7.49931 6.38215 7.53255C6.28827 7.5658 6.20195 7.61741 6.12823 7.68437C6.05451 7.75133 5.99487 7.83231 5.95278 7.92257C5.91069 8.01283 5.88699 8.11057 5.88308 8.21009C5.87917 8.3096 5.89512 8.4089 5.93 8.50219C6.37744 9.76769 7.08226 10.9267 8 11.9062C6.58697 12.9446 4.87853 13.5031 3.125 13.5C2.92609 13.5 2.73532 13.579 2.59467 13.7197C2.45402 13.8603 2.375 14.0511 2.375 14.25C2.375 14.4489 2.45402 14.6397 2.59467 14.7803C2.73532 14.921 2.92609 15 3.125 15C5.30055 15.0024 7.41375 14.2734 9.125 12.93C10.5215 14.0211 12.1885 14.7117 13.9475 14.9278L11.4537 19.9144C11.3647 20.0923 11.35 20.2983 11.4129 20.487C11.4757 20.6757 11.611 20.8318 11.7889 20.9208C11.9668 21.0098 12.1728 21.0245 12.3615 20.9616C12.5503 20.8988 12.7063 20.7635 12.7953 20.5856L14.0881 18H20.6609L21.9538 20.5856C22.0161 20.7102 22.1119 20.815 22.2305 20.8882C22.3491 20.9614 22.4857 21.0001 22.625 21C22.7528 20.9999 22.8785 20.9672 22.9901 20.9049C23.1018 20.8426 23.1956 20.7528 23.2628 20.644C23.3299 20.5353 23.3682 20.4111 23.3739 20.2834C23.3796 20.1557 23.3525 20.0287 23.2953 19.9144ZM14.8381 16.5L17.375 11.4272L19.9109 16.5H14.8381Z" fill="#3A343C"/>
      </svg>`,
      refreshAfterCallback: false,
      callback: function () {
        alert("Hello!")
      },
    })
    FroalaEditor.DefineIcon("signature", { NAME: "info", SVG_KEY: "help" })
    FroalaEditor.RegisterCommand("signature", {
      title: "signature",
      focus: false,
      undo: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M22.25 15.75H6.4869C6.73628 15.2587 6.98659 14.7534 7.2369 14.2397C8.63659 14.3944 10.295 13.4147 12.1813 11.3128C12.2375 11.4684 12.3003 11.6287 12.3688 11.7909C12.9791 13.2206 13.7666 14.0353 14.7125 14.2144C15.6819 14.4019 16.6419 13.9116 17.6263 12.7313C18.2656 13.4878 19.5782 14.25 22.25 14.25C22.4489 14.25 22.6397 14.171 22.7804 14.0303C22.921 13.8897 23 13.6989 23 13.5C23 13.3011 22.921 13.1103 22.7804 12.9697C22.6397 12.829 22.4489 12.75 22.25 12.75C19.3785 12.75 18.5422 11.7572 18.5 11.2294C18.4955 11.0549 18.4302 10.8875 18.3155 10.756C18.2007 10.6245 18.0437 10.5371 17.8715 10.5089C17.6993 10.4807 17.5226 10.5134 17.3719 10.6014C17.2212 10.6895 17.1059 10.8274 17.046 10.9913C15.905 12.7022 15.2291 12.7856 14.9835 12.7406C14.2025 12.5934 13.476 10.7784 13.2313 9.59906C13.1993 9.45011 13.1226 9.31445 13.0116 9.21012C12.9006 9.1058 12.7604 9.03775 12.6098 9.01506C12.4591 8.99236 12.3051 9.01607 12.1683 9.08305C12.0315 9.15003 11.9183 9.2571 11.8438 9.39C9.98753 11.6981 8.74253 12.4838 7.96159 12.6844C8.75753 10.9144 9.3519 9.36094 9.73253 8.05313C10.3719 5.85563 10.4188 4.31906 9.87409 3.35625C9.59284 2.85375 9.00315 2.25469 7.82003 2.25H7.79659C6.29659 2.26031 5.11534 3.68437 4.55096 6.15937C4.2144 7.63219 4.15909 9.27094 4.39815 10.6594C4.63721 12.0478 5.13503 13.0509 5.85596 13.6491C5.50721 14.3737 5.15003 15.0816 4.80315 15.7519H2.75003C2.55111 15.7519 2.36035 15.8309 2.2197 15.9715C2.07905 16.1122 2.00003 16.303 2.00003 16.5019C2.00003 16.7008 2.07905 16.8916 2.2197 17.0322C2.36035 17.1729 2.55111 17.2519 2.75003 17.2519H4.00721C2.94596 19.2206 2.12096 20.5931 2.10784 20.6156C2.05437 20.7001 2.01832 20.7944 2.00181 20.893C1.98531 20.9915 1.98867 21.0924 2.01171 21.1897C2.03476 21.287 2.07701 21.3786 2.13599 21.4594C2.19497 21.5401 2.26949 21.6082 2.35516 21.6596C2.44084 21.7111 2.53594 21.745 2.63488 21.7592C2.73383 21.7734 2.83461 21.7677 2.93132 21.7424C3.02802 21.7171 3.11869 21.6727 3.19801 21.6119C3.27732 21.5511 3.34367 21.475 3.39315 21.3881C3.40721 21.3638 4.44971 19.6266 5.70878 17.2519H22.25C22.4489 17.2519 22.6397 17.1729 22.7804 17.0322C22.921 16.8916 23 16.7008 23 16.5019C23 16.303 22.921 16.1122 22.7804 15.9715C22.6397 15.8309 22.4489 15.7519 22.25 15.7519V15.75ZM18.5 11.25V11.2303C18.5006 11.2369 18.5006 11.2435 18.5 11.25ZM6.01159 6.49312C6.38565 4.85438 7.10753 3.75 7.81253 3.75C8.30471 3.75 8.46878 3.92437 8.56253 4.09406C8.84378 4.59375 9.17378 6.36187 6.53284 12.1912C5.76503 11.1328 5.50346 8.71875 6.01159 6.49312Z" fill="#3A343C"/>
      </svg>`,

      refreshAfterCallback: false,
      callback: function () {
        alert("Hello!")
      },
    })
    FroalaEditor.DefineIcon("dropdown", { NAME: "info", SVG_KEY: "help" })
    FroalaEditor.RegisterCommand("dropdown", {
      title: "dropdown",
      focus: false,
      undo: false,
      icon: `View`,
      type: "dropdown",
      options: {
        opt1: "Option 1",
        opt2: "Option 2",
      },
      refreshAfterCallback: false,
      callback: function () {
        alert("Hello!")
      },
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
    <>
      <INDEX_D_EditorWrapper>
        <div>
          <span>File</span>
          <div id="toolbar" />
          <span>
            <span id="optimize">Optimize</span>
            <span>
              <Dashboard_BubbleChatSvg /> AIChat
            </span>
          </span>
        </div>
        <div id="first">
          <div className="stepper">
            <Stepper steps={steps} />
          </div>

          {planState === "EXISTING" ? (
            <Editor_D_PlanInfo />
          ) : (
            <div>
              <div>
                <P>John's care plan</P>
                <Link href={`/${ALL_ROUTES.EDITOR_CARE_PLAN}`}>
                  Resource Directory
                </Link>
              </div>
              <div id="editor" style={{ width: "100%", height: "100%" }}></div>
            </div>
          )}
        </div>
      </INDEX_D_EditorWrapper>
    </>
  )
}
