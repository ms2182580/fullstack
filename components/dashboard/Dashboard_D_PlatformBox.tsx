import Image from "next/image"
import { ButtonSmall } from "../ui/buttons/general"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H1, H4 } from "../ui/heading_body_text/HeaderFonts"
import { Dashboard_D_PlatformBoxWrapper } from "./styles/Dashboard_D_PlatformBoxWrapper"
import bubble from "@/assets/images/Dashboard/chatgpt.png"
import {
  Dashboard_D_CreateNewSvg,
  Dashboard_D_UploadPlanSvg,
} from "@/assets/icons"
export const Dashboard_D_PlatformBox = () => {
  return (
    <Dashboard_D_PlatformBoxWrapper>
      <div>
        <H4>
          Use our platform to help create your
          <br /> tailored care plan
        </H4>
        <P>Create a care plan in minutes. Connect with coordinators faster. </P>
        <span>
          <ButtonSmall>
            <span>
              <Dashboard_D_CreateNewSvg />
            </span>
            <span>Create Plan</span>
          </ButtonSmall>
          <ButtonSmall secondary>
            <Dashboard_D_UploadPlanSvg />
            Upload Plan
          </ButtonSmall>
        </span>
        <Image
          src={bubble}
          alt="ChatGpt bubble icon"
          width={100}
          height={100}
        />
      </div>
    </Dashboard_D_PlatformBoxWrapper>
  )
}
