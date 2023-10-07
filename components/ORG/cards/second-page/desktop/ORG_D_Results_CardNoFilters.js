import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_D_SecondpageData } from "../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_KeyNamesForCards_D } from "../../../../../utils/ORG/DATA_ORG_KeyNamesForCards_D"
import { formatDataToThirdPage } from "../../../../../utils/ORG/formatDataToThirdPage"
import { capitalizeWords } from "../../../../../utils/capitalizeWords"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Highlights_2_D } from "../../../highlights/Highlights_2_D"
import { Highlights_D } from "../../../highlights/Highlights_D"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../verified/Verified"
import { ORG_D_Results_CardEmail } from "./ORG_D_Results_CardEmail"
import { ORG_D_Results_CardLocation } from "./ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "./ORG_D_Results_CardWebsite"
import { ORG_D_Results_Card_Hearth } from "./ORG_D_Results_Card_Hearth"
import { ORG_D_Results_Cardphone } from "./ORG_D_Results_Cardphone"
import { ORG_D_Results_CardWrapper } from "./styles/ORG_D_Results_CardWrapper"

export const ORG_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()
  const router = useRouter()

  const handleMoveToThirdPage = (e, thirdPageData_Card_Right, thirdPageData_Card_Left, thirdPageData_Card, mainNameORG, subTitle, fullName, state) => {
    console.log('thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right, fullName:', thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right, fullName)

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
  return (

    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % secondpageDataORG.right.length
          let renderThisContact = i % secondpageDataORG.left.length

          return (
            <ORG_D_Results_CardWrapper key={`${secondpageDataORG.cardData[renderThisCard].reviews}_${i}`}>
              <div className="LEFT-PART">
                <div>
                  <Image
                    src={secondpageDataORG.cardData[renderThisCard].imageToUse.src}
                    layout="fill"
                    objectFit="cover"
                    alt={`Image of ${secondpageDataORG.cardData[renderThisCard].title} ${secondpageDataORG.cardData[renderThisCard].textReview} `}
                  />

                  <ORG_D_Results_Card_Hearth />

                  <Verified />
                </div>

                <div>
                  <ORG_D_Results_Cardphone phoneNumber={secondpageDataORG.left[renderThisContact].phone} />

                  <ORG_D_Results_CardEmail email={secondpageDataORG.left[renderThisContact].email} />

                  <ORG_D_Results_CardWebsite

                    firstName={secondpageDataORG.left[renderThisContact].web?.fistName || ""}
                    lastName={secondpageDataORG.left[renderThisContact].web?.lastName || ""}
                  />

                  <ORG_D_Results_CardLocation
                    locationCity={secondpageDataORG.left[renderThisContact].location.city}
                    locationStreetNumber={secondpageDataORG.left[renderThisContact].location.streetNumber}
                    locationStreetName={secondpageDataORG.left[renderThisContact].location.streetName}
                    locationState={secondpageDataORG.left[renderThisContact].location.state}
                    howFar={secondpageDataORG.left[renderThisContact].location.howFar}
                  />
                </div>
              </div>

              <div className="RIGHT-PART">
                <H3 bold>{secondpageDataORG.cardData[renderThisCard].title}</H3>
                <H4>{secondpageDataORG.cardData[renderThisCard].subtitle}</H4>
                <P dark_gray>{secondpageDataORG.cardData[renderThisCard].city}</P>
                <StarsRatingReview_D
                  rating={secondpageDataORG.cardData[renderThisCard].rating}
                  reviews={secondpageDataORG.cardData[renderThisCard].reviews}
                />

                <div>
                  {Object.entries(secondpageDataORG.right[renderThisFilter]).map((x, index) => {
                    if (x[0] === DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS) {
                      return (
                        <span
                          className="HIGHLIGHTS_PLUS"
                          key={`${x[0]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}`}>

                          <Highlights_2_D highlights={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]} />

                        </span>
                      )
                    }

                    if (x[0] === DATA_ORG_KeyNamesForCards_D.HIGHLIGHT) {
                      return (
                        <span
                          className="HIGHLIGHTS"
                          key={`${x[0]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}`}>
                          <Highlights_D highlights={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]} />
                        </span>
                      )
                    }

                    if (x[0] !== DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA) {
                      return (
                        <span
                          className="NO_THIRDPAGE_DATA"
                          key={`${x[0]}_${x[1].data.join(", ")}`}>
                          <P>
                            {capitalizeWords(x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME])}:{" "}
                            <span>{new Intl.ListFormat("en").format(x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME])}</span>
                          </P>
                        </span>
                      )
                    }
                  })}
                </div>
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
                      secondpageDataORG.right[renderThisFilter],
                      secondpageDataORG.left[renderThisContact],
                      secondpageDataORG.cardData[renderThisCard],
                      secondpageDataORG.mainNameORG,
                      secondpageDataORG.cardData[renderThisCard].subtitle,
                      secondpageDataORG.cardData[renderThisCard].fullName,
                      secondpageDataORG.cardData[renderThisCard]?.state || "",
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
            </ORG_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
