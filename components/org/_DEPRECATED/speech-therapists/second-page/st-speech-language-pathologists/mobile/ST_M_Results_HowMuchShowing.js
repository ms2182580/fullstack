import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { Caption } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Results_HowMuchShowingWrapper } from "./styles/ST_M_Results_HowMuchShowingWrapper.js"

export const ST_M_Results_HowMuchShowing = () => {
  const { pagination: paginationMobile, howMuchShow: howMuchShowMobile } =
    useORG_Ctx_FetchNoFiltersMobile()

  const [actualShowMobile, setActualShowMobile] = useState(howMuchShowMobile)
  const [theTotalMobile, setTheTotalMobile] = useState(howMuchShowMobile * 5)

  useEffect(() => {
    setActualShowMobile(paginationMobile * howMuchShowMobile)
  }, [paginationMobile])

  useEffect(() => {
    if (actualShowMobile >= theTotalMobile - howMuchShowMobile) {
      setTheTotalMobile(theTotalMobile + 8)
    }
  }, [actualShowMobile])

  return (
    <ST_M_Results_HowMuchShowingWrapper>
      <Caption bolder>
        {actualShowMobile} of {theTotalMobile} results shown
      </Caption>
    </ST_M_Results_HowMuchShowingWrapper>
  )
}
