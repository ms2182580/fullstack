import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist.js"
import { BtnSmall } from "../../../../ui/buttons/general/styles/ButtonStyled.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview } from '../../../stars-rating-review/StartsRatingReview.js'
import { Verified } from "../../../verified/Verified.js"
import { ST_Desktop_Search_LandingCardsWrapper } from "./styles/ST_Desktop_Search_LandingCardsWrapper.js"


export const ST_Desktop_Search_LandingCards = ({ dataToUse, reviews, filters }) => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const goToDynamic = () => {
    setSpeechtherapist({ data: [dataToUse], filters: [filters] })
    router.push("/ORG/SpeechTherapists/IndividualProvider")
  }


  return (
    <ST_Desktop_Search_LandingCardsWrapper>
      <div>
        <Image
          src={dataToUse.picture.large}
          alt=""
          width="400px"
          height="193px"
        />
        <Verified />
      </div>
      <H3>
        {dataToUse.name.first} {dataToUse.name.last}, CCC-SLP
      </H3>
      <H4>Speech Language Pathologist</H4>
      <P dark_gray>{dataToUse.location.city}</P>
      <StarsRatingReview
        rating={dataToUse.stars}
        reviews={dataToUse.reviewsCount}
      />
      <P>{reviews[0]}.</P>
      <span onClick={() => goToDynamic()}>
        <BtnSmall>View Profile</BtnSmall>
      </span>
    </ST_Desktop_Search_LandingCardsWrapper>
  )
}
