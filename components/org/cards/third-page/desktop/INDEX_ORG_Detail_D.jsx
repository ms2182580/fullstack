import { PCC_General_D_UsersAlsoViewed } from "@/components/org/cards_resources/third-page/pcc/general/desktop/PCC_General_D_UsersAlsoViewed"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { defaultSectionToRender } from "@/utils/org/third-page/defaultSectionToRender"
import { Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ORG_D_Detail_AIChat } from "./ORG_D_Detail_AIChat"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_Contact } from "./ORG_D_Detail_Contact"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard2 } from "./ORG_D_Detail_MainCard2"
import { MapProperties_KEYS } from "./ORG_D_Detail_MapComponent"
import { ORG_Detail_D_SectionCustom } from "./ORG_Detail_D_SectionCustom"
import { ORG_Detail_D_SectionDefault } from "./ORG_Detail_D_SectionDefault"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"
import { Layout_MainCardRight_VALUES } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

export const INDEX_ORG_Detail_D = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()
  const { thirdpageDataORG: thirdpageDataORG_Backend } =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { modalShowedCtx } = useCtx_ShowModal()

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

    return {
      renderSections,
      tooltip,
      layoutMainCardRight,
      howIsMap,
      buttonMainCard,
    }
  }, [thirdpageDataORG, thirdpageDataORG_Backend])

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <ORG_D_Detail_Header
          thirdpageDataORG={thirdpageDataORG}
          defaultSectionToRender={defaultSectionToRender}
          sectionToRender={getAllSpecificThirdPageData.renderSections}
        />

        <div>
          <div>
            <ORG_D_Detail_MainCard2 />

            {/* 
            //!FH0 Eliminate this component and all their dependencies
            <ORG_D_Detail_MainCard
              layout_MainCardRight={
                getAllSpecificThirdPageData.layoutMainCardRight
              }
              howIsMap={getAllSpecificThirdPageData.howIsMap}
              tooltipDisplay={getAllSpecificThirdPageData.tooltip}
              buttonMainCard={getAllSpecificThirdPageData.buttonMainCard}
              defaultId={
                getAllSpecificThirdPageData.renderSections[0].toNavbar.id
              }
            /> */}

            {/* 
            //!FH0 re make all the sections to fit the new layout and design
            */}

            {getAllSpecificThirdPageData.renderSections ? (
              <ORG_Detail_D_SectionCustom
                sectionCustom={getAllSpecificThirdPageData.renderSections}
              />
            ) : (
              <ORG_Detail_D_SectionDefault />
            )}
          </div>
          <div>
            <ORG_D_Detail_Contact />
            <ORG_D_Detail_AIChat />
          </div>
        </div>

        <PCC_General_D_UsersAlsoViewed />

        <div>
          <ORG_D_Detail_BreadcrumbsLastUpdated />
        </div>
      </INDEX_ORG_Detail_DWrapper>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
