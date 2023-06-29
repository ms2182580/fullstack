import { ST_M_CardEmail } from "../ST_M_CardEmail"
import { ST_M_CardLocation } from "../ST_M_CardLocation"
import { ST_M_CardPhone } from "../ST_M_CardPhone"

export const ST_M_Results_Card_Thirdplace = ({
  handlePointerEvent,
  cardStyle,
  phone,
  email,
  locationCity,
  locationStreetName,
  locationStreetNumber,
  locationState
}) => {
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card ThirdPlace`}>

        <ST_M_CardPhone phoneNumber={phone} isMobile={true} />

        <ST_M_CardEmail email={email} isMobile={true} />

        <ST_M_CardLocation
          locationCity={locationCity}
          locationStreetNumber={locationStreetNumber}
          locationStreetName={locationStreetName}
          locationState={locationState}
        />

      </div>
    </article>
  )
}

