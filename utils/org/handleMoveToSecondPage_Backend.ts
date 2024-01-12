import { QUERY_BREADCRUMBS } from "@/components/org/cards/second-page/desktop/ORG_D_Results_Breadcrumbs"
import { MouseEvent } from "react"
import { DATA_ORG_D_TYPES_KEYS } from "./DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "./DATA_ORG_KeyNamesForCards_D"
import { getAllData } from "./categories/general/getAllData"
import { checkStringToURL } from "./checkStringToURL"
import { SPECIFIC_DATA_SECOND_PAGE } from "./second-page/desktop/specificData"
import { ALL_ROUTES } from "./useCheckSlug_ORG"

type Props = {
  event: MouseEvent
  raw: any
  setSecondpageDataORG_Backend: (allData) => void
  push
}

export const handleMoveToSecondPage_Backend = ({
  event,
  raw,
  setSecondpageDataORG_Backend,
  push,
}: Props) => {
  const [toBreadcrumb, ...allData] = raw

  const getCategoryName = allData[0].listingType

  const getSpecificData = getAllData({
    whoToFound: getCategoryName,
  })

  setSecondpageDataORG_Backend({
    [DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]: allData,
    [SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]:
      getSpecificData[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE],
    [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]:
      getSpecificData[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE],
  })

  const { checkedToURL } = checkStringToURL({
    stringToURL: toBreadcrumb,
  })

  const toWhere: string = `/${ALL_ROUTES.ORG}/${ALL_ROUTES.RESULTS}/${checkedToURL}`

  push(
    {
      pathname: toWhere,
      query: {
        [QUERY_BREADCRUMBS.TITLE]: toBreadcrumb,
        [DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]: true,
      },
    },
    toWhere
  )
}
