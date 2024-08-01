import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import Signup_D_Steps_Review_Dialog_Image from "@/assets/images/signup/Signup_D_Steps_Review_Dialog_Image.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/image"
import { Signup_D_Steps_Review_DialogWrapper } from "./styles/Signup_D_Steps_Review_DialogWrapper"

export const Signup_D_Steps_Review_Dialog = () => {
  return (
    <Signup_D_Steps_Review_DialogWrapper
      data-testid={KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_REVIEW_DIALOG}
    >
      <Image
        src={Signup_D_Steps_Review_Dialog_Image}
        alt="decorative image"
        width={0}
        height={0}
      />

      <h6>Profile successfully created!</h6>
      <P>
        Congrats! You’ve completed your profile and are on the way to greatness.
      </P>
    </Signup_D_Steps_Review_DialogWrapper>
  )
}
