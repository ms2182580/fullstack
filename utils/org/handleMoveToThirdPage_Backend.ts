import { QUERY_BREADCRUMBS } from "@/components/org/cards/second-page/desktop/ORG_D_Results_Breadcrumbs"
import { KeyboardEvent, MouseEvent } from "react"
import { DATA_ORG_D_TYPES_KEYS } from "./DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "./DATA_ORG_KeyNamesForCards_D"
import { getAllData } from "./categories/general/getAllData"
import { checkStringToURL } from "./checkStringToURL"
import { ALL_ROUTES } from "./useCheckSlug_ORG"

type Props = {
  event: MouseEvent | KeyboardEvent<HTMLDivElement>
  raw: any
  secondpageDataORG_Backend?: object[]
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
  if (
    event.type === "click" ||
    (event.type === "keydown" && (event as KeyboardEvent).code === "Enter")
  ) {
    let gettingThirdPageData = secondpageDataORG_Backend
      ? secondpageDataORG_Backend
      : getAllData({
          whoToFound: raw.listingType,
        })

    setThirdpageDataORG_Backend({
      [DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]: raw,
      [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]:
        gettingThirdPageData[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE],
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
}
