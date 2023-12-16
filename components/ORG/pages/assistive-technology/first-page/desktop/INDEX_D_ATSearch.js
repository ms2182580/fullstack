import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons"
import { DATA_PAT_D } from "../../../../../../utils/ORG/pat/DATA_PAT_D"
import { ButtonSmall } from "../../../../../ui/buttons/general"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { INDEX_D_ATSearchWrapper } from "./styles/INDEX_D_ATSearchWrapper.js"

export const INDEX_D_ATSearch = ({ positionInArray, isSelected = false, componentName }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_PAT_D.length)
    }
  }, [isSelected])

  const { pathname, push } = useRouter()

  // const handleMoveToSecondPage = (e, title, possitionSubArr) => {
  //   // console.log("title, possitionSubArr:", title, possitionSubArr)
  //   let folder = DATA_ORG_D[positionInArray].acronym
  //   // console.log("folder:", folder)
  //   let subFolder = DATA_ORG_CheckPaths_Results_D[folder][possitionSubArr]
  //   // console.log("subFolder:", subFolder)

  //   push(
  //     {
  //       pathname: `${pathname}/${folder}/${subFolder}`,
  //       query: { mainPosition: positionInArray, title, possitionSubArr },
  //     },
  //     `${pathname}/${folder}/${subFolder}`,
  //   )
  // }

  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  // const handleMoveToThirdPage = (e, theData, subCategoryArrPosition, resourceArrPosition, titleSubCategory, specificDataForThisResource) => {
  //   let getDataLeft = DATA_AT_D_CardLeft[resourceArrPosition]
  //   let getDataRight = DATA_AT_D_CardRight[resourceArrPosition]

  //   const allDataToThirdPage = formatDataToThirdPage(theData, getDataLeft, getDataRight, theData.fullName, specificDataForThisResource)

  //   setThirdpageDataORG(allDataToThirdPage)

  //   let getAcronym = DATA_ORG_D.filter((x) => x.componentName === componentName)[0]

  //   let getFolderName = getAcronym.acronym
  //   let getResourceName = DATA_ORG_CheckPaths_Results_D[getFolderName][subCategoryArrPosition]
  //   let getDetailName = DATA_AT_D_CardRight[resourceArrPosition][DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]

  //   const toWhere = `${pathname}/${getFolderName}/${getResourceName}/${getDetailName}`

  //   push(
  //     {
  //       pathname: toWhere,
  //       query: { title: titleSubCategory, subTitle: theData.subtitle },
  //     },
  //     toWhere,
  //   )
  // }

  return (
    <INDEX_D_ATSearchWrapper>
      {DATA_PAT_D.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${title}_${iData}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, iSubData) => {
                  return (
                    <div key={`${iSubData}_${obj.title}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                        />
                      </div>
                      <H3 bolder>{obj.title}</H3>
                      <H4 semibold>{obj.subtitle}</H4>
                      <StarsRatingReview_D
                        rating={obj.rating}
                        reviews={obj.reviews}
                      />
                      <P>{obj.textReview}</P>

                      <span
                      // onClick={(e) => handleMoveToThirdPage(e, obj, iData, iSubData, title, obj[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY])}
                      >
                        <ButtonSmall>
                          <ORG_D_Search_ViewProfileSvg /> View Profile
                        </ButtonSmall>
                      </span>
                    </div>
                  )
                })}
                <span onClick={(e) => handleMoveToSecondPage(e, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_ATSearchWrapper>
  )
}
