import { ArrowDownSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper } from "./styles/ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper.js"

export const ORG_D_Detail_ReviewsHeader_PeopleOftenMention = ({ modal }) => {
  return (
    <ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper modal={modal}>
      <P semibold>People often mention</P>
      <ul>
        <li>
          <P tabIndex={0}>All</P>
          <P tabIndex={0}>Scheduling</P>
          <P tabIndex={0}>Office Environment</P>
          <P tabIndex={0}>Wait Times</P>
          <P tabIndex={0}>Provider Feedback</P>
        </li>
        <li tabIndex={0}>
          <P
            semibold
            primary_cta>
            Most relevant
          </P>
          <ArrowDownSvg />
        </li>
      </ul>
    </ORG_D_Detail_ReviewsHeader_PeopleOftenMentionWrapper>
  )
}
