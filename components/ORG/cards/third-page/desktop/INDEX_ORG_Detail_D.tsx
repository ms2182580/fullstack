import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_AT_SimilarProducts } from "@/components/ORG/cards_resources/third-page/general/desktop/ORG_D_Detail_AT_SimilarProducts"
import { SectionToRender_PROPS } from "@/utils/ORG/third-page/SectionToRender"
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

export const INDEX_ORG_Detail_D = ({ sectionToRender }: SectionToRender_PROPS) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header thirdpageDataORG={thirdpageDataORG} />

          <ORG_D_Detail_MainCard thirdpageDataORG={thirdpageDataORG} />

          {sectionToRender ? (
            <>
              {sectionToRender.map((x, index) => {
                if (x.name === "ORG_D_Detail_AT_SimilarProducts") {
                  return (
                    <Fragment key={`${x.name}_${index}`}>
                      <ORG_D_Detail_AT_SimilarProducts
                        cardFirstRow={x.isSimilarProducts.cardFirstRow}
                        cardSecondRow={x.isSimilarProducts.cardSecondRow}
                      />
                    </Fragment>
                  )
                }

                return (
                  <Fragment key={`${x.name}_${index}`}>
                    <x.component />
                  </Fragment>
                )
              })}
            </>
          ) : (
            <>
              <ORG_D_Detail_Schedule />

              <ORG_D_Detail_ContactUs />

              <ORG_D_Detail_Reviews />

              <ORG_D_Detail_FAQS />
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
