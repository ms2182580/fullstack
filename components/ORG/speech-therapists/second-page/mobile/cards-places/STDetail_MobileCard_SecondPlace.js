import { ST_CardInfo } from "../../ST_CardInfo"

export const STDetail_MobileCard_SecondPlace = ({
  handlePointerEvent,
  cardStyle,
  agesServed,
  languages,
  yearsOfPractice,
  serviceSetting,
  insurance
}) => {
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card SecondPlace`}>
        <ST_CardInfo
          title="Ages Served"
          dataToShow={agesServed}
          isMobile={true}
        />
        <ST_CardInfo
          title="Languages"
          dataToShow={languages}
          isMobile={true}
        />
        <ST_CardInfo
          title="Years of Practice"
          dataToShow={yearsOfPractice}
          isMobile={true}
        />
        <ST_CardInfo
          title="Practice Setting"
          dataToShow={serviceSetting}
          isMobile={true}
        />
        <ST_CardInfo
          title="Insurance"
          dataToShow={insurance}
          isMobile={true}
        />
      </div>
    </article>
  )
}

