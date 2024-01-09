import { formatDataToThirdPage } from "./formatDataToThirdPage"
import { formatDataToURLOnThirdPage } from "./formatDataToURLOnThirdPage"
import { getDataToMoveView } from "./getDataToMoveView"
import { ALL_ROUTES } from "./useCheckSlug_ORG"

export const handleMoveToThirdPage = ({
  event,
  categoryPosition,
  subcategoryPosition,
  resourcePosition,
  setThirdpageDataORG,
  push,
}) => {
  const {
    theActualFilter,
    subcategory,
    rightCard,
    leftCard,
    subcategorySpecificData,
    subFolder,
  } = getDataToMoveView({ categoryPosition, subcategoryPosition })

  const stringForBreadcrumbs = subcategory[0]
  const cardData = subcategory.slice(1)

  const thirdPageData_Card = cardData[resourcePosition]
  const thirdPageData_Card_Left = leftCard[resourcePosition]
  const thirdPageData_Card_Right = rightCard[resourcePosition]
  const fullName = cardData[resourcePosition].fullName

  const allDataToThirdPage = formatDataToThirdPage(
    thirdPageData_Card,
    thirdPageData_Card_Left,
    thirdPageData_Card_Right,
    fullName,
    subcategorySpecificData
  )

  setThirdpageDataORG(allDataToThirdPage)

  const specificDetail = formatDataToURLOnThirdPage({
    stringToFormat: thirdPageData_Card.title,
  })

  const toWhere: string = `/${ALL_ROUTES.ORG}/${ALL_ROUTES.DETAIL}/${specificDetail}`

  push(
    {
      pathname: toWhere,
      query: { title: stringForBreadcrumbs },
    },
    toWhere
  )
}
