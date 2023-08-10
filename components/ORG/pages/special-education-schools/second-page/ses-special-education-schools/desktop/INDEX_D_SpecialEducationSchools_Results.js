import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_SpecialEducationSchools_ResultsWrapper } from './styles/INDEX_D_SpecialEducationSchools_ResultsWrapper.js'

export const INDEX_D_SpecialEducationSchools_Results = () => {
  return (
    <INDEX_D_SpecialEducationSchools_ResultsWrapper>
      <h1>Special Education Schools</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_SpecialEducationSchools_ResultsWrapper>
  )
}