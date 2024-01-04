import { ChatAI } from "@/components/org/ChatAI"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { defaultSectionToRender } from "@/utils/org/third-page/defaultSectionToRender"
import { Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import { Fragment, useMemo } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard } from "./ORG_D_Detail_MainCard"
import { MapProperties_KEYS } from "./ORG_D_Detail_MapComponent"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"
import { Layout_MainCardRight_VALUES } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

export const INDEX_ORG_Detail_D = ({ selectTags = null }) => {
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
      dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS] ?? null

    const arrayInnerNavBar =
      dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR] ?? null

    const tooltip =
      dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP] ??
      Tooltip_VALUES.DEFAULT

    const layoutMainCardRight =
      dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT] ??
      Layout_MainCardRight_VALUES.DEFAULT

    const howIsMap = dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP] ?? {
      [MapProperties_KEYS.HOW_MANY]: 1,
    }

    const buttonMainCard = {
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT]:
        dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT] ??
        "add to care plan",
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]:
        dataObj[DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON] ??
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
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header
            thirdpageDataORG={thirdpageDataORG}
            arrayInnerNavBar={getAllSpecificThirdPageData.arrayInnerNavBar}
            defaultSectionToRender={defaultSectionToRender}
            sectionToRender={getAllSpecificThirdPageData.renderSections}
          />

          <ORG_D_Detail_MainCard
            arrayInnerNavBar={getAllSpecificThirdPageData.arrayInnerNavBar}
            layout_MainCardRight={
              getAllSpecificThirdPageData.layoutMainCardRight
            }
            howIsMap={getAllSpecificThirdPageData.howIsMap}
            tooltipDisplay={getAllSpecificThirdPageData.tooltip}
            buttonMainCard={getAllSpecificThirdPageData.buttonMainCard}
          />

          {getAllSpecificThirdPageData.renderSections ? (
            <>
              {getAllSpecificThirdPageData.renderSections.map((x, index) => {
                let theIdForComponent =
                  x?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ??
                  "#"
                let allProps = x?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

                let allData = {
                  theIdForComponent,
                  ...allProps,
                }

                if (x.component) {
                  return (
                    <>
                      <Fragment key={`${index}`}>
                        <x.component
                          {...{ [ArraySection_KEYS.ALL_DATA]: allData }}
                        />
                      </Fragment>
                    </>
                  )
                }
              })}
            </>
          ) : (
            <>
              {defaultSectionToRender.map((x, index) => {
                let theComponentName = x.component.name

                let theIdForComponent =
                  x?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ??
                  "#"
                let customTitle = x?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

                let allData = {
                  theIdForComponent,
                  ...customTitle,
                }

                return (
                  <Fragment key={`${theComponentName}_${index}`}>
                    <x.component
                      {...{ [ArraySection_KEYS.ALL_DATA]: allData }}
                    />
                  </Fragment>
                )
              })}
            </>
          )}

          <ORG_D_Detail_BreadcrumbsLastUpdated
            thirdpageDataORG={thirdpageDataORG}
          />
        </div>
        <ChatAI />
      </INDEX_ORG_Detail_DWrapper>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
