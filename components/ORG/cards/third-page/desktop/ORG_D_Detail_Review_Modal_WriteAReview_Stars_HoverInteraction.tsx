import { Fragment, useState } from "react"

import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper,
  ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS,
} from "./styles/ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper"

export const ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction = ({ SVGArr, nameToJSX }) => {
  const [shouldHighlight_Hover, setShouldHighlight_Hover] = useState(-1)

  let handleOnMouseEnter = (e, index) => {
    setShouldHighlight_Hover(index)
  }

  // let handleOnMouseLeave = () => {
  //   setShouldHighlight_Hover(-1)
  // }

  return (
    <ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper>
      <P>{nameToJSX}</P>
      <div>
        {SVGArr.map((x, index) => {
          const TheStar = x

          const highlightClassName = index <= shouldHighlight_Hover

          return (
            <Fragment>
              <TheStar
                onMouseEnter={(e) => handleOnMouseEnter(e, index)}
                onFocus={(e) => handleOnMouseEnter(e, index)}
                className={highlightClassName ? ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS.HIGHLIGHT : ""}
                tabIndex={0}
              />
            </Fragment>
          )
        })}
      </div>
    </ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper>
  )
}
