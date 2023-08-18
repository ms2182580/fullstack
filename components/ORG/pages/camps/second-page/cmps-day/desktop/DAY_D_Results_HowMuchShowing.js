import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { DAY_D_Results_HowMuchShowingWrapper } from './styles/DAY_D_Results_HowMuchShowingWrapper.js'

export const DAY_D_Results_HowMuchShowing = () => {
  const { pagination, howMuchShow } = useORG_Ctx_FetchNoFiltersDesktop()
  const [actualShow, setActualShow] = useState(howMuchShow)
  const [theTotal, setTheTotal] = useState(howMuchShow * 5)

  useEffect(() => {
    setActualShow(pagination * howMuchShow)
  }, [pagination])

  useEffect(() => {
    if (actualShow >= theTotal - howMuchShow) {
      setTheTotal(theTotal + 20)
    }
  }, [actualShow])

  return (
    <DAY_D_Results_HowMuchShowingWrapper>
      <P semibold>
        Showing {actualShow} of {theTotal} results
      </P>
    </DAY_D_Results_HowMuchShowingWrapper>
  )
}
