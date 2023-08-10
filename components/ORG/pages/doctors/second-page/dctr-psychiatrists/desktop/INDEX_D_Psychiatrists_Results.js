import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_Psychiatrists_ResultsWrapper } from './styles/INDEX_D_Psychiatrists_ResultsWrapper.js'

export const INDEX_D_Psychiatrists_Results = () => {
  return (
    <INDEX_D_Psychiatrists_ResultsWrapper>
      <h1>Psychiatrists</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_Psychiatrists_ResultsWrapper>
  )
}