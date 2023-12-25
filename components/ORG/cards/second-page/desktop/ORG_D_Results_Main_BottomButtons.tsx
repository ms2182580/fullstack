import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "@/assets/Icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { handleMoveToThirdPage } from "@/utils/org/handleMoveToThirdPage"
import { BRAND_OPTION_DEFAULT, SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Results_Main_BottomButtonsWrapper } from "./styles/ORG_D_Results_Main_BottomButtonsWrapper"

type Props = {
  renderThisFilter: number
  renderThisCard: number
  renderThisContact: number
}

export const ORG_D_Results_Main_BottomButtons = ({ renderThisFilter, renderThisCard, renderThisContact }: Props) => {
  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData()
  const { push } = useRouter()

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
        onClick={(event) =>
          handleMoveToThirdPage({
            event,
            categoryPosition: secondpageDataORG.categoryPosition,
            subcategoryPosition: secondpageDataORG.subcategoryPosition,
            resourcePosition: renderThisContact,
            setThirdpageDataORG,
            push,
          })
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
