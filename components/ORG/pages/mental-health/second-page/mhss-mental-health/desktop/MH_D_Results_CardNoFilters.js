import Image from "next/image.js"
import { useState } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../../../assets/Icons/index.js"
import { DATA_MH_D } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D.js"
import { DATA_MH_D_CardLeft, DATA_MH_D_CardRight } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Filters.js"
import { ORG_FILTERS_DATA_D } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Results_CardEmail } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardEmail.js"
import { ORG_D_Results_CardLocation } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardLocation.js"
import { ORG_D_Results_CardWebsite } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardWebsite.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth.js"
import { ORG_D_Results_Cardphone } from "../../../../../cards/second-page/desktop/ORG_D_Results_Cardphone.js"
import { Highlights_2_D } from "../../../../../highlights/Highlights_2_D.js"
import { Highlights_D } from "../../../../../highlights/Highlights_D.js"
import { StarsRatingReview_D } from "../../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { Verified } from "../../../../../verified/Verified.js"
import { MH_D_Results_CardWrapper } from "./styles/MH_D_Results_CardWrapper.js"

export const MH_D_Results_CardNoFilters = () => {
  /* 
  ? With this you move the user to the third page. Think how to make a context that can be used for every third page
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  } */

  const [cardData, setCardData] = useState(DATA_MH_D[0].slice(1))

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3 === 0 ? 0 : 1
          let renderThisContact = i % 3 === 0 ? 0 : 1

          return (
            <MH_D_Results_CardWrapper key={`${cardData[renderThisCard].reviews}_${i}`}>
              <div className="LEFT-PART">
                <div>
                  <Image
                    src={cardData[renderThisCard].imageToUse.src}
                    layout="fill"
                    objectFit="cover"
                    alt={`Image of ${cardData[renderThisCard].title} ${cardData[renderThisCard].textReview} `}
                  />

                  <ORG_D_Results_Card_Hearth />

                  <Verified />
                </div>

                <div>
                  <ORG_D_Results_Cardphone phoneNumber={DATA_MH_D_CardLeft[renderThisContact].phone} />

                  <ORG_D_Results_CardEmail email={DATA_MH_D_CardLeft[renderThisContact].email} />

                  <ORG_D_Results_CardWebsite
                    firstName={DATA_MH_D_CardLeft[renderThisContact].web.fistName}
                    lastName={DATA_MH_D_CardLeft[renderThisContact].web.lastName}
                  />

                  <ORG_D_Results_CardLocation
                    locationCity={DATA_MH_D_CardLeft[renderThisContact].location.city}
                    locationStreetNumber={DATA_MH_D_CardLeft[renderThisContact].location.streetNumber}
                    locationStreetName={DATA_MH_D_CardLeft[renderThisContact].location.streetName}
                    locationState={DATA_MH_D_CardLeft[renderThisContact].location.state}
                    howFar={DATA_MH_D_CardLeft[renderThisContact].location.howFar}
                  />
                </div>
              </div>

              <div className="RIGHT-PART">
                <H3 bold>{cardData[renderThisCard].title}</H3>
                <H4>{cardData[renderThisCard].subtitle}</H4>
                <P dark_gray>{cardData[renderThisCard].city}</P>
                <StarsRatingReview_D
                  rating={cardData[renderThisCard].rating}
                  reviews={cardData[renderThisCard].reviews}
                />

                <Highlights_2_D highlights={DATA_MH_D_CardRight[renderThisContact].highlightsPlus} />

                <Highlights_D highlights={DATA_MH_D_CardRight[renderThisContact].highlights} />

                <P
                  primary_hover
                  bold>
                  Practice areas: <span>{new Intl.ListFormat("en").format(ORG_FILTERS_DATA_D.diagnosis)}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Years in Practice: <span>{DATA_MH_D_CardRight[renderThisContact].yearsInPractice}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Ages Served: <span>{DATA_MH_D_CardRight[renderThisContact].agesServed}</span>
                </P>

                <P
                  primary_hover
                  bold>
                  Languages: <span>{DATA_MH_D_CardRight[renderThisContact].languages}</span>
                </P>
              </div>

              <div className="BOTTOM-BUTTONS">
                <div>
                  <ORG_D_Results_ViewProfileSvg />
                  <P white>View Profile</P>
                </div>
                <div>
                  <ORG_D_Results_RequestConsultationSvg />
                  <P white>See Availability</P>
                </div>
                <div>
                  <ORG_D_Results_AddtocareplanSvg />

                  <P white>Add to Care Plan</P>
                </div>
              </div>
            </MH_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
