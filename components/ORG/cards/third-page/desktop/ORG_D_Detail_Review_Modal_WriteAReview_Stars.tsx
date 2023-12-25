import { StartEmptyBigSvg } from "@/assets/Icons"
import { useMemo, useState } from "react"
import { FieldsetClass } from "./ORG_D_Detail_Review_Modal_WriteAReview_Form"
import { ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction } from "./ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction"
import { ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper } from "./styles/ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper"

const allNamesToDisplay = ["Appointment scheduling", "Office environment", "Wait times", "Provider communication", "Overall"]

const arrayFiveStars = new Array(5).fill(0).map((x, index) => StartEmptyBigSvg)

// const allStarsToJSX = new Array(5).fill(0).map((x, index) => {
//   return { SVG: arrayFiveStars, nameToJSX: allNamesToDisplay[index] }
// })

export const ORG_D_Detail_Review_Modal_WriteAReview_Stars = () => {
  const allStarsToJSX = useMemo(() => {
    return new Array(5).fill(0).map((x, index) => {
      return { SVG: arrayFiveStars, nameToJSX: allNamesToDisplay[index] }
    })
  }, [])

  const [whichComponentIsSelected, setWhichComponentIsSelected] = useState(-1)

  let handleFocusComponent = (e: any) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      if (whichComponentIsSelected < allStarsToJSX.length - 1) {
        let nextIndexComponent = `indexComponent_${whichComponentIsSelected + 1}`

        const element = document.querySelector(`.${nextIndexComponent}`) as HTMLElement
        element?.focus()
      }

      if (whichComponentIsSelected === allStarsToJSX.length - 1) {
        let theFirstElementOfForm = `.${FieldsetClass.FIELDSET_FIRST_INPUT}`

        const element = document.querySelector(theFirstElementOfForm) as HTMLElement
        element?.focus()
      }
    }

    if (e.key === "Enter" && e.shiftKey) {
      if (whichComponentIsSelected > 0) {
        let previousIndexComponent = `indexComponent_${whichComponentIsSelected - 1}`

        const element = document.querySelector(`.${previousIndexComponent}`) as HTMLElement
        element?.focus()
      }
    }
  }

  return (
    <ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper>
      {allStarsToJSX.map((x, indexComponent) => (
        <li key={x.nameToJSX}>
          <ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction
            SVGArr={x.SVG}
            nameToJSX={x.nameToJSX}
            setWhichComponentIsSelected={setWhichComponentIsSelected}
            indexComponent={indexComponent}
            handleFocusComponent={handleFocusComponent}
          />
        </li>
      ))}
    </ORG_D_Detail_Review_Modal_WriteAReview_StarsWrapper>
  )
}
