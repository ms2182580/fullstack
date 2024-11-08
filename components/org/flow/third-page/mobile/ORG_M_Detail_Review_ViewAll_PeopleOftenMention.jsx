import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import { Search_Review_Msvg } from "../../../../../assets/icons/index"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_M_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper } from "./styles/ORG_M_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper"
import { ORG_M_Detail_Review_StarsRating } from "./ORG_M_Detail_Review_StarsRating"

export const ORG_M_Detail_Reviews_ViewAll_PeopleOftenMention = ({
  rating,
  reviews,
  isModal = false,
}) => {
  return (
    <ORG_M_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper
      className={isModal ? `${Classes_ORG_D_Detail_IsModal.IS_MODAL}` : ""}
    >
      <ORG_M_Detail_Review_StarsRating
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
      </ul>
      <P semibold>Sort by</P>

      <div>
        <span tabIndex={0}>
          <span>Most relevant</span>
        </span>
        <span>
          <Search_Review_Msvg />
          <input type="search" placeholder="Search" />
        </span>
      </div>
    </ORG_M_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper>
  )
}
