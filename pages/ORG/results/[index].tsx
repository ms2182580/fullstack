import { INDEX_ORG_Results_D } from "@/components/ORG/cards/second-page/desktop/INDEX_ORG_Results_D"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ORG_RESULTS() {
  const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const { push } = useRouter()

  useEffect(() => {
    if (secondpageFiltersORG === "" && secondpageDataORG === "") {
      push("/ORG")
      return
    }
  }, [])

  if (secondpageFiltersORG !== "" && secondpageDataORG !== "") {
    return (
      <>
        <INDEX_ORG_Results_D />
      </>
    )
  }
}
