import { useRouter } from "next/router.js"
import { BtnSmall } from "../../ui/buttons/general/styles/ButtonStyled.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORGLandingCards } from "./ORGLandingCards.js"
import { LandingThreeSpeechTherapistsWrapper } from "./styles/LandingThreeSpeechTherapistsWrapper.js"

export const LandingThreeSpeechTherapists = ({ dataToUse }) => {
  const route = useRouter()
  
  const handleMoveToAllList = () => {
    route.push("/ORG/SpeechTherapists")
  }
  
  return (
    <LandingThreeSpeechTherapistsWrapper>
      <div>
        <ORGLandingCards
          dataToUse={dataToUse.data.first}
          reviews={dataToUse.reviews.first}
          filters={dataToUse.data.first.filters}
          
        />
        <ORGLandingCards
          dataToUse={dataToUse.data.second}
          reviews={dataToUse.reviews.second}
          filters={dataToUse.data.second.filters}
        />
        <ORGLandingCards
          dataToUse={dataToUse.data.third}
          reviews={dataToUse.reviews.third}
          filters={dataToUse.data.third.filters}
        />
      </div>
      <BtnSmall secondary onClick={() => handleMoveToAllList() }>
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
