import { Fragment, useState } from "react"

import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS,
  ORG_M_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper,
} from "./styles/ORG_M_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper"

export const ORG_M_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction = ({
  SVGArr,
  nameToJSX,
  setWhichComponentIsSelected,
  indexComponent,
  handleFocusComponent,
}) => {
  const [shouldHighlight_Hover, setShouldHighlight_Hover] = useState(-1)

  let handleOnMouseEnter = (e, index = 0) => {
    setShouldHighlight_Hover(index)
    setWhichComponentIsSelected(indexComponent)
  }

  return (
    <ORG_M_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper>
      <P semibold>{nameToJSX}</P>
      <div className={`indexComponent_${indexComponent}`} tabIndex={0}>
        {SVGArr.map((x, index) => {
          const TheStar = x

          const highlightClassName = index <= shouldHighlight_Hover

          return (
            <Fragment>
              <TheStar
                onMouseEnter={(e) => handleOnMouseEnter(e, index)}
                onFocus={(e) => handleOnMouseEnter(e, index)}
                onKeyDown={handleFocusComponent}
                className={
                  highlightClassName
                    ? ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS.HIGHLIGHT
                    : ""
                }
                tabIndex={0}
              />
            </Fragment>
          )
        })}
      </div>
    </ORG_M_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper>
  )
}
