import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_Day_ResultsWrapper } from './styles/INDEX_D_Day_ResultsWrapper.js'

export const INDEX_D_Day_Results = () => {
  return (
    <INDEX_D_Day_ResultsWrapper>
      <h1>Camps Day</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_Day_ResultsWrapper>
  )
}