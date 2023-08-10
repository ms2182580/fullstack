import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_ElderLawMedicaidPlanning_ResultsWrapper } from './styles/INDEX_D_ElderLawMedicaidPlanning_ResultsWrapper.js'

export const INDEX_D_ElderLawMedicaidPlanning_Results = () => {
  return (
    <INDEX_D_ElderLawMedicaidPlanning_ResultsWrapper>
      <h1>Elder Law & Medicaid Planning Attorneys</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_ElderLawMedicaidPlanning_ResultsWrapper>
  )
}