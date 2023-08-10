import Image from "next/image.js"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_StateOffices_ResultsWrapper } from './styles/INDEX_D_StateOffices_ResultsWrapper.js'

export const INDEX_D_StateOffices_Results = () => {
  return (
    <INDEX_D_StateOffices_ResultsWrapper>
      <h1>State Offices</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_StateOffices_ResultsWrapper>
  )
}