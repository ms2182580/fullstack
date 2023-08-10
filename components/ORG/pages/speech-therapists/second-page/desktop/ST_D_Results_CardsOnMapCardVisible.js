import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_STDataThirdpage_D } from "../../../../../../context/ORG_Ctx_STDataThirdpageDesktop_Provider"
import { ButtonSmall } from "../../../../../ui/buttons/general"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../verified/Verified"
import { ST_D_Results_CardsOnMapCardVisibleWrapper } from "./styles/ST_D_Results_CardsOnMapCardVisibleWrapper"

export const ST_D_Results_CardsOnMapCardVisible = ({ personalData, technicalData, review }) => {
  // console.log("personalData, technicalData:", personalData, technicalData)

  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()

  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  return (
    <ST_D_Results_CardsOnMapCardVisibleWrapper>
      <div>
        <Image
          src={personalData.picture.large}
          layout="fixed"
          width="400"
          height="192"
          alt={`Portrait of ${personalData.name.first} ${personalData.name.last}`}
        />
        <Verified />
      </div>
      <div>
        <H3>
          {personalData.name.first} {personalData.name.last}, CCC-SLP
        </H3>
        <H4>Speech Language Pathologist</H4>
        <P dark_gray>{personalData.location.city}</P>
        <StarsRatingReview_D
          rating={technicalData.rating}
          reviews={technicalData.reviews}
        />

        <P>{review}</P>
        <span onClick={(e) => goToDynamic(e, personalData, technicalData)}>
          <ButtonSmall>View Profile</ButtonSmall>
        </span>
      </div>
    </ST_D_Results_CardsOnMapCardVisibleWrapper>
  )
}
