import Image from "next/image.js"
import UnderConstructionImage from "../../assets/images/UnderConstructionImage.png"
import { H1, H3 } from "../ui/heading_body_text/HeaderFonts.js"
import { UnderConstructionWrapper } from "./styles/UnderConstructionWrapper.js"

export const UnderConstruction = () => {
  return (
    <UnderConstructionWrapper>
      <div>
        <Image
          src={UnderConstructionImage}
          alt=""
        />
      </div>
      <H1>Under Construction...</H1>
      <H3>Our online navigation tool will revolutionize <br /> how parents can more easily get services. </H3>
      <H1>Coming Soon</H1>
    </UnderConstructionWrapper>
  )
}
