import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { DATA_ORG_KeyNamesForCards_D } from "@/utils/ORG/DATA_ORG_KeyNamesForCards_D"
import { formatDataToThirdPage } from "@/utils/ORG/formatDataToThirdPage.js"
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from "@/utils/ORG/pppas/a/DATA_A_D_Card.js"
import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons/index.js"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D.js"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D"
import { DATA_SES_D } from "../../../../../../utils/ORG/pses/ses/DATA_SES_D.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../verified/Verified.js"
import { INDEX_D_SESSearchWrapper } from "./styles/INDEX_D_SESSearchWrapper.js"

export const INDEX_D_SESSearch = ({ positionInArray, isSelected = false, componentName }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_SES_D.length)
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
    let getDataLeft = DATA_A_D_CardLeft[resourceArrPosition]
    let getDataRight = DATA_A_D_CardRight[resourceArrPosition]

    const allDataToThirdPage = formatDataToThirdPage(theData, getDataLeft, getDataRight, theData.fullName)

    setThirdpageDataORG(allDataToThirdPage)

    let getFolder = {}
    for (const x in DATA_ORG_D) {
      if (DATA_ORG_D[x].componentName === componentName) {
        getFolder.acronym = DATA_ORG_D[x].acronym
        getFolder.position = x
        break
      }
    }
    let failed = Object.keys(getFolder).length === 0

    if (!failed) {
      let getFolderName = getFolder.acronym
      let getResourceName = DATA_ORG_CheckPaths_Results_D[getFolder.acronym][subCategoryArrPosition]
      let getDetailName = DATA_A_D_CardRight[resourceArrPosition][DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]

      const toWhere = `${pathname}/${getFolderName}/${getResourceName}/${getDetailName}`

      push(
        {
          pathname: toWhere,
          query: { title: titleSubCategory, subTitle: theData.subtitle },
        },
        toWhere,
      )
    }
  }

  return (
    <INDEX_D_SESSearchWrapper>
      {DATA_SES_D.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${x.title}_${iData}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, iSubData) => {
                  return (
                    <div key={`${iSubData}_${obj.titleImage}_${obj.reviews}`}>
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
                })}
                <span onClick={() => handleMoveToSecondPage(undefined, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_SESSearchWrapper>
  )
}
