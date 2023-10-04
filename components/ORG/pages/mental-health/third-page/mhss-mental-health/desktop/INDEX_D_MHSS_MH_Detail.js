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
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_MHSS_MH_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pmhss/mhss-mental-heath/")

    return
  }

  return (
    <>
      <INDEX_ORG_Detail_D />
    </>
  )
}
