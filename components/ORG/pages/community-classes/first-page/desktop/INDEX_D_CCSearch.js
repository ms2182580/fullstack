import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons/index.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D.js"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D.js"
import { formatDataToThirdPage } from "../../../../../../utils/ORG/formatDataToThirdPage.js"
import { DATA_CC_D } from "../../../../../../utils/ORG/pcc/cc/DATA_CC_D.js"
import { DATA_CC_D_CardLeft, DATA_CC_D_CardRight } from "../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Card.js"
import { ButtonSmall } from "../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { Verified } from "../../../../verified/Verified.js"
import { INDEX_D_CCSearchWrapper } from "./styles/INDEX_D_CCSearchWrapper.js"

export const INDEX_D_CCSearch = ({ positionInArray, isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_CC_D.length)
    }
  }, [isSelected])

  const { pathname, push } = useRouter()

  const handleMoveToSecondPage = (e, title, possitionSubArr) => {
    let folder = DATA_ORG_D[positionInArray].acronym
    let subFolder = DATA_ORG_CheckPaths_Results_D[folder][possitionSubArr]

    push(
      {
        pathname: `${pathname}/${folder}/${subFolder}`,
        query: { mainPosition: positionInArray, title, possitionSubArr },
      },
      `${pathname}/${folder}/${subFolder}`,
    )
  }

  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const handleMoveToThirdPage = (e, theData, possitionSubArr, title) => {
    let getDataRight = DATA_CC_D_CardRight.filter((x) => x.mainName === theData.title)[0]

    let getDataLeft = DATA_CC_D_CardLeft.filter((x) => x.mainName === theData.title)[0]

    const allDataToThirdPage = formatDataToThirdPage(theData, getDataLeft, getDataRight)

    setThirdpageDataORG(allDataToThirdPage)

    let folder = DATA_ORG_D[positionInArray].acronym
    let subFolder = DATA_ORG_CheckPaths_Results_D[folder][possitionSubArr]
    let thirdPageURL = getDataRight.thirdPageData.folderName

    const toWhere = `${pathname}/${folder}/${subFolder}/${thirdPageURL}`

    push(
      {
        pathname: toWhere,
        query: { possitionSubArr, title },
      },
      toWhere,
    )
  }

  return (
    <INDEX_D_CCSearchWrapper>
      {DATA_CC_D.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${x.title}_${iData}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, i) => {
                  return (
                    <div key={`${i}_${obj.titleImage}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                          layout="responsive"
                        />
                        <Verified />
                      </div>
                      <H3 bolder>{obj.title}</H3>
                      <H4>{obj.subtitle}</H4>
                      <P
                        medium
                        dark_gray>
                        {obj.city}
                      </P>
                      <StarsRatingReview_D
                        rating={obj.rating}
                        reviews={obj.reviews}
                      />
                      <P>{obj.textReview}</P>

                      {/* 
                      //? THis was done for make only the Karate Group Class of Community Classes be render
                      */}
                      {i === 0 && iData === 0 ? (
                        <>
                          <span onClick={(e) => handleMoveToThirdPage(e, obj, iData, title)}>
                            <ButtonSmall>
                              <ORG_D_Search_ViewProfileSvg /> View Profile
                            </ButtonSmall>
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            <ButtonSmall>
                              <ORG_D_Search_ViewProfileSvg /> View Profile
                            </ButtonSmall>
                          </span>
                        </>
                      )}
                    </div>
                  )
                })}
                <span onClick={() => handleMoveToSecondPage(undefined, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_CCSearchWrapper>
  )
}
