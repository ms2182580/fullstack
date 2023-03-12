import { BtnSmall } from "../../ui/buttons/general/styles/ButtonStyled.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORGLandingCards } from "./ORGLandingCards.js"
import { LandingThreeSpeechTherapistsWrapper } from "./styles/LandingThreeSpeechTherapistsWrapper.js"

export const LandingThreeSpeechTherapists = ({ dataToUse }) => {
  return (
    <LandingThreeSpeechTherapistsWrapper>
      <div>
        <ORGLandingCards
          dataToUse={dataToUse.data.first}
          reviews={dataToUse.reviews.first}
        />
        <ORGLandingCards
          dataToUse={dataToUse.data.second}
          reviews={dataToUse.reviews.second}
        />
        <ORGLandingCards
          dataToUse={dataToUse.data.third}
          reviews={dataToUse.reviews.third}
        />
      </div>
      <BtnSmall secondary>
        <Caption bold>See all </Caption>{" "}
        <Caption
          bold
          dark_gray>
          (25)
        </Caption>
      </BtnSmall>
    </LandingThreeSpeechTherapistsWrapper>
  )
}
