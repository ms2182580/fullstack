import { Editor_Main_Wrapper } from "./styles/editorLayout.style"
import { EditorSideBar } from "./components/sidebar/sidebar.component"
import { EditorHeader } from "./components/header/header.component"

export default function EditorLayout({ children }) {
  return (
    <Editor_Main_Wrapper>
      <EditorSideBar />
      <div>
        <EditorHeader />
        {children}
      </div>
    </Editor_Main_Wrapper>
  )
}
