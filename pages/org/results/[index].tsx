import { INDEX_ORG_Results_D } from "@/components/org/cards/second-page/desktop/INDEX_ORG_Results_D"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ORG_RESULTS() {
  const { secondpageFiltersORG }: any =
    useORG_Ctx_D_SecondpageFilters()
  const { secondpageDataORG }: any =
    useORG_Ctx_D_SecondpageData()

  const { push, query } = useRouter()

  useEffect(() => {
    if (
      secondpageFiltersORG === "" &&
      secondpageDataORG === "" &&
      !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      push(`/${ALL_ROUTES.ORG}`)
      return
    }
  }, [])

  return (
    <>
      <INDEX_ORG_Results_D />
    </>
  )
}
