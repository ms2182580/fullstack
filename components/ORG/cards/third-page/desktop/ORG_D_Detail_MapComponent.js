import Image from "next/image"
import ORG_Map_SpeechTherapistDetail from '../../../../../assets/Icons/ORG_Map_SpeechTherapistDetail.jpg'
import { ORG_D_Detail_MapComponentWrapper } from "./styles/ORG_D_Detail_MapComponentWrapper"

/* 
!FH
✅- Make the placeholder look like a map
- Create the funciontality of a map here
- Add to the alt of the image, the direction and the name of where is pointing 
*/

export const ORG_D_Detail_MapComponent = () => {
  return (
    <ORG_D_Detail_MapComponentWrapper tabIndex={0}>
      <Image src={ORG_Map_SpeechTherapistDetail} alt={"Map image"} />
    </ORG_D_Detail_MapComponentWrapper>
  )
}
