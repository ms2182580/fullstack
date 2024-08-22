import { BackArrow } from "@/assets/icons"
import { UnderConstruction } from "@/components/under-construction/UnderConstruction"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { Custom404Wrapper } from "./styles/Custom404Wrapper"

export const Custom404_Component = () => {
  return (
    <Custom404Wrapper>
      <span>
        <Link href={`${ALL_ROUTES.HOME}`}>
          <BackArrow /> <P semibold>Back</P>
        </Link>
      </span>
      <UnderConstruction />
    </Custom404Wrapper>
  )
}
