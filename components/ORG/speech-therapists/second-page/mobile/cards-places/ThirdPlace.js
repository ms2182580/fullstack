import { ST_CardEmail } from "../../../ST_CardEmail"
import { ST_CardLocation } from "../../../ST_CardLocation"
import { ST_CardPhone } from "../../../ST_CardPhone"

export const ThirdPlace = ({
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
        
        <ST_CardPhone phoneNumber={phone} isMobile={true}/>
        
        <ST_CardEmail email={email} isMobile={true}/>
        
        <ST_CardLocation 
          locationCity={locationCity}
          locationStreetNumber={locationStreetNumber}
          locationStreetName={locationStreetName}
          locationState={locationState}
          isMobile={true}
        />
        
      </div>
    </article>
  )
}

