import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { Layout_MainCardRight_VALUES } from "@/components/ORG/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { PCC_General_D_UsersAlsoViewed } from "@/components/ORG/cards_resources/third-page/pcc/general/desktop/PCC_General_D_UsersAlsoViewed"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_CC_CC_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pcc/cc-community-classes/")

    return
  }

  const arraySectionToRender = [
    { name: ORG_D_Detail_Schedule.name, component: ORG_D_Detail_Schedule },
    { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
    { name: PCC_General_D_UsersAlsoViewed.name, component: PCC_General_D_UsersAlsoViewed },
    { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
    { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
  ]

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={arraySectionToRender}
        layout_MainCardRight={Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES}
      />
    </>
  )
}
