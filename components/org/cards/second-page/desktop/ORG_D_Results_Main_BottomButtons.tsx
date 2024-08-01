import {
  ORG_D_Results_AddtocareplanSvg,
  ORG_D_Results_RequestConsultationSvg,
  ORG_D_Results_ViewProfileSvg,
} from "@/assets/icons"
import DEFAULT_SVG from "@/assets/icons/org/second-page/DEFAULT_Button_To_Third_Page.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import {
  BRAND_OPTION_DEFAULT,
  SPECIFIC_DATA_KEY,
  SPECIFIC_DATA_SECOND_PAGE,
} from "@/utils/org/second-page/desktop/specificData"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Results_Main_BottomButtonsWrapper } from "./styles/ORG_D_Results_Main_BottomButtonsWrapper"

type Props = {
  renderThisContact?: number
  backendData?: any
  whichResource?: number
}

export const ORG_D_Results_Main_BottomButtons = ({
  renderThisContact,
  backendData,
  whichResource,
}: Props) => {
  const toDataTestId = backendData["recordName"]
    .replaceAll(/[\s-]/g, "_")
    .toLowerCase()

  console.log("toDataTestId:", toDataTestId)

  // const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData()
  const { push } = useRouter()

  const { secondpageDataORG: secondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()

  const buttonJSXAndSVGCustom = useMemo(() => {
    if (!backendData) {
      const weHaveData = secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]
      if (Boolean(weHaveData)) {
        /* This check if the key SVG on weHaveData variable object is empty of have a declaration of «DEFAULT» */
        let whichSvg =
          !weHaveData[SPECIFIC_DATA_KEY.SVG] ||
          weHaveData[SPECIFIC_DATA_KEY.SVG] === BRAND_OPTION_DEFAULT.DEFAULT
            ? ORG_D_Results_RequestConsultationSvg
            : weHaveData?.[SPECIFIC_DATA_KEY.SVG]

        let whichJSX = !weHaveData?.[SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]
          ? "See availability"
          : weHaveData?.[SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]

        return {
          ComponentSvg: whichSvg,
          nameToJSX: whichJSX,
        }
      }
    }

    if (backendData) {
      let theSecondPageData =
        secondpageDataORG_Backend?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]

      let whichButtonToThirdPageSvg =
        theSecondPageData?.[SPECIFIC_DATA_SECOND_PAGE.SVG] ?? DEFAULT_SVG

      let whichButtonToThirdPageText =
        theSecondPageData?.[
          SPECIFIC_DATA_SECOND_PAGE.BUTTON_TO_THIRDPAGE_TEXT
        ] ?? "See availability"

      return {
        ComponentSvg_Backend: whichButtonToThirdPageSvg,
        nameToJSX_Backend: whichButtonToThirdPageText,
      }
    }

    return null
  }, [
    secondpageDataORG[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY],
    secondpageDataORG_Backend[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE],
  ])

  console.log("toDataTestId:", toDataTestId)

  if (backendData && whichResource !== undefined) {
    return (
      <ORG_D_Results_Main_BottomButtonsWrapper>
        <div
          data-testid={toDataTestId}
          tabIndex={0}
          onClick={(event) =>
            handleMoveToThirdPage_Backend({
              event,
              raw: backendData,
              secondpageDataORG_Backend,
              setThirdpageDataORG_Backend,
              push,
            })
          }
          onKeyDown={(event) =>
            handleMoveToThirdPage_Backend({
              event,
              raw: backendData,
              secondpageDataORG_Backend,
              setThirdpageDataORG_Backend,
              push,
            })
          }
        >
          <ORG_D_Results_ViewProfileSvg />
          <P>View Profile</P>
        </div>

        <div>
          {buttonJSXAndSVGCustom?.ComponentSvg_Backend()}
          <P>{buttonJSXAndSVGCustom?.nameToJSX_Backend}</P>
        </div>

        <div>
          <ORG_D_Results_AddtocareplanSvg />

          <P>Add to Care Plan</P>
        </div>
      </ORG_D_Results_Main_BottomButtonsWrapper>
    )
  }

  return null
}
