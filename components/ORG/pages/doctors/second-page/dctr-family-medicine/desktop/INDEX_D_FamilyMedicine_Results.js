import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_FamilyMedicine_ResultsWrapper } from './styles/INDEX_D_FamilyMedicine_ResultsWrapper.js'

export const INDEX_D_FamilyMedicine_Results = () => {
  return (
    <INDEX_D_FamilyMedicine_ResultsWrapper>
      <h1>Family Medicine Doctors</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_FamilyMedicine_ResultsWrapper>
  )
}