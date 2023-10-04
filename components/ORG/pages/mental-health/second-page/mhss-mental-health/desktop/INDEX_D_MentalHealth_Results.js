import { useRouter } from "next/router.js"
import path from "path"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { MH_D_Results_Header } from "./MH_D_Results_Header.js"
import { MH_D_Results_MainEntry } from "./MH_D_Results_MainEntry.js"
import { INDEX_D_MentalHealth_ResultsWrapper } from "./styles/INDEX_D_MentalHealth_ResultsWrapper.js"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { renderFiltersInUI_MHSS_FS } from "../../../../../../../utils/ORG/pmhss/fs/DATA_FS_D_Filters.js"
import { DATA_MH_D_CardLeft, DATA_MH_D_CardRight } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Card.js"
import { useEffect } from "react"
import { DATA_PMH_D } from "../../../../../../../utils/ORG/pmhss/DATA_PMH_D.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"

export const INDEX_D_MentalHealth_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_MHSS_FS)
    setSecondpageDataORG({
      cardData: DATA_PMH_D[1].slice(1),
      mainNameORG: DATA_PMH_D[1][0],
      right: DATA_MH_D_CardRight,
      left: DATA_MH_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
