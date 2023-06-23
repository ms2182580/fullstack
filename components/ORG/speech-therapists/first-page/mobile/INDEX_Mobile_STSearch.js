import Image from "next/image.js"
import ORGMobile_Search_Hero from "../../../../../assets/images/ORGMobile_Search_Hero.png"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_Mobile_Search_SearchComponent } from "./ST_Mobile_Search_SearchComponent"
import { INDEX_Mobile_STSearchWrapper } from "./styles/INDEX_Mobile_STSearchWrapper.js"

export const INDEX_Mobile_STSearch = () => {
  return (
    <INDEX_Mobile_STSearchWrapper>
      <div>
        <Image
          src={ORGMobile_Search_Hero}
          alt=""
          layout="intrinsic"
        />
      </div>
      <H3>
        Find Healthcare Providers <br />
        and Activities for your Child
      </H3>

      <ST_Mobile_Search_SearchComponent />
    </INDEX_Mobile_STSearchWrapper>
  )
}
