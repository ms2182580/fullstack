import {
  Signup_ReviewAddProfileSvg,
  Signup_ReviewPencilIcon,
  Signup_ReviewSvg,
} from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Signup_D_Steps_ReviewWrapper } from "./styles/Signup_D_Steps_ReviewWrapper"

export const Signup_D_Steps_Review = () => {
  return (
    <Signup_D_Steps_ReviewWrapper>
      <div>
        <span>
          <Signup_ReviewSvg />
          <h6>Kohlil Doe</h6>
        </span>
        <span>
          <P>Edit</P>
          <Signup_ReviewPencilIcon />
        </span>
      </div>
      <div>
        <span>
          <Signup_ReviewAddProfileSvg />
          <h6>Add another profile</h6>
        </span>
      </div>
    </Signup_D_Steps_ReviewWrapper>
  )
}
