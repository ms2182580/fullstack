import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_IDD_ResultsWrapper } from './styles/INDEX_D_IDD_ResultsWrapper.js'

export const INDEX_D_IDD_Results = () => {
  return (
    <INDEX_D_IDD_ResultsWrapper>
      <h1>I/DD Advocates</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_IDD_ResultsWrapper>
  )
}