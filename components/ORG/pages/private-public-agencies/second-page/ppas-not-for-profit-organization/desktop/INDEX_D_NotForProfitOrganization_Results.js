import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_NotForProfitOrganization_ResultsWrapper } from './styles/INDEX_D_NotForProfitOrganization_ResultsWrapper.js'

export const INDEX_D_NotForProfitOrganization_Results = () => {
  return (
    <INDEX_D_NotForProfitOrganization_ResultsWrapper>
      <h1>Private Not-for-Profit Organizations</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_NotForProfitOrganization_ResultsWrapper>
  )
}