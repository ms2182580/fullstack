import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { Breadcrumbs } from "./breadcrumbs"
import { Searcher } from "./searcher"
import { Row2Wrapper } from "./styles/row-2-wrapper"

const rootRoute = `/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.NEW_SEARCH}`

const hideSearchComponentOnThisRoute = [
  rootRoute,
  `${rootRoute}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.FIRST}`,
]

export const Row2 = () => {
  const { asPath } = useRouter()

  const ifFalseShowSearchComponent = hideSearchComponentOnThisRoute.some(
    (x) => x === asPath
  )

  return (
    <Row2Wrapper>
      <Breadcrumbs />
      {!ifFalseShowSearchComponent && <Searcher />}
    </Row2Wrapper>
  )
}
