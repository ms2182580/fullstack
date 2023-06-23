import { H3 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Search_CardWrapper } from "./styles/ST_D_Search_CardWrapper.js"

export const ST_D_Search_Card = ({
  title,
  icon,
  setMustShowResults,
  dispatch,
  dataToDispatch,
  mustShowResults,
  setWhichWasClick,
  numberCard
}) => {
  const handleShowResultsAndDispatch = () => {
    setMustShowResults((prevState) => !prevState)
    dispatch({ type: "get_data", payload: dataToDispatch })
    setWhichWasClick(numberCard)
  }

  return (
    <ST_D_Search_CardWrapper
      onClick={handleShowResultsAndDispatch}
      mustShowResults={mustShowResults}>
      {icon()}
      <H3>{title}</H3>
    </ST_D_Search_CardWrapper>
  )
}
