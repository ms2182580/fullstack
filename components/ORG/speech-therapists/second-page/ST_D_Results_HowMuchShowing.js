import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useORG_Ctx_FetchNoFilters } from "../../../../context/ORG_CtxFetchNoFilters_Provider.js"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Results_HowMuchShowingWrapper } from "./styles/ST_D_Results_HowMuchShowingWrapper.js"

export const ST_D_Results_HowMuchShowing = () => {
  const { pagination, howMuchShow } = useORG_Ctx_FetchNoFilters()
  const [actualShow, setActualShow] = useState(howMuchShow)
  const [theTotal, setTheTotal] = useState(howMuchShow * 5)

  const { isMobile } = useWidthWindow1024()

  useEffect(() => {
    setActualShow(pagination * howMuchShow)
  }, [pagination])

  useEffect(() => {
    if (actualShow >= theTotal - howMuchShow) {
      setTheTotal(theTotal + 20)
    }
  }, [actualShow])

  const { pagination: paginationMobile, howMuchShow: howMuchShowMobile } = useORG_Ctx_FetchNoFiltersMobile()
  const [actualShowMobile, setActualShowMobile] = useState(howMuchShowMobile)
  const [theTotalMobile, setTheTotalMobile] = useState(howMuchShowMobile * 5)

  useEffect(() => {
    setActualShowMobile(paginationMobile * howMuchShowMobile)
  }, [paginationMobile])

  useEffect(() => {
    if (actualShowMobile >= theTotalMobile - howMuchShowMobile) {
      setTheTotalMobile(theTotalMobile + 10)
    }
  }, [actualShowMobile])

  return (
    <ST_D_Results_HowMuchShowingWrapper>
      <P semibold>
        Showing {actualShow} of {theTotal} results
      </P>

      {/* {isMobile === false ? (
        <>
          <P semibold>
            Showing {actualShow} of {theTotal} results
          </P>
        </>
      ) : (
        <>
          <Caption bolder>
            {actualShowMobile} of {theTotalMobile} results shown
          </Caption>
        </>
      )} */}
    </ST_D_Results_HowMuchShowingWrapper>
  )
}
