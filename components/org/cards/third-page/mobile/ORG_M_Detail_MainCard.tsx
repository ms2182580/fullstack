import Image from "next/image"
import { INDEX_ORG_Detail_MainCard } from "./styles/ORG_M_Detail_MainCard"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { useMemo } from "react"
import { SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ORG_M_Detail_InfoSvg } from "@/assets/icons"
import { ORG_M_Detail_Header } from "./ORG_M_Detail_Header"
import { Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import { Layout_MainCardRight_VALUES } from "../desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { MapProperties_KEYS } from "../desktop/ORG_D_Detail_MapComponent"
import { useCtx_ShowModal } from "@/context/Ctx_ShowModal"
import { defaultSectionToRender } from "@/utils/org/third-page/defaultSectionToRender"
import { ORG_M_Detail_MainCardSections } from "./ORG_M_Detail_MainCardSections"

export const ORG_M_Detail_MainCard = ({
  defaultId = "about",
  layout_MainCardRight,
  howIsMap,
  tooltipDisplay,
  buttonMainCard,
}) => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const isPVES = useMemo(() => {
    let haveSpecificData =
      thirdpageDataORG.card.leftPart[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]

    if (haveSpecificData) {
      return Boolean(
        haveSpecificData[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]
          .isPVES
      )
    }
    return false
  }, [])

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
    <INDEX_ORG_Detail_MainCard>
      <div>
        <Image
          src={thirdpageDataORG.card.leftPart.photo.src}
          // layout="responsive"
          objectFit="cover"
          width={84}
          height={84}
          alt={`Image of ${thirdpageDataORG.card.leftPart.title}`}
        />
        <div>
          <div>
            <span>
              {thirdpageDataORG.fullName.first +
                " " +
                thirdpageDataORG.fullName.last}
            </span>
            <span>Speech Language Pathologist</span>
            <span>{thirdpageDataORG.card.leftPart.location.city}</span>
            <button>Accept New Clients</button>
          </div>
          <ORG_M_Detail_InfoSvg />
        </div>
      </div>
      <div>
        <button>Virtual</button>
        <button>In-Person</button>
        <button>Referral Required</button>
        <button>Does Evalulation</button>
      </div>
      <ORG_M_Detail_Header
        thirdpageDataORG={thirdpageDataORG}
        arrayInnerNavBar={getAllSpecificThirdPageData.arrayInnerNavBar}
        defaultSectionToRender={defaultSectionToRender}
        sectionToRender={getAllSpecificThirdPageData.renderSections}
      />
      <ORG_M_Detail_MainCardSections
        getAllSpecificThirdPageData={getAllSpecificThirdPageData}
      />
    </INDEX_ORG_Detail_MainCard>
  )
}
