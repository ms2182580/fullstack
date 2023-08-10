import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_MentalHealth_ResultsWrapper } from './styles/INDEX_D_MentalHealth_ResultsWrapper.js'

export const INDEX_D_MentalHealth_Results = () => {
  return (
    <INDEX_D_MentalHealth_ResultsWrapper>
      <h1>Mental Health Services</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_MentalHealth_ResultsWrapper>
  )
}