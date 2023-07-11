import Image from "next/image.js"
import { ORG_D_Search_CarePlanSvg } from "../../../../../assets/Icons"
import ORGDesktop_Search_Hero from "../../../../../assets/images/ORGDesktop_Search_Hero.png"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_SearchComponent } from "../../../inputs/desktop/ST_D_SearchComponent"
import { ST_D_Search_CardsLanding } from "./ST_D_Search_CardsLanding"
import { INDEX_D_STSearchWrapper } from "./styles/INDEX_D_STSearchWrapper"

export const INDEX_D_STSearch = () => {
  return (
    <INDEX_D_STSearchWrapper>
      <div>
        <H1 semi_bold>
          Find your I/DD <br /> community
          <br /> and resources
        </H1>

        <div>
          <div>
            <ORG_D_Search_CarePlanSvg />
            <P semibold>Care Plan</P>
          </div>
        </div>

        <div>
          <Image
            src={ORGDesktop_Search_Hero}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>

        <ST_D_SearchComponent
          toWhere="SpeechTherapists"
          landingHere="true"
        />
      </div>

      <ST_D_Search_CardsLanding />
    </INDEX_D_STSearchWrapper>
  )
}
