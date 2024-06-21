import CheckSVG from "@/assets/icons/org/third-page/check.svg"
import NeutralSVG from "@/assets/icons/org/third-page/neutral.svg"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Fragment } from "react"
import { ORG_D_Detail_Reviews_MentionWrapper } from "./styles/ORG_D_Detail_Reviews_MentionWrapper"

/* This should be the structure. Think in a way to achieve the desired layout with this type of structure... or maybe, receiving this structure from the backend you will need to re make it in "first row", "second row" and so on */
const defaultValues = {
  good: ["service quality", "positive"],
  neutral: ["wait times", "negative"],
  bad: ["negative tag", "negative tag", "neutral", "quality 1"],
}

const defaultValues_hardCoded = {
  firstRow: ["Service Quality", "Wait Times", "Negative Tag", "Negative Tag"],
  secondRow: ["Positive", "Negative", "Neutral", "Quality 1"],
}

export const ORG_D_Detail_Reviews_Mention = () => {
  return (
    <ORG_D_Detail_Reviews_MentionWrapper>
      <H3>Reviews Mention</H3>

      <ul>
        <li>
          {defaultValues_hardCoded.firstRow.map((x, i) => {
            return (
              <Fragment key={`${x}_${i}`}>
                <span>
                  {i === 0 ? <CheckSVG /> : i === 1 && <NeutralSVG />}
                  {x}
                </span>
              </Fragment>
            )
          })}
        </li>

        <li>
          {defaultValues_hardCoded.secondRow.map((x, i) => {
            return (
              <Fragment key={`${x}_${i}`}>
                <span>
                  {i === 0 ? <CheckSVG /> : i === 1 && <NeutralSVG />}
                  {x}
                </span>
              </Fragment>
            )
          })}
        </li>
      </ul>
    </ORG_D_Detail_Reviews_MentionWrapper>
  )
}
