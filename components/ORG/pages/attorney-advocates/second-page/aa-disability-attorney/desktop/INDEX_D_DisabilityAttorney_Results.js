import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_DisabilityAttorney_ResultsWrapper } from './styles/INDEX_D_DisabilityAttorney_ResultsWrapper.js'

export const INDEX_D_DisabilityAttorney_Results = () => {
  return (
    <INDEX_D_DisabilityAttorney_ResultsWrapper>
      <h1>Disability Attorneys</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_DisabilityAttorney_ResultsWrapper>
  )
}