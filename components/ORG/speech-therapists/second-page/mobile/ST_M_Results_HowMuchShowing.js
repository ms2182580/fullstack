import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_HowMuchShowingWrapper } from "./styles/ST_M_Results_HowMuchShowingWrapper.js"

export const ST_M_Results_HowMuchShowing = () => {
  // const { pagination, howMuchShow } = useORG_Ctx_FetchNoFiltersMobile()
  // const [actualShow, setActualShow] = useState(howMuchShow)
  // const [theTotal, setTheTotal] = useState(howMuchShow * 5)

  // const { isMobile } = useWidthWindow1024()

  // useEffect(() => {
  //   setActualShow(pagination * howMuchShow)
  // }, [pagination])

  // useEffect(() => {
  //   if (actualShow >= theTotal - howMuchShow) {
  //     setTheTotal(theTotal + 20)
  //   }
  // }, [actualShow])

  const { pagination: paginationMobile, howMuchShow: howMuchShowMobile } = useORG_Ctx_FetchNoFiltersMobile()
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
      {/* <P semibold>
        Showing {actualShow} of {theTotal} results
      </P> */}

      <Caption bolder>
        {actualShowMobile} of {theTotalMobile} results shown
      </Caption>

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
    </ST_M_Results_HowMuchShowingWrapper>
  )
}
