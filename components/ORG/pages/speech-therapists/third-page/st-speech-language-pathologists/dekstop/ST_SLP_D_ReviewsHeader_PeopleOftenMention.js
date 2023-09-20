import { ArrowDownSvg } from "../../../../../../../assets/Icons/index.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_SLP_ReviewsHeader_PeopleOftenMentionWrapper } from "./styles/ST_SLP_D_ReviewsHeader_PeopleOftenMentionWrapper.js"

export const ST_SLP_D_ReviewsHeader_PeopleOftenMention = ({ modal }) => {
  return (
    <ST_D_SLP_ReviewsHeader_PeopleOftenMentionWrapper modal={modal}>
      <P semibold>People often mention</P>
      <div>
        <div>
          <P>All</P>
          <P>Scheduling</P>
          <P>Office Environment</P>
          <P>Wait Times</P>
          <P>Provider Feedback</P>
        </div>
        <div>
          <P
            semibold
            primary_cta>
            Most relevant
          </P>
          <ArrowDownSvg />
        </div>
      </div>
    </ST_D_SLP_ReviewsHeader_PeopleOftenMentionWrapper>
  )
}
