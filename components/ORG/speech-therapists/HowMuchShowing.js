import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../context/ORG_CtxFetchNoFiltersMobile_Provider"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"

const HowMuchShowing = () => {
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
    <>
      {isMobile === false ? (
        <>
          <P semibold>
            {actualShow} of {theTotal} results shown
          </P>
        </>
      ) : (
        <>
          <Caption bolder>
            {actualShowMobile} of {theTotalMobile} results shown
          </Caption>
        </>
      )}
    </>
  )
}

export default HowMuchShowing
