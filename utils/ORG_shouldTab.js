import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../context/ORG_CtxShowFiltersDesktop_Provider"

export const useShouldTab = () => {
  const { pathname } = useRouter()

  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  const [shouldTab, setShouldTab] = useState(0)

  useEffect(() => {
    if (ORGShowFullMapFilter && pathname === "/org/speech-therapists") {
      setShouldTab(-1)
    } else {
      setShouldTab(0)
    }
  }, [ORGShowFullMapFilter])

  return shouldTab
}
