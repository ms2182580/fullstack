import { useRouter } from "next/router.js"
import { useEffect } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile.js"
import LoadingSpeechTherapists from "../../LoadingSpeechTherapists.js"
import { ST_D_Results_MainEntry } from "./ST_D_Results_MainEntry.js"
import { ST_Header } from "./ST_Header.js"
import { INDEX_D_STResultsWrapper } from "./styles/INDEX_D_STResultsWrapper.js"

export const INDEX_D_STResults = (parameters) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const { userFetched, shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFilters()


  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  useEffect(() => {
    if (userFetched !== undefined && mustShowFiltersMobile === false) {
      const element = document.getElementById("topOfSTL")
      if (element !== null) {
        element.scrollIntoView()
      }
    }
  }, [mustShowFiltersMobile])

  if (userFetched === undefined || shouldFetchDesktopNoFilters === false) {
    return <LoadingSpeechTherapists />
  }


  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <>
      <INDEX_D_STResultsWrapper
        ORGShowFullMapFilter={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists"}>
        {ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" && <div className="InFront"></div>}

        <ST_Header />

        <ST_D_Results_MainEntry />

      </INDEX_D_STResultsWrapper >
    </>
  )
}
