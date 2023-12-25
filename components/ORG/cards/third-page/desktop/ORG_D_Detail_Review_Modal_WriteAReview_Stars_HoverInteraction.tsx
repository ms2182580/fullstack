import { Fragment, useState } from "react"

import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper,
  ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS,
} from "./styles/ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper"

export const ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction = ({ SVGArr, nameToJSX, setWhichComponentIsSelected, indexComponent, handleFocusComponent }: any) => {
  const [shouldHighlight_Hover, setShouldHighlight_Hover] = useState(-1)

  let handleOnMouseEnter = (e: any, index = 0) => {
    setShouldHighlight_Hover(index)
    setWhichComponentIsSelected(indexComponent)
  }

  return (
    <ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper>
      <P>{nameToJSX}</P>
      <div
        className={`indexComponent_${indexComponent}`}
        tabIndex={0}>
        {SVGArr.map((x: any, index: number) => {
          const TheStar = x

          const highlightClassName = index <= shouldHighlight_Hover

          return (
            <Fragment>
              <TheStar
                onMouseEnter={(e: any) => handleOnMouseEnter(e, index)}
                onFocus={(e: any) => handleOnMouseEnter(e, index)}
                onKeyDown={handleFocusComponent}
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
