import { useRouter } from "next/router.js"
import { BtnSmall } from "../../../../ui/buttons/general/styles/ButtonStyled.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Search_LandingCards } from "./ST_D_Search_LandingCards.js"
import { ST_D_Search_LandingThreeWrapper } from "./styles/ST_D_Search_LandingThreeWrapper.js"

export const ST_D_Search_LandingThree = ({ dataToUse }) => {
  const route = useRouter()

  const handleMoveToAllList = () => {
    route.push("/ORG/speech-therapists")
  }

  return (
    <ST_D_Search_LandingThreeWrapper>
      <div>
        <ST_D_Search_LandingCards
          dataToUse={dataToUse.data.first}
          reviews={dataToUse.reviews.first}
          filters={dataToUse.data.first.filters}

        />
        <ST_D_Search_LandingCards
          dataToUse={dataToUse.data.second}
          reviews={dataToUse.reviews.second}
          filters={dataToUse.data.second.filters}
        />
        <ST_D_Search_LandingCards
          dataToUse={dataToUse.data.third}
          reviews={dataToUse.reviews.third}
          filters={dataToUse.data.third.filters}
        />
      </div>
      <BtnSmall secondary onClick={() => handleMoveToAllList()}>
        <Caption bold>See all </Caption>{" "}
        <Caption
          bold
          dark_gray>
          (25)
        </Caption>
      </BtnSmall>
    </ST_D_Search_LandingThreeWrapper>
  )
}
