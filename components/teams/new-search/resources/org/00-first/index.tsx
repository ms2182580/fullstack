import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { OrgFirstWrapper } from "./styles/org-first-wrapper"

type Props = {
  theRootRoute?: string
}

export const OrgFirst = ({ theRootRoute }: Props) => {
  return (
    <OrgFirstWrapper>
      <h1>Org first</h1>
      <Link
        href={`/${theRootRoute}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND}`}
      >
        To second screen, results
      </Link>
      <Link
        href={`/${theRootRoute}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.THIRD}`}
      >
        To third screen, details
      </Link>
    </OrgFirstWrapper>
  )
}
