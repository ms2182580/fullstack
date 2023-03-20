import { BookmarkSaveSTMobileSvg } from "../../../../../assets/Icons/index.js"
import { FirstPlace } from "../../second-page/mobile/cards-places/FirstPlace.js"
import { SpeechTherapistsCardsMobileWrapper } from "../../second-page/mobile/styles/SpeechTherapistsCardsMobileWrapper.js"
import { STDetailMobileWrapper } from "./styles/STDetailMobileWrapper.js"

export const STDetailMobile = ({ STData }) => {
  const { medium: image } = STData.data[0].picture
  const { first: firstName, last: lastName } = STData.data[0].name
  const { rating, reviews, diagnoses, distance: howFar } = STData.filters[0]

  return (
    <STDetailMobileWrapper>
      <SpeechTherapistsCardsMobileWrapper isThirdPage={true}>
        <div className="card-container">
          <BookmarkSaveSTMobileSvg tabIndex={0} />
          <FirstPlace
            image={image}
            alt={`${firstName} ${firstName}`}
            firstName={firstName}
            lastName={lastName}
            howFar={howFar}
            rating={rating}
            reviews={reviews}
            diagnoses={diagnoses}
            isMobile={true}
            isThirdPage={true}
          />
        </div>
      </SpeechTherapistsCardsMobileWrapper>
    </STDetailMobileWrapper>
  )
}