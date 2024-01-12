import { QUERY_BREADCRUMBS } from "@/components/org/cards/second-page/desktop/ORG_D_Results_Breadcrumbs"
import { MouseEvent } from "react"
import { DATA_ORG_D_TYPES_KEYS } from "./DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "./DATA_ORG_KeyNamesForCards_D"
import { checkStringToURL } from "./checkStringToURL"
import { ALL_ROUTES } from "./useCheckSlug_ORG"

type Props = {
  event: MouseEvent
  raw: any
  secondpageDataORG_Backend: object[]
  setThirdpageDataORG_Backend: (allData) => void
  push
}

export const handleMoveToThirdPage_Backend = ({
  event,
  raw,
  secondpageDataORG_Backend,
  setThirdpageDataORG_Backend,
  push,
}: Props) => {
  setThirdpageDataORG_Backend({
    [DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]: raw,
    [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]:
      secondpageDataORG_Backend[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE],
  })

  const { checkedToURL } = checkStringToURL({
    stringToURL: raw.recordName,
  })

  const toWhere: string = `/${ALL_ROUTES.ORG}/${ALL_ROUTES.DETAIL}/${checkedToURL}`

  push(
    {
      pathname: toWhere,
      query: {
        [QUERY_BREADCRUMBS.TITLE]: checkedToURL,
        [DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]: true,
      },
    },
    toWhere
  )
}
