import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_ArtClasses_ResultsWrapper } from './styles/INDEX_D_ArtClasses_ResultsWrapper.js'

export const INDEX_D_ArtClasses_Results = () => {
  return (
    <INDEX_D_ArtClasses_ResultsWrapper>
      <h1>Art Classes</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_ArtClasses_ResultsWrapper>
  )
}