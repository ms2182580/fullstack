import React from "react"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"

const SuggestionsKeyword = ({ children, whichClick, haveToDissapear }) => {
  // console.log('haveToDissapear:', haveToDissapear)
  // console.log('someKindOfBlur:', someKindOfBlur)
  // console.log('haveToDissapear:', haveToDissapear)
  // console.log('filtersToZero:', filtersToZero)
  // console.log('whichClick:', whichClick)
  const isClick = (e) => {
    // console.log("e:", e.target.textContent)
    whichClick(e.target.textContent)
    // haveToDissapear()
    // someKindOfBlur()
    // haveToDissapear()
    // isBlur(false)
    // filtersToZero([])
    // console.log("clicked!")
  }

  return (
    <>
      <P onClick={isClick}>{children}</P>
    </>
  )
}

export default SuggestionsKeyword
