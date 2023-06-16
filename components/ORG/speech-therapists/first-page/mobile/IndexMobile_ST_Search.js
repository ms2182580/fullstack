import Image from "next/image.js"
import ORGMobile_Search from "../../../../../assets/images/ORGMobile_Search.png"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { IndexMobile_ST_SearchWrapper } from "./styles/IndexMobile_ST_SearchWrapper.js"

export const IndexMobile_ST_Search = (parameters) => {
  return (
    <IndexMobile_ST_SearchWrapper>
      <div>
        <Image
          src={ORGMobile_Search}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <H3>
        Find Healthcare Providers <br />
        and Activities for your Child
      </H3>
    </IndexMobile_ST_SearchWrapper>
  )
}
