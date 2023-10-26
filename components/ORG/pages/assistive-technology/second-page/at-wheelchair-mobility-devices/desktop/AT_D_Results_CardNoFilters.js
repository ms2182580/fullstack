import Image from "next/image.js"
import { useState } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_MoreinformationSvg, ORG_D_Results_WheretobuySvg } from "../../../../../../../assets/Icons/index.js"
import { DATA_PAT_D } from "../../../../../../../utils/ORG/pat/DATA_PAT_D"
import { DATA_AT_D_CardLeft, DATA_AT_D_CardRight } from "../../../../../../../utils/ORG/pat/at/DATA_AT_D_Card.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Results_CardEmail } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardEmail.js"
import { ORG_D_Results_CardLocation } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardLocation.js"
import { ORG_D_Results_CardWebsite } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardWebsite.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth.js"
import { ORG_D_Results_Cardphone } from "../../../../../cards/second-page/desktop/ORG_D_Results_Cardphone.js"
import { StarsRatingReview_D } from "../../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { AT_D_Results_CardWrapper } from "./styles/AT_D_Results_CardWrapper.js"

export const AT_D_Results_CardNoFilters = () => {
  /* 
  ? With this you move the user to the third page. Think how to make a context that can be used for every third page
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  } */

  const [cardData, setCardData] = useState(DATA_PAT_D[0].slice(1))

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3 === 0 ? 0 : 1
          let renderThisContact = i % DATA_AT_D_CardLeft.length

          return (
            <>
              <AT_D_Results_CardWrapper key={`${cardData[renderThisCard].reviews}_${i}`}>
                <div className="LEFT-PART">
                  <div>
                    <Image
                      src={cardData[renderThisCard].imageToUse.src}
                      layout="responsive"
                      objectFit="cover"
                      width="1"
                      height="1"
                      alt={`Image of ${cardData[renderThisCard].title} ${cardData[renderThisCard].textReview} `}
                    />

                    <ORG_D_Results_Card_Hearth />
                  </div>

                  <div>
                    <ORG_D_Results_Cardphone phoneNumber={DATA_AT_D_CardLeft[renderThisContact].phone} />

                    <ORG_D_Results_CardEmail email={DATA_AT_D_CardLeft[renderThisContact].email} />

                    <ORG_D_Results_CardWebsite
                      firstName={DATA_AT_D_CardLeft[renderThisContact].web.fistName}
                      lastName={DATA_AT_D_CardLeft[renderThisContact].web.lastName}
                    />

                    <ORG_D_Results_CardLocation
                      locationCity={DATA_AT_D_CardLeft[renderThisContact].location.city}
                      locationStreetNumber={DATA_AT_D_CardLeft[renderThisContact].location.streetNumber}
                      locationStreetName={DATA_AT_D_CardLeft[renderThisContact].location.streetName}
                      locationState={DATA_AT_D_CardLeft[renderThisContact].location.state}
                      howFar={DATA_AT_D_CardLeft[renderThisContact].location.howFar}
                    />
                  </div>
                </div>

                <div className="RIGHT-PART">
                  <H3 bold>{cardData[renderThisCard].title}</H3>
                  <H4>{cardData[renderThisCard].subtitle}</H4>
                  <StarsRatingReview_D
                    rating={cardData[renderThisCard].rating}
                    reviews={cardData[renderThisCard].reviews}
                  />

                  <P
                    primary_hover
                    bold>
                    Price: <span>{DATA_AT_D_CardRight[renderThisFilter].price}</span>
                  </P>
                  <P
                    primary_hover
                    bold>
                    Speed: <span>{DATA_AT_D_CardRight[renderThisFilter].speed}</span>
                  </P>
                  <P
                    primary_hover
                    bold>
                    Range: <span>{DATA_AT_D_CardRight[renderThisFilter].range}</span>
                  </P>
                  <P
                    primary_hover
                    bold>
                    Max. Weight: <span>{DATA_AT_D_CardRight[renderThisFilter].maxWeight}</span>
                  </P>
                </div>

                <div className="BOTTOM-BUTTONS">
                  <div>
                    <ORG_D_Results_MoreinformationSvg />
                    <P white>More information</P>
                  </div>
                  <div>
                    <ORG_D_Results_WheretobuySvg />
                    <P white>Where to buy</P>
                  </div>
                  <div>
                    <ORG_D_Results_AddtocareplanSvg />

                    <P white>Add to Care Plan</P>
                  </div>
                </div>
              </AT_D_Results_CardWrapper>
            </>
          )
        })}
    </>
  )
}
