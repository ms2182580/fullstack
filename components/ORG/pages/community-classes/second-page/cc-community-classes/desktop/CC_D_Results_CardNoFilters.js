import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../../../assets/Icons/index.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { formatDataToThirdPage } from "../../../../../../../utils/ORG/formatDataToThirdPage.js"
import { DATA_PCC_D } from "../../../../../../../utils/ORG/pcc/DATA_PCC_D.js"
import { DATA_CC_D_CardLeft, DATA_CC_D_CardRight } from "../../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Card.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Results_CardEmail } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardEmail.js"
import { ORG_D_Results_CardLocation } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardLocation.js"
import { ORG_D_Results_CardWebsite } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardWebsite.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth.js"
import { ORG_D_Results_Cardphone } from "../../../../../cards/second-page/desktop/ORG_D_Results_Cardphone.js"
import { Highlights_D } from "../../../../../highlights/Highlights_D.js"
import { StarsRatingReview_D } from "../../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../../verified/Verified.js"
import { CC_D_Results_CardWrapper } from "./styles/CC_D_Results_CardWrapper.js"

export const CC_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const router = useRouter()
  const handleMoveToThirdPage = (e, thirdPageData_Card_Right, thirdPageData_Card_Left, thirdPageData_Card, mainNameORG) => {
    const allDataToThirdPage = formatDataToThirdPage(thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right)

    setThirdpageDataORG(allDataToThirdPage)

    let thirdPageURL = thirdPageData_Card_Right.thirdPageData.folderName

    // console.log('thirdPageURL:', thirdPageURL)

    const toWhere = `${router.pathname}/${thirdPageURL}`
    router.push(
      {
        pathname: toWhere,
        query: { title: mainNameORG },
      },
      toWhere,
    )
  }

  const [cardData, setCardData] = useState(DATA_PCC_D[0].slice(1))
  const [mainNameORG, setMainNameORG] = useState(DATA_PCC_D[0][0])

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3
          let renderThisContact = i % DATA_CC_D_CardLeft.length

          return (
            <CC_D_Results_CardWrapper key={`${cardData[renderThisCard].reviews}_${i}`}>
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
                  <ORG_D_Results_Cardphone phoneNumber={DATA_CC_D_CardLeft[renderThisContact].phone} />

                  <ORG_D_Results_CardEmail email={DATA_CC_D_CardLeft[renderThisContact].email} />

                  <ORG_D_Results_CardWebsite
                    firstName={DATA_CC_D_CardLeft[renderThisContact].web.fistName}
                    lastName={DATA_CC_D_CardLeft[renderThisContact].web.lastName}
                  />

                  <ORG_D_Results_CardLocation
                    locationCity={DATA_CC_D_CardLeft[renderThisContact].location.city}
                    locationStreetNumber={DATA_CC_D_CardLeft[renderThisContact].location.streetNumber}
                    locationStreetName={DATA_CC_D_CardLeft[renderThisContact].location.streetName}
                    locationState={DATA_CC_D_CardLeft[renderThisContact].location.state}
                    howFar={DATA_CC_D_CardLeft[renderThisContact].location.howFar}
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

                <Highlights_D highlights={DATA_CC_D_CardRight[renderThisFilter].highlights} />

                <P
                  primary_hover
                  bold>
                  {DATA_CC_D_CardRight[renderThisFilter].typeof.title}: <span>{new Intl.ListFormat("en").format(DATA_CC_D_CardRight[renderThisFilter].typeof.content)}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Ages Served: <span>{DATA_CC_D_CardRight[renderThisFilter].agesServed}</span>
                </P>
              </div>

              <div className="BOTTOM-BUTTONS">
                <div>
                  <ORG_D_Results_ViewProfileSvg />
                  <P white>View Profile</P>
                </div>
                {/* 
                //? This was donde in this way to only render Karate Group Class
                */}
                {renderThisCard === 0 ? (
                  <>
                    <div onClick={(e) => handleMoveToThirdPage(e, DATA_CC_D_CardRight[renderThisCard], DATA_CC_D_CardLeft[renderThisCard], cardData[renderThisCard], mainNameORG)}>
                      <ORG_D_Results_RequestConsultationSvg />
                      <P white>See Availability</P>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <ORG_D_Results_RequestConsultationSvg />
                      <P white>See Availability</P>
                    </div>
                  </>
                )}

                <div>
                  <ORG_D_Results_AddtocareplanSvg />

                  <P white>Add to Care Plan</P>
                </div>
              </div>
            </CC_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
