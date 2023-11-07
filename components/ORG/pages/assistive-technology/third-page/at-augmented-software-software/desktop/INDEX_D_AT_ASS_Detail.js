import { arraySectionToRender_PAT } from "@/utils/ORG/pat/third-page/desktop/arraySectionToRender"
import { mapRender_PAT } from "@/utils/ORG/pat/third-page/desktop/mapRender"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_AT_ASS_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pat/at-augmented-software-software")

    return
  }

  return (
    <>
      <INDEX_ORG_Detail_D
        sectionToRender={arraySectionToRender_PAT}
        howIsMap={mapRender_PAT.HOW_MANY}
      />
    </>
  )
}
