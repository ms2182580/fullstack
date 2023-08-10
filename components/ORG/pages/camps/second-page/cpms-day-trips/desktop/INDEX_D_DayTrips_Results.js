import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_DayTrips_ResultsWrapper } from './styles/INDEX_D_DayTrips_ResultsWrapper.js'

export const INDEX_D_DayTrips_Results = () => {
  return (
    <INDEX_D_DayTrips_ResultsWrapper>
      <h1>Day Trips</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_DayTrips_ResultsWrapper>
  )
}