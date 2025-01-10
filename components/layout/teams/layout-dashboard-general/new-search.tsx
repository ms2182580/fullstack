import SVGPlus from "@/assets/icons/org/third-page/org_plus.svg"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { NewSearchButtonWrapper } from "./styles/new-search-button-wrapper"

export const NewSearchButton = () => {
  const { asPath } = useRouter()

  const pathIsNewSearch = asPath.includes(ALL_ROUTES_INTERNAL.NEW_SEARCH)

  return (
    <NewSearchButtonWrapper pathIsNewSearch={pathIsNewSearch}>
      <Link
        href={`/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.NEW_SEARCH}`}
      >
        <SVGPlus />
        <span>New Search</span>
      </Link>
    </NewSearchButtonWrapper>
  )
}
