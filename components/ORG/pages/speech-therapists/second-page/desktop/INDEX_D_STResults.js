import { useRouter } from "next/router.js"
import path from "path"
import { useEffect } from "react"
// import { InFrontModal_D_Wrapper } from "../../../../../components/inFront_D/styles/InFrontModal_D_Wrapper"
// import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
// import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
// import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
// import { LoadingSpeechTherapists } from "../../LoadingSpeechTherapists.js"
import { useCtx_ShowModal } from "../../../../../../context/Ctx_ShowModal.js"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { LoadingSpeechTherapists } from "../../LoadingSpeechTherapists.js"
import { ST_D_Results_Header } from "./ST_D_Results_Header.js"
import { ST_D_Results_MainEntry } from "./ST_D_Results_MainEntry.js"
import { INDEX_D_STResultsWrapper } from "./styles/INDEX_D_STResultsWrapper.js"

export const INDEX_D_STResults = () => {
  const { userFetched, shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters } =
    useORG_Ctx_FetchNoFiltersDesktop()

  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  if (userFetched === undefined || shouldFetchDesktopNoFilters === false) {
    return <LoadingSpeechTherapists />
  }

  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <>
      <INDEX_D_STResultsWrapper
        ORGShowFullMapFilter={
          ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`
        }>
        <ST_D_Results_Header />

        <ST_D_Results_MainEntry />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
      </INDEX_D_STResultsWrapper>
    </>
  )
}
