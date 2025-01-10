import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { INDEX_NewsearchWrapper } from "./styles/index-wrapper"

export const INDEX_Newsearch = () => {
  const { asPath } = useRouter()

  return (
    <INDEX_NewsearchWrapper>
      <h1>INDEX_Newsearch</h1>
      <div>
        <Link
          href={`${asPath}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND}`}
        >
          Search Resources
        </Link>
        <Link
          href={`${asPath}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.CATEGORIES}`}
        >
          Search Categories
        </Link>
      </div>
    </INDEX_NewsearchWrapper>
  )
}
