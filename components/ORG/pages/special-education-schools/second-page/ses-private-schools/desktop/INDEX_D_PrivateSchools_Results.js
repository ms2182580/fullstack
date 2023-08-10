import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_PrivateSchools_ResultsWrapper } from './styles/INDEX_D_PrivateSchools_ResultsWrapper.js'

export const INDEX_D_PrivateSchools_Results = () => {
  return (
    <INDEX_D_PrivateSchools_ResultsWrapper>
      <h1>Private Schools</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_PrivateSchools_ResultsWrapper>
  )
}