import { SectionToRender_InnerData_ARG } from "@/utils/ORG/third-page/SectionToRender"

import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

import { ORG_D_Detail_HelpfulWebResources } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_HelpfulWebResources"
import { Layout_MainCardRight_VALUES } from "@/components/ORG/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { ORG_D_Detail_AditionalResources } from "../../../../../cards/third-page/desktop/ORG_D_Detail_AditionalResources"
import { ORG_D_Detail_ContactUs } from "../../../../../cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "../../../../../cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "../../../../../cards/third-page/desktop/ORG_D_Detail_Reviews"

export const INDEX_D_AA_CR_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/paa/aa-civil-rights/")

    return
  }

  const theArrayOfObject: SectionToRender_InnerData_ARG = [
    { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
    { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
    { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
    { name: ORG_D_Detail_AditionalResources.name, component: ORG_D_Detail_AditionalResources },
    { name: ORG_D_Detail_HelpfulWebResources.name, component: ORG_D_Detail_HelpfulWebResources },
    // { name: ORG_D_Detail_AditionalResources.name, component: ORG_D_Detail_AditionalResources },
  ]

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={theArrayOfObject}
        layout_MainCardRight={Layout_MainCardRight_VALUES.LIKE_ATTORNEY}
      />
    </>
  )
}
