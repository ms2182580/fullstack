import { ALL_ROUTES } from "../ALL_ROUTES"
import { getDataToMoveView } from "./getDataToMoveView"
import { SPECIFIC_DATA_KEY } from "./second-page/desktop/specificData"

export const handleMoveToSecondPage = ({
  event,
  categoryPosition,
  subcategoryPosition,
  setSecondpageFiltersORG,
  setSecondpageDataORG,
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

  setSecondpageFiltersORG(theActualFilter)
  setSecondpageDataORG({
    cardData: subcategory.slice(1),
    mainNameORG: subcategory[0],
    right: rightCard,
    left: leftCard,
    [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: subcategorySpecificData,
    categoryPosition,
    subcategoryPosition,
  })

  push({
    pathname: `/${ALL_ROUTES.ORG}/${ALL_ROUTES.RESULTS}/${subFolder}`,
  })
}
