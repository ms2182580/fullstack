import { ArrowDownSvg } from "../../../../../../../../assets/Icons/index.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { CC_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper } from "./styles/CC_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper.js"

export const CC_D_Detail_ReviewsHeader_PeopleOftenMention = ({ modal }) => {
  return (
    <CC_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper modal={modal}>
      <P semibold>People often mention</P>
      <div>
        <div>
          <P tabIndex={0}>All</P>
          <P tabIndex={0}>Scheduling</P>
          <P tabIndex={0}>Office Environment</P>
          <P tabIndex={0}>Wait Times</P>
          <P tabIndex={0}>Provider Feedback</P>
        </div>
        <div tabIndex={0}>
          <P
            semibold
            primary_cta>
            Most relevant
          </P>
          <ArrowDownSvg />
        </div>
      </div>
    </CC_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper>
  )
}
