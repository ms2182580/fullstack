import { Signup_D_UploadSvg } from "@/assets/icons"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Signup_D_Steps_TellUs_DialogWrapper } from "./styles/Signup_D_Steps_TellUs_DialogWrapper"

export const Signup_D_Steps_TellUs_Dialog = () => {
  return (
    <Signup_D_Steps_TellUs_DialogWrapper>
      <h6>Upload profile picture</h6>
      <P>
        Upload a previous document to speed up the care plan creation process.
      </P>
      <div>
        <div>
          <Signup_D_UploadSvg />
          <P>
            Drag and Drop or <Caption tabIndex={0}>choose</Caption>
          </P>
        </div>
        <Caption>Supported file types: .png, .jpg, .jpeg</Caption>
        <Caption>5 MB Max</Caption>
      </div>
      <button>Upload</button>
    </Signup_D_Steps_TellUs_DialogWrapper>
  )
}
