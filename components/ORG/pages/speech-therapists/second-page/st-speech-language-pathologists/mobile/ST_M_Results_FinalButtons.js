import { useRouter } from "next/router.js"
import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { useShouldTab } from "../../../../../../../utils/ORG_shouldTab.js"
import { useCheckMobile } from "../../../../../../../utils/useCheckMobile.js"
import { ST_M_Results_NavigationButtonsNumbers } from "./ST_M_Results_NavigationButtonsNumbers.js"
import {
  ST_M_Results_FinalButtonsNextButtonWrapper,
  ST_M_Results_FinalButtonsPrevButtonWrapper,
  ST_M_Results_FinalButtonsWrapper
} from "./styles/ST_M_Results_FinalButtonsWrapper.js"

export const ST_M_Results_FinalButtons = () => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersMobile()

  const { pathname, push } = useRouter()
  const shouldTab = useShouldTab()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (prevState > 1) return prevState - 1
      else return prevState
    })

    if (pagination !== 1) {
      push(`${pathname}#topOfSTL`)
    }
  }

  const toNext = () => {
    setPagination((prevState) => {
      return prevState + 1
    })
    push(`${pathname}#topOfSTL`)
  }

  const { isTouchScreen } = useCheckMobile()

  return (
    <ST_M_Results_FinalButtonsWrapper
      mustShowFiltersMobile={mustShowFiltersMobile}
      className={!isTouchScreen ? "canHover" : null}>
      <>
        <ST_M_Results_FinalButtonsPrevButtonWrapper
          onClick={toPrevious}
          tabIndex={shouldTab}>
          <LeftArrowSvg />
        </ST_M_Results_FinalButtonsPrevButtonWrapper>
      </>

      <ST_M_Results_NavigationButtonsNumbers />

      <>
        <ST_M_Results_FinalButtonsNextButtonWrapper
          onClick={toNext}
          tabIndex={shouldTab}>
          <RightArrowSvg />
        </ST_M_Results_FinalButtonsNextButtonWrapper>
      </>
    </ST_M_Results_FinalButtonsWrapper>
  )
}
