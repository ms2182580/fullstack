import Image from "next/image.js"
import { BtnSmall } from "../../ui/buttons/general/styles/ButtonStyled.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingAndReview } from "./SingleSpeechtherapistComponents_Right.js"
import { ORGLandingCardsWrapper } from "./styles/ORGLandingCardsWrapper.js"
import { Verified } from "./Verified.js"

export const ORGLandingCards = ({ dataToUse, reviews }) => {
  return (
    <ORGLandingCardsWrapper>
      <div>
        <Image
          src={dataToUse.picture}
          alt=""
          width="400px"
          height="193px"
        />
        <Verified />
      </div>
      <H3>
        {dataToUse.name} {dataToUse.lastName}, CCC-SLP
      </H3>
      <H4>Speech Language Pathologist</H4>
      <P dark_gray>{dataToUse.location.city}</P>
      <StarsRatingAndReview
        rating={dataToUse.stars}
        reviews={dataToUse.reviewsCount}
      />
      <P>{reviews[0]}.</P>
      <span>
        <BtnSmall>View Profile</BtnSmall>
      </span>
    </ORGLandingCardsWrapper>
  )
}
