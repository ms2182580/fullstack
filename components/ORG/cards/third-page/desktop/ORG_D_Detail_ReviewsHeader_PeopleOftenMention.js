import { ArrowDownSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper } from "./styles/ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper.js"

export const ORG_D_Detail_ReviewsHeader_PeopleOftenMention = ({ modal }) => {
  return (
    <ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper modal={modal}>
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
    </ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper>
  )
}
