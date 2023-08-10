import Image from "next/image.js"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_PreSchools_ResultsWrapper } from "./styles/INDEX_D_PreSchools_ResultsWrapper.js"

export const INDEX_D_PreSchools_Results = () => {
  return (
    <INDEX_D_PreSchools_ResultsWrapper>
      <h1>Pre Schools</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_PreSchools_ResultsWrapper>
  )
}
