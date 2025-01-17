import IMGSavedEmpty from "@/assets/images/teams/saved-empty.png"

import { Dashboard_AIChat_NoCheckSquareSvg } from "@/assets/icons"
import SVGFunnel from "@/assets/icons/funnel-sort.svg"
import Image from "next/image"
import { SavedWrapper } from "./styles/saved-wrapper"

const dataFirstRow = [
  {
    icon: SVGFunnel,
    title: "Post",
  },
  {
    icon: SVGFunnel,
    title: "Created for",
  },
  {
    icon: SVGFunnel,
    title: "Last Modified",
  },
  {
    icon: SVGFunnel,
    title: "Status",
  },
]

export const Saved = () => {
  return (
    <SavedWrapper data-coming-soon="Coming Soon!" tabIndex={0}>
      <div>
        <Dashboard_AIChat_NoCheckSquareSvg />

        <ul>
          {dataFirstRow.map(({ icon: SVG, title }, index) => {
            return (
              <li key={`${title}_${index}`}>
                <p>{title}</p>
                <SVG />
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>You haven’t created any posts or comments yet!</h2>
        <p>Your AI-generated plans will appear here. </p>
        <Image src={IMGSavedEmpty} alt="aa" />
      </div>
    </SavedWrapper>
  )
}

/* 
!FH1
Highly recommended the use of the tanstack/table API to allow:
- Toggle column vibility: https://stackblitz.com/github/tanstack/table/tree/main/examples/react/column-visibility
- Column re sizing: https://stackblitz.com/github/tanstack/table/tree/main/examples/react/column-sizing
- Column sorting clicking on header title: https://stackblitz.com/github/tanstack/table/tree/main/examples/react/sorting
- Row drag and drop: https://stackblitz.com/github/tanstack/table/tree/main/examples/react/row-dnd
- Editable data: https://stackblitz.com/github/tanstack/table/tree/main/examples/react/editable-data

*/
