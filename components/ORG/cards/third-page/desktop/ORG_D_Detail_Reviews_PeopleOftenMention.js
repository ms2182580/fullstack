import { Classes_ORG_D_Detail_IsModal } from "@/utils/ORG/third-page/IsModal"
import { ArrowDownSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_Review_StarsRating } from "./ORG_D_Detail_Review_StarsRating.js"
import { ORG_D_Detail_Reviews_PeopleOftenMentionWrapper } from "./styles/ORG_D_Detail_Reviews_PeopleOftenMentionWrapper"

export const ORG_D_Detail_Reviews_PeopleOftenMention = ({ rating, reviews, isModal = false }) => {
  return (
    <ORG_D_Detail_Reviews_PeopleOftenMentionWrapper className={isModal ? `${Classes_ORG_D_Detail_IsModal.IS_MODAL}` : ""}>
      <ORG_D_Detail_Review_StarsRating
        rating={rating}
        reviews={reviews}
        isModal={isModal}
      />

      <P semibold>People often mention</P>
      <ul>
        <li>
          <P tabIndex={0}>All</P>
          <P tabIndex={0}>Scheduling</P>
          <P tabIndex={0}>Office Environment</P>
          <P tabIndex={0}>Wait Times</P>
          <P tabIndex={0}>Provider Feedback</P>
        </li>

        <li>
          {isModal ? (
            <>
              <span tabIndex={0}>
                <P>Sort by</P>
                <P
                  semibold
                  primary_cta>
                  Most relevant
                </P>
                <ArrowDownSvg />
              </span>
            </>
          ) : (
            <>
              <P
                semibold
                primary_cta>
                Most relevant
              </P>
              <ArrowDownSvg />
            </>
          )}
        </li>
      </ul>
    </ORG_D_Detail_Reviews_PeopleOftenMentionWrapper>
  )
}
