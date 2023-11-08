import { Layout_MainCardRight_VALUES } from "@/components/ORG/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { arraySectionToRender_PCC } from "@/utils/ORG/pcc/third-page/desktop/arraySectionToRender"
import { tooltipToRender_PCC } from "@/utils/ORG/pcc/third-page/desktop/tooltipToRender"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_CC_FC_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pcc/cc-fitness-classes")

    return
  }

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={arraySectionToRender_PCC}
        layout_MainCardRight={Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES}
        tooltipDisplay={tooltipToRender_PCC}
      />
    </>
  )
}
