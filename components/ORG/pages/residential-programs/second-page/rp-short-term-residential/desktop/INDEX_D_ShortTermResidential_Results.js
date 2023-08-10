import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_ShortTermResidential_ResultsWrapper } from './styles/INDEX_D_ShortTermResidential_ResultsWrapper.js'

export const INDEX_D_ShortTermResidential_Results = () => {
  return (
    <INDEX_D_ShortTermResidential_ResultsWrapper>
      <h1>Short-Term Residential Programs</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_ShortTermResidential_ResultsWrapper>
  )
}