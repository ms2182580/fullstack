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
      <button>See all </button>
    </LandingThreeSpeechTherapistsWrapper>
  )
}
