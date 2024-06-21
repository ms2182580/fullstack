import { ArrowDownSvg } from "@/assets/icons/index.jsx"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import { useRouter } from "next/router.js"
import { ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper } from "./styles/ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper"

/* 
!FH0

Eliminate this component and all their dependencies
*/

export const ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention = ({
  rating,
  reviews,
  isModal = false,
}) => {
  const { query } = useRouter()

  return (
    <ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper
      className={isModal ? `${Classes_ORG_D_Detail_IsModal.IS_MODAL}` : ""}
      isBackend={query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]}
    >
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
                <P semibold primary_cta>
                  Most relevant
                </P>
                <ArrowDownSvg />
              </span>
            </>
          ) : (
            <>
              <P semibold primary_cta>
                Most relevant
              </P>
              <ArrowDownSvg />
            </>
          )}
        </li>
      </ul>
    </ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper>
  )
}
