import { H3 } from "../../ui/heading_body_text/HeaderFonts.js"
import { SpecificCardWrapper } from "./styles/SpecificCardWrapper.js"

export const SpecificCard = ({
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
    <SpecificCardWrapper
      onClick={handleShowResultsAndDispatch}
      mustShowResults={mustShowResults}>
      {icon()}
      <H3>{title}</H3>
    </SpecificCardWrapper>
  )
}
