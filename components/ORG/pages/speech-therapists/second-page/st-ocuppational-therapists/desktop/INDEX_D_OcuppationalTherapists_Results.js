import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_OcuppationalTherapists_ResultsWrapper } from './styles/INDEX_D_OcuppationalTherapists_ResultsWrapper.js'

export const INDEX_D_OcuppationalTherapists_Results = () => {
  return (
    <INDEX_D_OcuppationalTherapists_ResultsWrapper>
      <h1>Ocuppational Therapists</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_OcuppationalTherapists_ResultsWrapper>
  )
}