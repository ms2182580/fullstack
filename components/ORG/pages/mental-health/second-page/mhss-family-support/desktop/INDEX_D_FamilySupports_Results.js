import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_FamilySupports_ResultsWrapper } from './styles/INDEX_D_FamilySupports_ResultsWrapper.js'

export const INDEX_D_FamilySupports_Results = () => {
  return (
    <INDEX_D_FamilySupports_ResultsWrapper>
      <h1>Family Support Services</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_FamilySupports_ResultsWrapper>
  )
}