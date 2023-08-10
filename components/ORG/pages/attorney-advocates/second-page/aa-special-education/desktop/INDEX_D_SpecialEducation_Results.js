import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_SpecialEducation_ResultsWrapper } from './styles/INDEX_D_SpecialEducation_ResultsWrapper.js'

export const INDEX_D_SpecialEducation_Results = () => {
  return (
    <INDEX_D_SpecialEducation_ResultsWrapper>
      <h1>Special Education Attorney</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_SpecialEducation_ResultsWrapper>
  )
}