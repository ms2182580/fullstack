import { StartEmptyBigSvg } from "@/assets/Icons"
import { ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction } from "./ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction"
import { ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper } from "./styles/ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper"

const allNamesToDisplay = ["Appointment scheduling", "Office environment", "Wait times", "Provider communication", "Overall"]

const arrayFiveStars = new Array(5).fill(0).map((x, index) => StartEmptyBigSvg)

const allStarsToJSX = new Array(5).fill(0).map((x, index) => {
  return { SVG: arrayFiveStars, nameToJSX: allNamesToDisplay[index] }
})

export const ORG_D_Detail_Review_Modal_WriteAReview_Stars = () => {
  return (
    <ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper>
      {allStarsToJSX.map((x) => (
        <li key={x.nameToJSX}>
          <ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction
            SVGArr={x.SVG}
            nameToJSX={x.nameToJSX}
          />
        </li>
      ))}
    </ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper>
  )
}
