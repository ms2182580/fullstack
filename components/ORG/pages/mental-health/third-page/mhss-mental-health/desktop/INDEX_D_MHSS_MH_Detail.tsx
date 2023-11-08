import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"

import { Layout_MainCardRight_VALUES } from "@/components/ORG/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { mapRender_PMHSS } from "@/utils/ORG/pmhss/third-page/desktop/mapRender"
import { tooltipToRender_PMHSS } from "@/utils/ORG/pmhss/third-page/desktop/tooltipToRender"
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
      <INDEX_ORG_Detail_D
        layout_MainCardRight={Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH}
        addToCarePlanWithIcon={true}
        howIsMap={mapRender_PMHSS}
        tooltipDisplay={tooltipToRender_PMHSS}
      />
    </>
  )
}
