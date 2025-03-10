import Image from "next/image.js"
import ORGMobile_Search_Hero from "../../../../../../assets/images/ORGMobile_Search_Hero.png"
import { H3 } from "../../../../../ui/heading_body_text/HeaderFonts"
import { ST_M_Search_SearchComponent } from "./ST_M_Search_SearchComponent"
import { INDEX_M_STSearchWrapper } from "./styles/INDEX_M_STSearchWrapper.js"

export const INDEX_M_STSearch = () => {
  return (
    <INDEX_M_STSearchWrapper>
      <div>
        <Image
          src={ORGMobile_Search_Hero}
          alt="Hero image"
          layout="intrinsic"
        />
      </div>
      <H3>
        Find Healthcare Providers <br />
        and Activities for your Child
      </H3>

      <ST_M_Search_SearchComponent />
    </INDEX_M_STSearchWrapper>
  )
}
