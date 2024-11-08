import { ChatAI } from "@/components/org/ChatAI"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import { useMemo } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { ORG_M_Results_Header } from "../../second-page/mobile/ORG_M_Results_Header"
import { MapProperties_KEYS } from "../desktop/ORG_D_Detail_MapComponent"
import { Layout_MainCardRight_VALUES } from "../desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { ORG_M_Detail_MainCard } from "./ORG_M_Detail_MainCard"
import { INDEX_ORG_Detail_MWrapper } from "./styles/INDEX_ORG_Detail_MWrapper"

export const INDEX_ORG_Detail_M = ({ selectTags = null }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  const getAllSpecificThirdPageData = useMemo(() => {
    const dataObj =
      thirdpageDataORG?.[DATA_ORG_KeyNamesForCards_D_KEYS.CARD]?.[
        `rightPart`
      ]?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]?.[
        DATA_ORG_KeyNamesForCards_D_KEYS.CARD
      ]

    const renderSections =
      dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS] ?? null

    const arrayInnerNavBar =
      dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR] ?? null

    const tooltip =
      dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP] ??
      Tooltip_VALUES.DEFAULT

    const layoutMainCardRight =
      dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT] ??
      Layout_MainCardRight_VALUES.DEFAULT

    const howIsMap = dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP] ?? {
      [MapProperties_KEYS.HOW_MANY]: 1,
    }

    const buttonMainCard = {
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT]:
        dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT] ??
        "add to care plan",
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]:
        dataObj?.[DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON] ??
        false,
    }

    return {
      renderSections,
      arrayInnerNavBar,
      tooltip,
      layoutMainCardRight,
      howIsMap,
      buttonMainCard,
    }
  }, [thirdpageDataORG])
  return (
    <>
      <INDEX_ORG_Detail_MWrapper>
        <div>
          <ORG_M_Results_Header />
          <ORG_M_Detail_MainCard
            arrayInnerNavBar={getAllSpecificThirdPageData.arrayInnerNavBar}
            layout_MainCardRight={
              getAllSpecificThirdPageData.layoutMainCardRight
            }
            howIsMap={getAllSpecificThirdPageData.howIsMap}
            tooltipDisplay={getAllSpecificThirdPageData.tooltip}
            buttonMainCard={getAllSpecificThirdPageData.buttonMainCard}
          />
        </div>
        <ChatAI />
      </INDEX_ORG_Detail_MWrapper>

      {/* <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} /> */}
    </>
  )
}
