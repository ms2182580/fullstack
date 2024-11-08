import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_About_ModalWrapper } from "./styles/ORG_D_Detail_About_ModalWrapper.js"

export const ORG_D_Detail_About_Modal = ({ aboutTextState }) => {
  return (
    <ORG_D_Detail_About_ModalWrapper>
      <div>
        <H4 hover>About</H4>
        <P>{aboutTextState}</P>
      </div>

      <div>
        <H4 hover>Media</H4>

        <div></div>

        {/* <ReactPlayer
          width="100%"
          height="80%"
          controls
          url="https://www.youtube.com/watch?v=FK9j7D3hrE0"
        /> */}
      </div>
    </ORG_D_Detail_About_ModalWrapper>
  )
}
