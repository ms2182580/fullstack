import { useRouter } from "next/router.js"
import path from "path"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { SES_D_Results_Header } from "./SES_D_Results_Header.js"
import { SES_D_Results_MainEntry } from "./SES_D_Results_MainEntry.js"
import { INDEX_D_SpecialEducationSchools_ResultsWrapper } from "./styles/INDEX_D_SpecialEducationSchools_ResultsWrapper.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useEffect } from "react"
import { renderFiltersInUI_PPPAS_PNFPO } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Filters.js"
import { DATA_SES_D } from "../../../../../../../utils/ORG/pses/ses/DATA_SES_D.js"
import { DATA_SES_D_CardLeft, DATA_SES_D_CardRight } from "../../../../../../../utils/ORG/pses/ses/DATA_SES_D_Card.js"
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Card.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"

export const INDEX_D_SpecialEducationSchools_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_PPPAS_PNFPO)
    setSecondpageDataORG({
      cardData: DATA_SES_D[0].slice(1),
      mainNameORG: DATA_SES_D[0][0],
      right: DATA_A_D_CardRight,
      left: DATA_A_D_CardLeft,
    })
  }, [])

  //


  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
