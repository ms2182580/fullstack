import { ArrowDownSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDetail_ReviewsHeaderDesktop_PeopleOftenMentionWrapper } from "./styles/STDetail_ReviewsHeaderDesktop_PeopleOftenMentionWrapper.js"

export const STDetail_ReviewsHeaderDesktop_PeopleOftenMention = ({ modal }) => {
  return (
    <STDetail_ReviewsHeaderDesktop_PeopleOftenMentionWrapper modal={modal}>
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
    </STDetail_ReviewsHeaderDesktop_PeopleOftenMentionWrapper>
  )
}
