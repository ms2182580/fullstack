import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { OrgSecondWrapper } from "./styles/org-second-wrapper"

export const OrgSecond = () => {
  return (
    <OrgSecondWrapper>
      <h1>Org Second</h1>{" "}
      <Link
        href={`/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.NEW_SEARCH}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.THIRD}`}
      >
        To Third page, details
      </Link>
    </OrgSecondWrapper>
  )
}
