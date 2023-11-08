import { useRouter } from "next/router"

import { arraySectionToRender_PSES } from "@/utils/ORG/pses/third-page/desktop/arraySectionToRender"
import { tooltipToRender_PSES } from "@/utils/ORG/pses/third-page/desktop/tooltipToRender"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_SES_PS_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pses/ses-preschools")

    return
  }

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={arraySectionToRender_PSES}
        tooltipDisplay={tooltipToRender_PSES}
      />
    </>
  )
}
