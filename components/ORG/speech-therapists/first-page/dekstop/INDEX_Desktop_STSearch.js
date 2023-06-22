import Image from "next/image.js"
import ORGDesktop_Search_Hero from "../../../../../assets/images/ORGDesktop_Search_Hero.png"
import { H1 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { STDesktop_SearchComponent } from "../../../inputs/desktop/STDesktop_SearchComponent"
import { ST_Desktop_SearchCardsLanding } from "./ST_Desktop_SearchCardsLanding"
import { INDEX_Desktop_STSearchWrapper } from "./styles/INDEX_Desktop_STSearchWrapper"

export const INDEX_Desktop_STSearch = () => {
  return (
    <INDEX_Desktop_STSearchWrapper>
      <div>
        <div>
          <Image
            src={ORGDesktop_Search_Hero}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <H1>
          Find your I/DD <br /> community
          <br /> and resources
        </H1>
      </div>

      <STDesktop_SearchComponent
        toWhere="SpeechTherapists"
        landingHere="true"
      />

      <ST_Desktop_SearchCardsLanding />
    </INDEX_Desktop_STSearchWrapper>
  )
}
