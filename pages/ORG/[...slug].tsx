import { INDEX_ORG_Results_D } from "@/components/ORG/cards/second-page/desktop/INDEX_ORG_Results_D"
import { INDEX_ORG_Detail_D } from "@/components/ORG/cards/third-page/desktop/INDEX_ORG_Detail_D"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { allRoutes, useCheckSlug_ORG } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router"
import Custom404 from "../404"

export default function Slug() {
  const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const { isValidRoute } = useCheckSlug_ORG()

  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { push } = useRouter()

  if (isValidRoute === allRoutes.results) {
    if (secondpageFiltersORG === "" && secondpageDataORG === "") {
      push("/ORG")
      return
    }

    return (
      <>
        <INDEX_ORG_Results_D />
      </>
    )
  }

  if (isValidRoute === allRoutes.detail) {
    if (thirdpageDataORG === "") {
      push("/ORG")
      return
    }

    return (
      <>
        <INDEX_ORG_Detail_D />
      </>
    )
  }

  return (
    <>
      <Custom404 />
    </>
  )
}
