import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_OvernightCamps_ResultsWrapper } from './styles/INDEX_D_OvernightCamps_ResultsWrapper.js'

export const INDEX_D_OvernightCamps_Results = () => {
  return (
    <INDEX_D_OvernightCamps_ResultsWrapper>
      <h1>Overnight Camps</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_OvernightCamps_ResultsWrapper>
  )
}