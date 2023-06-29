import { ST_M_CardInfo } from "../ST_M_CardInfo"

export const ST_M_Results_Card_Secondplace = ({
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
        <ST_M_CardInfo
          title="Ages Served"
          dataToShow={agesServed}
          isMobile={true}
        />
        <ST_M_CardInfo
          title="Languages"
          dataToShow={languages}
          isMobile={true}
        />
        <ST_M_CardInfo
          title="Years of Practice"
          dataToShow={yearsOfPractice}
          isMobile={true}
        />
        <ST_M_CardInfo
          title="Practice Setting"
          dataToShow={serviceSetting}
          isMobile={true}
        />
        <ST_M_CardInfo
          title="Insurance"
          dataToShow={insurance}
          isMobile={true}
        />
      </div>
    </article>
  )
}

