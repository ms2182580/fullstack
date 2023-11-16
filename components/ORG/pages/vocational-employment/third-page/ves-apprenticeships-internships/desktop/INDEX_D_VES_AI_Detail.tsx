import { tooltipToRender_PVES } from "@/utils/ORG/pves/third-page/desktop/tooltipToRender"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_VES_AI_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pves/ves-apprenticeships-internships")

    return
  }

  return (
    <>
      <INDEX_ORG_Detail_D
        // sectionToRender={arraySectionToRender_PAT}
        tooltipDisplay={tooltipToRender_PVES}
        // isPVES={true}
      />
    </>
  )
}
