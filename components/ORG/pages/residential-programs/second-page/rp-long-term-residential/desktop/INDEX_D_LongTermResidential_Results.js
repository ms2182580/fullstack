import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_LongTermResidential_ResultsWrapper } from './styles/INDEX_D_LongTermResidential_ResultsWrapper.js'

export const INDEX_D_LongTermResidential_Results = () => {
  return (
    <INDEX_D_LongTermResidential_ResultsWrapper>
      <h1>Long-Term Residential Programs</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_LongTermResidential_ResultsWrapper>
  )
}