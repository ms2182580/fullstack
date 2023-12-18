import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_KeyNamesForCards_D } from "@/utils/ORG/DATA_ORG_KeyNamesForCards_D"
import { formatDataToThirdPage } from "@/utils/ORG/formatDataToThirdPage"
import { DATA_CardLeft_AA, DATA_CardRight_AA } from "@/utils/ORG/paa/cr/DATA_CR_D_Card"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D"
import { DATA_PAA_D } from "../../../../../../utils/ORG/paa/DATA_PAA_D"
import { ButtonSmall } from "../../../../../ui/buttons/general/index"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../verified/Verified"
import { INDEX_D_AASearchWrapper } from "./styles/INDEX_D_AASearchWrapper.js"

export const INDEX_D_AASearch = ({ positionInArray, isSelected = false, componentName }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_PAA_D.length)
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

  const handleMoveToThirdPage = (e, theData, subCategoryArrPosition, resourceArrPosition, titleSubCategory) => {
    let getDataLeft = DATA_CardLeft_AA[resourceArrPosition]
    let getDataRight = DATA_CardRight_AA[resourceArrPosition]

    const allDataToThirdPage = formatDataToThirdPage(theData, getDataLeft, getDataRight, theData.fullName)

    setThirdpageDataORG(allDataToThirdPage)

    let getAcronym = DATA_ORG_D.filter((x) => x.componentName === componentName)[0]

    let getFolderName = getAcronym.acronym
    let getResourceName = DATA_ORG_CheckPaths_Results_D[getFolderName][subCategoryArrPosition]
    let getDetailName = DATA_CardRight_AA[resourceArrPosition][DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]

    const toWhere = `${pathname}/${getFolderName}/${getResourceName}/${getDetailName}`

    push(
      {
        pathname: toWhere,
        query: { title: titleSubCategory, subTitle: theData.subtitle },
      },
      toWhere,
    )
  }

  return (
    <INDEX_D_AASearchWrapper>
      {DATA_PAA_D.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${x.title}_${iData}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, iSubData) => {
                  /* 
                  !FH
                  This is a patch because some images have inside it the "Verified" component */
                  if (iSubData === 2) {
                    return (
                      <div
                        key={`${iSubData}_${obj.titleImage}_${obj.reviews}`}
                        className="withVerifiedComponent">
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

                        <span onClick={(e) => handleMoveToThirdPage(e, obj, iData, iSubData, title)}>
                          <ButtonSmall>
                            <ORG_D_Search_ViewProfileSvg /> View Profile
                          </ButtonSmall>
                        </span>
                      </div>
                    )
                  } else {
                    return (
                      <div key={`${iSubData}_${obj.titleImage}_${obj.reviews}`}>
                        <div>
                          <Image
                            src={obj.imageToUse}
                            alt={obj.title}
                            layout="responsive"
                          />
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

                        <span onClick={(e) => handleMoveToThirdPage(e, obj, iData, iSubData, title)}>
                          <ButtonSmall>
                            <ORG_D_Search_ViewProfileSvg /> View Profile
                          </ButtonSmall>
                        </span>
                      </div>
                    )
                  }
                })}
                <span onClick={(e) => handleMoveToSecondPage(e, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_AASearchWrapper>
  )
}
