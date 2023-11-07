import { arraySectionToRender_PAT } from "@/utils/ORG/pat/third-page/desktop/arraySectionToRender"
import { mapRender_PAT } from "@/utils/ORG/pat/third-page/desktop/mapRender"
import { tooltipToRender_PAT } from "@/utils/ORG/pat/third-page/desktop/tooltipToRender"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_AT_AT_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pat/at-wheelchair-mobility-devices/")

    return
  }

  // const arraySectionToRender = [
  //   { name: ORG_D_Detail_AT_WCMD_WhereToBuy.name, component: ORG_D_Detail_AT_WCMD_WhereToBuy,  },
  //   { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
  //   { name: ORG_D_Detail_AT_WCMD_SimilarProducts.name, component: ORG_D_Detail_AT_WCMD_SimilarProducts },
  //   { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
  //   { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
  // ]

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={arraySectionToRender_PAT}
        howIsMap={mapRender_PAT}
        tooltipDisplay={tooltipToRender_PAT}
      />
    </>
  )
}
