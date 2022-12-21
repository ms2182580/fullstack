import Image from "next/image"
import { MapWrapper } from "./styles/MapWrapper"
import ORG_Map_SpeechTherapistDetail from "../../../assets/Icons/ORG_Map_SpeechTherapistDetail.jpg"

/* 
!FH
✅- Make the placeholder look like a map
- Create the funciontality of a map here
- Add to the alt of the image, the direction and the name of where is pointing 
*/

export const MapComponent = () => {
  return (
    <MapWrapper>
      <Image src={ORG_Map_SpeechTherapistDetail} alt={"Map image"}/>
    </MapWrapper>
  )
}
