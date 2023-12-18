import { INDEX_ORG_Results_D } from "@/components/ORG/cards/second-page/desktop/INDEX_ORG_Results_D"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useCheckSlug } from "@/utils/ORG/useCheckSlug"

export default function Slug() {
  const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()

  const { whichRouteValue } = useCheckSlug()
  // console.log("whichRouteValue:", whichRouteValue)

  if (whichRouteValue === "search") {
    return <INDEX_ORG_Results_D />
  }

  if (whichRouteValue === "detail") {
    return (
      <>
        <h2>Should return detail</h2>
      </>
    )
  }

  return (
    <>
      <h2>Something go wrong ❌</h2>
    </>
  )
}
