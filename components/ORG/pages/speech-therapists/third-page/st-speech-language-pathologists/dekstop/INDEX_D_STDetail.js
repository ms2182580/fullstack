import { useRouter } from "next/router"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../../../ChatAI"
import { ST_D_Detail_Header } from "./ST_D_Detail_Header"
import { ST_D_Detail_MainCard } from "./ST_D_Detail_MainCard"
import { ST_D_Detail_Reviews } from "./ST_D_Detail_Reviews"
import { ST_SLP_D_BreadcrumbsLastUpdated } from "./ST_SLP_D_BreadcrumbsLastUpdated"
import { ST_SLP_D_ContactUs } from "./ST_SLP_D_ContactUs"
import { ST_SLP_D_FAQS } from "./ST_SLP_D_FAQS"
import { ST_SLP_D_Schedule } from "./ST_SLP_D_Schedule"
import { INDEX_D_STDetailWrapper } from "./styles/INDEX_D_STDetailWrapper"

export const INDEX_D_STDetail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pst/st-speech-language-pathologists")

    return
  }

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_D_STDetailWrapper>
        <div>
          <ST_D_Detail_Header thirdpageDataORG={thirdpageDataORG} />

          <ST_D_Detail_MainCard thirdpageDataORG={thirdpageDataORG} />

          <ST_SLP_D_Schedule />

          <ST_SLP_D_ContactUs />

          <ST_D_Detail_Reviews
            name={thirdpageDataORG.card.leftPart.title}
            lastName={""}
            rating={thirdpageDataORG.card.leftPart.rating}
            reviews={thirdpageDataORG.card.leftPart.reviews}
          />

          <ST_SLP_D_FAQS
            name={thirdpageDataORG.card.leftPart.title}
            lastName={""}
            locationCity={thirdpageDataORG.card.leftPart.location.city}
            locationStreetNumber={thirdpageDataORG.card.leftPart.location.streetNumber}
            locationStreetName={thirdpageDataORG.card.leftPart.location.streetName}
            locationState={thirdpageDataORG.card.leftPart.location.state}
          />

          <ST_SLP_D_BreadcrumbsLastUpdated thirdpageDataORG={thirdpageDataORG} />
        </div>
        <ChatAI />
      </INDEX_D_STDetailWrapper>
      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
