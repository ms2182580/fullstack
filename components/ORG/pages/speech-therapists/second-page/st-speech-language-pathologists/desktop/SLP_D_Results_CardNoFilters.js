import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../../../assets/Icons/index.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { formatDataToThirdPage } from "../../../../../../../utils/ORG/formatDataToThirdPage.js"
import { DATA_PSLP_D } from "../../../../../../../utils/ORG/pst/slp/DATA_PSLP_D.js"
import { DATA_SLP_D_CardLeft, DATA_SLP_D_CardRight } from "../../../../../../../utils/ORG/pst/slp/DATA_SLP_D_Card.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Results_CardEmail } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardEmail.js"
import { ORG_D_Results_CardLocation } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardWebsite.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth.js"
import { ORG_D_Results_Cardphone } from "../../../../../cards/second-page/desktop/ORG_D_Results_Cardphone.js"
import { Highlights_2_D } from "../../../../../highlights/Highlights_2_D.js"
import { Highlights_D } from "../../../../../highlights/Highlights_D.js"
import { StarsRatingReview_D } from "../../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../../verified/Verified.js"
import { SLP_D_Results_CardWrapper } from "./styles/SLP_D_Results_CardWrapper.js"

export const SLP_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const router = useRouter()

  const handleMoveToThirdPage = (e, thirdPageData_Card_Right, thirdPageData_Card_Left, thirdPageData_Card, mainNameORG, subTitle, fullName, state) => {
    const allDataToThirdPage = formatDataToThirdPage(thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right, fullName)

    setThirdpageDataORG(allDataToThirdPage)

    let thirdPageURL = thirdPageData_Card_Right.thirdPageData.folderName

    const toWhere = `${router.pathname}/${thirdPageURL}`
    router.push(
      {
        pathname: toWhere,
        query: { title: mainNameORG, subTitle, state },
      },
      toWhere,
    )
  }

  const [cardData, setCardData] = useState(DATA_PSLP_D[0].slice(1))
  console.log("cardData:", cardData)
  const [mainNameORG, setMainNameORG] = useState(DATA_PSLP_D[0][0])

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3 === 0 ? 0 : 1
          let renderThisContactLeft = i % 3
          let renderThisContactRight = i % 3 === 0 ? 0 : 1

          return (
            <SLP_D_Results_CardWrapper key={`${cardData[renderThisCard].reviews}_${i}`}>
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
                  <ORG_D_Results_Cardphone phoneNumber={DATA_SLP_D_CardLeft[renderThisContactLeft].phone} />

                  <ORG_D_Results_CardEmail email={DATA_SLP_D_CardLeft[renderThisContactLeft].email} />

                  <ORG_D_Results_CardWebsite
                    firstName={DATA_SLP_D_CardLeft[renderThisContactLeft].web.fistName}
                    lastName={DATA_SLP_D_CardLeft[renderThisContactLeft].web.lastName}
                  />

                  <ORG_D_Results_CardLocation
                    locationCity={DATA_SLP_D_CardLeft[renderThisContactLeft].location.city}
                    locationStreetNumber={DATA_SLP_D_CardLeft[renderThisContactLeft].location.streetNumber}
                    locationStreetName={DATA_SLP_D_CardLeft[renderThisContactLeft].location.streetName}
                    locationState={DATA_SLP_D_CardLeft[renderThisContactLeft].location.state}
                    howFar={DATA_SLP_D_CardLeft[renderThisContactLeft].location.howFar}
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

                <Highlights_2_D highlights={DATA_SLP_D_CardRight[renderThisContactRight].highlightsPlus} />

                <Highlights_D highlights={DATA_SLP_D_CardRight[renderThisContactRight].highlights} />

                <P
                  primary_hover
                  bold>
                  Practice areas: <span>{DATA_SLP_D_CardRight[renderThisContactRight].practiceAreas}</span>
                </P>

                <P
                  primary_hover
                  bold>
                  Years in Practice: <span>{DATA_SLP_D_CardRight[renderThisContactRight].yearsInPractice}</span>
                </P>

                <P
                  primary_hover
                  bold>
                  Ages Served: <span>{DATA_SLP_D_CardRight[renderThisContactRight].agesServed}</span>
                </P>

                <P
                  primary_hover
                  bold>
                  Languages: <span>{DATA_SLP_D_CardRight[renderThisContactRight].languages}</span>
                </P>
              </div>

              <div className="BOTTOM-BUTTONS">
                <div>
                  <ORG_D_Results_ViewProfileSvg />
                  <P white>View Profile</P>
                </div>
                <div
                  onClick={(e) =>
                    handleMoveToThirdPage(
                      e,
                      DATA_SLP_D_CardRight[renderThisContactRight],
                      DATA_SLP_D_CardLeft[renderThisContactLeft],
                      cardData[renderThisCard],
                      mainNameORG,
                      cardData[renderThisCard].subtitle,
                      cardData[renderThisCard].name,
                      cardData[renderThisCard].state,
                    )
                  }>
                  <ORG_D_Results_RequestConsultationSvg />
                  <P white>See Availability</P>
                </div>
                <div>
                  <ORG_D_Results_AddtocareplanSvg />

                  <P white>Add to Care Plan</P>
                </div>
              </div>
            </SLP_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
