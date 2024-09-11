import { Editor_Header_Row1 } from "./Editor_Header_Row1"
import { Editor_Header_Row2 } from "./Editor_Header_Row2"
import { Editor_HeaderWrapper } from "./styles/Editor_HeaderWrapper"

/* 
Editor_Header_Row1
Editor_Header_Row2
*/

export const Editor_Header = () => {
  return (
    <Editor_HeaderWrapper>
      <Editor_Header_Row1 />
      <Editor_Header_Row2 />
    </Editor_HeaderWrapper>
  )
}
