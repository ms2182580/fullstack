import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { Fragment } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../ChatAI"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_ContactUs } from "./ORG_D_Detail_ContactUs"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard } from "./ORG_D_Detail_MainCard"
import { ORG_D_Detail_Reviews } from "./ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "./ORG_D_Detail_Schedule"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"
import { Layout_MainCardRight_VALUES } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

let defaultSectionToRender = [
  { component: ORG_D_Detail_Schedule, [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]: "booking" },
  { component: ORG_D_Detail_ContactUs, [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]: "contact" },
  { component: ORG_D_Detail_Reviews, [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]: "reviews" },
  { component: ORG_D_Detail_FAQS, [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]: "faqs" },
]

export const INDEX_ORG_Detail_D = ({ sectionToRender = null, layout_MainCardRight = Layout_MainCardRight_VALUES.DEFAULT, selectTags = null, howIsMap = null }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header
            thirdpageDataORG={thirdpageDataORG}
            defaultSectionToRender={defaultSectionToRender}
            sectionToRender={sectionToRender}
          />

          <ORG_D_Detail_MainCard layout_MainCardRight={layout_MainCardRight} />

          {sectionToRender ? (
            <>
              {sectionToRender.map((x, index) => {
                let Component = x.component

                const idInnerbar = x.toNavbar ? x.toNavbar.id : null

                return (
                  <Fragment key={`${x.name}_${index}`}>
                    <Component
                      selectTags={selectTags}
                      idInnerbar={idInnerbar}
                    />
                  </Fragment>
                )
              })}
            </>
          ) : (
            <>
              {defaultSectionToRender.map((x, index) => {
                let theComponentName = x.component.name

                let theIDInnerbar = x[InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]
                console.log("theIDInnerbar:", theIDInnerbar)

                return (
                  <Fragment key={`${theComponentName}_${index}`}>
                    <x.component
                      idInnerbar={x[InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}
                      selectTags={selectTags}
                    />
                  </Fragment>
                )
              })}
            </>
          )}

          <ORG_D_Detail_BreadcrumbsLastUpdated thirdpageDataORG={thirdpageDataORG} />
        </div>
        <ChatAI />
      </INDEX_ORG_Detail_DWrapper>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
