import Image from "next/image"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_FitnessClasses_ResultsWrapper } from './styles/INDEX_D_FitnessClasses_ResultsWrapper.js'

export const INDEX_D_FitnessClasses_Results = () => {
  return (
    <INDEX_D_FitnessClasses_ResultsWrapper>
      <h1>Fitness Classes</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_FitnessClasses_ResultsWrapper>
  )
}