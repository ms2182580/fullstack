import { ORG_D_Detail_AT_WCMD_SimilarProducts } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_SimilarProducts"
import { ORG_D_Detail_AT_WCMD_WhereToBuy } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_WhereToBuy"
import { SectionToRender_InnerData_ARG } from "@/utils/ORG/third-page/SectionToRender"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"
import { ORG_D_Detail_ContactUs } from "../../../../../cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "../../../../../cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "../../../../../cards/third-page/desktop/ORG_D_Detail_Reviews"

export const INDEX_D_AT_AT_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pat/at-wheelchair-mobility-devices/")

    return
  }

  const theArrayOfObject: SectionToRender_InnerData_ARG = [
    { name: ORG_D_Detail_AT_WCMD_WhereToBuy.name, component: ORG_D_Detail_AT_WCMD_WhereToBuy },
    { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
    { name: ORG_D_Detail_AT_WCMD_SimilarProducts.name, component: ORG_D_Detail_AT_WCMD_SimilarProducts },
    { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
    { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
  ]

  return (
    <>
      <INDEX_ORG_Detail_D sectionToRender={theArrayOfObject} />
    </>
  )
}
