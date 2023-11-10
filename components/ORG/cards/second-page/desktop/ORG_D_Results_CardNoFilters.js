import { SPECIFIC_DATA_KEY } from "@/utils/ORG/specificData"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_D_SecondpageData } from "../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { formatDataToThirdPage } from "../../../../../utils/ORG/formatDataToThirdPage"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_Main_Left } from "./ORG_D_Results_Main_Left"
import { ORG_D_Results_Main_Right } from "./ORG_D_Results_Main_Right"
import { ORG_D_Results_CardWrapper } from "./styles/ORG_D_Results_CardWrapper"

export const ORG_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()
  const router = useRouter()

  const handleMoveToThirdPage = (e, thirdPageData_Card_Right, thirdPageData_Card_Left, thirdPageData_Card, mainNameORG, subTitle, fullName, state, specificDataForThisResource) => {
    const allDataToThirdPage = formatDataToThirdPage(thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right, fullName, specificDataForThisResource)

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

  const existSpecificData = useMemo(() => {
    const weHaveData = secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]
    if (Boolean(weHaveData)) {
      return {
        ComponentSvg: secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][SPECIFIC_DATA_KEY.SVG],
        nameToJSX: secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME],
      }
    }
    return false
  }, [secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]])

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % secondpageDataORG.right.length
          let renderThisContact = i % secondpageDataORG.left.length

          let thisKey = `${secondpageDataORG.cardData[renderThisCard].title}_${i}`

          return (
            <ORG_D_Results_CardWrapper key={thisKey}>
              <ORG_D_Results_Main_Left
                renderThisCard={renderThisCard}
                renderThisContact={renderThisContact}
              />

              <ORG_D_Results_Main_Right
                renderThisFilter={renderThisFilter}
                renderThisCard={renderThisCard}
              />

              {/* 
                //!FH0
                Make this a component
                Change the name below: "See Availability" for "Apply Now"
                */}
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
                      secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY],
                    )
                  }>
                  {existSpecificData ? (
                    <>
                      <existSpecificData.ComponentSvg />

                      <P white>{existSpecificData.nameToJSX}</P>
                    </>
                  ) : (
                    <>
                      <ORG_D_Results_RequestConsultationSvg />
                      <P white>see availability</P>
                    </>
                  )}
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
