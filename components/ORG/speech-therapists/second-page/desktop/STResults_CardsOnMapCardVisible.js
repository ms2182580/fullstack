import Image from "next/image"
import { STResults_CardsOnMapCardVisibleWrapper } from "./styles/STResults_CardsOnMapCardVisibleWrapper"

export const STResults_CardsOnMapCardVisible = ({ personalData, technicalData, review }) => {
  // console.log("personalData, technicalData, review:", personalData, technicalData, review)
  return (
    <STResults_CardsOnMapCardVisibleWrapper>
      <div>
        <Image
          src={personalData.picture.large}
          layout="fixed"
          width="396"
          height="178"

          alt={`Portrait of ${personalData.name.first} ${personalData.name.last}`}
        />
      </div>
      <p>
        {personalData.name.first} {personalData.name.last}, CCC-SLP
      </p>
      <p>Speech Language Pathologist</p>
      <p>{personalData.location.city}</p>
      <p>
        Rating: {technicalData.rating} {technicalData.reviews}
      </p>
      <p>{review}</p>
    </STResults_CardsOnMapCardVisibleWrapper>
  )
}
