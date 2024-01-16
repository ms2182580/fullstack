import { ST_M_Results_CardEmail } from "../ST_M_Results_CardEmail"
import { ST_M_Results_CardLocation } from "../ST_M_Results_CardLocation"
import { ST_M_Results_CardPhone } from "../ST_M_Results_CardPhone"

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
        <ST_M_Results_CardPhone phoneNumber={phone} />

        <ST_M_Results_CardEmail email={email} />

        <ST_M_Results_CardLocation
          locationCity={locationCity}
          locationStreetNumber={locationStreetNumber}
          locationStreetName={locationStreetName}
          locationState={locationState}
        />
      </div>
    </article>
  )
}
