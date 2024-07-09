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
import { ORG_D_Detail_AIChat } from "./ORG_D_Detail_AIChat"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_Contact } from "./ORG_D_Detail_Contact"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { MapProperties_KEYS } from "./ORG_D_Detail_MapComponent"
import { ORG_D_Detail_Overview } from "./ORG_D_Detail_Overview"
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
    <>
      <INDEX_ORG_Detail_DWrapper>
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
          {/* 
          //!FH0
          Check when the resource is "Vocational" is possible the detail conact and AIChat be overflowed. The less height, the more overflowed.
          
          Possible solution 1:
            - Make those card toggleable and only one can be open at time. This for screen from 720px height to 926px height. For every else, display it boths
                * The reason to do this comes from the popular screen resolution for Desktop in 2024 (https://www.browserstack.com/guide/common-screen-resolutions) being the smaller: 720px
                * Use "window.innerHeight" to check the height
            
             
            - Just make them smaller
          
          */}
          <div>
            <ORG_D_Detail_Contact />
            <ORG_D_Detail_AIChat
              whichCategory={getAllSpecificThirdPageData.category}
            />
          </div>
        </div>

        <PCC_General_D_UsersAlsoViewed
          whichCategory={getAllSpecificThirdPageData.category}
        />

        <div>
          <ORG_D_Detail_BreadcrumbsLastUpdated />
        </div>
      </INDEX_ORG_Detail_DWrapper>
    </>
  )
}
