import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { HeaderSPList_HowMuchShowingWrapper } from "./styles/HeaderSPListWrapper"

const HowMuchShowing = () => {
  const { pagination, howMuchShow } = useORG_Ctx_FetchNoFilters()
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
    <>
      <P semibold>
        {actualShow} of {theTotal} results shown
      </P>
    </>
  )
}

export default HowMuchShowing
