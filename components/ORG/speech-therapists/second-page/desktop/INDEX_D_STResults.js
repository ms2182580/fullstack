import { useRouter } from "next/router.js"
import { useEffect } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import LoadingSpeechTherapists from "../../LoadingSpeechTherapists.js"
import { ST_D_Results_Header } from "./ST_D_Results_Header.js"
import { ST_D_Results_MainEntry } from "./ST_D_Results_MainEntry.js"
import { INDEX_D_STResultsWrapper } from "./styles/INDEX_D_STResultsWrapper.js"

export const INDEX_D_STResults = () => {
  const { userFetched, shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()


  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  // const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  // useEffect(() => {
  //   if (userFetched !== undefined && mustShowFiltersMobile === false) {
  //     const element = document.getElementById("topOfSTL")
  //     if (element !== null) {
  //       element.scrollIntoView()
  //     }
  //   }
  // }, [mustShowFiltersMobile])

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

        <ST_D_Results_Header />

        <ST_D_Results_MainEntry />
      </INDEX_D_STResultsWrapper >
    </>
  )
}
