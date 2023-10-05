import { useRouter } from "next/router.js"
import path from "path"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { A_D_Results_Header } from "./A_D_Results_Header.js"
import { A_D_Results_MainEntry } from "./A_D_Results_MainEntry.js"
import { INDEX_D_Associations_ResultsWrapper } from "./styles/INDEX_D_Associations_ResultsWrapper.js"
import { DATA_A_D } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D.js"
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Card.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useEffect } from "react"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"
import { renderFiltersInUI_PPPAS_PNFPO } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Filters.js"

export const INDEX_D_Associations_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_PPPAS_PNFPO)
    setSecondpageDataORG({
      cardData: DATA_A_D[0].slice(1),
      mainNameORG: DATA_A_D[0][0],
      right: DATA_A_D_CardRight,
      left: DATA_A_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
