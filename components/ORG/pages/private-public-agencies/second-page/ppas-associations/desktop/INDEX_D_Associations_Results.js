import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_Associations_ResultsWrapper } from './styles/INDEX_D_Associations_ResultsWrapper.js'

export const INDEX_D_Associations_Results = () => {
  return (
    <INDEX_D_Associations_ResultsWrapper>
      <h1>Associations</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_Associations_ResultsWrapper>
  )
}