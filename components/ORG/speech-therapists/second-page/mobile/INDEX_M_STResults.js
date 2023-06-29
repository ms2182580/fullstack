import { useEffect } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import LoadingSpeechTherapists from "../../LoadingSpeechTherapists.js"
import { ST_M_Results_Header } from "./ST_M_Results_Header.js"
import { ST_M_Results_MainEntry } from "./ST_M_Results_MainEntry.js"
import { INDEX_M_STResultsWrapper } from "./styles/INDEX_M_STResultsWrapper.js"


export const INDEX_M_STResults = () => {
  const { userFetched, shouldFetchMobileNoFilters, setShouldFetchMobileNoFilters } = useORG_Ctx_FetchNoFiltersMobile()

  useEffect(() => {
    setShouldFetchMobileNoFilters(true)
  }, [])

  if (userFetched === undefined || shouldFetchMobileNoFilters === false) {
    return <LoadingSpeechTherapists />
  }

  return (
    <INDEX_M_STResultsWrapper>
      <ST_M_Results_Header />

      <ST_M_Results_MainEntry />

    </INDEX_M_STResultsWrapper>
  )
}
