import { defaultSectionToRender } from "@/utils/ORG/third-page/defaultSectionToRender"
import { Fragment } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../ChatAI"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard } from "./ORG_D_Detail_MainCard"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"
import { Layout_MainCardRight_VALUES } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

export const INDEX_ORG_Detail_D = ({ sectionToRender = null, arrayInnerNavBar = null, layout_MainCardRight = Layout_MainCardRight_VALUES.DEFAULT, selectTags = null }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header
            thirdpageDataORG={thirdpageDataORG}
            arrayInnerNavBar={arrayInnerNavBar}
            defaultSectionToRender={defaultSectionToRender}
          />

          <ORG_D_Detail_MainCard
            arrayInnerNavBar={arrayInnerNavBar}
            layout_MainCardRight={layout_MainCardRight}
          />

          {sectionToRender ? (
            <>
              {sectionToRender.map((x, index) => {
                let Component = x.component

                return (
                  <Fragment key={`${x.name}_${index}`}>
                    <Component
                      arrayInnerNavBar={arrayInnerNavBar}
                      selectTags={selectTags}
                    />
                  </Fragment>
                )
              })}
            </>
          ) : (
            <>
              {defaultSectionToRender.map((x, index) => {
                let theComponentName = x.component.name

                return (
                  <Fragment key={`${theComponentName}_${index}`}>
                    <x.component
                      defaultId={x.defaultId}
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
