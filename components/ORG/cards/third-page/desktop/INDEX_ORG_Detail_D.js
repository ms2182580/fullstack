import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../ChatAI"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_ContactUs } from "./ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "./ORG_D_Detail_FAQS"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard } from "./ORG_D_Detail_MainCard"
import { ORG_D_Detail_Reviews } from "./ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "./ORG_D_Detail_Schedule"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"

export const INDEX_ORG_Detail_D = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header thirdpageDataORG={thirdpageDataORG} />

          <ORG_D_Detail_MainCard thirdpageDataORG={thirdpageDataORG} />

          <ORG_D_Detail_Schedule />

          <ORG_D_Detail_ContactUs />

          <ORG_D_Detail_Reviews
            name={thirdpageDataORG.fullName.first}
            lastName={thirdpageDataORG.fullName.last}
            rating={thirdpageDataORG.card.leftPart.rating}
            reviews={thirdpageDataORG.card.leftPart.reviews}
          />

          <ORG_D_Detail_FAQS
            name={thirdpageDataORG.card.leftPart.title}
            lastName={""}
            locationCity={thirdpageDataORG.card.leftPart?.location?.city}
            locationStreetNumber={thirdpageDataORG.card.leftPart?.location?.streetNumber}
            locationStreetName={thirdpageDataORG.card.leftPart?.location?.streetName}
            locationState={thirdpageDataORG.card.leftPart?.location?.state}
          />

          <ORG_D_Detail_BreadcrumbsLastUpdated thirdpageDataORG={thirdpageDataORG} />
        </div>
        <ChatAI />
      </INDEX_ORG_Detail_DWrapper>
      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
