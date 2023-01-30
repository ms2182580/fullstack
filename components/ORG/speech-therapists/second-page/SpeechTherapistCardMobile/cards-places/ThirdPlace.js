import { EverySingleSpeechTherapist_Email, EverySingleSpeechTherapist_Location, EverySingleSpeechTherapist_Phone } from "../../../SingleSpeechtherapistComponents_Left"

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
  // console.log('location:', location)
  // console.log('phone:', phone)
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card ThirdPlace`}>
        
        <EverySingleSpeechTherapist_Phone phoneNumber={phone} isMobile={true}/>
        
        <EverySingleSpeechTherapist_Email email={email} isMobile={true}/>
        
        <EverySingleSpeechTherapist_Location 
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

/* 
!FH0
Make this styles
*/
