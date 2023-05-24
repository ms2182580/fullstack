import { BookmarkSaveSTMobileSvg } from "../../../../../assets/Icons/index.js"
import { STDetail_MobileCard_FirstPlace } from "../../second-page/mobile/cards-places/STDetail_MobileCard_FirstPlace.js"
import { STDetail_MobileCardWrapper } from "../../second-page/mobile/styles/SpeechTherapistsCardsMobileWrapper.js"
import { STDetail_MobileWrapper } from "./styles/STDetail_MobileWrapper.js"

export const STDetail_Mobile = ({ STData }) => {
  const { medium: image } = STData.data[0].picture
  const { first: firstName, last: lastName } = STData.data[0].name
  const { rating, reviews, diagnosis, distance: howFar } = STData.filters[0]

  return (
    <STDetail_MobileWrapper>
      <STDetail_MobileCardWrapper isThirdPage={true}>
        <div className="card-container">
          <BookmarkSaveSTMobileSvg tabIndex={0} />
          <STDetail_MobileCard_FirstPlace
            image={image}
            alt={`${firstName} ${firstName}`}
            firstName={firstName}
            lastName={lastName}
            howFar={howFar}
            rating={rating}
            reviews={reviews}
            diagnosis={diagnosis}
            isMobile={true}
            isThirdPage={true}
          />
        </div>
      </STDetail_MobileCardWrapper>
    </STDetail_MobileWrapper>
  )
}