import { useEffect, useState } from "react"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { HeaderSPList_HowMuchShowingWrapper } from "./styles/HeaderSPListWrapper"

const HowMuchShowing = () => {
  const { pagination, howMuchShow } = useORG_Ctx_PaginationAndHowMuchShow()
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
