import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "@/assets/Icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { formatDataToThirdPage } from "@/utils/ORG/formatDataToThirdPage"
import { formatDataToURLOnThirdPage } from "@/utils/ORG/formatDataToURLOnThirdPage"
import { BRAND_OPTION_DEFAULT, SPECIFIC_DATA_KEY } from "@/utils/ORG/second-page/desktop/specificData"
import { allRoutes } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Results_Main_BottomButtonsWrapper } from "./styles/ORG_D_Results_Main_BottomButtonsWrapper"

export const ORG_D_Results_Main_BottomButtons = ({ renderThisFilter, renderThisCard, renderThisContact }) => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()
  const { pathname, push } = useRouter()

  const handleMoveToThirdPage = (_, thirdPageData_Card_Right, thirdPageData_Card_Left, thirdPageData_Card, mainNameORG, fullName, specificDataForThisResource) => {
    const allDataToThirdPage = formatDataToThirdPage(thirdPageData_Card, thirdPageData_Card_Left, thirdPageData_Card_Right, fullName, specificDataForThisResource)

    // *This was done in this way to match the same variable name on the function of the 1° page to the 3° page on the file «INDEX_ORG_Search_D.tsx»
    const stringForBreadcrumbs = mainNameORG

    setThirdpageDataORG(allDataToThirdPage)

    const specificDetail = formatDataToURLOnThirdPage({ stringToFormat: thirdPageData_Card.title })

    // *This "toWhere" variable is slightly different from the same way to move to the user to third page from «INDEX_ORG_Search_D.tsx» file
    const toWhere = `/${pathname.split("/")[1]}/${allRoutes.detail}/${specificDetail}`

    push(
      {
        pathname: toWhere,
        query: { title: stringForBreadcrumbs },
      },
      toWhere,
    )
  }

  const existSpecificData = useMemo(() => {
    const weHaveData = secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]
    if (Boolean(weHaveData)) {
      let whichSvg =
        secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][SPECIFIC_DATA_KEY.SVG] === BRAND_OPTION_DEFAULT.DEFAULT
          ? ORG_D_Results_RequestConsultationSvg
          : secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][SPECIFIC_DATA_KEY.SVG]

      return {
        ComponentSvg: whichSvg,
        nameToJSX: secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME],
      }
    }
    return false
  }, [secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]])

  return (
    <ORG_D_Results_Main_BottomButtonsWrapper>
      <div>
        <ORG_D_Results_ViewProfileSvg />
        <P>View Profile</P>
      </div>
      <div
        onClick={(_) =>
          handleMoveToThirdPage(
            _,
            secondpageDataORG.right[renderThisFilter],
            secondpageDataORG.left[renderThisContact],
            secondpageDataORG.cardData[renderThisCard],
            secondpageDataORG.mainNameORG,
            secondpageDataORG.cardData[renderThisCard].fullName,
            secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY],
          )
        }>
        {existSpecificData ? (
          <>
            <existSpecificData.ComponentSvg />

            <P>{existSpecificData.nameToJSX}</P>
          </>
        ) : (
          <>
            <ORG_D_Results_RequestConsultationSvg />
            <P>see availability</P>
          </>
        )}
      </div>
      <div>
        <ORG_D_Results_AddtocareplanSvg />

        <P>Add to Care Plan</P>
      </div>
    </ORG_D_Results_Main_BottomButtonsWrapper>
  )
}
