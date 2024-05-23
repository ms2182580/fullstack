import { QUERY_BREADCRUMBS } from "@/components/org/cards/second-page/desktop/ORG_D_Results_Breadcrumbs"
import { KeyboardEvent, MouseEvent } from "react"
import { ALL_ROUTES } from "../ALL_ROUTES"
import { DATA_ORG_D_TYPES_KEYS } from "./DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "./DATA_ORG_KeyNamesForCards_D"
import { getAllData } from "./categories/general/getAllData"
import { checkStringToURL } from "./checkStringToURL"

type Props = {
  event: MouseEvent | KeyboardEvent<HTMLDivElement>
  raw: any
  indexSubcategory?: number | null
  category?: string
  secondpageDataORG_Backend?: object[]
  setThirdpageDataORG_Backend: (allData) => void
  push
  indexBackend?: number
}

export const handleMoveToThirdPage_Backend = ({
  event,
  raw,
  indexSubcategory = null,
  category = "",
  secondpageDataORG_Backend,
  setThirdpageDataORG_Backend,
  push,
  indexBackend,
}: Props) => {
  if (
    event.type === "click" ||
    (event.type === "keydown" && (event as KeyboardEvent).code === "Enter")
  ) {
    let gettingThirdPageData = secondpageDataORG_Backend
      ? secondpageDataORG_Backend
      : getAllData({
          whoToFound: category,
        })

    const subCategoryName =
      indexSubcategory !== null
        ? gettingThirdPageData[DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY][
            indexSubcategory
          ]
        : gettingThirdPageData[DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]

    setThirdpageDataORG_Backend({
      [DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]: raw,
      [DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]: subCategoryName,
      [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]:
        gettingThirdPageData?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ??
        null,
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
          whichPhoto: indexBackend,
        },
      },
      toWhere
    )
  }
}
