import { ORG_D_Search_ViewProfileSvg } from "@/assets/Icons"
import { Highlights_2_D } from "@/components/ORG/highlights/Highlights_2_D"
import { Highlights_D } from "@/components/ORG/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "@/components/ORG/verified/Verified"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Caption, P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_ORG_CheckPaths_Results_D } from "@/utils/ORG/DATA_ORG_CheckPaths_Results_D"
import { DATA_ORG_D } from "@/utils/ORG/DATA_ORG_D"
import * as AllCards from "@/utils/ORG/second-page/desktop/AllCards"
import * as AllData from "@/utils/ORG/second-page/desktop/AllData"
import * as AllFilters from "@/utils/ORG/second-page/desktop/AllFilters"
import { SPECIFIC_DATA_KEY } from "@/utils/ORG/specificData"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { All_Layouts_Accepted, INDEX_ORG_Search_DWrapper } from "./styles/INDEX_ORG_Search_DWrapper"

export const INDEX_ORG_Search_D = ({ positionInArray, isSelected = false, componentName, theData, someLayoutSpecial }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(theData.length)
    }
  }, [isSelected])

  const { pathname, push } = useRouter()

  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const handleMoveToSecondPage = (e, title, possitionSubArr) => {
    console.log("title, possitionSubArr:", title, possitionSubArr)
    // console.log("title, possitionSubArr:", title, possitionSubArr)
    let folder = DATA_ORG_D[positionInArray].acronym
    console.log("folder:", folder)
    let subFolder = DATA_ORG_CheckPaths_Results_D[folder][possitionSubArr]
    console.log("subFolder:", subFolder)

    const folderOfData = DATA_ORG_CheckPaths_Results_D[folder].at(-2)[subFolder]
    console.log("folderOfData:", folderOfData)

    /* 
    utils/ORG/pat/wcmd/DATA_AT_D_Filters.js
    */
    // const Filters = dynamic(() => import(`@/utils/ORG/second-page/pat_wcmd_filters`).then((mod) => mod.pat_wcmd_filters))

    // console.log("AllFilters:", AllFilters)

    const theActualFilter = AllFilters[`${folder}_filters`][`filtersUI_${folder.toUpperCase()}`]

    const theActualCard = AllCards[`${folder}_cards`]

    const leftCard = theActualCard[`DATA_CardLeft_${folder.toUpperCase()}`]
    const rightCard = theActualCard[`DATA_CardRight_${folder.toUpperCase()}`]

    // console.log("leftCard, rightCard:", leftCard, rightCard)

    const theActualData = AllData[`data_${folder}`]

    const subcategory = theActualData[`DATA_${folder.toUpperCase()}_D`][possitionSubArr]
    // console.log("subcategory:", subcategory)

    const subcategorySpecificData = theActualData[`${folder.toUpperCase()}_SPECIFIC_DATA`] ?? null
    // console.log("subcategorySpecificData:", subcategorySpecificData)

    // console.log("subcategory[1].slice(-1), subcategory[0]:", subcategory.slice(1), subcategory[0])

    /* 
    !FH0
    - Add every other category to reach the page number 2
    - Add every other category to reach the page number 3
    */

    setSecondpageFiltersORG(theActualFilter)
    setSecondpageDataORG({
      cardData: subcategory.slice(1),
      mainNameORG: subcategory[0],
      right: rightCard,
      left: leftCard,
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: subcategorySpecificData,
    })

    // console.log("Filters:", typeof Filters, Filters)

    push({
      pathname: `${pathname}/search/${subFolder}`,
    })

    /* push(
      {
        pathname: `${pathname}/${folder}/${subFolder}`,
        query: { mainPosition: positionInArray, title, possitionSubArr },
      },
      `${pathname}/${folder}/${subFolder}`,
    ) */
  }

  // const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  // const handleMoveToThirdPage = (e, theData, subCategoryArrPosition, resourceArrPosition, titleSubCategory, specificDataForThisResource) => {
  //   let getDataLeft = DATA_CardLeft_AT[resourceArrPosition]
  //   let getDataRight = DATA_CardRight_AT[resourceArrPosition]

  //   const allDataToThirdPage = formatDataToThirdPage(theData, getDataLeft, getDataRight, theData.fullName, specificDataForThisResource)

  //   setThirdpageDataORG(allDataToThirdPage)

  //   let getAcronym = DATA_ORG_D.filter((x) => x.componentName === componentName)[0]

  //   let getFolderName = getAcronym.acronym
  //   let getResourceName = DATA_ORG_CheckPaths_Results_D[getFolderName][subCategoryArrPosition]
  //   let getDetailName = DATA_CardRight_AT[resourceArrPosition][DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]

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
    <INDEX_ORG_Search_DWrapper someLayoutSpecial={someLayoutSpecial}>
      {theData.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${title}_${iData}`}>
                <H2>{title}</H2>
                <div>
                  {objects.map((obj, iSubData) => {
                    return (
                      <div key={`${iSubData}_${obj.title}_${obj.reviews}`}>
                        <div>
                          <Image
                            src={obj.imageToUse}
                            alt={obj.title}
                            layout={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? "responsive" : "intrinsic"}
                            objectFit={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? "contain" : "initial"}
                            width={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? 1 : 1200}
                            height={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? 0.522 : 600}
                          />
                          {someLayoutSpecial === All_Layouts_Accepted.like_PAT ? null : (
                            <>
                              <Verified />
                            </>
                          )}
                        </div>
                        <H3>{obj.title}</H3>
                        <H4>{obj.subtitle}</H4>
                        {obj?.city && <P>{obj?.city}</P>}
                        {someLayoutSpecial === "like_PVES" && iData === 0 ? (
                          <>
                            <Caption>{obj.hourlyRate}</Caption>
                            <div>
                              <Highlights_D highlights={obj.highlight} />
                              <Highlights_2_D
                                highlights={obj.highlight_plus}
                                withIcon={false}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <StarsRatingReview_D
                              rating={obj.rating}
                              reviews={obj.reviews}
                            />
                          </>
                        )}

                        <P>{obj.textReview}</P>
                        <button
                        // onClick={(e) => handleMoveToThirdPage(e, obj, iData, iSubData, title, obj[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY])}
                        >
                          <ORG_D_Search_ViewProfileSvg />
                          {someLayoutSpecial === "like_PVES" && iData === 0 ? "View Listing" : "View Profile"}
                        </button>
                      </div>
                    )
                  })}
                </div>
                <span onClick={(e) => handleMoveToSecondPage(e, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_ORG_Search_DWrapper>
  )
}
