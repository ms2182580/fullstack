import { ST_M_Results_CardInfo } from "../ST_M_Results_CardInfo"

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
        <ST_M_Results_CardInfo
          title="Ages Served"
          dataToShow={agesServed}
        />
        <ST_M_Results_CardInfo
          title="Languages"
          dataToShow={languages}
        />
        <ST_M_Results_CardInfo
          title="Years of Practice"
          dataToShow={yearsOfPractice}
        />
        <ST_M_Results_CardInfo
          title="Practice Setting"
          dataToShow={serviceSetting}
        />
        <ST_M_Results_CardInfo
          title="Insurance"
          dataToShow={insurance}
        />
      </div>
    </article>
  )
}
