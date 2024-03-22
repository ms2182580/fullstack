import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useMemo } from "react"

const INDEX_ORG_Results_D = dynamic(
  () =>
    import(
      "@/components/org/cards/second-page/desktop/INDEX_ORG_Results_D"
    ).then((mod) => mod.INDEX_ORG_Results_D),
  { ssr: false }
)
// import { INDEX_ORG_Results_D } from "@/components/org/cards/second-page/desktop/INDEX_ORG_Results_D"
export default function ORG_RESULTS() {
  const { secondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData()

  const { query } = useRouter()

  /* useEffect(() => {
    if (
      (secondpageFiltersORG === "" && secondpageDataORG === "") ||
      !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      push(`/${ALL_ROUTES.ORG}`)
      return
    }
  }, []) */

  const shouldRenderThePage = useMemo(() => {
    if (
      (secondpageFiltersORG !== "" && secondpageDataORG !== "") ||
      query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      return true
    }

    return false
  }, [
    secondpageFiltersORG,
    secondpageFiltersORG,
    query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND],
  ])

  if (!shouldRenderThePage) return null

  return (
    <>
      {shouldRenderThePage && (
        <>
          <INDEX_ORG_Results_D />
        </>
      )}
    </>
  )
}
