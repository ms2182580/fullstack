import { SPECIFIC_DATA } from "@/utils/ORG/DATA_ORG_D"
import { DATA_PAT_D_KEYS } from "@/utils/ORG/pat/DATA_PAT_D"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ORG_D_Results_ATSvg, ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../assets/Icons"
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
  // console.log("secondpageDataORG:", secondpageDataORG)
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
              <ORG_D_Results_Main_Left
                renderThisCard={renderThisCard}
                renderThisContact={renderThisContact}
              />

              <ORG_D_Results_Main_Right
                renderThisFilter={renderThisFilter}
                renderThisCard={renderThisCard}
              />

              {/* 
                !FH0
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
                      secondpageDataORG[SPECIFIC_DATA.SPECIFIC_DATA],
                    )
                  }>
                  {Boolean(secondpageDataORG[DATA_PAT_D_KEYS.AT_SPECIFIC_DATA]) ? (
                    <>
                      <ORG_D_Results_ATSvg />

                      <P white>{secondpageDataORG[DATA_PAT_D_KEYS.AT_SPECIFIC_DATA][DATA_PAT_D_KEYS.BUTTON_TO_THIRDPAGE_NAME_KEY]}</P>
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
