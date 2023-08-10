import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_NeuroOncologists_ResultsWrapper } from './styles/INDEX_D_NeuroOncologists_ResultsWrapper.js'

export const INDEX_D_NeuroOncologists_Results = () => {
  return (
    <INDEX_D_NeuroOncologists_ResultsWrapper>
      <h1>Neuro-oncologists</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_NeuroOncologists_ResultsWrapper>
  )
}