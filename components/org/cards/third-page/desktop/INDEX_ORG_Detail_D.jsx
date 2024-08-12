import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { ORG_D_Detail_LastSection } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_LastSection"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { defaultSectionToRender } from "@/utils/org/third-page/defaultSectionToRender"
import { Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import { useToggableOnDetails } from "@/utils/useToggableOnDetails"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_Header_RightSticky } from "./ORG_D_Detail_Header_RightSticky"
import { MapProperties_KEYS } from "./ORG_D_Detail_MapComponent"
import { ORG_D_Detail_Overview } from "./ORG_D_Detail_Overview"
import { ORG_Detail_D_SectionCustom } from "./ORG_Detail_D_SectionCustom"
import { ORG_Detail_D_SectionDefault } from "./ORG_Detail_D_SectionDefault"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"
import { Layout_MainCardRight_VALUES } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

const theState = {
  state: useToggableOnDetails,
}

export const INDEX_ORG_Detail_D = ({ stateToToggle = theState }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()
  const { thirdpageDataORG: thirdpageDataORG_Backend } =
    useORG_Ctx_D_ThirdpageData_Backend()

  // const { modalShowedCtx } = useCtx_ShowModal()

  const { query } = useRouter()

  const getAllSpecificThirdPageData = useMemo(() => {
    if (!query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
      return null
    }
    const dataThirdPage =
      thirdpageDataORG_Backend?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ??
      null

    const renderSections =
      dataThirdPage?.[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS] ??
      defaultSectionToRender

    const tooltip =
      dataThirdPage?.[DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP] ??
      Tooltip_VALUES.DEFAULT

    const layoutMainCardRight =
      dataThirdPage?.[
        DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT
      ] ?? Layout_MainCardRight_VALUES.DEFAULT

    const howIsMap = dataThirdPage?.[
      DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP
    ] ?? {
      [MapProperties_KEYS.HOW_MANY]: 1,
    }

    const buttonMainCard = {
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT]:
        dataThirdPage?.[
          DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT
        ] ?? "add to care plan",
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]:
        dataThirdPage?.[
          DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON
        ] ?? false,
    }

    const category =
      thirdpageDataORG_Backend?.[DATA_ORG_KeyNamesForCards_D_KEYS.CATEGORY] ||
      null

    return {
      renderSections,
      tooltip,
      layoutMainCardRight,
      howIsMap,
      buttonMainCard,
      category,
    }
  }, [thirdpageDataORG, thirdpageDataORG_Backend])

  return (
    <INDEX_ORG_Detail_DWrapper
      data-testid={KEYS_DATA_TESTID.INDEX_D_ORG_DETAILS}
    >
      <ORG_D_Detail_Header
        thirdpageDataORG={thirdpageDataORG}
        defaultSectionToRender={defaultSectionToRender}
        sectionToRender={getAllSpecificThirdPageData.renderSections}
      />

      <div>
        <div>
          <ORG_D_Detail_Overview />

          {getAllSpecificThirdPageData.renderSections ? (
            <ORG_Detail_D_SectionCustom
              sectionCustom={getAllSpecificThirdPageData.renderSections}
            />
          ) : (
            <ORG_Detail_D_SectionDefault />
          )}
        </div>
        <div>
          <ORG_D_Detail_Header_RightSticky
            whichCategory={getAllSpecificThirdPageData.category}
          />
        </div>
      </div>

      <ORG_D_Detail_LastSection
        whichCategory={getAllSpecificThirdPageData.category}
      />

      <div>
        <ORG_D_Detail_BreadcrumbsLastUpdated />
      </div>
    </INDEX_ORG_Detail_DWrapper>
  )
}
