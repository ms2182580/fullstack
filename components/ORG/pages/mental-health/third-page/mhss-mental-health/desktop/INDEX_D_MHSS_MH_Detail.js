import { useRouter } from "next/router"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../../../ChatAI"
import { ST_SLP_D_BreadcrumbsLastUpdated } from "./ST_SLP_D_BreadcrumbsLastUpdated"
import { ST_SLP_D_ContactUs } from "./ST_SLP_D_ContactUs"
import { ST_SLP_D_FAQS } from "./ST_SLP_D_FAQS"
import { ST_SLP_D_Header } from "./ST_SLP_D_Header"
import { ST_SLP_D_MainCard } from "./ST_SLP_D_MainCard"
import { ST_SLP_D_Reviews } from "./ST_SLP_D_Reviews"
import { ST_SLP_D_Schedule } from "./ST_SLP_D_Schedule"
import { INDEX_D_ST_SLP_DetailWrapper } from "./styles/INDEX_D_ST_SLP_DetailWrapper"

export const INDEX_D_MHSS_MH_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()
  console.log('thirdpageDataORG:', thirdpageDataORG)

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pst/st-speech-language-pathologists")

    return
  }

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_D_ST_SLP_DetailWrapper>
        <div>
          <ST_SLP_D_Header thirdpageDataORG={thirdpageDataORG} />

          <ST_SLP_D_MainCard thirdpageDataORG={thirdpageDataORG} />

          <ST_SLP_D_Schedule />

          <ST_SLP_D_ContactUs />

          <ST_SLP_D_Reviews
            name={thirdpageDataORG.fullName.first}
            lastName={thirdpageDataORG.fullName.last}
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
      </INDEX_D_ST_SLP_DetailWrapper>
      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
