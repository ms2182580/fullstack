import { BookmarkSaveSTMobileSvg } from "../../../../../assets/Icons/index.js"
import { FirstPlace } from "../../second-page/SpeechTherapistCardMobile/cards-places/FirstPlace.js"
import { SpeechTherapistsCardsMobileWrapper } from "../../second-page/SpeechTherapistCardMobile/styles/SpeechTherapistsCardsMobileWrapper.js"
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

/* 

!FH2
Here are two visual bugs:

1) The question mark icon is not showing when the user click on it
2) The information of that question mark is displayed wrong

°) Is weird, sometimes happen, other times not. 

3) There is a bug, it can be only use with the mouse, not with touch of phones


*/
