import Image from "next/image.js"
import ORGDesktop_Search_Hero from "../../../../../assets/images/ORGDesktop_Search_Hero.png"
import { H1 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { STDesktop_SearchComponent } from "../../../inputs/desktop/STDesktop_SearchComponent"
import { STSearch_CardsLanding } from "./STSearch_CardsLanding"
import { IndexDesktop_ST_SearchWrapper } from "./styles/IndexDesktop_ST_SearchWrapper.js"

export const IndexDesktop_ST_Search = () => {
  return (
    <IndexDesktop_ST_SearchWrapper>
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

      {/* 
!FH0
Make the component <STDesktop_SearchComponent/> be entirely Desktop and separate them from the mobile part!
*/}

      <STDesktop_SearchComponent
        toWhere="SpeechTherapists"
        landingHere="true"
      />

      <STSearch_CardsLanding />
    </IndexDesktop_ST_SearchWrapper>
  )
}
